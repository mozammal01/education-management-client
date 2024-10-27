import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = ({ course }) => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(course);

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: course?.enrollment })
      .then(res => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement)

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setError(error.message)
      console.log('You have a Error on your payment method', error);
    }
    else {
      console.log('Payment Gateway Successfull', paymentMethod);
      setError('')
    }

    // Confirm card Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {
      console.log('Confirm Error', confirmError);
      setError(confirmError.message)
      setTransactionId('')
    }
    else {
      console.log('Payment Intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('Transaction Id ', paymentIntent.id);
        setTransactionId(paymentIntent.id)
        setError('')

        const enroll = {
          email: user?.email,
          id: course?._id,
          title: course?.title,
          price: course?.enrollment,
          category: course?.category
        }

        const payment = {
          email: user?.email,
          price: course?.enrollment,
          transactionId: paymentIntent.id,
          date: new Date(),
          courseDatabaseId: course?._id,
          courseId: course?.id,
          status: 'pending'
        }

        const resPayment = await axiosSecure.post('/payments', payment)
        console.log('payment:', resPayment.data);

        if (resPayment.data) {

          const resEnroll = await axiosSecure.post('/enroll', enroll);
          console.log('Enroll: ', resEnroll.data);


          if (resEnroll.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You are enrolled",
              showConfirmButton: false,
              timer: 1500
            });
          }
        }

      }
    }

  }

  return (
    <form className="my-20 space-y-4" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary text-white" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {error && <p className="font-bold text-red-600">Error: {error}</p>}
      {transactionId && <p className="font-bold text-green-600">Transaction Id: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
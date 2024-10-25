import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
  const [error, setError] = useState('')

  const stripe = useStripe();
  const elements = useElements();

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
      <button className="btn btn-primary text-white" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="font-bold text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
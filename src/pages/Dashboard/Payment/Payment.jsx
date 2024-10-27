import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
  const location = useLocation()

  const state = location?.state
  console.log({ state });

  return (
    <div>
      <div className="text-4xl flex justify-between mx-10 my-5">
        <h2>You can pay Here</h2>
        <h2>Price: {state?.enrollment}</h2>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm course={state}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
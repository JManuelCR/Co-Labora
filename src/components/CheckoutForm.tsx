import { StripeCardCvcElement, loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { FormEvent } from "react";
const stripePromise = loadStripe(
  "pk_test_51NkHgyKwUVEL5zK50M5ZNhf3yE4XnhMjuchOwmQuDLUuMMOqEbI4mLyUX2YxdxEQOwoIlNGB9d4QVAqMMbiBiaaP00ATaEKNxV"
);

const PayBox = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe) {
      console.log("Stripe no esta disponible");
      return;
    }

    const cardData: any = elements?.getElement(CardElement);

    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: cardData,
    });
    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
      const { data } = await axios.post("http://localhost:8080/stripe", {
        id,
        amount: 20000,
      });
      console.log(data);
    } else {
      console.log("error de front", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
      <CardElement /> {/** Esto es el input donde el usuario pone la tarjeta */}
      <button className="bg-white" id="submit-stripe"></button>
    </form>
  );
};
export default function CheckoutForm() {
  return (
    <Elements stripe={stripePromise}>
      <PayBox />
    </Elements>
  );
}

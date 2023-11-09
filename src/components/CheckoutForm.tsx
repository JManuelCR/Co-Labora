import { StripeCardCvcElement, loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { FormEvent } from "react";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

interface CheckoutFormProps {
  stripeProp: any; // Define the type of the prop
}
const PayBox = (stripeProp: CheckoutFormProps) => {
  const { total, acc, sub } = stripeProp.stripeProp.stripeProp;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe) {
      return;
    }

    const cardData: any = elements?.getElement(CardElement);
    //! https://co-labora-backend.jmanuelc.dev
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: cardData,
    });
    if (!error) {
      const { id } = paymentMethod;
      const { data } = await axios.post(
        "https://co-labora-backend.jmanuelc.dev/stripe",
        {
          id,
          amount: total,
          acc: acc,
          subtotal: sub,
        }
      );
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
      <CardElement /> {/** Esto es el input donde el usuario pone la tarjeta */}
      <button className="bg-white" id="submit-stripe"></button>
    </form>
  );
};
export default function CheckoutForm(stripeProp: CheckoutFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <PayBox stripeProp={stripeProp} />
    </Elements>
  );
}

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { FormEvent, useState } from "react";
const stripePromise = loadStripe(
  "pk_test_51NkHgyKwUVEL5zK50M5ZNhf3yE4XnhMjuchOwmQuDLUuMMOqEbI4mLyUX2YxdxEQOwoIlNGB9d4QVAqMMbiBiaaP00ATaEKNxV"
);
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (stripe) {
      // Verifica si stripe no es nulo
      const cardElement = elements?.getElement(CardElement);

      if (cardElement) {
        // Verifica si cardElement no es nulo
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

        setLoading(true);

        if (!error) {
          const { id } = paymentMethod;

          try {
            const { data } = await axios.post(
              "http://localhost:3001/api/checkout",
              {
                id,
                amount: 10000,
              }
            );
            cardElement.clear();
          } catch (error) {
            console.log("error del front", error);
          }
          setLoading(false);
        }
      } else {
        console.error("El elemento 'CardElement' es nulo.");
      }
    } else {
      console.error("La variable 'stripe' es nula.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div>
        <Elements stripe={stripePromise}>
          <CardElement />
        </Elements>
      </div>
    </form>
  );
}

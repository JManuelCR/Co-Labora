import { StripeCardCvcElement, loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { FormEvent, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

interface CheckoutFormProps {
  stripeProp: any; // Define the type of the prop
}

const PayBox = (stripeProp: CheckoutFormProps) => {
  const { total, acc, sub } = stripeProp.stripeProp.stripeProp;
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);
  const [blur, setBlur] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardData: any = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardData,
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "https://co-labora-backend.jmanuelc.dev/stripe",
          {
            id,
            amount: total,
            acc: acc,
            subtotal: sub,
          }
        );

        // Handle the response
        if (data.success) {
          // Puedes realizar acciones adicionales en caso de éxito
          // Puedes también establecer algún estado para indicar el éxito
          setPaymentSuccess(true);
          // setTimeout(() => {
          //   window.location.replace("/historyReservations");
          // }, 2000);
        } else {
          // Manejar el caso en que success sea falso
          setPaymentSuccess(false);
        }
      } catch (error) {
        // Manejar errores de la llamada a la API
        console.error("Error en la llamada a la API:", error);
        setPaymentSuccess(false);
      }
    } else {
      // Manejar errores al crear el método de pago
      console.error("Error al crear el método de pago:", error);
      setPaymentSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
      <CardElement /> {/** Esto es el input donde el usuario pone la tarjeta */}
      <button className="bg-white" id="submit-stripe"></button>
      {/* Ejemplo de cómo puedes mostrar un mensaje en función del éxito o fracaso */}
      {paymentSuccess !== null && (
        <p>
          {paymentSuccess
            ? "¡Pago exitoso!"
            : "Hubo un problema con el pago. Por favor, inténtalo de nuevo."}
        </p>
      )}
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

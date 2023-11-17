import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);
interface CheckoutFormProps {
  stripeProp: any;
}
const CheckoutForm = ({ stripeProp }: CheckoutFormProps) => {
  const { total, acc, sub, email } = stripeProp;
  const stripe = useStripe();
  const elements = useElements();

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
            email: email,
          }
        );
        if (data.success) {
          setTimeout(() => {
            window.location.replace("/historyReservations");
          }, 1500);
        }
      } catch (error) {
        toast.error("Error al procesar el pago 💀", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Error al procesar el pago 💀", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
        <CardElement />
        <button type="submit" className="bg-primary" id="submit-stripe">
          test
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;

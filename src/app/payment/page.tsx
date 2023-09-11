"use client";
import CustomStepper from "@/components/Stepper";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import Image from "next/image";
import paymentImg from "../../../public/illustrations/cost-per-day-ilustration.webp";
const stripePromise = loadStripe(
  "pk_test_51NkHgyKwUVEL5zK50M5ZNhf3yE4XnhMjuchOwmQuDLUuMMOqEbI4mLyUX2YxdxEQOwoIlNGB9d4QVAqMMbiBiaaP00ATaEKNxV"
);
export default function Payment() {
  return (
    <>
      <article className="flex flex-col justify-center items-center w-full">
        <section className="rounded-lg border-solid border-primary border-2 w-fit my-5 p-5">
          <h1 className="font-acme font-semibold text-blue_800 text-titleMobil text-center">
            Selecciona tu metodo de pago
          </h1>
          <section className="flex justify-center items-center max-sm:flex-col">
            <div>
              <Image
                src={paymentImg}
                alt="Paying icon"
                width={375}
                height={200}
              />
            </div>
            <div className="flex justify-center border-solid border-primary border-2 p-3 rounded-xl w-[28rem] max-sm:w-80 ">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </section>
        </section>
      </article>
    </>
  );
}

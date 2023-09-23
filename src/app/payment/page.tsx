"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Autocomplete } from "@react-google-maps/api";
import Image from "next/image";
import paymentImg from "../../../public/illustrations/cost-per-day-ilustration.webp";
import GoogleMaps from "@/components/GoogleMaps";
const stripePromise = loadStripe(
  "pk_test_51NkHgyKwUVEL5zK50M5ZNhf3yE4XnhMjuchOwmQuDLUuMMOqEbI4mLyUX2YxdxEQOwoIlNGB9d4QVAqMMbiBiaaP00ATaEKNxV"
);
export default function Payment() {
  return (
    <>
      <GoogleMaps />
    </>
  );
}

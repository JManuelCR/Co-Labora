"use client";
import Image from "next/image";
import star from "../../../public/icons/star-shape-1-svgrepo-com.svg";
import confirm from "../../../public/illustrations/image 42.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCookie } from "cookies-next";
import { loadStripe } from "@stripe/stripe-js";

interface DataType {
  addres: string;
  comments: number;
  endDate: string;
  name: string;
  price: string;
  propertyImages: string;
  score: number;
  startDate: string;
  userId: {
    stripe_id: string;
    _id: string;
  };
  _id: string;
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);
export default function ConfirmReservation() {
  const [data, setData] = useState<DataType | null>();
  const [days, setDays] = useState<number | null>(null);
  const [test, setTest] = useState({});
  const [blur, setBlur] = useState(false);
  const [id, setId] = useState("");
  const [Email, setEmail] = useState("");
  const [amount, setAmount] = useState<{
    total: number;
    acc: string;
    sub: number;
    email: string;
  }>({
    total: 0,
    acc: "",
    sub: 0,
    email: "",
  });
  const [getLocal, setGetLocal] = useState<string>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const getLocal = localStorage.getItem("property");

    if (getLocal) {
      setGetLocal(getLocal);
    }
    const token = getCookie("token");
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (!getLocal) {
      console.log("cargando...");
    } else {
      const parseData = JSON.parse(getLocal);
      setData(parseData);
    }
  }, [getLocal]);

  useEffect(() => {
    if (data) {
      const startDate = new Date(data.startDate.split("-").reverse().join("-"));
      const endDate = new Date(data.endDate.split("-").reverse().join("-"));

      // Verifica si startDate y endDate son el mismo día
      if (startDate.toDateString() === endDate.toDateString()) {
        // En caso de ser el mismo día, el cálculo se basa en 1 día
        setDays(1);
      } else {
        const timeDifference = endDate.getTime() - startDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        setDays(daysDifference);
      }
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setId(decodedPayload.id);
      setEmail(decodedPayload.email);
    }

    if (days !== null && data?.price !== undefined) {
      const subtotal = parseFloat(data.price) * days;
      const commission = subtotal * 0.03;
      const taxes = subtotal * 0.16;
      const total = subtotal + commission + taxes;
      if (total) {
        const totalRounded = Math.round(total * 100);
        const subtoRounded = Math.round(subtotal * 100);
        setAmount({
          total: totalRounded,
          acc: data.userId.stripe_id,
          sub: subtoRounded,
          email: Email,
        });
      }
      const toFetch = {
        property: {
          propertyId: data._id,
          propertyName: data.name,
          score: data.score,
          price: data.price,
        },
        startDate: data.startDate,
        endDate: data.endDate,
        lessorId: data.userId._id,
        tenantId: id,
        subtotal: subtotal,
        commission: commission,
        taxes: taxes,
        total: total,
      };
      setTest(toFetch);
    }
  }, [data, days, id, token, Email]);
  const handleClick = () => {
    const stripeButton = document.getElementById("submit-stripe");
    stripeButton ? stripeButton.click() : "";
    fetch("https://co-labora-backend.jmanuelc.dev/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(test),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          toast.success(" Tu reservacion se ha creado 🦄", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(
            "Vaya, ocurrio un error al generar tu reserva, intentalo de nuevo",
            {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <section
        className={`flex justify-center items-center max-md:flex-wrap relative my-[7rem] ${
          blur ? "blur-xl" : ""
        } `}
      >
        <section className="flex flex-col font-poppins text-blue_800 border border-solid border-blue_800 p-5 rounded-lg max-md:border-none">
          <article className="flex justify-between gap-5">
            <div className="flex flex-col gap-3 w-1/2">
              <h3 className="font-acme text-suTitles">
                {data ? <p>{data.name}</p> : <p>Lorem Ipsum</p>}
              </h3>
              {data ? <p>{data.addres}</p> : <p>Lorem Ipsum</p>}
              <div className="flex gap-2">
                <Image src={star} alt="star-rating" width={20} height={20} />
                {data ? (
                  <p>{`${data.score} (${data.comments} calificaciones )`}</p>
                ) : (
                  <p>Lorem Ipsum</p>
                )}
              </div>
            </div>
            <div className=" w-fit">
              {data ? (
                <Image
                  src={data.propertyImages}
                  alt="star-rating"
                  width={260}
                  height={100}
                />
              ) : (
                <p>No hay datos disponibles</p>
              )}
            </div>
          </article>
          <article className="flex justify-between">
            <article className="flex flex-col justify-around gap-3">
              <h3>Inicio de la reserva</h3>
              {data ? (
                <p className="font-poppins font-semibold">{data.startDate}</p>
              ) : (
                <p>No hay datos disponibles</p>
              )}
              <h3>Fin de la reserva</h3>
              {data ? (
                <p className="font-poppins font-semibold">{data.endDate}</p>
              ) : (
                <p>No hay datos disponibles</p>
              )}
            </article>
            <article>
              <h3>Precio por dia</h3>
              {data ? (
                <p className="font-poppins font-semibold">${data.price}</p>
              ) : (
                <p>No hay datos disponibles</p>
              )}
              <h3>Comision Co-Labora</h3>
              {data && days ? (
                <p className="font-poppins font-semibold">
                  ${(parseFloat(data.price) * days * 0.03).toFixed(2)}
                </p>
              ) : (
                <p>No hay datos disponibles</p>
              )}
              <h3>Impuestos</h3>
              {data && days ? (
                <p className="font-poppins font-semibold">
                  ${(parseFloat(data.price) * days * 0.16).toFixed(2)}
                </p>
              ) : (
                <p>No hay datos disponibles</p>
              )}
            </article>
          </article>
          <article>
            {data && days ? (
              <p className="font-poppins font-semibold">{`${days} dias en total`}</p>
            ) : (
              <p>No hay datos disponibles</p>
            )}
          </article>

          <h3 className="font-acme text-blue_800 text-suTitles my-2">
            Metodo de pago
          </h3>
          <Elements stripe={stripePromise}>
            <article className="flex w-full">
              <CheckoutForm stripeProp={amount} />
            </article>
          </Elements>

          <article className="flex justify-between">
            <h3 className="font-acme text-blue_800 text-suTitles">Total MXN</h3>
            <strong className="font-bold text-suTitles">
              {data && days ? (
                <p className="font-poppins font-semibold">
                  Total: $
                  {(
                    (parseFloat(data.price) * days * 100 +
                      parseFloat(data.price) * days * 0.03 * 100 +
                      parseFloat(data.price) * days * 0.16 * 100) /
                    100
                  ).toFixed(2)}
                </p>
              ) : (
                <p>No hay datos disponibles</p>
              )}
            </strong>
          </article>
        </section>
        <section className="flex flex-col p-5 font-poppins text-blue_800 items-stretch gap-10">
          <article className="max-md:hidden">
            <h1 className="font-acme text-titles font">
              Estas a un solo paso de completar tu reserva
            </h1>
          </article>
          <article className="max-md:hidden">
            <h5 className="text-center">
              Revisa los datos de tu reserva y pulsa Confirmar reserva
            </h5>
          </article>
          <article className="flex justify-center max-md:hidden">
            <Image
              src={confirm}
              alt="illustration-confirm-reservation"
              width={320}
              height={230}
            />
          </article>
          <article className="flex justify-center">
            <button
              className="bg-primary text-white px-4 py-2 rounded-xl"
              onClick={handleClick}
            >
              Confirmar Reserva
            </button>
          </article>
        </section>
      </section>
    </>
  );
}

"use client";
import Image from "next/image";
import star from "../../../public/icons/star-shape-1-svgrepo-com.svg";
import confirm from "../../../public/illustrations/image 42.svg";
import Carpenter from "../../../public/temporal-images/holder-carpenter.webp";
import emergente from "../../../public/illustrations/Emergente.svg";
import { dataConfirm } from "@/data/data-confirm";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";
import { dataProperty } from "@/data/propertiesData";
import { totalmem } from "os";

interface DataType {
  addres: string;
  comments: number;
  endDate: string;
  name: string;
  price: string;
  propertyImages: string;
  score: number;
  startDate: string;
  userId: string;
  _id: string;
}
export default function ConfirmReservation() {
  const [data, setData] = useState<DataType | null>();
  const [days, setDays] = useState<number | null>(null); // Asegúrate de que days sea de tipo "number"
  const getLocal = localStorage.getItem("property");
  useEffect(() => {
    if (!getLocal) {
      toast.error("A ocurrido un error, favor de re-intentar la reserva", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const parseData = JSON.parse(getLocal);
      setData(parseData);
    }
  }, [getLocal]); // Empty dependency array to ensure this effect runs only once on component mount

  const [blur, setBlur] = useState(false);
  const [id, setId] = useState("");
  const handleClick = () => {
    const token = localStorage.getItem("token");
    const stripeButton = document.getElementById("submit-stripe");
    stripeButton ? stripeButton.click() : "";
    const subtotal = days ? (data?.price ? parseFloat(data.price) : 0) : 0;
    const commission = subtotal * 0.03;
    const taxes = subtotal * 0.16;
    const total = subtotal + commission + taxes;
    if (token) {
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setId(decodedPayload.id);
    }
    const toFetch = {
      property: {
        propertyId: data?._id,
        propertyName: data?.name,
        score: data?.score,
        price: data?.price,
      },
      startDate: data?.startDate,
      endDate: data?.endDate,
      lessorId: data?.userId,
      tenantId: id,
      subtotal: subtotal,
      commission: commission,
      taxes: taxes,
      total: total,
    };
    fetch("http://localhost:8080/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(toFetch),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("respuesta al crear la reserva", response);
      });
    // setBlur(true);
  };

  useEffect(() => {
    if (data) {
      const startDate = new Date(data.startDate.split("-").reverse().join("-"));
      const endDate = new Date(data.endDate.split("-").reverse().join("-"));

      const timeDifference = endDate.getTime() - startDate.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      setDays(daysDifference);
    }
  }, [data]);

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
      {blur ? (
        <section className="flex items-center justify-center h-screen w-screen absolute top-0 left-0 z-20 ">
          <Image
            src={emergente}
            alt="emergent image"
            width={600}
            height={200}
            className="z-30"
          />
        </section>
      ) : (
        <></>
      )}
      <section
        className={`flex justify-center items-center max-md:flex-wrap relative my-[7rem] ${
          blur ? "blur-xl" : ""
        } `}>
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
          <article className="flex w-full">
            <div>
              <CheckoutForm />
            </div>
          </article>

          <article className="flex justify-between">
            <h3 className="font-acme text-blue_800 text-suTitles">Total MXN</h3>
            <strong className="font-bold text-suTitles">
              {data && days ? (
                <p className="font-poppins font-semibold">
                  Subtotal: ${(parseFloat(data.price) * days).toFixed(2)}
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
              onClick={handleClick}>
              Confirmar Reserva
            </button>
          </article>
        </section>
      </section>
    </>
  );
}

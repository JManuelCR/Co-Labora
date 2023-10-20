"use client";
import Image from "next/image";
import confirm from "../../../public/illustrations/image 42.svg";
import Carpenter from "../../../public/temporal-images/holder-carpenter.webp";
import emergente from "../../../public/illustrations/Emergente.svg";
import { dataConfirm } from "@/data/data-confirm";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Anybody } from "next/font/google";
export default function SaveNewPlace(props: any) {
  const formDataEntries:any = props.props
  console.log("props", props.props)
 // ! ESTE ES EL QUE VA A MANDARSE EN EL FETCH  BD
 const formData = new FormData();
 formData.append('data',JSON.stringify(props.props.data));
 const imagesUpload = props.props.propertyImages;
 imagesUpload.forEach((image:any, index: any) => {
  formData.append(`propertyImages-${index}`, image)
 });
 const documentsUpload = props.props.propertyDocuments
 documentsUpload.forEach((document: any, index: any) => {
  formData.append(`propertyDocuments-${index}`, document);
 });
const dniUpload = props.props.propertyDni;
dniUpload.forEach((dni: any, index: any) => {
  formData.append(`propertyDni-${index}`, dni); 
});

  const [blur, setBlur] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const getId = localStorage.getItem("id");
    const fetchData = async () => {
      const data = {
        id: getId,
      };

      const response = await fetch("http://localhost:8080/stripe/onBoard", {
        method: "POST", // Puedes ajustar el método según tus necesidades
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("en teoria esta es la url del onBoarding", responseData);
        setUrl(responseData.data);
      } else {
        console.error("Error al hacer la solicitud HTTP");
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    const token = localStorage.getItem('token');

    fetch("http://localhost:8080/property/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body:  formData,

    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response en raw de propiedad", response);
      
      });
  };

  const { name, address, addons, price, rating, opinions } = dataConfirm;
  const total = price * 4;
  const commision = total * 0.3;
  const tax = total * 0.16;

  return (
    <>
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
        className={`flex justify-center items-center max-md:flex-wrap relative ${
          blur ? "blur-xl" : ""
        } `}>
        <section className="flex flex-col font-poppins text-blue_800 border border-solid border-blue_800 p-[36px] rounded-[24px] max-md:border-none lg:w-[554px] mb-[48px]">
          <article className="flex justify-between md:gap-5 pb-[10px] md:pb-[28px] border-b-[2px] border-secondary">
            <div className="flex flex-col gap-3 w-1/2">
              <h3 className="font-acme text-suTitles">{name}</h3>
              <p>{address}</p>
            </div>
            <div className=" relative w-[170px] h-[128px] lg:w-[260px] md:h-[140px]">
              <Image
                src={Carpenter}
                alt=""
                objectFit="cover"
                fill={true}
                layout="fill"
                className="rounded-[24px] shrink-0"
              />
            </div>
          </article>
          <article className="my-8">
            <h3 className="font-acme text-blue_800 text-suTitles">
              Detalle del inmueble
            </h3>
            <div className="flex justify-between mb-5">
              <p className="font-poppins text-[14px] font-[600] leading-[22px] tracking-[-0.28px]">
                Precio por dia
              </p>
              <p>{`$${price} x dia`}</p>
            </div>
            <h3 className="font-acme text-blue_800 text-suTitles">Items</h3>
            <ul className="flex flex-col gap-3 list-inside list-disc">
              <li className="flex justify-between">
                <p className="flex h-1 gap-2">
                  <div className="flex items-center justify-center h-1">
                    <span className="block text-blue_800 text-[40px] h-16">
                      .
                    </span>
                  </div>
                  {`${addons.hammer.name}`}
                </p>
                <p>{`${addons.hammer.price} MXN`}</p>
              </li>
              <li className="flex justify-between">
                <p className="flex h-1 gap-2">
                  <div className="flex items-center justify-center h-1">
                    <span className="block text-blue_800 text-[40px] h-16">
                      .
                    </span>
                  </div>
                  {`${addons.jigsaw.name} `}
                </p>
                <p>{`${addons.jigsaw.price} MXN`}</p>
              </li>
              <li className="flex justify-between">
                <p className="flex h-1 gap-2">
                  <div className="flex items-center justify-center h-1">
                    <span className="block text-blue_800 text-[40px] h-16">
                      .
                    </span>
                  </div>
                  {`${addons.drill.name} `}
                </p>
                <p>{`${addons.drill.price} MXN`}</p>
              </li>
              <li className="flex justify-between">
                <p className="flex h-1 gap-2">
                  <div className="flex items-center justify-center h-1">
                    <span className="block text-blue_800 text-[40px] h-16">
                      .
                    </span>
                  </div>
                  {`${addons.screwdrivers.name} `}
                </p>
                <p>{`${addons.screwdrivers.price} MXN`}</p>
              </li>
              <li className="flex justify-between">
                <p className="flex h-1 gap-2">
                  <div className="flex items-center justify-center h-1">
                    <span className="block text-blue_800 text-[40px] h-16">
                      .
                    </span>
                  </div>
                  {`${addons.flexometer.name} `}
                </p>
                <p>{`${addons.flexometer.price} MXN`}</p>
              </li>
              <li className="flex justify-between">
                <p className="flex h-1 gap-2">
                  <div className="flex items-center justify-center h-1">
                    <span className="block text-blue_800 text-[40px] h-16">
                      .
                    </span>
                  </div>
                  {`${addons.markers.name} `}
                </p>
                <p>{`${addons.markers.price} MXN`}</p>
              </li>
            </ul>
          </article>
          <h3 className="font-acme text-blue_800 text-suTitles my-2">
            Metodo de pago
          </h3>
          <article className="flex justify-between items-center my-3">
            <Link href={url}>
              <button className="bg-primary px-3 py-1 text-white">
                Completar el registro y dar de alta tu tarjeta de deposito
              </button>
            </Link>
          </article>
          <article className="flex gap-3 my-3">
            <button className="rounded-full border border-solid border-blue_800 p-3"></button>
            <p className="underline">Acepto terminos y Condiciones</p>
          </article>
        </section>
        <section className="flex flex-col lg:px-[90px] lg:py-[30px] font-poppins text-blue_800 items-stretch gap-10 lg:w-[541px]">
          <article className="max-lg:hidden">
            <h1 className="font-acme text-titles font">
              Estas a un solo paso de completar tu reserva
            </h1>
          </article>
          <article className="max-lg:hidden">
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
              className="bg-primary text-white px-4 py-2 rounded-xl w-[134px]"
              onClick={handleClick}>
              Confirmar
            </button>
          </article>
        </section>
      </section>
    </>
  );
}

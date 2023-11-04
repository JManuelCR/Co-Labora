"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import confirm from "../../../public/illustrations/image 42.svg";
import Stripe from "../../../public/temporal-images/stripe.png";
import emergente from "../../../public/illustrations/Space-Emergente.png";

import { useState, useEffect, useRef } from "react";
import { propertyService } from "@/services/property.service";
import { getCookie } from "cookies-next";

export default function SaveNewPlace(props: any) {
  const [blur, setBlur] = useState(false);
  const [url, setUrl] = useState("");
  const [Id, setId] = useState("");
  const [token, setToken] = useState("");
  const [render, setRender] = useState(false);
  const formDataEntries: any = props.props;

  // ! ESTE ES EL QUE VA A MANDARSE EN EL FETCH  BD
  const data = props.props && props.props.data ? props.props.data : {};
  useEffect(() => {
    setRender(data !== undefined);
  }, [data]);

  (async () => {
    const dataImage = await props.props.propertyImages;
    // console.log("images", dataImage[0])
    const imageBox = document.getElementById("imageBox");
    const renderImage = document.getElementById("renderImage");
    // console.log("acacacac")
    if (renderImage) {
      return;
    }
    const render = new FileReader();
    render.onload = (e) => {
      const image: any = document.createElement("img");
      if (e !== null) {
        // console.log("event", e.target?.result)
        image.src = e.target?.result;
        image.id = "renderImage";
        image.style = "";
      } else {
        image.src = "";
      }
      // console.log("image to render", image)
      // imageBox?.appendChild(image)
      imageBox?.setAttribute("style", `background-image: url(${image.src})`);
    };
    render.readAsDataURL(dataImage[0]);
    // console.log("lkjdsalkjf", render)
  })();
  const formData = new FormData();
  formData.append("data", JSON.stringify(props.props.data));
  const imagesUpload = props.props.propertyImages;
  imagesUpload.forEach((image: any, index: any) => {
    formData.append(`propertyImages-${index}`, image);
  });
  const documentsUpload = props.props.propertyDocuments;
  documentsUpload.forEach((document: any, index: any) => {
    formData.append(`propertyDocuments-${index}`, document);
  });
  const dniUpload = props.props.propertyDni;
  dniUpload.forEach((dni: any, index: any) => {
    formData.append(`propertyDni-${index}`, dni);
  });

  useEffect(() => {
    const getToken = getCookie("token");
    if (getToken) {
      setToken(getToken);
      const [header, payload, signature] = getToken.split(".");
      const decodedHeader = JSON.parse(atob(header));
      const decodedPayload = JSON.parse(atob(payload));

      setId(decodedPayload.id);
    }
  }, [Id]);

  useEffect(() => {
    const data: any = {
      id: Id,
    };
    fetch("https://co-labora-backend.jmanuelc.dev/stripe/onBoard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.data);
      });
  }, [Id]);

  const handleClick = () => {
    fetch("https://co-labora-backend.jmanuelc.dev/property/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.success) {
          setBlur(true);
          setTimeout(() => {
            window.location.replace(url);
          }, 4000);
        } else {
          alert("La propiedad no se pudo crear, vuelva a intentarlo");
        }
      });
  };

  return (
    <>
      {render ? (
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
            } `}
          >
            <section className="flex flex-col font-poppins text-blue_800 border border-solid border-blue_800 p-[36px] rounded-[24px] max-md:border-none lg:w-[554px] mb-[48px]">
              <article className="flex justify-between md:gap-5 pb-[10px] md:pb-[28px] border-b-[2px] border-secondary">
                <div className="flex flex-col gap-3 w-1/2">
                  <h3 className="font-acme text-suTitles">
                    {data.name || "loading.."}
                  </h3>
                  <p>
                    {data.location.street +
                      "  " +
                      data.location.number +
                      "  " +
                      data.location.neighbor +
                      " " +
                      data.location.city +
                      "  " +
                      data.location.zip}{" "}
                  </p>
                </div>
                <div
                  id="imageBox"
                  className=" relative w-[170px] h-[128px] lg:w-[260px] md:h-[140px] bg-cover bg-no-repeat bg-center rounded-lg"
                ></div>
              </article>
              <article className="my-8">
                <h3 className="font-acme text-blue_800 text-suTitles">
                  Detalle del inmueble
                </h3>
                <div className="flex justify-between mb-5">
                  <p className="font-poppins text-[14px] font-[600] leading-[22px] tracking-[-0.28px]">
                    Precio por dia
                  </p>
                  <p>{`$${data.price} x dia`}</p>
                </div>
                <h3 className="font-acme text-blue_800 text-suTitles">
                  Extras inlcuidos sin costo extra
                </h3>
                <ul className="flex flex-col gap-3 list-inside list-disc">
                  {data.amenities.wifi ? <li>WiFi</li> : ""}
                  {data.amenities.parking ? <li>Estacionamiento</li> : ""}
                  {data.amenities.airConditioner ? <li>Clima</li> : ""}
                  {data.amenities.reception ? (
                    <li>Servicio de Recepcion</li>
                  ) : (
                    ""
                  )}
                  {data.amenities.petFriendly ? <li>Pet Friendly</li> : ""}
                  {data.amenities.cleanService ? (
                    <li>Servicio de Limpieza</li>
                  ) : (
                    ""
                  )}
                </ul>
              </article>
              <h3 className="font-acme text-blue_800 text-suTitles my-2">
                Cuenta de deposito
              </h3>
              <article className="flex justify-between items-center my-3 ">
                <Image
                  src={Stripe}
                  width={100}
                  height={100}
                  alt="stripe logo"
                  className="px-3"
                />
                <p>
                  Al dar clic en Confirmar sera llevado a una ventana de stripe
                  para completar el registro de sus datos bancarios
                </p>
              </article>
              {/* <article className="flex gap-3 my-3">
              <button className="rounded-full border border-solid border-blue_800 p-3"></button>
              <p className="underline">Acepto terminos y Condiciones</p>
            </article> */}
            </section>
            <section className="flex flex-col lg:px-[90px] lg:py-[30px] font-poppins text-blue_800 items-stretch gap-10 lg:w-[541px]">
              <article className="max-lg:hidden">
                <h1 className="font-acme text-titles font">
                  Estas a un solo paso de registrar tu propiedad
                </h1>
              </article>
              <article className="max-lg:hidden">
                <h5 className="text-center">
                  Revisa los datos de tu propiedad y pulsa Confirmar para
                  completar tu registro con stripe
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
                  onClick={handleClick}
                >
                  Confirmar
                </button>
              </article>
            </section>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function Detail() {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => {
    console.log("Data de los inputs:", data);
    const requestData = {
      email: data.email,
      asunto: data.asunto,
      mensaje: data.mensaje,
    };
    fetch("http://localhost:8080/email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Respuesta del servidor:", responseData);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <>
      <>
        <Navbar page={"contacts"} />
        <section className="flex flex-col justify-center items-center h-screen">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="border-solid border border-primary rounded-xl p-16">
              <h1 className="text-center font-semibold font-poppins text-2xl text-black ">
                Si tienes algún comentario, duda o sugerencia, por favor no
                dudes en ponerte en contacto con nosotros a través de este
                formulario.
              </h1>
              <article className="mt-3">
                <h3 className="text-base font-poppins text-black">
                  Cuál es tu correo?
                </h3>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary  my-5"
                    />
                  )}
                />
              </article>
              <article>
                <h3 className="text-base font-poppins text-black">
                  Asunto del correo
                </h3>
                <Controller
                  name="asunto"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary  my-5"
                    />
                  )}
                />
              </article>
              <article>
                <h3 className="text-base font-poppins text-black">Mensaje</h3>
                <Controller
                  name="mensaje"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={4}
                      className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary  my-5"
                    />
                  )}
                />
              </article>
              <button className="bg-primary rounded-lg w-[200px] h-[60px]">
                <p className="font-poppins text-suTitles text-white">Enviar</p>
              </button>
            </section>
          </form>
        </section>
      </>
    </>
  );
}

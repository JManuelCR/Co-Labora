/* eslint-disable @next/next/no-img-element */
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import inputs from "@/types/inputs.types";
import { FormEvent, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CreateAccount({ props }: any) {
  const [type, setType] = useState("user");

  const handleTypeUser = () => {
    setType("user");
  };

  const handleTypeSpace = () => {
    setType("space");
  };
  useEffect(() => {
    console.log(type);
  }, [type]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();

  const onSubmit: SubmitHandler<inputs> = (data) => {
    localStorage.removeItem("otp");
    const userType = type;
    const toPass = {
      email: data.email,
      password: data.password,
      userType: userType,
    };
    fetch("http://localhost:8080/otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        userType: userType,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const id = responseData.data;
        localStorage.setItem("id", id);
      })
      .catch((error) => {
        console.log("fetch error", error);
      });
    props(toPass);
  };

  const [passShow, setPassShow] = useState(false);
  const tooglePass = (e: FormEvent) => {
    e.preventDefault();
    setPassShow(!passShow);
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
      <section className=" w-100%  md:w-full md:h-100% flex items-center justify-center mb-40">
        <section className="flex flex-col mx-5 md:w-[440px] md:h-[510px] windowXl">
          <div className=" lg:my-0 gap-[13px]">
            <h1 className="font-acme text-titleMobil text-blue_800 text-center">
              Bienvenido a <span className="text-primary">Co-Labora</span>
            </h1>
            <p className="font-poppins text-center text-suTitles text-blue_700">
              Encuentra tu espacio perfecto
            </p>
          </div>
          <div className="flex justify-between text-center mt-6">
            <div className="font-poppins text-suTitles hover:text-primary hover:underline text-blue_800">
              <button onClick={handleTypeUser}>Soy Usuario</button>
            </div>
            <div className="font-poppins text-suTitles hover:text-primary text-blue_800 hover:underline">
              <button onClick={handleTypeSpace}>Soy Negocio</button>
            </div>
          </div>
          <form className="mt-[30px]" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email", {
                required: "Este campo es obligatorio",
                minLength: 10,
              })}
              placeholder="Correo Electronico"
              className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary required"
            />
            <p className="text-primary">{errors.email?.message}</p>
            <div className="my-5 flex rounded-[15px] border-2 border-primary font-poppins text-[16px] text-blue_500 px-3">
              <input
                id="password1"
                type={passShow ? "text" : "password"}
                {...register("password", {
                  required: "Este campo es obligatorio",
                })}
                placeholder="Contraseña"
                className="flex w-full focus:outline-0 focus:border-primary my-5 "
              />
              <button onClick={tooglePass} form="password1">
                <p className="text-blue_800 underline">Mostrar</p>
              </button>
            </div>
            <p className="font-poppins text-small text-blue_500">
              Debe contener al menos un carácter especial ( @ , # , ! ) un
              numero y una mayúscula
            </p>
            <p className="text-primary">{errors.email?.message}</p>
            <div className="my-5 flex rounded-[15px] border-2 border-primary font-poppins text-[16px] text-blue_500 px-3">
              <input
                id="2password"
                type={passShow ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Este campo es obligatorio",
                })}
                placeholder="Confirmar contraseña"
                className="flex w-full focus:outline-0 focus:border-primary my-5 "
              />
              <button onClick={tooglePass} form="2password">
                <p className="text-blue_800 underline">Mostrar</p>
              </button>
            </div>
            <div className="flex my-3 gap-[15px]">
              <input
                type="radio"
                name="rememberPassword"
                id="rememberPassword"
                className="accent-primary w-5 h-5 required"
              />
              <p className="font-poppins text-[20px] text-blue_800 ">
                Recordar contraseña
              </p>
            </div>
            <div className="m-3 flex justify-center "></div>
            <div className="h-1 w-full bg-primary mb-[11px] "></div>
            <p className="font-poppins text-[16px] text-blue_700 text-center">
              Al crear tu cuenta en
              <span className="text-primary"> Co-Labora</span> aceptas los{" "}
              <span className="text-black">Términos y Condiciones</span> y el{" "}
              <span className="text-black">Aviso de privacidad</span> del
              servicio
            </p>
            <button id="submit-user-register" type="submit"></button>
          </form>
        </section>
      </section>
    </>
  );
}

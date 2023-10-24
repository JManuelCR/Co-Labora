"use client";
import Navbar from "@/components/Navbar";
import FooterMobile from "@/components/FooterMobile";
import Footer from "@/components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormEvent, useState } from "react";
import inputs from "@/types/inputs.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  const onSubmit: SubmitHandler<inputs> = (data) => {

    fetch("http://localhost:8080/login", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response?.data) {
          console.log("esto es el data ", response.data);
          localStorage.setItem("token", response.data);
          // window.location.replace("/");
        } else {
          // console.log("no se encontro el usuario");
          toast.error("No se encontro el usuario", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch(() => {
        // console.log("Error en los inputs, intentar de nuevo");
      });
  };

  const [passShow, setPassShow] = useState(false);
  const tooglePass = (e: FormEvent) => {
    e.preventDefault();
    setPassShow(!passShow);
  };

  return (
    <>
      <Navbar page="login" />
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
      <section className=" w-100% h-100% md:w-full md:h-100% flex items-center justify-center lg:mt-[212px] text-blue_800">
        <section className="flex flex-col mx-5 md:w-[440px] md:h-[510px] windowXl">
          <div className="my-[74px] lg:my-0 gap-[15px]">
            <h1 className="font-acme text-titleMobil text-blue_800 text-center">
              Bienvenido a <span className="text-primary">Co-Labora</span>
            </h1>
            <p className="font-poppins text-center text-suTitles text-blue_700">
              Encuentra tu espacio perfecto
            </p>
          </div>
          <form className="mt-[17px]" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Correo Electronico"
              className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary  my-5"
              {...register("email", {
                required: "Este campo es obligatorio",
                minLength: 10,
              })}
            />
            <p>{errors.email?.message}</p>
            <div className="flex rounded-[15px] border-2 border-primary font-poppins text-[16px] text-blue_500 px-3">
              <input
                type={passShow ? "text" : "password"}
                {...register("password", {
                  required: "Este campo es obligatorio",
                })}
                placeholder="Contraseña"
                className="flex w-full focus:outline-0 focus:border-primary my-5"
              />
              <button onClick={tooglePass}>
                <p className="text-blue_800 underline">Mostrar</p>
              </button>
            </div>
            <p className="text-primary">{errors.password?.message}</p>
            <div className="flex my-[25px] gap-[10px] items-center">
              <input
                type="radio"
                name="rememberPassword"
                id="rememberPassword"
                className="inputStyle accent-primary w-5 h-5 required"
              />
              <p className="font-poppins text-[20px] text-blue_800 ">
                Recordar contraseña
              </p>
            </div>
            <Link href={"/verifyAccount"}>
              <p className="font-poppins text-[20px] text-blue_800 cursor-pointer hover:text-primary text-center">
                Crear una cuenta nueva
              </p>
            </Link>
            <div className="m-10 flex justify-center">
              {/* <Link href={"/"}> */}
              <button className="bg-primary rounded-lg w-[200px] h-[60px]">
                <p className="font-poppins text-suTitles text-white">Ingresa</p>
              </button>
              {/* </Link> */}
            </div>
          </form>
        </section>
      </section>
      <section className="md:hidden">
        <FooterMobile />
      </section>
      <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
        <Footer />
      </section>
    </>
  );
}

"use client";
/* eslint-disable @next/next/no-img-element */
import { useForm, SubmitHandler } from "react-hook-form";
import inputs from "@/types/inputs.types";
import { FormEvent, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function CreateAccount({ props }: any) {
  const [type, setType] = useState("user");
  const [activeButton, setActiveButton] = useState("user");
  const [passShow, setPassShow] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTypeUser = () => {
    setType("user"), setActiveButton("user");
  };

  const handleTypeSpace = () => {
    setType("space"), setActiveButton("space");
  };

  // useEffect(() => {
  //   console.log(type);
  // }, [type]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();

  const remove = () => {
    localStorage.removeItem("otp");
  };

  const setId = (id: string) => {
    localStorage.setItem("id", id);
  };

  const onSubmit: SubmitHandler<inputs> = (data) => {
    if (valid && data.email !== undefined) {
      remove();
      const userType = type;
      const toPass = {
        email: data.email,
        password: data.password,
        userType: userType,
      };
      fetch("https://co-labora-backend.jmanuelc.dev/otp/", {
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
          setId(id);
        })
        .catch((error) => {
          console.log("fetch error", error);
        });
      const button = document.getElementById("step-register");
      if (button) {
        button.click();
      }
      props(toPass);
    } else {
      // Notify the user that the password is invalid
      alert("Please enter a valid password.");
      toast.error("Error al verificar tu codigo", {
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
  };

  const tooglePass = (e: FormEvent) => {
    e.preventDefault();
    setPassShow(!passShow);
  };

  const checkPass = (e: any) => {
    const passRegex =
      /^(?=.*[!@#$%^&*()_+])(?=[A-Za-z0-9!@#$%^&*()_+]{6,})(?=.*[A-Z])(?=.*\d).+$/;
    const input = e.target.value;
    const isValid = passRegex.test(input);
    setValid(isValid);
  };
  console.log("esto es isvalid", valid);
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
          <div className="flex justify-center mt-5">
            <h3 className="text-center font-poppins text-slate-600 text-suTitles">
              Como te registramos?
            </h3>
          </div>
          <div className="flex justify-between text-center ">
            <div className="font-poppins text-suTitles text-black relative group">
              <button
                onClick={handleTypeUser}
                className={`focus:underline focus:text-primary ${
                  activeButton === "user" ? "text-primary underline" : ""
                }`}>
                Soy Usuario
              </button>
              <div
                className={`absolute bg-secondary text-white p-2 rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-pre-line ${
                  activeButton === "user" ? "opacity-100 visible" : ""
                }`}>
                Me interesa rentar espacios únicamente
              </div>
            </div>
            <div className="font-poppins text-suTitles text-black relative group">
              <button
                onClick={handleTypeSpace}
                className={`focus:underline focus:text-primary ${
                  activeButton === "space" ? "text-primary underline" : ""
                }`}>
                Soy Negocio
              </button>
              <div
                className={`absolute bg-secondary text-white p-2 rounded-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-pre-line ${
                  activeButton === "space" ? "opacity-100 visible" : ""
                }`}>
                Me interesa publicar mis espacios para rentarlos
              </div>
            </div>
          </div>

          <form
            className="flex flex-col mt-[30px] justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}>
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
            <div className="my-5 flex rounded-[15px] border-2 border-primary font-poppins text-[16px] text-blue_500 px-3 w-full">
              <input
                id="password1"
                type={passShow ? "text" : "password"}
                {...register("password", {
                  required: "Este campo es obligatorio",
                })}
                onChange={checkPass}
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
            {!valid ? (
              <p className="text-primary">
                La contraseña no cumple los requerimientos
              </p>
            ) : null}
            <p className="text-primary">{errors.email?.message}</p>
            <div className="flex my-3 gap-[15px]"></div>
            <div className="m-3 flex justify-center "></div>
            <div className="h-1 w-full bg-primary mb-[11px] "></div>
            <p className="font-poppins text-[16px] text-blue_700 text-center">
              Al crear tu cuenta en
              <span className="text-primary"> Co-Labora</span> aceptas los{" "}
              <span className="text-black">Términos y Condiciones</span> y el{" "}
              <span className="text-black">Aviso de privacidad</span> del
              servicio
            </p>
            <button
              id="submit-user-register"
              type="submit"
              disabled={!valid}
              className={`rounded-lg px-[18px] py-1 w-[134px] h-[35px] buttonMobileShadow  ${
                !valid ? "bg-gray" : "bg-primary"
              }`}>
              Siguiente
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

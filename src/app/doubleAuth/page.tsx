import jwt from "jsonwebtoken";
import { useState } from "react";

export default function DoubleAuth(props: any) {
  const code = localStorage.getItem("otp");
  const key = process.env.NEXT_PUBLIC_JWT_KEY;
  const [number, setNumber] = useState();

  const onSubmit = () => {
    const decoded = jwt.verify(code!, key!);
    if (decoded === number) {
      console.log("los numeros coinciden");
    } else {
      console.log("los numeros no coinciden");
    }
  };

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setNumber(inputValue);
  };

  return (
    <>
      <article className="flex flex-col items-center justify-center text-center text-blue_800 my-20">
        <section className="border border-solid border-primary rounded-lg p-10 flex flex-col justify-center items-center gap-6 ">
          <h1 className="font-acme text-titles">
            Ingresa el codigo de verificacion
          </h1>
          <p className="text-suTitles w-96 font-light">
            Revisa tu bandeja de correo e ingresa el codigo de 4 digitos en la
            parte de abajo para verificar tu cuenta
          </p>
          <input
            type="tel"
            className="border-2 border-solid py-1 border-primary rounded-lg text-center w-96 items-center justify-center focus:outline-0 font-bold"
            maxLength={4}
            pattern="[0-9]{4}"
            onChange={handleInputChange}
          />
          <button
            className="bg-primary px-2 py-3 text-white"
            onClick={onSubmit}>
            Verificar
          </button>
        </section>
      </article>
    </>
  );
}

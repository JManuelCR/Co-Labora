"use client";
import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BurgerNav() {
  const [token, setToken] = useState<string>();
  const [Type, setType] = useState();
  const [Name, setName] = useState();
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setToken(token);
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setType(decodedPayload.userType);
      setName(decodedPayload.name);
    }
  }, []);

  const deleteToken = () => {
    deleteCookie("token");
  };

  function onClick() {
    deleteToken();
    window.location.replace("/");
  }

  return (
    <article className="font-poppins flex flex-col gap-3 bg-white text-black rounded-lg p-3 absolute right-0 top-0 z-10 border border-solid border-primary w-fit">
      <p className="text-lg ">
        Hola {""}
        <span className="font-medium">{Name}</span>
      </p>
      {token ? (
        <section className="flex flex-col gap-3">
          <section>
            <Link
              href={
                Type === "space" ? "/your-requests" : "/historyReservations"
              }
              className="text-black hover:underline"
            >
              <p className="text-lg">
                {Type === "space" ? "Tus solicitudes" : "Tus reservas"}
              </p>
            </Link>
          </section>
          <div className="border border-b-primary"></div>
          <section>
            <Link
              href="/editProfileUser"
              className="text-black hover:underline"
            >
              <p className="text-lg">Configuración</p>
            </Link>
          </section>
        </section>
      ) : (
        <></>
      )}
      <section className="flex">
        {token ? (
          <button
            onClick={onClick}
            className="text-clip whitespace-nowrap text-lg text-black hover:underline"
          >
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/login"
            className="text-clip whitespace-nowrap text-lg text-black hover:underline"
          >
            Iniciar sesión
          </Link>
        )}
      </section>
    </article>
  );
}

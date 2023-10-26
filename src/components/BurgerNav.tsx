import Link from "next/link";
import { useEffect, useState } from "react";

export default function BurgerNav() {
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  function onClick() {
    deleteToken();
    window.location.replace("/");
  }

  return (
    <article className="flex flex-col gap-3 bg-white text-blue_800 font-poppins rounded-lg p-5 absolute right-0 top-0 z-10 border border-solid border-primary">
      {token ? (
        <section className="flex flex-col gap-3">
          <section>
            <p>Mensajes</p>
          </section>
          <section>
            <p>Notificaciones</p>
          </section>
          <section>
            <Link href={"/historyReservations"}>
              <p>Favoritos</p>
            </Link>
          </section>
          <div className="border border-b-primary px-5"></div>
          <section>
            <Link href={"/editProfileUser"}>
              <p>Configuracion</p>
            </Link>
          </section>
        </section>
      ) : (
        <></>
      )}
      <section>
        {token ? (
          <button onClick={onClick}>Cerrar sesion</button>
        ) : (
          <Link href={"/login"}> Iniciar sesion </Link>
        )}
      </section>
    </article>
  );
}

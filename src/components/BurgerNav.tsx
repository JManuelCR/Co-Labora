import Link from "next/link";

export default function BurgerNav() {
  const token = localStorage.getItem("token");
  return (
    <article className="flex flex-col gap-3 bg-white text-blue_800 font-poppins rounded-lg p-5 absolute right-0 top-0 z-10 border border-solid border-primary">
      <section>
        <p>Mensajes</p>
      </section>
      <section>
        <p>Notificaciones</p>
      </section>
      <section>
       <Link href={"/historyReservations"}> <p>Favoritos</p></Link>
      </section>
      <div className="border border-b-primary px-5"></div>
      <section>
        <Link href={"/editProfileUser"}><p>Configuracion</p></Link>
      </section>
      <section>
        {token ? (
          <p>Cerrar sesion</p>
        ) : (
          <Link href={"/login"}> Iniciar sesion </Link>
        )}
      </section>
    </article>
  );
}

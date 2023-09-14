import Image from "next/image";
import error from "../../public/illustrations/Error.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Refresh from "../../public/illustrations/coffee break.svg";
import Bug from "../../public/illustrations/Bug Fixed.svg";
import Return from "../../public/illustrations/Refresh.svg";
export default function NotFoundPage() {
  return (
    <>
      <Navbar page="404" />
      <article className="p-10 flex flex-col h-screen">
        <section className="bg-primary flex justify-center p-10">
          <Image src={error} alt="error image" width={600} height={400} />
        </section>
        <section className="text-center">
          <h1 className="font-acme text-titles text-blue_800 text-center">
            404
          </h1>
          <h2 className="font-acme text-suTitles text-blue_800 text-center">
            Ops! algo va mal
          </h2>
          <div className="flex justify-center gap-5 mt-3">
            <button className="border border-solid border-primary rounded-lg text-primary px-3 py-1  font-poppins">
              Ir atras
            </button>
            <button className="bg-primary rounded-lg text-white px-3 py-1 font-poppins">
              Recargar
            </button>
          </div>
        </section>
        <section className="flex justify-center gap-20 p-10 text-blue_800 font-poppins max-md:p-0 max-md:py-2">
          <div className="flex flex-col max-md:hidden">
            <h2 className="font-acme text-titles text-blue_800">
              Posibles soluciones
            </h2>
            <p>por favor intenta una de las siguientes opciones:</p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex">
              <Image src={Refresh} alt="Refreshicon" width={100} height={100} />
              <div className="pt-5 px-5">
                <strong>Refresca la pagina</strong>
                <p>
                  Presiona el botón de refrescar o presiona la tecla F5 en tu
                  teclado.
                </p>
              </div>
            </div>
            <div className="flex">
              <Image src={Bug} alt="bugicon" width={100} height={100} />
              <div className="pt-5 px-5">
                <strong>Reporta un problema</strong>
                <p>
                  Si el problema persiste, por favor ponte en contacto con
                  soporte
                </p>
              </div>
            </div>
            <div className="flex">
              <Image src={Return} alt="refresh icon" width={100} height={100} />
              <div className="pt-5 px-5">
                <strong>Regresa a la pagina anterior</strong>
                <p>
                  Da click en el botón de regresar del navegador, para ir a la
                  página anterior
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

import Navbar from "@/components/Navbar";
import FooterMobile from "@/components/FooterMobile";
import Footer from "@/components/Footer";

export default function userInput() {
  return (
    <>
      <section className="mx-[29px] lg:mx-52 lg:my-32 items-center">
        <h1 className="font-poppins text-suTitles text-blue_700 font-bold text-center">
          Permite a Juan conocer mas de ti{" "}
        </h1>
        <p className="font-poppins text-small text-blue_700 mt-[34px] mb-[30px] ">
          Danos una breve reseña de ti y del trabajo que desempeñas
        </p>
        <form className="mb-36">
          <textarea
            name="reseña"
            id="reseña"
            className="border-2 accent-primary border-primary rounded-[10px] focus:outline-0 focus:border-primary required p-4 mb-[30px] placeholder:font-roboto placeholder:text-small placeholder:text-blue_300 w-full"
            placeholder="Redacta el mensaje aca ..."></textarea>
          <p className="font-poppins text-small text-blue_700 mb-[30px]">
            Porque elegiste el inmueble de Juan, cuéntanos que fue lo que te
            gusto
          </p>
          <textarea
            name="inmueble"
            id="inmueble"
            className="border-2 accent-primary border-primary rounded-[10px] focus:outline-0 focus:border-primary required p-4 mb-[30px] placeholder:font-roboto placeholder:text-small placeholder:text-blue_300 w-full"
            placeholder="Redacta el mensaje aca ..."></textarea>
          <div className="border-2 border-primary rounded-[10px] w-full">
            <p className="font-poppins text-small text-blue_500 p-[19px] ">
              Por que te pedimos esta información? Es importante para los
              usuarios que ponen en renta sus espacios conocer un poco mas sobre
              ti y tu profesión para poderte brindar el mejor servicio.
            </p>
            <p className="font-poppins text-small text-[#280AE5] p-[19px] text-center ">
              Conoce más ....
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import Image from "next/image";
import Spaceless from "../../../public/illustrations/No-spaces.svg";
import Link from "next/link";

export default function Detail() {
  return (
    <>
      <Navbar page="your spaces" />
      <article className="flex h-[100%] my-10 justify-evenly  max-md:flex-col max-md:items-center max-md:gap-44">
        <section className="flex flex-col justify-between items-center border border-solid border-secondary rounded-xl w-96">
          <div>
            <h5 className="font-poppins text-suTitles text-blue_800 text-center">
              Ninguna propiedad aun...
            </h5>
          </div>
          <div className="p-5">
            <Link href={"/reservation"}>
              <button className="bg-primary rounded-2xl px-3 py-1 text-white ">
                + Agregar
              </button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-center w-[50rem] items-center max-md:w-fit mb-28">
          <Image
            src={Spaceless}
            alt="no space image"
            width={850}
            height={680}
            className="max-md:hidden"
          />
          <h2 className="font-acme text-titles text-blue_800 max-md:text-titleMobil ">
            No haz dado de alta ninguna propiedad aun Haz click en “ Agregar + “
            para iniciar el registro de propiedad
          </h2>
        </section>
      </article>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}

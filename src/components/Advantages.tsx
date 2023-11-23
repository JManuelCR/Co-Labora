/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Space from "../../public/icons/spaceship.webp";
import Money from "../../public/icons/Icon-Money.svg";
import User from "../../public/icons/Icon-Users.svg";
import Compass from "../../public/icons/Icon-Compass.svg";
import SliderUserLanding from "./slideUserLanding";

interface Props {
  pictureProfile: string;
  name: string;
  subtitleProfession: string;
  profession: string;
  opinion: string;
}

export default function Advantages(props: Props) {
  const { pictureProfile, name, subtitleProfession, profession, opinion } =
    props;
  return (
    <>
      <section className="bg-white md:h-[452px] w-full flex flex-col gap-14 max-md:hidden mt-[113px]">
        <div className="flex justify-center">
          <div className="border-b-4 border-secondary">
            <h1 className="text-4xl leading-loose font-acme text-blue_800 text-[40px]">
              ¿Porqué Co-labora?
            </h1>
          </div>
        </div>
        <section className="flex gap-5 text-center ">
          <div className="flex flex-col items-center p-3 basis-1/4">
            <Image
              src={Space}
              width={104}
              height={24}
              alt="Icono Cohete"
              className="h-28 w-28"
            />
            <h2 className="text-4xl font-acme text-primary">
              Experiencias únicas
            </h2>
            <p className="text-lg font-poppins text-blue_800">
              Cada vez que rentes estás abriendo la ventana a una experiencia
              nueva
            </p>
          </div>
          <div className="flex flex-col items-center p-3 basis-1/4">
            <Image
              src={Money}
              width={104}
              height={24}
              alt="Icono bolsa con dinero"
              className="h-28 w-28"
            />
            <h2 className="text-4xl font-acme text-primary">Adaptado a ti</h2>
            <p className="text-lg font-poppins text-blue_800">
              Renta el lugar que cumpla con lo que necesitas
            </p>
          </div>
          <div className="flex flex-col items-center p-3 basis-1/4">
            <Image
              src={User}
              width={104}
              height={24}
              alt="Icono usuario"
              className="h-28 w-28"
            />
            <h2 className="text-4xl font-[acme] text-primary">Te conectamos</h2>
            <p className="text-lg font-[poppins] text-blue_800">
              Conoce nuevas personas cada día
            </p>
          </div>
          <div className="flex flex-col items-center p-3 basis-1/4">
            <Image
              src={Compass}
              width={104}
              height={24}
              alt="Icono brujula"
              className="h-28 w-28"
            />
            <h2 className="text-4xl font-[acme] text-primary">Explora</h2>
            <p className="text-lg font-[poppins] text-blue_800">
              Nuevo día nuevas oportunidades de viajar con tu trabajo por la
              ciudad
            </p>
          </div>
        </section>
      </section>
      <section className="bg-secondary h-auto xl:h-[452px] w-full flex flex-col md:p-4 gap-6 max-md:p-2 max-md:w-full]">
        <section className="max-w-full flex gap-8 lg:gap-[150px] xl:gap-[270px] md:px-[40px] xl:px-[90px] max-md:flex-col max-md:justify-center max-md:items-center pb-4 mt-[20px] md:mt-[100px]">
          {/* <div className="flex flex-col gap-5 md:basis-1/2 ">
            <div>
              <p className="text-lg font-[poppins] text-white">{opinion}</p>
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <img
                  src={pictureProfile}
                  alt={name}
                  className="h-16 w-16 rounded-[87px]"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-5">
                  <p className="text-sm font-[poppins] font-semibold text-white">
                    {name}
                  </p>
                  <p className="text-[10px] font-[poppins] font-light text-white">
                    {subtitleProfession}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-[poppins] font-semibold text-white">
                    {profession}
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <SliderUserLanding />
          <div className="gap-5 md:basis-1/2 max-md:flex flex-col items-center max-md:mb-4">
            <div className="flex ">
              <div className="md:border-l-4 px-3 md:basis-1/2 max-md:border-l-4 border-blue_800">
                <p className="font-[poppins] text-[40px] text-blue_800 font-medium ">
                  204
                </p>
                <p className="font-[poppins] text-2xl text-blue_800 font-medium">
                  Espacios en renta
                </p>
              </div>
              <div className="md:border-l-4 px-3 md:basis-1/2 max-md:border-l-4 border-blue_800">
                <p className="font-[poppins] text-[40px] text-blue_800 font-medium">
                  +500
                </p>
                <p className="font-[poppins] text-2xl text-blue_800 font-medium">
                  Usuarios
                </p>
              </div>
            </div>
            <div className="flex my-5">
              <div className="md:border-l-4 px-3 md:basis-1/2 max-sm:border-l-4 border-blue_800 max-sm:px-1 w-40">
                <p className="font-[poppins] text-[40px] text-blue_800 font-medium">
                  804
                </p>
                <p className="font-[poppins] text-2xl text-blue_800 font-medium">
                  Clientes satisfechos
                </p>
              </div>
              <div className="md:border-l-4 px-3 md:basis-1/2 max-sm:border-l-4 border-blue_800 max-sm:px-0 max-sm:ps-5">
                <p className="font-[poppins] text-[40px] text-blue_800 font-medium">
                  +1000
                </p>
                <p className="font-[poppins] text-2xl text-blue_800 font-medium">
                  Visitas mensuales
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

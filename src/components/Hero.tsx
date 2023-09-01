import Image from "next/image";
import location from "../../public/illustrations/mobile-location-ilustration.svg";
import consult from "../../public/temporal-images/temporal-image-consult.webp";
import bubble from "../../public/illustrations/conversation-asset.webp";
import wifi from "../../public/icons/icon-wifi-white.svg";
import camera from "../../public/icons/icon-videocam-outline-white.svg";
import restaurant from "../../public/icons/icon-restaurant-outline-white.svg";
import pets from "../../public/icons/icon-paw-outline-white.svg";
import firstAidKit from "../../public/icons/icon-medkit-outline-white.svg";
import arrowRigth from "../../public/icons/icon-arrow-right-white.svg";
import arrowLeft from "../../public/icons/icon-arrow-left-white.svg";

export default function Hero() {
  return (
    <>
      <section className="flex w-full lg:px-[60px] justify-center gap-5 max-lg:flex-col-reverse max-lg:items-center">
        <article className="flex flex-col gap-3 max-md:px-4">
          <div className="flex gap-[18px] border-b border-secondary pb-3 w-[343px]">
            <input
              type="text"
              placeholder="Encuentra tu espacio..."
              className="border focus:outline-none p-2 rounded-md focus:bg-gray-100 focus:shadow-md text-blue_800 w-[205px]"
            />
            <button className="bg-primary rounded-lg font-bold px-10 py-1 w-[120px]">
              Buscar
            </button>
          </div>
          <div>
            <h5 className="text-lg text-primary font-bold max-lg:hidden">
              ¡Encuentra tu espacio perfecto!
            </h5>
          </div>
          <div className="max-lg:hidden">
            <Image
              src={location}
              width={416}
              height={416}
              alt="mobile-with-pin-location"
            />
          </div>
        </article>
        <article className="relative backgroundGradienHero h-[756px] w-full">
          {/* <span className="bg-gradient-to-b from-white via-orange-300 to-orange-900 z-10 w-full h-full" /> AQUI SE SUPONE QUE DEBERIA DE IR EL GRADIENTE ENCIMA DE LA IMAGEN PERO NO SE COMO HACERLO*/}
          <div className="image_holder bg-hero-pattern flex max-sm:w-[375px]">
            <Image
              src={consult}
              width={908}
              height={756}
              alt="temporal-image-consult"
              className="absolute z-[-1] max-sm:object-fill h-full w-[64rem]"
            />
          </div>
          <div className="flex flex-col absolute top-5 start-10">
            <Image
              src={bubble}
              width={300}
              height={165}
              alt="Chat-bubble-w/text"
              className="z-10 max-sm:0"
            />
          </div>
          <div className="flex absolute bottom-[37px] w-[100%]">
            <div className="flex gap-[28px] w-[100%] max-sm:w-auto">
              <Image
                src={consult}
                alt="temporal-image-consult"
                className="propertyAvatar"
              />
              <div className="flex flex-col gap-2 max-sm:w-52">
                <h2 className="font-poppins text-[24px] font-[800] text-white ">
                  Consultorio psicoterapéutico
                </h2>
                <h3 className="max-w-[397px] block font-poppins text-[18px] font-[500] max-sm:text-[14px] ">
                  Con una serenidad y silencio total, puedes ofrecer las mejores
                  sesiones.
                </h3>
                <span className="flex">
                  <span>Coyoacán, CDMX</span>
                  <span>30 m2</span>
                </span>
                <div className="flex gap-8">
                  <Image src={wifi} alt={"Wifi amenity icon"} />
                  <Image
                    src={camera}
                    alt={"Surveillance camera amenity icon"}
                  />
                  <Image src={restaurant} alt={"Space to eat amenity icon"} />
                  <Image src={pets} alt={"Pet-friendly amenity icon"} />
                  <Image src={firstAidKit} alt={"First-aid- kit amenity"} />
                </div>
                <div className="flex gap-[24px] mt-[20px]">
                  <button className="w-[150px] px-[18px] py-[4px] border-[1px] border-primary rounded-lg bg-white font-[600] font-poppins text-[14px] text-primary max-sm:w-44">
                    Ver más
                  </button>
                  <button className="w-[150px] px-[18px] py-[4px]   rounded-lg bg-primary font-[600] font-poppins text-[14px] text-white ">
                    Rentar
                  </button>
                </div>
              </div>
              <div className="relative w-[100%] h-[100%] max-sm:hidden">
                <div className="absolute end-0 top-0 flex gap-[40px] pe-[60px]">
                  <Image src={arrowLeft} alt={"Slider arrow left icon"} />
                  <Image src={arrowRigth} alt={"Slider arrow right icon"} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

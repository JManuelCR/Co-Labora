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
import { dataProperty } from "@/data/propertiesData";
import SliderHero from "./sliderHero";

export default function Hero() {
  return (
    <>
      <section className="flex w-full lg:px-[60px] justify-center gap-5 max-xl:flex-col-reverse max-xl:items-center h-[528px] md:h-auto">
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
            <h5 className="text-lg text-primary font-bold max-xl:hidden">
              ¡Encuentra tu espacio perfecto!
            </h5>
          </div>
          <div className="max-xl:hidden">
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
          <div className="image_holder bg-hero-pattern flex max-sm:w-full">
            <Image
              src={consult}
              width={908}
              height={756}
              alt="temporal-image-consult"
              className="absolute z-[-1] max-sm:object-fill h-full w-full"
            />
          </div>
          <div className="flex flex-col absolute top-[155px] md:top-5 start-10">
            <Image
              src={bubble}
              width={300}
              height={165}
              alt="Chat-bubble-w/text"
              className="z-10 max-sm:0"
            />
          </div>
          <div className="flex absolute bottom-[24px] md:bottom-3 w-[100%]">
            <SliderHero properties={dataProperty} />
            {/* <div className="flex gap-[28px] w-[100%]">
              <div className="relative w-[100%] h-[100%] ">
                <div className="absolute end-0 top-0 flex gap-[40px] pe-[60px]">
                  <Image src={arrowLeft} alt={"Slider arrow left icon"} />
                  <Image src={arrowRigth} alt={"Slider arrow right icon"} />
                </div>
              </div>
            </div> */}
          </div>
        </article>
      </section>
    </>
  );
}

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
      <article className="flex w-full px-[60px] justify-center items-center">
        <section className="flex flex-col gap-3 pt-[32px]">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Encuentra tu espacio..."
              className="border focus:outline-none p-2 rounded-md focus:bg-gray-100 focus:shadow-md text-blue_800"
            />
            <button className="bg-primary rounded-lg font-bold px-10 py-1">
              Buscar
            </button>
          </div>
          <div>
            <h5 className="text-lg text-primary font-bold ">
              ¡Encuentra tu espacio perfecto!
            </h5>
          </div>
          <div>
            <Image
              src={location}
              width={416}
              height={416}
              alt="mobile-with-pin-location"
            />
          </div>
        </section>
        <section className="relative backgroundGradienHero h-[756px]">
          {/* <span className="bg-gradient-to-b from-white via-orange-300 to-orange-900 z-10 w-full h-full" /> AQUI SE SUPONE QUE DEBERIA DE IR EL GRADIENTE ENCIMA DE LA IMAGEN PERO NO SE COMO HACERLO*/}
          <div className="image_holder bg-hero-pattern">
            <Image
              src={consult}
              width={908}
              height={756}
              alt="temporal-image-consult"
              className="absolute z-[-1]"
            />
          </div>
          <div className="flex flex-col absolute top-0">
            <Image
              src={bubble}
              width={300}
              height={165}
              alt="Chat-bubble-w/text"
              className="ms-5 mt-5 inset-0 z-10"
            />
          </div>
          <div className="flex absolute bottom-[37px] w-[100%]">
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
        </section>
      </article>
    </>
  );
}

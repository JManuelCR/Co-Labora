import Image from "next/image";
import location from "../../public/illustrations/mobile-location-ilustration.svg";
import consult from "../../public/temporal-images/temporal-image-consult.webp";
import bubble from "../../public/illustrations/conversation-asset.webp";
export default function Hero() {
  return (
    <>
      <article className="flex">
        <section className="flex flex-col gap-3">
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
              width={380}
              height={380}
              alt="mobile-with-pin-location"
            />
          </div>
        </section>
        <section>
          {/* <span className="bg-gradient-to-b from-white via-orange-300 to-orange-900 z-10 w-full h-full" /> AQUI SE SUPONE QUE DEBERIA DE IR EL GRADIENTE ENCIMA DE LA IMAGEN PERO NO SE COMO HACERLO*/}
          <div className="image_holder">
            <Image
              src={consult}
              width={585}
              height={400}
              alt="temporal-image-consult"
              className="absolute z-0"
            />
          </div>
          <div className="flex flex-col">
            <Image
              src={bubble}
              width={300}
              height={165}
              alt="Chat-bubble-w/text"
              className="relative ms-5 mt-5 inset-0 z-10 "
            />
          </div>
        </section>
      </article>
    </>
  );
}

import Image from "next/image";
import location from "../../public/illustrations/mobile-location-ilustration.svg";
import consult from "../../public/temporal-images/temporal-image-consult.webp";
import bubble from "../../public/illustrations/conversation-asset.webp";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { propertyService } from "@/services/property.service";
import SliderHero from "./sliderHero";
import CardsAvailable from "./CardsAvailable";

interface Property {
  name: string;
  location: any;
  ratings: number;
  price: number;
  comments: string;
  score: Number;
  onClicked: Function;
  _id: String;
  propertyImages: string;
}

export default function Hero(props: any) {
  interface Property {
    name: string;
    location: any;
    ratings: number;
    price: number;
    comments: string;
    score: Number;
    onClicked: Function;
    _id: String;
    propertyImages: string;
  }
  const [filterOption, setFilterOption] = useState<string | null>("");
  const [options, setOptions] = useState<Property[]>([]);
  useEffect(() => {
    propertyService
      .getByFilter(filterOption)
      .then((response) => {
        setOptions(response.data);
      })
      .catch((err) => {
        setOptions([]);
      });
  }, [filterOption]);

  useEffect(() => {
    propertyService
    .getByFilter('Ciudad')
    .then((response) => {
      setOptions(response.data);
    })
    .catch((err) => {
      setOptions([]);
    });
  }, []);

  const filterProperties = (event: FormEvent) => {
    event.preventDefault();
    const inputElement = event.currentTarget.querySelector("input");
    const searchValue = inputElement?.value || "";
    setFilterOption(searchValue);
  };
  function handleCardClick(_id: any) {
    localStorage.setItem("selectedPropertyId", _id);
  }
  return (
    <>
      <section className="flex w-full lg:px-[60px] justify-center gap-5 max-xl:flex-col-reverse max-xl:items-center h-[528px] md:h-auto">
        <article className="flex flex-col gap-3 max-md:px-4">
          <form
            onSubmit={filterProperties}
            className="flex gap-[18px] border-b border-secondary pb-3 w-[343px]"
          >
            <input
              type="text"
              placeholder="Encuentra tu espacio..."
              className="border focus:outline-none p-2 rounded-md focus:bg-gray-100 focus:shadow-md text-blue_800 w-[205px]"
            />
            <button
              type="submit"
              className="bg-primary rounded-lg font-bold px-10 py-1 w-[120px]"
            >
              Buscar
            </button>
          </form>

          <div className="max-xl:hidden max-h-[690px] overflow-y-auto flex flex-col gap-4">
            {options.length !== 0 ? (
              <>
                {
                  <p className="text-primary font-acme text-lg font-bold">
                    Resultados:
                  </p>
                }
                {options.map((option, index) => (
                  <div key={index}>
                    <CardsAvailable
                      name={option.name}
                      location={option.location}
                      score={option.score}
                      price={option.price}
                      comments={option.comments}
                      ratings={option.ratings}
                      onClicked={() => handleCardClick(option._id)}
                      image={option.propertyImages[0]}
                      _id={option._id}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                {filterOption === "" ? (
                  <>
                    <div>
                      <h5 className="text-lg text-primary font-bold max-xl:hidden">
                        ¡Encuentra tu espacio perfecto!
                      </h5>
                    </div>
                    <Image
                      src={location}
                      width={416}
                      height={416}
                      alt="mobile-with-pin-location"
                    />
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl text-primary font-acme font-bold leading-8 tracking-widest">No se encontraron propiedades <br /> en esta búsqueda</h2>
                  </>
                )}
              </>
            )}
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
            <SliderHero properties={props} />
          </div>
        </article>
      </section>
    </>
  );
}

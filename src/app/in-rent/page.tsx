"use client";
/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardsAvailable from "@/components/CardsAvailable";
import { useState, useEffect, FormEvent } from "react";
import { propertyService } from "@/services/property.service";
import Image from "next/image";
import Search from "../../../public/icons/search.svg";
import FilterIcn from "../../../public/icons/adjustments.svg";
import starImg from "../../../public/icons/star-shape-1-svgrepo-com.svg";
import { amenities } from "@/data/amenities";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
type InputAmenities = {
  minValue: number;
  maxValue: number;
  wifi: boolean;
  cleanService: boolean;
  parking: boolean;
  reception: boolean;
  petFriendly: boolean;
  airConditioner: boolean;
};

export default function Rent() {
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
  const [simpleFilter, setSimpleFilter] = useState<string | null>();
  const [complexFilter, setComplexFilter] = useState();
  const [handleProperties, setHandleProperties] = useState<Property[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [availability, setAvailability] = useState(true);
  const [wifi, setWifi] = useState();
  const [clientService, setClientService] = useState();
  const [petFriendly, setPetFriendly] = useState();
  const [parking, setParking] = useState();
  const [airConditioner, setAirConditioner] = useState();
  const [reception, setReception] = useState();
  useEffect(() => {
    propertyService.getAll().then((response) => {
      setProperties(response.data);
      setHandleProperties(response.data);
      return;
    });
  }, []);
  function handleCardClick(_id: any) {
    localStorage.setItem("selectedPropertyId", _id);
  }
  const filterSimple = (e: FormEvent) => {
    e.preventDefault();
    const inputFilter = e.currentTarget.querySelector("input");
    const searchValue = inputFilter?.value || "";
    if (searchValue === "") {
      toast.warn(" 😐Wow, no podemos buscar sin parámetros", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return setHandleProperties(properties);
    } else {
      const filter = properties.filter((property: Property, index: number) => {
        return property.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      });
      setHandleProperties(filter);
      changeAvailability(filter.length);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputAmenities | String | any>();
  const [range, setRange] = useState(false);
  function loader() {
    setTimeout(() => {
      return setRange(!range);
    }, 100);
  }
  const changeAvailability = (proper: number) => {
    if (proper === 0) {
      setAvailability(false);
      setTimeout(() => {
        setAvailability(true);
        setHandleProperties(properties);
      }, 3000);
    }
  };
  const amenitiesFilter: SubmitHandler<InputAmenities | String | any> = (
    data
  ) => {
    console.log({ data });
  };

  return (
    <>
      <Navbar page="in rent" />
      <section className="flex flex-col lg:flex-row justify-start lg:justify-center gap-3 lg:gap-[320px] h-[46px] my-4">
        <form
          action="onSubmit"
          className="flex gap-4 items-center justify-center"
          onSubmit={filterSimple}
        >
          <div className="flex h-fit  border-solid border-2 border-blue_700 rounded-xl p-2 ">
            <input
              type="text"
              placeholder="Encuentra un espacio..."
              className="border-none focus:outline-none text-blue_800"
            />
            <Image
              src={Search}
              alt="search icon"
              width={24}
              height={24}
              className="max-md:hidden"
            />
          </div>
          <ToastContainer
            position="top-center"
            autoClose={100}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <button
            type="submit"
            className="bg-primary text-white font-poppins px-10 py-3 rounded-xl"
          >
            Buscar
          </button>
        </form>
        <span className="w-[90%] mx-4 bg-secondary h-[1px] rounded-lg lg:hidden">
          -
        </span>
        <div className="relative flex justify-end">
          <button
            className="flex gap-4 bg-blue_800 lg:bg-primary text-white font-poppins p-4 lg:px-10 py-2 lg:py-3 rounded-md mr-4 lg:rounded-xl"
            onClick={loader}
          >
            Filter
            <Image src={FilterIcn} alt="filter button" width={24} height={24} />
          </button>
          {range === true ? (
            <article className="absolute top-0 right-4 z-20 p-4 flex flex-col bg-white text-blue_800 w-80 rounded-lg border border-solid border-b-blue_800">
              <section className="flex justify-between p-2  rounded-t-lg">
                <p className="font-semibold">Filters:</p>
                <div className=" flex gap-3 ">
                  <button className="hover:font-bold" onClick={loader}>
                    Close
                  </button>
                </div>
              </section>
              <form onSubmit={handleSubmit(amenitiesFilter)}>
                <section className="">
                  <h4 className="text-center font-bold text-blue_800">
                    Rango de precios
                  </h4>
                  <div id="slider"></div>
                  <div className="flex justify-around p-1">
                    <input
                      {...register("minValue")}
                      type="number"
                      placeholder="Minimo $0.00"
                      className="text-start border-none focus:outline-none w-36"
                    />
                    <input
                      {...register("maxValue")}
                      type="number"
                      placeholder="Maximo $0.00"
                      className="text-start border-none focus:outline-none w-36"
                    />
                  </div>
                </section>
                <span className="border-b border-solid border-blue_800 my-3 w-full" />
                <section>
                  <h4 className="text-center font-bold text-blue_800">
                    Por amenidades
                  </h4>
                  <div className="flex gap-3 flex-wrap p-2">
                    {amenities.map((am, index) => (
                      <>
                        <div className="border border-solid border-blue_800 rounded-xl p-2 flex justify-between relative">
                          <input
                            type="checkbox"
                            {...register(`${am.name}`)}
                            className="absolute top-0 left-0 w-full h-full opacity-60 appearance-none checked:bg-secondary checked:border-primary focus:ring-secondary rounded-2xl"
                          />
                          <Image
                            src={am.src}
                            alt=""
                            width={16}
                            height={16}
                            className="mt-1 mx-1"
                          />
                          {/* <img src={src} alt="amenity-icon" /> */}
                          <p>{am.name}</p>
                        </div>
                      </>
                    ))}
                    {/* <ButtonAmenities name={"hola"} src={`/icons/dog-paw-icon.webp`} /> */}
                  </div>
                </section>
                <span className="border-b border-solid border-blue_800 my-3 w-full" />
                <section>
                  <div className="w-full flex justify-center">
                    <button
                      type="submit"
                      className="px-8 bg-primary py-2 text-white font-extrabold rounded-lg"
                    >
                      Filtrar
                    </button>
                  </div>
                </section>
              </form>
            </article>
          ) : (
            <></>
          )}
        </div>
      </section>
      <section className="mt-[100px] w-full flex flex-col max-md:flex-wrap-reverse">
        {availability ? (
          <>
            <h1 className="font-acme text-titles text-blue_800 text-center">
              Espacios disponibles
            </h1>
          </>
        ) : (
          <>
            <h1 className="font-acme text-titles text-blue_800 text-center">
              La búsqueda no dio resultados 🙄
            </h1>
          </>
        )}
      </section>
      <section className="flex flex-wrap gap-20 h-[100%] px-10 py-5 justify-center max-md:gap-5 mb-24 lg:mb-8">
        {handleProperties.map((card, index) => (
          <div key={index}>
            <CardsAvailable
              name={card.name}
              location={card.location}
              score={card.score}
              price={card.price}
              comments={card.comments}
              ratings={card.ratings}
              onClicked={() => handleCardClick(card._id)}
              image={card.propertyImages[0]}
              _id={card._id}
            />
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

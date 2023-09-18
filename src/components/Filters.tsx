"use client";
import Image from "next/image";
import Star from "../../public/icons/star-shape-1-svgrepo-com.svg";
import ButtonAmenities from "./ButtonAmenities";
import { amenities } from "@/data/amenities";
import { useState, useEffect } from "react";
export default function Filters() {
  const [range, setRange] = useState(false);
  function loader() {
    setTimeout(() => {
      return setRange(true);
    }, 100);
  }
  loader();
  return (
    <>
      {range === true ? (
        <article className="flex flex-col bg-white text-blue_800 w-80 rounded-lg border border-solid border-b-blue_800">
          <section className="flex justify-between p-2  rounded-t-lg">
            <p className="font-semibold">Filters</p>
            <div className=" flex gap-3 ">
              <button className="hover:font-bold">Reset</button>
            </div>
          </section>
          <section className="">
            <h4 className="text-center font-bold text-blue_800">
              Rango de precios
            </h4>
            <div id="slider"></div>
            <div className="flex justify-around p-1">
              <input
                type="number"
                placeholder="Minimo $0.00"
                className="text-start border-none focus:outline-none w-36"
              />
              <input
                type="number"
                placeholder="Maximo $0.00"
                className="text-start border-none focus:outline-none w-36"
              />
            </div>
          </section>
          <span className="border-b border-solid border-blue_800 w-64 mx-14 my-3 " />
          <section>
            <h4 className="text-center font-bold text-blue_800">
              Por amenidades
            </h4>
            <div className="flex gap-3 flex-wrap p-2">
              {amenities.map((am, index) => (
                <ButtonAmenities name={am.name} src={`${am.src}`} key={index} />
              ))}
              {/* <ButtonAmenities name={"hola"} src={`/icons/dog-paw-icon.webp`} /> */}
            </div>
          </section>
          <span className="border-b border-solid border-blue_800 w-64 mx-14 my-3 " />
          <section>
            <h4 className="text-center font-bold text-blue_800">
              Por calificacion
            </h4>
            <div className="flex justify-center p-2">
              <button>
                <Image src={Star} alt="rating-star" width={30} height={30} />
              </button>
              <button>
                <Image src={Star} alt="rating-star" width={30} height={30} />
              </button>
              <button>
                <Image src={Star} alt="rating-star" width={30} height={30} />
              </button>
              <button>
                <Image src={Star} alt="rating-star" width={30} height={30} />
              </button>
              <button>
                <Image src={Star} alt="rating-star" width={30} height={30} />
              </button>
            </div>
          </section>
        </article>
      ) : (
        <></>
      )}
      ,
    </>
  );
}

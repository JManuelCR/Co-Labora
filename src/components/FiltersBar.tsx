"use client";
import { useState } from "react";
import Image from "next/image";
import Search from "../../public/icons/search.svg";
import FilterIcn from "../../public/icons/adjustments.svg";
import map from "../../public/icons/map.svg";
import Filters from "./Filters";
export default function FiltersBar() {
  const [menu, setMenu] = useState(false);
  const toogleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <article className="flex justify-evenly my-3 relative">
        <section className="flex items-center gap-5">
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
          <button
            type="button"
            className="bg-primary text-white font-poppins px-10 py-3 rounded-xl">
            Buscar
          </button>
        </section>
        <section className="flex gap-10 max-md:hidden">
          <button
            type="button"
            onClick={toogleMenu}
            className="bg-primary text-white font-poppins px-10 py-1 flex items-center rounded-xl gap-3">
            Filter
            <Image src={FilterIcn} alt="filter button" width={24} height={24} />
          </button>
          {menu && (
            <div className="absolute right-32 top-16 max-sm:absolute min-lg:right-48">
              <Filters />
            </div>
          )}
          {/* <button>
            <Image src={map} alt="map icon" width={50} height={50} />
          </button> */}
        </section>
      </article>
      <div className=" h-min border border-solid border-b-secondary md:hidden flex justify-center mx-5"></div>
      <section className="hidden max-sm:flex justify-end p-2 ">
        <button
          type="button"
          onClick={toogleMenu}
          className="bg-blue_800 text-white font-poppins px-3 py-1 flex items-center gap-3 rounded-md">
          Filter
          <Image src={FilterIcn} alt="filter button" width={24} height={24} />
        </button>
        {menu && (
          <div className="absolute top-44 right-5">
            <Filters />
          </div>
        )}
      </section>
    </>
  );
}

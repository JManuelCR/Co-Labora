"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import FiltersBar from "@/components/FiltersBar";
import { dataBD } from "@/data/card-data";
import CardsAvailable from "@/components/CardsAvailable";

import OwnStepper from "@/components/OwnStepper";
export default function Rent() {
  return (
    <>
      <Navbar page="in rent" />
      <section className="flex flex-col max-md:flex-wrap-reverse">
        <FiltersBar />
        <h1 className="font-acme text-titles text-blue_800 text-center">
          Espacios disponibles
        </h1>
      </section>
      <section className="flex flex-wrap gap-20 h-[100%] px-10 py-5 justify-center max-md:gap-5 ">
        {dataBD.map((card, index) => (
          <div key={index}>
            <CardsAvailable
              name={card.name}
              address={card.address}
              rating={card.rating}
              price={card.price}
              opinions={card.opinions}
            />
          </div>
        ))}
      </section>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
      {/* <OwnStepper actualStep={2} />
      <div className="w-full flex justify-center h-auto">
        <div className="flex flex-col md:flex-row gap-[18px] md:gap-[100px]"></div>
      </div> */}
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { Acme, Poppins } from "next/font/google";
import Image from "next/image";
import { dataBD } from "@/data/card-data";
import Cards from "@/components/Cards";
import Advantages from "@/components/Advantages";
import CommentsUsers from "@/components/CommentsUser";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import building from "../../public/icons/building-mobile-nav.svg";
import house from "../../public/icons/home-mobile-nav.svg";
import FooterMobile from "@/components/FooterMobile";
import { propertyService } from "@/services/prperty.service";
import { Link } from "@nextui-org/react";

export default function Home() {
  const [timer, setTimer] = useState(false);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 500);
  });
  useEffect(() => {
    propertyService.getAll().then((response) => {
      setProperties(response.data);
    });
  }, []);

  function handleMoreClick() {
    window.location.href = "/in-rent";
  }
  return (
    <div className="w-full h-full flex justify-center items-center relative text-white">
      {timer ? (
        <div className="2xl:max-w-[1440px] w-full h-full flex flex-col  relative over">
          <Navbar page="home" />

          <main className="flex flex-col items-center justify-between h-auto max-lg:w-full">
            <Hero props={properties} />
            <section className="flex flex-col items-center justify-center px-[40px] lg:px-[80px] xl:px-[156px] pt-[56px] max-sm:pt-0 w-full">
              <div className="w-[520px] border-secondary border-solid border-b-[4px] mb-[60px] max-md:hidden">
                <h2 className=" text-[40px] text-center font-acme text-blue_800">
                  ¡Los mejor calificados!
                </h2>
              </div>
              <div className="flex md:w-[700px] xl:w-full max-md:flex-col md:flex-wrap  md:gap-x-[60px] 2xl:gap-x-[84px] mb-[42px] gap-y-[80px] h-auto max-sm:hidden mt-[80px] md:mt-0">
                {properties.slice(0, 6).map((card: any, index) => (
                  <div key={index} className="flex flex-ro gap-1">
                    <Cards
                      id={card._id}
                      name={card.name}
                      address={`${card.location.street}, ${card.location.number}. ${card.location.city}`}
                      size={card.measurements.area}
                      amenities={card.amenities}
                      rating={card.score}
                      opinions={card.comments.length}
                      price={card.price}
                      description={card.description}
                      image={card.propertyImages[0]}
                    />
                  </div>
                ))}
              </div>
              <div className="flex w-[100%] justify-center max-sm:hidden">
                <button
                  onClick={() => handleMoreClick()}
                  className="w-[280px] px-[18px] py-[4px]   rounded-lg bg-primary font-[600] font-poppins text-[20px] text-white"
                >
                  ¡Explora más lugares!
                </button>
              </div>
            </section>
            <section className="max-md:flex w-full justify-around max-lg:z-50  md:hidden font-semibold p-5 mt-4 bg-back rounded-b-2xl sticky top-0">
              <article className="text-blue_800 flex">
                <a href="/your-spaces">Tus espacios</a>
              </article>
              <article className="text-blue_800 flex">
                <Image
                  src={building}
                  width={24}
                  height={24}
                  alt="Building-logo"
                />
                <a href="/in-rent">En renta</a>
              </article>
            </section>
            <Advantages
              pictureProfile="https://res.cloudinary.com/practicaldev/image/fetch/s--l1HNuEDK--/c_imagga_scale,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/53570/2cb42370-2fcf-4f63-90fb-8b5a41aae9ee.jpg"
              name="Leandro Molina"
              subtitleProfession="Medico especialista en nutricion"
              profession="Doctor"
              opinion="Lorem Ipsum es simplemente el texto de relleno de las
            imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
            relleno estándar de las industrias desde el año 1500, cuando un
            impresor (N. del T. persona que se dedica a la imprenta)
            desconocido usó una galería de textos y los mezcló de tal manera
            que logró hacer un libro de textos especimen."
            />
            <CommentsUsers />
          </main>
          <Footer />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import CalendarMobile from "@/components/Calendar";
import Image from "next/image";
import SliderRent from "@/components/SliderRentDetail";
import { sliderRentImages } from "@/data/sliderRentData";
import CalendarDesktop from "@/components/CalendarDesktop.";
import Link from "next/link";

const stars = [0, 1, 2];
const amenities = {
  climate: true,
  petFriendly: true,
  wifi: true,
  reception: true,
  cleanService: true,
  parking: true,
};

export default function Detail() {
  const [isDesktop, setIsDesktop] = useState(false);
  const images = sliderRentImages;
  ("selectDatesDesktop");
  useEffect(() => {
    const checkWindowWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    return () => {
        window.removeEventListener('resize', checkWindowWidth)
    }
  });

  return (
    <>
      <Navbar page={"in rent"} />
      <main className="lg:flex flex-col items-center">
        <header>
          <div className="flex flex-row w-full justify-center items-center gap-[18px]">
            <div className="relative w-[358px] h-[245px] md:w-[460px] md:h-[280px] lg:w-[520px] lg:h-[380px] xl:w-[600px] xl:h-[420px]">
              <SliderRent image={images} />
            </div>
            <div className="hidden lg:block lg:w-[490px] lg:h-[400px] xl:w-[528px] xl:h-[420px]"></div>
          </div>
        </header>
        <section className="w-full max-md:w-full max-xl:w-[90%] mt-[26px] flex flex-col lg:flex-row gap-[12px]  xl:px-[182px] max-xl:ps-[24px]">
          <h1 className="font-acme text-blue_800 text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[36px]">{`Estudio New Rose`}</h1>
          <div className="flex flex-col lg:flex-row-reverse">
            <h2 className="font-acme text-blue_800 text-[40px] font-normal tracking-[-0.8px] leading-[36px] lg:ps-[67px]">{`$680.00 MXN / día`}</h2>
            <article className="flex gap-[6px] xl:ps-[100px] md:ps-[24px] max-lg:mt-3">
              <div className="flex ">
                {stars.map((act, index) => {
                  return (
                    <Image
                      src={"/icons/Star-Shape.svg"}
                      alt={""}
                      width={24}
                      height={24}
                      key={index}
                    />
                  );
                })}
              </div>
              <div className="flex text-blue_500 font-poppins gap-1 justify-center items-center tracking-[-0.2px] leading-[22px]">
                <span>12</span>
                <p>evaluaciones</p>
              </div>
            </article>
          </div>
        </section>
        <section className="w-full max-md:w-full flex flex-col lg:flex-row max-xl:ps-[24px] max-xl:w-[90%] xl:ps-[182px] mt-3 lg:mt-[20px]">
          <div className="w-[327px] lg:w-[453px] xl:w-[553px] max-lg:w-full max-lg:pe-[24px]">
            <span className="text-[18px] text-blue_800 font-normal font-poppins leading-[26px]">
              {`Este espacio es para que el que da el espacio a rentar pueda poner una descripción de unos 400 caracteres max, Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,`}
            </span>
          </div>
          <div className="w-[328px] h-[230px] mt-[24px] mb-[27px] lg:hidden"></div>
          <div className="ps-[20px] lg:ps-[130px] xl:ps-[90px]">
            <h3 className="text-blue_700 text text-[24px] font-poppins font-[500] mb-3 tracking-[-0.48px] leading-[36px]">
              Lo que ofrecen
            </h3>
            <ul className="max-w-[450px] flex flex-col lg:flex-row lg:gap-[32px] max-lg:gap-3">
              <div className="flex flex-col gap-3">
                {amenities.climate ? (
                  <li className="flex gap-[5px] items-center">
                    <Image
                      src={"/icons/Ice.svg"}
                      alt={"Amenity Icon Climate"}
                      width={24}
                      height={24}
                    />
                    <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                      Aire acondicionado
                    </p>
                  </li>
                ) : (
                  <></>
                )}
                {amenities.petFriendly ? (
                  <li className="flex gap-[5px] items-center">
                    <Image
                      src={"/icons/paw-outline.svg"}
                      alt={"Amenity Pet Friendly Icon"}
                      width={24}
                      height={24}
                    />
                    <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                      Pet friendly
                    </p>
                  </li>
                ) : (
                  <></>
                )}
                {amenities.wifi ? (
                  <li className="flex gap-[5px] items-center">
                    <Image
                      src={"/icons/wifi.svg"}
                      alt={"Amenity Wifi-zone Icon"}
                      width={24}
                      height={24}
                    />
                    <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                      Wi-fi
                    </p>
                  </li>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex flex-col gap-3">
                {amenities.reception ? (
                  <li className="flex gap-[5px] items-center">
                    <Image
                      src={"/icons/Person.svg"}
                      alt={"Amenity Reception For Clients Icon"}
                      width={24}
                      height={24}
                    />
                    <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                      Servicio de Recepción
                    </p>
                  </li>
                ) : (
                  <></>
                )}
                {amenities.cleanService ? (
                  <li className="flex gap-[5px] items-center">
                    <Image
                      src={"/icons/Award.svg"}
                      alt={"Amenity Clean Service Icon"}
                      width={24}
                      height={24}
                    />
                    <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                      Limpieza incluida
                    </p>
                  </li>
                ) : (
                  <></>
                )}
                {amenities.parking ? (
                  <li className="flex gap-[5px] items-center">
                    <Image
                      src={"/icons/car-outline.svg"}
                      alt={"Amenity parking place Icon"}
                      width={24}
                      height={24}
                    />
                    <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                      Estacionamiento
                    </p>
                  </li>
                ) : (
                  <></>
                )}
              </div>
            </ul>
          </div>
        </section>
        <section className=" w-full flex flex-col lg:flex-row-reverse gap-[10%] xl:gap-[61px] max-xl:w-[90%] xl:ps-[182px] lg:justify-end max-xl:ps-[24px] mt-[30px] lg:mb-[100px]">
          <div className="max-lg:ps-[20px] ">
            <h3 className="text-blue_700 text text-[24px] font-poppins font-[500] mb-3 tracking-[-0.48px] leading-[36px]">
              Detalles
            </h3>
            <ul className="flex flex-col lg:flex-row gap-[14px] lg:gap-[26px] mt-[14px] lg:mt-[10px]">
              <li className="flex gap-[4px]">
                <Image
                  src={"/icons/location.svg"}
                  alt="Pin de Localización icon"
                  width={24}
                  height={24}
                />
                <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                  {`Av. Lucas Alamán 160`}
                </p>
              </li>
              <li className="flex gap-[4px]">
                <Image src={"/icons/Ruler.svg"} alt="" width={24} height={24} />
                <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                  {`2,5 x 2 m2`}
                </p>
              </li>
            </ul>
            <h3 className="text-blue_700 text text-[24px] font-poppins font-[500] mb-3 tracking-[-0.48px] leading-[36px] mt-[30px] lg:mt-[14px]">
              Horario
            </h3>
            <div className="flex gap-2">
              <Image
                src={"/icons/time-outline.svg"}
                alt="Reloj icon"
                width={24}
                height={24}
              />
              <span className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                {`10:00 am - 8:00 pm`}
              </span>
            </div>
            <div id="selectDatesDesktop" className="mt-[30px] hidden lg:flex">
              <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                  Llegada
                </p>
                <CalendarDesktop show={isDesktop} />
              </div>
              <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                  Salida
                </p>
              </div>
            </div>
            <section className="hidden w-full justify-center items-center lg:flex flex-col gap-[10px] mb-[20px] mt-[24px]">
              <button
                className={`bg-primary rounded-lg px-[18px] py-1 w-[400px] h-[35px] buttonMobileShadow`}
              >
                <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
                  Continuar con la reserva
                </span>
              </button>
              <div className="flex gap-[2px]">
                <Image
                  src={"/icons/Flag.svg"}
                  alt="Flag levantar un reporte icon"
                  width={20}
                  height={20}
                />
                <p className="font-poppins text-[10px] font-normal leading-[27px] tracking-[-0.36px] text-blue_500">
                  Reporta esta publicación
                </p>
              </div>
            </section>
            <div className="lg:hidden">
              <div className="mt-[30px] flex flex-col gap-3">
                <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                  <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                    Llegada
                  </p>
                  <span className="text-[18px] text-blue_700 font-poppins font-normal leading-[27px] tracking-[-0.36px]">
                    <CalendarMobile />
                  </span>
                </div>
              </div>
              <div className="mt-[30px] flex flex-col gap-3">
                <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                  <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                    Salida
                  </p>
                  <span className="text-[18px] text-blue_700 font-poppins font-normal leading-[27px] tracking-[-0.36px]">
                    <CalendarMobile />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-[470px] h-[260px] xl:w-[580px] xl:h-[295px]">
            calendarios desktop
          </div>
        </section>
        <section className="w-full justify-center items-center flex flex-col gap-[10px] lg:hidden mb-[20px] mt-[60px]">
          <button
            className={`bg-primary rounded-lg px-[18px] py-1 w-[224px] h-[35px] buttonMobileShadow`}
          >
            <Link href={"/payment"}><span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
              Continuar con la reserva
            </span></Link>
          </button>
          <div className="flex gap-[2px]">
            <Image
              src={"/icons/Flag.svg"}
              alt="Flag levantar un reporte icon"
              width={20}
              height={20}
            />
            <Link href={"/contacts"}><p className="font-poppins text-[10px] font-normal leading-[27px] tracking-[-0.36px] text-blue_500">
              Reporta esta publicación
            </p></Link>
          </div>
        </section>
      </main>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}

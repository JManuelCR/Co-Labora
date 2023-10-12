"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { SliderHero } from "@/types/sliderHero";
import wifi from "../../public/icons/icon-wifi-white.svg";
import parking from "../../public/icons/car-outline-slider-hero.svg";
import airConditioner from "../../public/icons/Ice-slider-hero.svg";
import reception from "../../public/icons/person-slider-hero.svg";
import cleanService from "../../public/icons/award-slider-hero.svg";
import pets from "../../public/icons/icon-paw-outline-white.svg";
import locationIcon from "../../public/icons/location-slider-hero.svg";
import Image from "next/image";
import arrowRigth from "../../public/icons/icon-arrow-right-white.svg";
import arrowLeft from "../../public/icons/icon-arrow-left-white.svg";

interface arrayProperty {
  properties: SliderHero[];
}

export default function SliderHero(props: arrayProperty) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="md:ps-[48px] flex gap-[26px] w-[100%]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={100}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper absolute h-[310px] w-[200%] sliderHero"
      >
        {props.properties.map((property, index) => {
          const {
            name,
            description,
            location,
            amenities,
            images,
            measurements,
          } = property;
          return (
            <SwiperSlide className="mt-8 md:mt-6 w-full h-[320px]" key={index}>
              <div className="flex absolute top-0 w-[100%]">
                <div className="flex gap-4 md:gap-[28px] w-[100%]">
                  <img
                    src={images[0]}
                    alt="Property detail image"
                    className="propertyAvatar"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="font-poppins text-4 md:text-[24px] font-[800] text-white">
                      {name}
                    </h2>
                    <h3 className="max-w-[397px] block font-poppins text-[14px] md:text-[18px] font-[500   ]">
                      {description.length > 100
                        ? `${description.slice(0, 100)}...`
                        : description}
                      .
                    </h3>
                    <span className="flex">
                      <Image
                        src={locationIcon}
                        alt="Location pin icon"
                        width={14}
                        height={14}
                      />

                      <span className="text-[12px]">
                        &nbsp;
                        {`${location.neighbor}, ${location.city}, ${measurements.area} m`}
                        <sup className="text-3">2</sup>
                      </span>
                    </span>
                    <div className="flex gap-4 md:gap-8">
                      {amenities.wifi ? (
                        <Image
                          src={wifi}
                          alt="Wifi service icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                      {amenities.parking ? (
                        <Image
                          src={parking}
                          alt="Parking place icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                      {amenities.airConditioner ? (
                        <Image
                          src={airConditioner}
                          alt="Air conditioner icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                      {amenities.reception ? (
                        <Image
                          src={reception}
                          alt="Reception place icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                      {amenities.petFriendly ? (
                        <Image
                          src={pets}
                          alt="Pet friendly place icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                      {amenities.cleanService ? (
                        <Image
                          src={cleanService}
                          alt="Clean service icon"
                          width={20}
                          height={20}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex gap-4 md:gap-[24px] mt-[20px]">
                      <button className="w-[121px] md:w-[150px] h-[35px] px-[18px] py-[4px] border-[1px] border-primary rounded-lg bg-white font-[600] font-poppins text-[14px] text-primary">
                        Ver más
                      </button>
                      <button className="w-[121px] md:w-[150px] h-[35px] px-[18px] py-[4px]   rounded-lg bg-primary font-[600] font-poppins text-[14px] text-white">
                        Rentar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative hidden md:block w-[100%] h-[100%] mt-8 md:mt-6">
        <div className="absolute end-0 top-0 flex gap-[40px] pe-[60px]">
          <button className="prevEl" ref={navigationPrevRef}>
            {" "}
            <Image src={arrowLeft} alt={"Slider arrow left icon"} />
          </button>
          <button className="nextEl" ref={navigationNextRef}>
            {" "}
            <Image src={arrowRigth} alt={"Slider arrow right icon"} />
          </button>
        </div>
      </div>
    </div>
  );
}

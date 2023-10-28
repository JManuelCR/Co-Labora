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
import backArrow from "../../public/icons/Boton-back.svg";
import nextArrow from "../../public/icons/Boton-back-1.svg";

import Image from "next/image";

import { UserComments } from "@/types/userComment";
import { sliderUserComments } from "@/data/users-comments";

interface arrayProperty {
  users: {
    props: SliderHero[];
  };
}

export default function SliderUserLanding() {
  const users: UserComments[] = sliderUserComments;
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const handleCardClick = (_id: any) => {
    window.location.href = `/in-rent/${_id}`;
  };

  return (
    <div className="relative ps-0 xl:ps-[65px] flex flex-col gap-[26px] w-[370px] lg:w-[450px]">
      <div className="absolute top-0 md:top-[-70px] md:ps-4 left-0 md:left-[-200px] lg:left-[-280px] hidden md:block w-[100%] h-[50px] mt-0 md:mt-0">
        <div className="absolute end-0 top-0 flex gap-[40px] pe-[60px]">
          <button className="prevEl" ref={navigationPrevRef}>
            {" "}
            <Image src={backArrow} alt={"Slider arrow left icon"} width={40}
              height={48} />
          </button>
          <button className="nextEl" ref={navigationNextRef}>
            {" "}
            <Image src={nextArrow} alt={"Slider arrow right icon"} width={40}
              height={48}/>
          </button>
        </div>
      </div>
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
        className="mySwiperLanding absolute h-[310px] w-[370px] md:w-[450px] sliderComents"
      >
        {users.slice(0, 6).map((user, index) => {
          const {
            name,
            occupation,
            occupationDescription,
            profileImage,
            comment,
            rating,
          } = user;
          return (
            <SwiperSlide className="mt-8 md:mt-6 w-[374px] md:w-[370px] h-[320px]" key={index}>
              <div className="flex flex-col gap-5 md:basis-1/2 ps-6 pe-4 md:pe-0 md:ps-0 w-[98%] mb-[60px]">
                <div>
                  <p className="text-lg font-[poppins] text-white">{comment}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div>
                    <img
                      src={profileImage}
                      alt={name}
                      className="h-16 w-16 rounded-[87px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-5">
                      <p className="text-sm font-[poppins] font-semibold text-white">
                        {name}
                      </p>
                      <p className="text-[10px] font-[poppins] font-light text-white">
                        {occupation}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-[poppins] font-semibold text-white">
                        {occupationDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

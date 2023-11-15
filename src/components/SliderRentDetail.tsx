'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderRentDetails } from "@/types/rentDetails.types";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";



import { Pagination } from "swiper/modules";

export default function SliderRent(props: SliderRentDetails) {
    const imagesArray = props
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {imagesArray.image.map((act: string, index: number) => {
          return (
            <SwiperSlide key={index}>
                <div className="relative w-[358px] h-[245px] md:w-[460px] md:h-[280px] lg:w-[520px] lg:h-[380px] xl:w-[600px] xl:h-[420px]">
                  <Image
                    src={`${act}`}
                    alt="Property image"
                    className=""
                    objectFit="cover"
                    fill={true}
                    layout="fill"
                  />
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

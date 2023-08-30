'use client'
import { dataBD } from "@/data/card-data";
import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from './Cards';
import { dataCommentsUsers } from "@/data/card-dataCommentsUsers";
import CardComments from "./CardComments";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SliderLandinDesktop() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper max-w-[90%]"
      >
           {dataCommentsUsers.map((card, index) => (
            <SwiperSlide key={index} className="swiper-component mb-6">
         <div key={index} className="flex flex-row px-0 pb-5 w-[100%  ]">
              <CardComments
                id={card.id}
                pictureProfile={card.pictureProfile}
                name={card.name}
                description={card.description}
                profession={card.profession}
                rating={card.rating}
              />
            </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}


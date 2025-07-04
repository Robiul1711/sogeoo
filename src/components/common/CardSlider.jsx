import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import ourclient from '../../assets/images/ourclient.png';

export default function CardSlider() {
  return (
    <div className="section-padding-x section-padding-y max-w-2xl  mx-auto">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={ourclient}
              alt={`Our Client ${index + 1}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

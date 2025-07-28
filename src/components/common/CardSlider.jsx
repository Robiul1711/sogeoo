import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ourclient from '../../assets/images/ourclient.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function CardSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="section-padding-x py-10 md:py-20 max-w-2xl mx-auto">
      {/* Swiper Slider */}
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={ourclient}
              alt={`Client ${index + 1}`}
              className="w-full h-[350px] sm:h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrow Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          ref={prevRef}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

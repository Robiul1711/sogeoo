import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ourclient from "../../assets/images/ourclient.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export default function CardSlider() {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["about-slider"],
    queryFn: async () => {
      const response = await axiosPublic.get("/about-slider");
      return response?.data;
    },
  });
  console.log(data?.data?.map((item) => item.image));
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
  {data?.data?.map((item, index) => (
    <SwiperSlide key={index}>
      <img
        src={item.images?.[0]?.image}
        alt={`Image ${index + 1}`}
        className="w-full h-[350px] object-cover rounded-xl"
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

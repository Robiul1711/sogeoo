import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ourclient from "../../assets/images/ourclient.png";
import qute from "../../assets/images/qute.png";
import Title from "../common/Title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    message:
      "Realtor Finder helped me find an agent to sell an out-of-state inherited property, they even negotiated the commission for me!",
    name: "Ashiq",
  },
  {
    id: 2,
    message:
      "Excellent communication and support. They made the home buying process seamless.",
    name: "Robiul",
  },
  {
    id: 3,
    message:
      "Very professional team. Found us the perfect home within a week!",
    name: "Sarah",
  },
];

const WhatOurClient = () => {
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
    <div className="section-padding-x py-12">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <img src={qute} alt="quote" className="w-14 md:w-16 lg:w-20 mb-4" />
          <p className="text-base md:text-lg text-Secondary py-2 md:py-4">
            Client feedback
          </p>

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            loop
          >
            {feedbacks.map((item) => (
              <SwiperSlide key={item.id}>
                <Title
                  level="title48"
                  className="text-Primary "
                >
                  What Our Client say about the agency
                </Title>
                <Title
                  level="title24"
                  className="py-6 md:py-8  leading-relaxed"
                >
                  {item.message}
                </Title>
                <Title level="title18" className="text-Primary">
                  {item.name}
                </Title>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button
              ref={prevRef}
              className="p-2 rounded-full bg-[#f2f2f2] hover:bg-[#ddd]"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="p-2 rounded-full bg-[#f2f2f2] hover:bg-[#ddd]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2">
          <img
            src={ourclient}
            alt="client"
            className="w-full h-auto object-cover rounded-md lg:h-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatOurClient;

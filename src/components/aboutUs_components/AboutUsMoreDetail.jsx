import React, { useState } from "react";
import whychoose from "@/assets/images/whychoose.png";
import { GoArrowUpRight } from "react-icons/go";
import {
  Comfortableliving,
  Longlifespan,
  Lowerenergybills,
  Reduced,
} from "../common/Icons";

const data = [
  {
    id: 1,
    title: "Sustainable Climate Solutions Backed by Experience",
    description:
      "At SóGeo, we specialise in harnessing the power of the earth to provide clean, renewable energy for homes and businesses. We do this by providing our customers with the world’s most innovative, reliable and high-quality EHPA tested products, that together with our decades of experience and European training, provide you with the best climate solution.Victorian Plumbing License - 105981Australian Refrigeration Council - AU065279",
    image: whychoose,
  },
  {
    id: 2,
    title: "In Australia, fossil fuels such as coal and natural gas still dominate the energy mix, accounting for around 80% of the country’s usage. ",
    description:
      "However, this reliance on fossil fuels comes at a cost, with Australia being one of the highest per capita greenhouse gas emitters in the world. By transitioning to renewable energy sources such as geothermal or air sourced heat pumps we can help reduce our carbon footprint and play a role in mitigating the effects of climate change.",
    image: whychoose,
  },
  {
    id: 3,
    title: "Behind the name",
    description:
      "SóGeo is a Melbourne-based family business with 20+ years of experience in hydronic heating and geothermal systems. Our name – derived from the Irish ‘só’ (luxury) – reflects our commitment to premium service and eliminating fossil fuels.The secondary meaning is 소거 (SóGeo) meaning “elimination” in Korean, reflecting our goal of eliminating fossil fuels and providing a clean energy solution for homes and businesses ",
    image: whychoose,
  },
  {
    id: 4,
    title: "Radiant Floor Heating",
    description:
      "Radiant floor heating warms your home from the ground up by running warm water through pipes under your flooring — a quiet, invisible, and energy-efficient method...",
    image: whychoose,
  },
];

const AboutUsMoreDetail = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll ? data : data.slice(0, 3);

  return (
    <section className="section-padding-y section-padding-x relative">
      {/* Features */}
      <div className="flex flex-col gap-20">
        {visibleFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col-reverse lg:flex-row items-stretch gap-10 relative ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-xl object-cover shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch border-l border-dashed border-gray-300" />

            {/* Text */}
            <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
              {/* <div className="lg:flex hidden justify-end text-[6rem] lg:text-[8rem] font-bold text-gray-400 top-0 font-primary number-outline">
                0{index + 1}
              </div> */}
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              {
                index === 0 && (
                    
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 flex-col">
                  <Reduced />
                  <p className="max-w-[180px] text-lg text-center text-[#6E6E6E]">
                    Reduced environmental impact
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <Lowerenergybills />
                  <p className="max-w-[180px] text-lg text-center text-[#6E6E6E]">
                    Lower energy bills
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <Longlifespan />
                  <p className="max-w-[180px] text-lg text-center text-[#6E6E6E]">
                    Long lifespan
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <Comfortableliving />
                  <p className="max-w-[180px] text-lg text-center text-[#6E6E6E]">
                    Comfortable living
                  </p>
                </div>
              </div>
                )
              }
              {/* <button className="mt-10 text-Secondary flex items-center gap-2 cursor-pointer">
                Read More <GoArrowUpRight />
              </button> */}
            </div>
          </div>
        ))}

        {/* See More Button */}
        {!showAll && data.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 rounded-full py-3 border border-Secondary bg-[#3B4754] text-white font-semibold  hover:bg-Secondary hover:text-white transition-all duration-200"
            >
              See All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUsMoreDetail;

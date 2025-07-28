import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const HowGeoTharmalWork = () => {
  const axiosPublic = useAxiosPublic();
  const { data: groundHero } = useQuery({
    queryKey: ["ground-hero"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/ground/hero");
      return response?.data;
    },
  });
  console.log(groundHero?.data);
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll ? groundHero?.data : groundHero?.data.slice(0, 3);

  return (
    <section className="section-padding-y section-padding-x relative">
      {/* Features */}
      <div className="flex flex-col gap-10 md:gap-20">
        {groundHero?.data?.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col-reverse lg:flex-row items-stretch gap-5 md:gap-10 relative ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-xl object-cover shadow-lg w-full max-w-[600px] h-[250px] md:h-[300px] lg:h-[450px]"
              />
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch border-l border-dashed border-gray-300" />

            {/* Text */}
            <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
              <div className="lg:flex hidden justify-end text-[6rem] lg:text-[8rem] font-bold text-gray-400 top-0 font-primary number-outline">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              ></p>

              <button className="lg:mt-10 text-Secondary flex items-center gap-2 cursor-pointer">
                Read More <GoArrowUpRight />
              </button>
            </div>
          </div>
        ))}

        {/* See More Button */}
       {!showAll && groundHero?.data?.length > 3 && (
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
export default HowGeoTharmalWork;

import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  Comfortableliving,
  Longlifespan,
  Lowerenergybills,
  Reduced,
} from "../common/Icons";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AboutUsMoreDetail = () => {
  const axiosPublic = useAxiosPublic();
  const { data: aboutHero } = useQuery({
    queryKey: ["about-hero"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/about/hero");
      return response?.data;
    },
  });

  
  const [showAll, setShowAll] = useState(false);

  // Handle slicing only if data is loaded
  const visibleFeatures = showAll
    ? aboutHero?.data || []
    : aboutHero?.data?.slice(0, 3) || [];

  return (
    <section className="section-padding-x relative section-padding-y">
      <div className="flex flex-col">
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
                className="rounded-xl object-cover shadow-lg w-full h-auto max-h-[400px] lg:max-h-[500px]"
              />
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px self-stretch border-l border-dashed border-gray-300" />

            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              ></p>

              {/* Only for the first item */}
              {index === 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="flex items-center gap-2 flex-col text-center">
                    <Reduced />
                    <p className="text-lg text-[#6E6E6E]">
                      Reduced environmental impact
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-col text-center">
                    <Lowerenergybills />
                    <p className="text-lg text-[#6E6E6E]">Lower energy bills</p>
                  </div>
                  <div className="flex items-center gap-2 flex-col text-center">
                    <Longlifespan />
                    <p className="text-lg text-[#6E6E6E]">Long lifespan</p>
                  </div>
                  <div className="flex items-center gap-2 flex-col text-center">
                    <Comfortableliving />
                    <p className="text-lg text-[#6E6E6E]">Comfortable living</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* See All Button */}
        {!showAll && aboutHero?.data?.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 rounded-full py-2 md:py-3 border border-Secondary bg-[#3B4754] text-white font-semibold hover:bg-Secondary hover:text-white transition-all duration-200"
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

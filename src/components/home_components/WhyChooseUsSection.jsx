import React, { useState } from "react";
import whychoose from "@/assets/images/whychoose.png";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    id: 1,
    title: "Ground Source Heat Pumps ",
    description:
      "Ground Source Heat Pumps (GSHPs) — also called Geothermal Heat Pumps — are energy-efficient heating and cooling systems that use the stable temperature of the ground to regulate the climate inside a building. GSHPs circulate a fluid through underground pipes...",
    image: whychoose,
  },
  {
    id: 2,
    title: "Air Source Heat Pumps ",
    description:
      "Air Source Heat Pumps absorb heat from the outside air and use it to warm your home. They work even in cold temperatures and are a great alternative to traditional boilers...",
    image: whychoose,
  },
  {
    id: 3,
    title: "Hydronic Heating & Cooling",
    description:
      "Hydronic systems use water to transfer heat in heating and cooling systems. They're energy-efficient, quiet, and ideal for underfloor heating setups...",
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

const WhyChooseUsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll ? data : data.slice(0, 3);

  return (
    <section className="section-padding-y section-padding-x relative">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-2xl font-semibold text-Secondary mb-2">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-Primary">
          Why Work with SóGeo Public Adjusters?
        </h2>
      </div>

      <p className="text-lg text-gray-600 mt-4 text-center max-w-5xl mx-auto mb-16">
        When you work with SóGeo Public Adjusters, you gain a trusted partner
        who truly looks out for your interests...
      </p>

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
              <div className="lg:flex hidden justify-end text-[6rem] lg:text-[8rem] font-bold text-gray-400 top-0 font-primary number-outline">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <button className="mt-10 text-Secondary flex items-center gap-2 cursor-pointer">
                Read More <GoArrowUpRight />
              </button>
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

export default WhyChooseUsSection;

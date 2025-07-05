import React, { useState } from "react";
import geotharmal2 from "@/assets/images/geotharmal2.png";
import geotharmal3 from "@/assets/images/geothrmal3.png";
import geotharmal4 from "@/assets/images/geothrmal4.png";
import { GoArrowUpRight } from "react-icons/go";

const data = [
  {
    id: 1,
    title: "How Geothermal Heating & Cooling Works ",
    description:
      "Geothermal heating and cooling, also known as  ground source heat pumps, harnesses the consistent temperature found beneath the earth’s surface to deliver ultra-efficient, low-cost silent comfort year-round. Unlike traditional heating systems that burn fossil fuels or rely on fluctuating outdoor air temperatures, geothermal systems use the stable ground temperature (typically 16–18°C in most parts of Australia) to transfer heat into or out of your home, depending on the season.To understand how geothermal heating and cooling works, it’s important to first understand the function of a geothermal heat pump. At its core, a geothermal heat pump transfers heat between your home and the ground through a fluid-filled loop system. This process allows the system to draw heat from the ground in winter and send heat back into the ground in summer.While conventional air conditioners also move heat, a geothermal heat pump does so using the stable temperatures found underground, making it significantly more efficient year-round. This consistency in heat source or sink is what gives geothermal systems their performance advantage.This is a simplified diagram showing the basic function of a geothermal heat pump, the below video shows the installation from start to finish.",
    image: geotharmal2,
  },
  {
    id: 2,
    title: "How Geothermal Heats and Cools Your Home",
    description:
      "The seasonal versatility of geothermal systems is one of their greatest strengths. By taking advantage of the earth’s stable underground temperature, these systems can efficiently heat your home in winter and cool it in summer—without relying on gas or conventional air conditioners.This diagram illustrates exactly how geothermal HVAC adapts to both hot and cold seasons. It highlights the complete cycle, from how heat is drawn from the earth during colder months to how it’s returned underground during the warmer ones. This simple yet powerful process is what enables geothermal systems to deliver unmatched comfort and efficiency year-round.The unique strength of a geothermal system is its ability to adapt seasonally providing efficient heating in winter and cooling in summer. This is achieved by transferring heat between the ground and your home, taking advantage of the earth’s average ground temperature (around 16°C in Australia)The reliability and longevity of geothermal systems are also noteworthy. With minimal moving parts and underground installation, these systems require minimal maintenance and can last for decades, providing a hassle-free and cost-effective solution for temperature control",
    image: geotharmal3,
  },
  {
    id: 3,
    title: "Choosing the Right Geothermal Loop: Horizontal, Vertical, Pond or Sea",
    description:
      "Horizontal loop systems are installed in shallow trenches approximately 1.5 to 2 meters deep. This method is ideal for properties with open land where excavation is possible. It is one of the most cost-effective options due to simpler installation requirements. Vertical loop systems are installed in deep boreholes, typically 60–120 meters below the surface. This option is best for smaller properties or areas where surface space is limited or cooling loads are high. It is also well-suited to sites with rocky or dense soils where horizontal installation would be difficult. Pond and sea loop systems involve submerging the closed-loop piping in a body of water such as a pond, lake, or the sea. These systems benefit from stable water temperatures and can be highly efficient and cost-effective where a suitable water source is available.These system types all offer the same year-round energy efficiency and reliability, but the best option depends on your property’s landscape, geology, and energy needs. The diagram below illustrates how each system is laid out.At SóGeo, we assess your site conditions and project goals to determine the most suitable and efficient loop design. Our in-house drilling team ensures precision and long-term performance—no matter which method is used. your site conditions and project goals to determine the most suitable and efficient loop design. Our in-house drilling team ensures precision and long-term performance—no matter which method is used..",
    image: geotharmal4,
  },
  {
    id: 4,
    title: "Radiant Floor Heating",
    description:
      "Radiant floor heating warms your home from the ground up by running warm water through pipes under your flooring — a quiet, invisible, and energy-efficient method...",
    image: geotharmal2,
  },
];

const HowGeoTharmalWork = () => {
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
export default HowGeoTharmalWork

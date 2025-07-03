import React from "react";
import image1 from "@/assets/images/b5.png";
import image2 from "@/assets/images/b2.png";
import image3 from "@/assets/images/b3.png";
import image4 from "@/assets/images/b4.png";
import image5 from "@/assets/images/b5.png";
import image6 from "@/assets/images/b2.png";
import Marquee from "react-fast-marquee";
import Title from "../common/Title";

const BrandSection = () => {
  const brands = [
    { id: 1, brand: image1 },
    { id: 2, brand: image2 },
    { id: 3, brand: image3 },
    { id: 4, brand: image4 },
    { id: 5, brand: image5 },
    { id: 6, brand: image6 },
    { id: 7, brand: image1 },
    { id: 8, brand: image2 },
    { id: 9, brand: image3 },
    { id: 10, brand: image4 },
    { id: 11, brand: image5 },
    { id: 12, brand: image6 },
  ];

  return (
    <div className="relative w-full overflow-hidden ">
      <Title level="title48" className="text-center !font-bold text-Primary">
        Our Partners
      </Title>

      {/* Left gradient shadow */}
      <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* Right gradient shadow */}
      <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {brands.map(({ id, brand }) => (
          <div key={id} className="mx-5 md:mx-10">
            <img
              src={brand}
              alt={`Brand ${id}`}
              className="sm:w-[200px] h-[40px] md:h-[180px] object-contain block rounded-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandSection;

import React from "react";

import Title from "../common/Title";
import CommonButton from "../common/CommonButton";
import CardSlider from "../common/CardSlider";
const PoweringAGreener = () => {
  return (
    <div className="section-padding-x pt-10 md:pt-20">
      <div className="w-full flex flex-col md:flex-row justify-between items-center  md:gap-20">
        <div className="md:w-1/2">
          <Title level="title48" className="text-Primary !font-normal">
            Powering a Greener Tomorrow with Renewable Energy
          </Title>
          <Title level="title24" className="py-6 !fon t-normal">
            We believe that renewable energy is the key to a sustainable future,
            and we are committed to doing our part to protect the environment
            and reduce dependence on fossil fuels. By choosing SóGeo, you can
            reduce your carbon footprint and help to create a cleaner,
            greener world.
          </Title>
          <CommonButton className="bg-Secondary text-[#fff]">
            Learn More
          </CommonButton>
        </div>
        <div className="md:w-1/2 ">
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default PoweringAGreener;

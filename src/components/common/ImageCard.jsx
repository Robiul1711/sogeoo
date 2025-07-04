import React from "react";
import imagecard from "../../assets/images/imagecard.png";
import Title from "./Title";
import CommonButton from "./CommonButton";
const ImageCard = ({ title, description, link, linkText }) => {
  return (
    <div className="section-padding-x section-padding-y flex items-center justify-between w-full">
      <div className="w-[420px] h-[800px] rounded-4xl bg-Secondary relative">
        <div className="absolute w-[700px] h-full rounded-2xl p-2.5  ">
          <img src={imagecard} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="w-1/2">
        <Title level="title32" className="text-Primary ">
          If you’re interested in exploring geothermal heating and cooling
          solutions for your home or business in Melbourne, we encourage you to
          take action today. Contact the experts at sogeo.com.au for a free
          consultation or quote. Our knowledgeable team will assess your
          specific needs and provide tailored recommendations to help you make
          an informed decision.
        </Title>
        <Title level="title20" className="mt-4">
          To further your understanding of geothermal technology, we invite you
          to download our comprehensive guide, “Harnessing the Earth’s Energy: A
          Homeowner’s Guide to Geothermal Heating and Cooling.” This valuable
          resource covers everything from the basics of geothermal systems to
          the installation process, maintenance requirements, and potential
          cost savings. Additionally, you can stay up-to-date with the latest
          developments in geothermal technology and exclusive offers by signing
          up for our newsletter. Simply provide your email address, and you’ll
          receive regular updates straight to your inbox. Don’t miss out on the
          opportunity to embrace a more efficient, sustainable, and
          cost-effective heating and cooling solution for your
          Melbourne property.  If you’re interested in exploring geothermal
          heating and cooling solutions for your home or business in Melbourne,
          we encourage you to take action today.
        </Title>
        <CommonButton className="mt-4 bg-Secondary">
          Request a quote
        </CommonButton>
      </div>
    </div>
  );
};

export default ImageCard;

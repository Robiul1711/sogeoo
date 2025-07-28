import React from "react";
import imagecard from "../../assets/images/imagecard.png";
import Title from "./Title";
import CommonButton from "./CommonButton";

const ImageCard = () => {
  return (
    <div className="section-padding-x  flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]  rounded-2xl">
        
          <img 
            src={imagecard}
            alt="Geothermal System"
            className="w-full h-full object-contain rounded-2xl"
          />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <Title level="title32" className="text-Primary">
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

        <CommonButton className="mt-6 bg-Secondary text-white">
          Request a quote
        </CommonButton>
      </div>
    </div>
  );
};

export default ImageCard;

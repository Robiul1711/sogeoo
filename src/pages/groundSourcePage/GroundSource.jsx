import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import geotharmal from "@/assets/images/banner3.png";
import BrandSection from "@/components/home_components/BrandSection";
import HowGeoTharmalWork from "@/components/geothermalWorks_components/HowGeoTharmalWork";
import { LogoIcon } from "@/components/common/Icons";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const GroundSource = () => {
  const axiosPublic = useAxiosPublic();
  const { data: banner } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/ground/banner");
      return response?.data;
    },
  });

  return (
    <div>
      <CommonBanner
        image={banner?.data?.image}
        title={banner?.data?.title}
        description={banner?.data?.sub_title}
        link={"/contact"}
        linkText={"Contact Us"}
      />
      <HowGeoTharmalWork />
      <div className="mb-20">
        <CommonBanner
          logo={<LogoIcon />}
          image={geotharmal}
          title={"The SóGeo difference"}
          description={
            "Our team of Geothermal experts are European trained and utilise the most sophisticated technologies for their installations. If you're looking for an energy-efficient, eco-friendly, and comfortable heating and cooling solution, consider geothermal. It's a great choice for your home or business, and we're here to help you make the transition to this innovative and effective system. Contact our team today for more information"
          }
          link={"#"}
          linkText={"Contact Us"}
        />
      </div>
      <BrandSection />
    </div>
  );
};

export default GroundSource;

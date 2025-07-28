import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import geotharmal from "@/assets/images/geothrmal.png";
import { LogoIcon } from "@/components/common/Icons";
import BrandSection from "@/components/home_components/BrandSection";
import banner3 from "@/assets/images/banner3.png";
import VideoSection from "@/components/geothermalWorks_components/VideoSection";
import FAQ from "@/components/air_source_components/FAQ";
import NextGeneration from "@/components/air_source_components/NextGeneration";
import AboutUsMoreDetail from "@/components/aboutUs_components/AboutUsMoreDetail";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const AirSourcePage = () => {
    const axiosPublic = useAxiosPublic();
  const { data: banner } = useQuery({
    queryKey: ["airsource-banner"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/airsource/banner");
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

      <NextGeneration />
      <AboutUsMoreDetail />
      <div className="section-padding-x mt-10">
        <VideoSection />
      </div>
      <FAQ />
      <div className="mb-20">
        <CommonBanner
          logo={<LogoIcon />}
          image={banner3}
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

export default AirSourcePage;

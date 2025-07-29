import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import BrandSection from "@/components/home_components/BrandSection";
import banner3 from "@/assets/images/banner3.png";
import ExploringInnovationsCard from "@/components/blog_components/ExploringInnovationsCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const HydronicPage = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["hydronics"],
    queryFn: async () => {
      const response = await axiosPublic.get("/hydronics");
      return response?.data;
    },
  });
  const hydronics = data?.data;

  const { data: banner } = useQuery({
    queryKey: ["hydronics-banner"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/hydronic/banner");
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 section-padding-x section-padding-y">
        <ExploringInnovationsCard data={hydronics} />
      </div>
      <div className="mb-20">
        <CommonBanner
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

export default HydronicPage;

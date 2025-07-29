import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import StepByStep from "@/components/blogDetails_components/Hydronic";
import ImageCard from "@/components/common/ImageCard";
import BrandSection from "@/components/home_components/BrandSection";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Hydronic from "@/components/blogDetails_components/Hydronic";

const HydronicsDetails = () => {
  const { id } = useParams(); // ✅ Corrected here
  const axiosPublic = useAxiosPublic();

  const { data: HydronicsDetails } = useQuery({
    queryKey: ["hydronics-details", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(`/hydronics/${id}`);
      return response?.data;
    },
  });
  const hydronicsDetails = HydronicsDetails?.data;
  return (
    <div>
      <CommonBanner
        image={hydronicsDetails?.images[0].image}
        title={hydronicsDetails?.title}
        description={hydronicsDetails?.description}
        link={"/contact"}
        linkText={"Contact Us"}
      />
      <Hydronic hydronicsDetails={hydronicsDetails} />
      <ImageCard />
      <BrandSection />
    </div>
  );
};

export default HydronicsDetails;

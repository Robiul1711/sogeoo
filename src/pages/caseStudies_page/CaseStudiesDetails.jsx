import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import StepByStep from "@/components/blogDetails_components/Hydronic";
import ImageCard from "@/components/common/ImageCard";
import BrandSection from "@/components/home_components/BrandSection";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Hydronic from "@/components/blogDetails_components/Hydronic";
import HoverBorderCard from "@/components/blogDetails_components/HoverBorderCard";
import Title from "@/components/common/Title";

const CaseStudiesDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: CaseStudiesDetails } = useQuery({
    queryKey: ["case-studies-details", id],
    enabled: !!id,
    queryFn: async () => {
      const response = await axiosPublic.get(`/case-studies/${id}`);
      return response?.data;
    },
  });
  const caseStudiesDetails = CaseStudiesDetails?.data;
  return (
    <div>
      <CommonBanner
        image={caseStudiesDetails?.images[0].image}
        title={caseStudiesDetails?.title}
        description={caseStudiesDetails?.description}
        link={"/contact"}
        linkText={"Contact Us"}
      />
        <div className="section-padding-x section-padding-y">
      <div className="max-w-[1000px]">
        <Title level="title48" className="text-Primary">
          {caseStudiesDetails?.title || "Untitled"}
        </Title>
        <div
          className="mt-4 text-[#333333] text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: caseStudiesDetails?.description || "" }}
        />
      </div>

      <HoverBorderCard />
    </div>
      <ImageCard />
      <BrandSection />
    </div>
  );
};

export default CaseStudiesDetails;

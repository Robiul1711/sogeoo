import React, { use } from "react";
import Title from "../common/Title";
import HoverBorderCard from "./HoverBorderCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";

const StepByStep = () => {
  const {pathname} = useLocation();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axiosPublic.get("/blogs");
      return response?.data;
    },
  });
  const { data: blogDetails } = useQuery({
    queryKey: ["blogs-details", id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/blogs/${id}`);
      return response?.data;
    },
  });
  const { data: hydronicsDetails } = useQuery({
    queryKey: ["hydronics-details", id],
    queryFn: async () => {
      const response = await axiosPublic.get(`/hydronics/${id}`);
      return response?.data;
    },
  });

  const blogs = data?.data;
  
  return (
    <div className="section-padding-x section-padding-y">
      <div className="max-w-[1000px]">
        <Title level="title48" className="text-Primary ">
          {pathname === "/blog-details" ? blogDetails?.data?.title : hydronicsDetails?.data?.title}
        </Title>
        <div
          className="mt-4 text-[#333333] text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: pathname === "/blog-details" ? blogDetails?.data?.long_description : hydronicsDetails?.data?.description }}
        ></div>
      </div>
      <HoverBorderCard
        blogs={blogs}
        blogDetails={pathname === "/blog-details" ? blogDetails : hydronicsDetails}
       hydronicsDetails={hydronicsDetails}
      />
    </div>
  );
};

export default StepByStep;

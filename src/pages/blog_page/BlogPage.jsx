import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import blog from "../../assets/images/blog.png";
import ExploringInnovations from "@/components/blog_components/ExploringInnovations";
import BrandSection from "@/components/home_components/BrandSection";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BlogPage = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axiosPublic.get("/blogs");
      return response?.data;
    },
  });
  const blogs = data?.data;

  return (
    <div>
      <CommonBanner
        image={blog}
        title={"Blog"}
        description={
          "Insights & Tips: Learn more about geothermal, hydronic heating, heat pumps, and sustainable HVAC in our expert blogs."
        }
        link={"/contact"}
        linkText={"Contact Us"}
      />
      <ExploringInnova  tions blogs={blogs} isLoading={isLoading} />
      <BrandSection />
    </div>
  );
};

export default BlogPage;

import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import blog from "../../assets/images/blog.png";
import ExploringInnovations from "@/components/blog_components/ExploringInnovations";
import BrandSection from "@/components/home_components/BrandSection";

const CaseStudiesPage = () => {
  return (
    <div>
      <CommonBanner
        image={blog}
        title={"Case Studies"}
        description={
          "Our portfolio showcases how SóGeo's sustainable heating and cooling solutions have transformed homes and businesses across Melbourne and greater Victoria.From heritage home retrofits to modern new builds, explore the real-world results in the case studies below"
        }
        link={"/contact"}
        linkText={"Contact Us"}
      />
      <ExploringInnovations />
      <BrandSection />
    </div>
  );
};

export default CaseStudiesPage;

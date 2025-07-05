import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import geotharmal from "@/assets/images/hydronic.png";
import BrandSection from "@/components/home_components/BrandSection";
import banner3 from "@/assets/images/banner3.png";
import ExploringInnovationsCard from "@/components/blog_components/ExploringInnovationsCard";
import explore from '../../assets/images/explore.png'
const data = [
    {
        id: 1,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 2,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },
    {
        id: 3,
        image: explore,
        date: 'Fed 24, 2025',
        title: 'Enhanced Features for a Better Experience',
        description:"Our platform is designed with user convenience in mind. From advanced progress tracking and interactive quizzes to real-time feedback and certificate generation, we’ve added features that make learning more engaging and effective. "
    },

]
const HydronicPage = () => {
  return (
    <div>
      <CommonBanner
        image={geotharmal}
        title={"Hydronic Heating & Cooling"}
        description={
          "Hydronic Heating & Cooling Hydronic heating and cooling systems use water to efficiently regulate indoor temperatures, offering consistent warmth and cooling through fan coils, radiators, or underfloor heating & cooling systems. This eco-friendly solution improves air quality, reduces energy costs, and operates silently - providing superior comfort and zoned temperature control for homes and businesses in Melbourne. Hydronic systems not only lower running costs compared to ducted gas heating or reverse cycle systems - they also have fewer moving parts, meaning lower maintenance over time."
        }
        link={"#"}
        linkText={"Contact Us"}
      />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 section-padding-x section-padding-y">
        <ExploringInnovationsCard data={data} />
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

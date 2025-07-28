import React from "react";
import Title from "../common/Title";
import { Link, useLocation } from "react-router-dom";
const HoverBorderCard = ({blogs,blogDetails,hydronicsDetails}) => {
const { pathname } = useLocation();
const blog=blogDetails?.data
const hydronics=hydronicsDetails?.data
console.log(hydronics,"hydronicsDetails");
  return (
    <div className=" w-full  mt-16">
      {/* Left Column - Text Content */}
      <div className="space-y-6 ">
<div
  className="text-base leading-relaxed text-[#333333]"
  dangerouslySetInnerHTML={{ __html: blog?.long_description }}
></div>

      </div>

      {/* Right Column - Image Cards */}
<div className="mt-20 space-y-6">
  <Title level="title32" className="text-Primary">Related Articles</Title>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs?.map((article) => (
      <Link
        to={`/blog-details/${article.id}`}
        key={article.id}
        className="relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01] shadow-sm hover:shadow-lg"
      >
        {/* Image Wrapper */}
        <div className="relative h-[350px] w-full">
          <img
            src={article.images?.[0]?.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

          {/* Text Content */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h3 className="text-white font-semibold text-lg leading-snug line-clamp-2">
              {article.title}
            </h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

    </div>
  );
};

export default HoverBorderCard;

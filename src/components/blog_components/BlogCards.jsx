
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCards = ({blogs}) => {
  return (
    <section className="section-padding-y section-padding-x relative">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-Primary">
          Exploring Innovations in Heating, Cooling & Energy Efficiency
        </h2>
      </div>

      <p className="text-lg text-gray-600 mt-4 text-center max-w-5xl mx-auto mb-16">
        Discover the latest innovations in heating, cooling, and energy
        efficiency. Our blog shares practical tips, trends, and expert insights
        to help you create a more comfortable, eco-friendly, and cost-effective
        space.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <>
          {blogs?.map((item, index) => {
            return (
              <Link
                to={`/blog-details/${item.id}`}
                key={index}
                className="p-6 rounded-2xl bg-white border hover:shadow-lg duration-300 hover:scale-[1.01] hover:bg-[#EFE9D6]"
              >
                {item?.images?.[0]?.image && (
                  <img
                    src={item.images[0].image}
                    className="w-full h-[300px] object-cover rounded-xl"
                    alt={item.title || "Blog image"}
                  />
                )}

                <div>
                  <p className="text-lg text-Primary py-4">{item?.date}</p>
                  <h1 className="text-xl font-bold text-Primary">
                    {item?.title}
                  </h1>
                  <p
                    className="text-lg text-Primary mt-1"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <button className="text-Secondary  mt-6 flex items-center gap-2">
                    Learn More
                    <FaArrowRightLong />
                  </button>
                </div>
              </Link>
            );
          })}
        </>
      </div>
    </section>
  );
};

export default BlogCards;

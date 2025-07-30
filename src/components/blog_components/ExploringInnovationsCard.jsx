import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import striptags from "striptags";
const ExploringInnovationsCard = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Link
            to={`/hydronic-details/${item.id}`}
            key={index}
            className="p-6 rounded-2xl bg-white border hover:shadow-lg duration-300 hover:scale-[1.01] hover:bg-[#EFE9D6]"
          >
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
  <img
    src={item.images[0].image}
    alt={item.title || "Blog image"}
    className="w-full h-full object-cover"
  />
</div>


            <div>
              <p className="text-lg text-Primary py-4">{item?.date}</p>
              <h1 className="text-xl font-bold text-Primary">{item?.title}</h1>
             <p className="text-lg text-Primary mt-1">
  {striptags(item?.description || "").slice(0, 100)}...
</p>
              <button className="text-Secondary  mt-6 flex items-center gap-2">
                Learn More
                <FaArrowRightLong />
              </button>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ExploringInnovationsCard;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ExploringInnovationsCard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((item, index) => {
        return (
          <Link to={`/blog-details/${item.id}`} key={index} className="p-6 rounded-2xl bg-white border hover:shadow-lg duration-300 hover:scale-[1.01] hover:bg-[#EFE9D6]">
            <img src={item.image} className="w-full object-cover" alt="" />
            <div>
              <p className="text-lg text-Primary py-4">{item.date}</p>
              <h1 className="text-xl font-bold text-Primary">{item.title}</h1>
              <p className="text-lg text-Primary mt-1">{item.description} </p>
              <button className="text-Secondary  mt-6 flex items-center gap-2">
                Learn More<FaArrowRightLong />
              </button>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ExploringInnovationsCard;

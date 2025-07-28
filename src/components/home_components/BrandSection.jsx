import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../common/Title";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BrandSection = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["our-partners"],
    queryFn: async () => {
      const response = await axiosPublic.get("/our-partners");
      return response?.data;
    },
  });
  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError || !data?.data) return <p className="text-center py-10">Failed to load brands</p>;


  const brands = data.data;

  return (
    <div className="relative w-full overflow-hidden ">
      <Title level="title48" className="text-center !font-bold text-Primary mb-8">
        Our Partners
      </Title>

      <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {brands?.map(({ id, image }) => (
          <div key={id} className="mx-5 md:mx-10">
            <img
              src={image}
              alt={`Brand ${id}`}
              className="sm:w-[200px] h-[40px] md:h-[180px] object-contain block rounded-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandSection;

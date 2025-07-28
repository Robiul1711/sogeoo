import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const VideoSection = () => {
    const axiosPublic = useAxiosPublic();
  const {data:video}=useQuery({
    queryKey:["video"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/home/banner");
      return response?.data;
    },
  })
console.log(video?.data?.link_url);
  return (
    <div className="relative h-[500px] w-full overflow-hidden ">
      {/* YouTube Video Embed */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video?.data?.link_url}
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

    </div>
  );
};

export default VideoSection;


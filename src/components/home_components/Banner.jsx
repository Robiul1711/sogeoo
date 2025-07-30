import React from 'react';
import bannerFallback from '@/assets/images/banner.png'; // fallback image
import { motion } from 'framer-motion';
import Title from '../common/Title';
import CommonButton from '../common/CommonButton';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {
  const axiosPublic = useAxiosPublic();

  const { data: banner, isLoading } = useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
      const response = await axiosPublic.get('/cms/home/banner');
      return response?.data;
    },
  });

  const MotionTitle = motion(Title);

  // Don't show anything until banner is fetched
  if (isLoading || !banner?.data?.image) {
    return (
      <section className="relative w-full h-[400px] md:h-screen flex items-center justify-center">
        <p className="text-center text-gray-500 text-sm animate-pulse">Loading banner...</p>
      </section>
    );
  }

  return (
    <section className="relative w-full section-padding-x h-[400px] md:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={banner.data.image || bannerFallback}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full text-white px-4 py-10 sm:py-16 lg:py-20">
        <div className="flex justify-between items-center">
          <div className="xlg:w-[60%]">
            <MotionTitle
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeOut',
              }}
              animate={{ opacity: 1 }}
              className="leading-[124%] mt-20 md:lg-0"
              level="title64"
              viewport={{ once: true }}
            >
              {banner?.data?.title}
            </MotionTitle>

            <MotionTitle
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="mt-4 sm:mt-6 max-w-full sm:max-w-[970px] text-Custom-Gray text-[12px] sm:text-[14px] lg:text-[18px]"
              level="title24"
            >
              {banner?.data?.sub_title}
            </MotionTitle>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
                y: { type: 'spring', stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              animate={{ opacity: 1 }}
              className="w-full mt-6 sm:mt-8"
            >
              <CommonButton link="/contact" className="bg-white text-[#3B4754]">
                Get a quote
              </CommonButton>
            </motion.div>
          </div>

          {/* Optional Sidebar Icons */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="space-y-5 hidden xmd:block"
          >
            {/* Optional icons */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

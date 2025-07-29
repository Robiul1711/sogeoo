import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import CommonButton from "../common/CommonButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  const { pathname } = useLocation();
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["home-body"],
    queryFn: async () => {
      const response = await axiosPublic.get("/cms/home/body");
      return response?.data;
    },
  });
  const aboutUs = data?.data;
  console.log(aboutUs);
  return (
    <section className="relative section-padding-x section-padding-y">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Images Section */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <img
            src={aboutUs?.image}
            alt="Coastal Green Fields"
            className="rounded-xl w-10/12 h-auto object-cover shadow-lg "
          />

          <motion.img
            src={aboutUs?.link_url}
            alt="Mountain Path"
            className="absolute -bottom-10 right-10 rounded-xl object-cover shadow-md w-48 md:w-64"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <img src={logo} alt="" className="w-32 h-auto my-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-[#072c24] leading-tight mb-4">
            {aboutUs?.title}
          </h2>
          <p className="text-gray-600 mb-4">{aboutUs?.sub_title}</p>

          {/* Stats */}
          <motion.div
            className="mt-10 flex flex-wrap gap-10 text-[#072c24]"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                128
                <span className="text-xl align-super font-light">+</span>
              </h3>
              <p className="text-sm mt-1 text-gray-600">Project Complete</p>
            </div>
            <div className="border-r border-l px-8 flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                25
                <span className="text-xl font-light align-super">+</span>
              </h3>
              <p className="text-sm mt-1 text-gray-600">Years Of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                1.5k{" "}
              </h3>
              <p className="text-sm mt-1 text-gray-600">Happy Client</p>
            </div>
          </motion.div>
            {pathname === "/" && (
              <CommonButton
                link={"/about"}
                className="mt-10 inline-block bg-[#BFB192] text-white"
              >
                Meet Us
              </CommonButton>
            )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

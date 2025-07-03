import banner from "@/assets/images/banner.png";
import { motion } from "framer-motion";
import Title from "../common/Title";

const CommonBanner = ({ title, description, link, linkText }) => {
  const MotionTitle = motion(Title);

  return (
    <section className="relative w-full section-padding-x h-[350px] md:h-[700px] overflow-hidden">
      {/* Video Background */}

      <img
        src={banner}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full text-white px-4 md:px-10">
        <div>
          <MotionTitle
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeOut",
            }}
            animate={{ opacity: 1 }}
            className="leading-custom"
            level="title64"
            viewport={{ once: true }}
          >
            {title}
          </MotionTitle>

          <MotionTitle
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mb-5 md:mt-6 max-w-[1070px] w-full md:text-2xl font-opensans"
          >
            {description}
          </MotionTitle>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;

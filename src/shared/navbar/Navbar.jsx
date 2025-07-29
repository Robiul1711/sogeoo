import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaAngleUp } from "react-icons/fa6";
import CommonButton from "@/components/common/CommonButton";

const itemVariants = {
  open: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    filter: "blur(20px)",
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  const NavLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    {
      name: "Services",
      hasDropdown: true,
      sublink: [
        {
          name: "How Geothermal Works",
          link: "/services/how-geothermal-works",
        },
        {
          name: "Ground Source Heat Pumps",
          link: "/services/ground-source-heat-pumps",
        },
        {
          name: "Hydronic Heating & Cooling",
          link: "/services/hydronic-heating-and-cooling",
        },
        {
          name: "Air Source Heat Pumps",
          link: "/services/air-source-heat-pumps",
        },
      ],
    },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`section-padding-x py-2 md:py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className={`${
            scrolled ? "p-4" : "p-4 rounded-full bg-white"
          } flex items-center justify-between w-full`}
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="xl:h-14 lg:h-12 h-8 sm:h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10 items-center">
            {NavLinks.map((item, idx) =>
              item.hasDropdown ? (
                <div key={idx} className="relative group">
                  <button className="text-base font-medium flex items-center gap-2 transition-all duration-300">
                    {item.name}
                    <FaAngleUp className="transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  <AnimatePresence>
                    <motion.ul
                      key="dropdown"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: {
                          opacity: 1,
                          height: "auto",
                          transition: {
                            duration: 0.4,
                            delayChildren: 0.2,
                            staggerChildren: 0.1,
                          },
                        },
                        closed: {
                          opacity: 0,
                          height: 0,
                          transition: { duration: 0.2 },
                        },
                      }}
                      style={{ overflow: "hidden" }}
                      className="absolute top-full left-0  bg-white shadow-lg rounded-md w-64 p-2 z-50 hidden group-hover:block"
                    >
                      {item.sublink.map((sublink, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="py-2 px-3 text-sm font-medium cursor-pointer hover:bg-gray-100 rounded"
                        >
                          <Link to={sublink.link}>{sublink.name}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={idx}
                  to={item.link}
                  className={({ isActive }) =>
                    `text-base font-medium relative  transition-all duration-300 ${
                      isActive
                        ? "font-bold after:w-full"
                        : "after:w-0 hover:after:w-full"
                    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-current after:transition-all after:duration-500`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <CommonButton link="/contact" className="bg-[#3B4754] text-white px-6 py-2 hover:bg-[#2c3641] transition-colors duration-300">
              Request a quote
            </CommonButton>
          </div>

         
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-3xl hover:text-primary transition-colors duration-300 lg:hidden"
            >
              <FiMenu />
            </button>
         
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
        <motion.div
  className="fixed inset-0 z-50 flex"
  initial={{ x: "-100%" }}         // <-- Slide in from left
  animate={{ x: 0 }}
  exit={{ x: "-100%" }}            // <-- Slide out to left

>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
    ref={menuRef}
    className="relative bg-white w-4/5 max-w-xs h-full p-6 z-50"
    initial={{ x: "-100%" }}       // <-- Start from left off-screen
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}          // <-- Animate out to the left
    transition={{ type: "tween", duration: 0.3 }}
  >
              <div className="flex justify-between items-center mb-6">
                <img src={logo} alt="Logo" className="h-10" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl hover:text-primary transition-colors duration-300"
                >
                  <FiX />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-4">
                {NavLinks.map((item, idx) =>
                  item.hasDropdown ? (
                    <div key={idx} className="flex flex-col gap-1">
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === idx ? null : idx
                          )
                        }
                        className="flex justify-between items-center text-lg font-medium w-full"
                      >
                        {item.name}
                        <FaAngleUp
                          className={`transition-transform duration-300 ${
                            activeDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === idx && (
                          <motion.ul
                            key="mobile-dropdown"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                              open: {
                                opacity: 1,
                                height: "auto",
                                transition: {
                                  duration: 0.4,
                                  staggerChildren: 0.05,
                                },
                              },
                              closed: {
                                opacity: 0,
                                height: 0,
                                transition: { duration: 0.2 },
                              },
                            }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.sublink.map((sublink, index) => (
                              <motion.li
                                key={index}
                                variants={itemVariants}
                                className="py-2 text-sm cursor-pointer hover:text-primary"
                              >
                                <Link
                                  to={sublink.link}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sublink.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={idx}
                      to={item.link}
                      className={({ isActive }) =>
                        `text-lg font-medium relative pb-1 ${
                          isActive
                            ? "text-primary font-bold after:w-full"
                            : "hover:text-primary after:w-0 hover:after:w-full"
                        } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </nav>

              <div className="mt-8">
                <CommonButton  link="/contact" className="w-full bg-primary text-white py-2 hover:bg-[#3B4754] transition-colors duration-300">
                  Request a quote
                </CommonButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

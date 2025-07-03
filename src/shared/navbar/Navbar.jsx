import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import CommonButton from "@/components/common/CommonButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
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
    { name: "Services", link: "/services" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`section-padding-x py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
         <div
          className={`${
            scrolled ? "p-4" : "p-4 rounded-full bg-white"
          } flex items-center justify-between w-full`}
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          <div className="hidden lg:flex gap-10">
            {NavLinks.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.link}
                className={({ isActive }) =>
                  `text-base font-medium relative pb-1 transition-all duration-300 ${
                    isActive 
                      ? "font-bold after:w-full" 
                      : "after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-current after:transition-all after:duration-500`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <CommonButton className="bg-[#3B4754] text-white px-6 py-2 hover:bg-[#2c3641] transition-colors duration-300">
              Request a quote
            </CommonButton>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-3xl hover:text-primary transition-colors duration-300"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div
              ref={menuRef}
              className="relative bg-white w-4/5 max-w-xs h-full p-6 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
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
              <nav className="flex flex-col gap-4">
                {NavLinks.map((item, idx) => (
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
                ))}
              </nav>
              <div className="mt-8">
                <CommonButton className="w-full bg-primary text-white py-2 hover:bg-[#3B4754] transition-colors duration-300">
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
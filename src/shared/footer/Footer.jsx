

import { HashLink } from "react-router-hash-link";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import footerlogo from "../../assets/images/footerlogo.png";
const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Service", href: "/#service" },
  ];

const Footer = ({scrolled,  activeLink, setActiveLink}) => {
  return (
    <footer className="section-padding-x py-8 bg-[#3B4754]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
          {/* Logo and Description */}
          <div className="md:max-w-[50%] lg:max-w-[40%]">
            <img src={footerlogo} alt="Company Logo" className="h-16 w-auto mb-5" />
            
            <p className="md:text-lg text-white mt-6 md:mt-10 mb-3">
           A clean, informative site showcasing SóGeo’s sustainable heat pump solutions for efficient hydronic heating and cooling in Melbourne.
            </p>
            <div className="flex space-x-4 ">
              {[Facebook, Instagram, Linkedin, Youtube, Twitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 bg-primary text-white rounded-[12px] cursor-pointer hover:text-primary hover:bg-gray-200 transition-colors duration-300"
                    aria-label={`${Icon.name} social media link`}
                  >
                    <Icon className="size-5 md:size-6" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 xxs:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-0">
            <div></div>
            {/* Quick Links */}
            <div>
              <h2 className="text-base md:text-lg font-semibold border-b text-white pb-2">
                Quick Links
              </h2>
              <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
                {navLinks.map(
                  (link, index) => (
                    // <a
                    //   href={`${item.href}`}
                    //   key={index}
                    //   className="cursor-pointer transition hover:text-primary "
                    // >
                    //   {item.name}
                    // </a>
                    <li
                  key={index}
                  className="relative text-base cursor-pointer font-semibold group duration-300"
                >
                  <HashLink
                    to={link.href}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    onClick={() => {
                      setActiveLink(link.href);
                    }}
                    className={`relative font-sans ${
                      activeLink === link.href
                        ? "text-primary font-bold"
                        : scrolled
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                    {/* Active underline */}
                    {activeLink === link.href && (
                      <span
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                      />
                    )}
                    {/* Hover underline */}
                    {activeLink !== link.href && (
                      <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary"
                      />
                    )}
                  </HashLink>
                </li>
                  )
                )}
                
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h2 className="text-base md:text-lg text-white font-semibold border-b pb-2">
                Customer service
              </h2>
              <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  <span>Shipping policy</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  <span>Shipping policy</span>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h2 className="text-base md:text-lg text-white font-semibold border-b pb-2">
                Customer service
              </h2>
              <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  <span>Shipping policy</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  <span>Shipping policy</span>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h2 className="text-base md:text-lg text-white font-semibold border-b pb-2">
                Contact
              </h2>
              <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  <span><span>Info@insurancepainters.com</span></span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  <span>0173934****</span>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        <div className="flex pt-5 border-t border-dashed

 w-full xxs:gap-8 gap-2 mt-5 sm:mt-10 md:gap-0">
          <p className="text-center w-full text-white">Copyright © 2023 All rights reserved</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { HashLink } from "react-router-hash-link";
import footerbanner from "../../assets/images/footerbanner.png";
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
  { name: "About  Us", href: "/#about" },
  { name: "Case Studies", href: "/#case" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact Us", href: "/#contact" },
];

const Footer = ({ scrolled, activeLink, setActiveLink }) => {
  return (
    <footer className="section-padding-x py-8 bg-[#3B4754]">
      <div className="w-full">
        <img src={footerbanner} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
        {/* Logo and Description */}
        <div className="md:max-w-[50%] lg:max-w-[30%]">
          <img
            src={footerlogo}
            alt="Company Logo"
            className="h-16 w-auto mb-5"
          />

          <p className="md:text-lg text-white mt-6 md:mt-10 mb-3">
            A clean, informative site showcasing SóGeo’s sustainable heat pump
            solutions for efficient hydronic heating and cooling in Melbourne.
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
              Quick Access
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative text-base cursor-pointer font-semibold group duration-300 "
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
                        ? "text-Secondary"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                    {/* Active underline */}
                    {activeLink === link.href && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary" />
                    )}
                    {/* Hover underline */}
                    {activeLink !== link.href && (
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary" />
                    )}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h2 className="text-base md:text-lg text-white font-semibold border-b pb-2">
              Service
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Ground Source Heat Pumps </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Air Source Heat Pumps </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Hydronic Heating & Cooling </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>System Design </span>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h2 className="text-base md:text-lg text-white font-semibold border-b pb-2">
              Security
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Privacy Policy </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Privacy Policy </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Terms of Service </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Cookies Settings </span>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h2 className="text-base md:text-lg text-white font-semibold border-b pb-2">
              Contact Us
            </h2>
            <ul className="mt-3 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-white">
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>
                  <span>Email: info@Sógeo.com.au</span>
                </span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-Secondary">
                <span>Call Us: +61 3 8905 2622</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex pt-5 border-t border-dashed w-full xxs:gap-8 gap-2 mt-5 sm:mt-10 md:gap-0">
        <p className="text-center w-full text-white">
          Copyright © 2023 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

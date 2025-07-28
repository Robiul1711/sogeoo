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
  { name: "About Us", href: "/#about" },
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

      <div className="flex flex-col gap-8 md:flex-row justify-between w-full mt-8">
        {/* Logo and Description */}
        <div className="md:w-1/2 lg:w-1/3">
          <img src={footerlogo} alt="Company Logo" className="h-16 w-auto mb-5" />
          <p className="text-white text-sm md:text-base mb-6">
            A clean, informative site showcasing SóGeo’s sustainable heat pump
            solutions for efficient hydronic heating and cooling in Melbourne.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-primary text-white rounded-[12px] hover:text-primary hover:bg-gray-200 transition-colors duration-300"
                aria-label={`${Icon.name} social`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Links & Contact */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 w-full text-sm">
          <div className="col-span-1 hidden sm:block" />

          {/* Quick Access */}
          <div>
            <h2 className="text-white font-semibold border-b pb-2 mb-3 text-base">
              Quick Access
            </h2>
            <ul className="space-y-3 text-secondary">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <HashLink
                    to={link.href}
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    onClick={() => setActiveLink(link.href)}
                    className={`relative block hover:text-primary ${
                      activeLink === link.href
                        ? "text-primary font-bold"
                        : scrolled
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white font-semibold border-b pb-2 mb-3 text-base">
              Services
            </h2>
            <ul className="space-y-3 text-secondary">
              <li>Ground Source Heat Pumps</li>
              <li>Air Source Heat Pumps</li>
              <li>Hydronic Heating & Cooling</li>
              <li>System Design</li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-white font-semibold border-b pb-2 mb-3 text-base">
              Security
            </h2>
            <ul className="space-y-3 text-secondary">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Settings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white font-semibold border-b pb-2 mb-3 text-base">
              Contact Us
            </h2>
            <ul className="space-y-3 text-white">
              <li>Email: info@Sógeo.com.au</li>
              <li>Call Us: +61 3 8905 2622</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="pt-6 mt-10 border-t border-dashed text-center text-white text-sm">
        © 2023 SóGeo — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

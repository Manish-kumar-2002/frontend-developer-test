import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="bg-black text-white py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="footer-block">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link
                  to="/branding"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Web development
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Digital marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Mobile app
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  User testing
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Case study
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-block">
            <h3 className="font-semibold text-lg">Follow us</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Figma
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-block col-span-2 lg:col-span-1 w-full">
            <Link to="/" className="block mb-3">
              <img src={Logo} alt="logo" />
            </Link>
            <span className="font-[300] text-[14px] mb-4 block">
              Get latest updates
            </span>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none border-2 border-[rgba(161, 174, 191, 1)] rounded-full px-[22px] py-[12px] text-white placeholder-white"
            />
          </div>
        </div>
        <div className="footer-block text-center mt-10 text-gray-500">
          Created by{" "}
          <Link
            to="/"
            className="!text-gray-400 transition-all duration-300 hover:!text-white relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Shadient.co
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

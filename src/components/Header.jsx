import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../assets/logo.svg";
import Submenu from "../assets/submenu.svg";
import ContactImg from "../assets/contact-copy.png";
import Contact from "./Contact";
import Button from "./Button";

const Header = () => {
  const [navOn, setNavOn] = useState(false);

  function navHandler() {
    setNavOn(!navOn);
  }

  useGSAP(() => {
    const btn = document.querySelector(".btn");

    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { x: -2, y: -2, duration: 0.3 });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
    });

    let tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    tl.from(".logo ,nav li, .btn", {
      y: -40,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.15,
    });

    gsap.from(".main-page", {
      y: 200,
      opacity: 0,
      scale: 0.7,
      delay: 0.8,
      duration: 0.8,
    });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".compaines-wrapper",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
      },
    });
    tl2.from(
      ".compaines-details h2",
      {
        x: -150,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
      },
      "same"
    );
    tl2.from(
      ".compaines-details p",
      {
        x: 150,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
      },
      "same"
    );

    tl2.from(
      ".companies-logo",
      {
        opacity: 0,
        delay: 0.8,
        duration: 0.8,
      },
      "same"
    );

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".offer-wrapper",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
      },
    });

    tl3.from(".offer-details h2,.offer-details p ", {
      y: -50,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.15,
    });
    tl3.from(".offer-card", {
      y: -40,
      opacity: 0,
      delay: 0.1,
      duration: 0.6,
      stagger: 0.1,
    });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
      },
    });

    tl4.from("footer .footer-block ", {
      y: -50,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      stagger: 0.15,
    });
  }, []);
  return (
    <>
      <button
        onClick={() => navHandler()}
        className="cursor-pointer md:hidden bg-[#878787ab] [backdrop-filter:blur(3px)] text-white text-2xl fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-[200px] h-[50px] rounded-t-2xl flex items-center justify-center"
      >
        {navOn ? "Close" : "Menu"}
      </button>
      <header className="py-6 bg-[#0F0F0F66] [backdrop-filter:blur(3px)] fixed w-full z-10">
        <div className="container flex items-center justify-between">
          <Link className="logo w-[160px] md:w-auto" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="navbar flex items-center justify-between gap-6">
            <nav
              className={`${
                navOn ? "block !top-[20%] !opacity-100" : "hidden"
              } md:block nav`}
            >
              <ul className="flex items-center justify-between gap-6">
                <li>
                  <Link
                    className="flex gap-2 items-center relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                    to="/"
                  >
                    Company{" "}
                    <i className="submenu-icon mt-1">
                      <img src={Submenu} alt="icon" />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="btn">
              <Contact />
            </div>
          </div>
        </div>
      </header>

      <div id="popup-article" className="popup">
        <div className="popup__block md:flex">
          <a href="#" className="popup__close">
            close
          </a>
          <div className="md:w-[50%]">
            <img className="" src={ContactImg} alt="" />
          </div>
          <div>
            <h3 className="popup__title">Let’s discuss the idea</h3>
            <p className="popup__pra">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit.
            </p>
            <form className="flex gap-[14px] flex-col">
            <input
                type="text"
                placeholder="Your Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none border-2 border-[rgba(161, 174, 191, 1)] rounded-full py-[10px] px-[22px] md:py-[12px] text-white placeholder-white"
              />
              <input
                type="text"
                placeholder="Your Phone"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none border-2 border-[rgba(161, 174, 191, 1)] rounded-full py-[10px] px-[22px] md:py-[12px] text-white placeholder-white"
              />
              <input
                type="email"
                placeholder="Your email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none border-2 border-[rgba(161, 174, 191, 1)] rounded-full py-[10px] px-[22px] md:py-[12px] text-white placeholder-white"
              />
              <Button tag={"Submit"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

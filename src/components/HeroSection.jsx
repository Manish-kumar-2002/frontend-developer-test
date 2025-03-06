import { useState } from "react";
import BgImg from "../assets/hero-bg.png";
import Button from "./Button";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="hero-section bg-[#110f0f] pt-[110px] lg:pt-[160px] pb-[70px] lg:pb-[208px] relative">
      <img
        src={BgImg}
        className="hero-banner absolute top-0 left-0 z-0"
        alt="hero-banner"
      />
      <div className="container main-page !max-w-[523px] relative z-1">
        <h1 className="text-[62px] lg:text-[96px] font-[700] text-white leading-[58px] lg:leading-[80px] mb-7">
          Attract{" "}
          <span className="[background-image:linear-gradient(217.81deg,#9DE8EE_25.05%,#9DE8EE_25.05%,#FA7C0B_51.71%,#9F8CED_79.45%)] bg-clip-text text-transparent">
            NewLeads
          </span>{" "}
          like never before
        </h1>
        <p className="mb-7 text-[rgba(255, 255, 255, 0.6)] leading-[21px] md:leading-[24px] font-[400] text-[16px] tracking-[2%]">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros{" "}
        </p>
        <div className="flex gap-[16px]">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none border-2 border-[rgba(161, 174, 191, 1)] rounded-full py-[10px] px-[22px] md:py-[12px] text-white placeholder-white"
          />
          <Button tag={"Attract"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

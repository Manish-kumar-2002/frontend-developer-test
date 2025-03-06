import React, { useEffect } from "react";
import BgImg from "../assets/hero-bg.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="hero-section used bg-[#110f0f] pt-[110px] lg:pt-[160px] pb-[70px] lg:pb-[168px] relative">
        <img
          src={BgImg}
          className="absolute top-0 left-0 z-0"
          alt="hero-banner"
        />
        <div className="container">
          <div className="!max-w-[523px] !m-0 relative z-1">
            <span className="block text-[#FFA800] mb-3 font-[700] text-[22px] md:text-[24px] leading-[31.2px]">
              About us
            </span>
            <h1 className="text-white font-[700] text-[45px] md:text-[64px] leading-[54px] md:leading-[80px] mb-5">
              Shadient.co
            </h1>
            <p className="mb-7 text-[rgba(255, 255, 255, 0.6)] leading-[21px] md:leading-[24px] font-[400] text-[14px] md:text-[16px] tracking-[2%]">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta
              porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            </p>
            <Button tag={"Contact"} />
          </div>
        </div>
      </section>
      <section>
        <section className="py-10 lg:py-[60px] bg-[#110F0F]">
          <div className="container">
            <div className="mb-[28px] md:mb-[40px] max-w-[971px]">
              <h2 className="font-[700] mb-5 md:mb-6 text-[32px] md:text-[40px] leading-[38px] md:leading-[56px] text-white">
                Company
              </h2>
              <p className="font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[2%] text-[rgba(255, 255, 255, 0.6)]">
                Commodo diam vulputate dui proin quis enim nibh. Non integer ac
                libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at
                eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
                blandit.Commodo diam vulputate dui proin quis enim nibh. Non
                integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed
                faucibus at eu elit. Morbi aliquam porttitor mattis consequat
                neque, tellus blandit. Commodo diam vulputate dui proin quis
                enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi
                sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor
                mattis consequat neque, tellus blandit. Commodo diam vulputate
                dui proin quis enim nibh. Non integer ac libero facilisis
                hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi
                aliquam porttitor mattis consequat neque, tellus blandit.
              </p>
            </div>
            <div className="mb-6 max-w-[971px]">
              <h2 className="font-[700] mb-5 md:mb-6 text-[32px] md:text-[40px] leading-[38px] md:leading-[56px] text-white">
                Team
              </h2>
              <p className="font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[2%] text-[rgba(255, 255, 255, 0.6)]">
                Commodo diam vulputate dui proin quis enim nibh. Non integer ac
                libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at
                eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
                blandit.Commodo diam vulputate dui proin quis enim nibh. Non
                integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed
                faucibus at eu elit. Morbi aliquam porttitor mattis consequat
                neque, tellus blandit. Commodo diam vulputate dui proin quis
                enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi
                sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor
                mattis consequat neque, tellus blandit. Commodo diam vulputate
                dui proin quis enim nibh. Non integer ac libero facilisis
                hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi
                aliquam porttitor mattis consequat neque, tellus blandit.
              </p>
            </div>
            <Link
              to="/"
              className="cursor-pointer text-[#FFA800] text-[14px] font-[700] border-1 border-[#FFA800] px-[30px] py-[8px] rounded-full bg-tranparent transition-all duration-300 
  hover:outline-none hover:shadow-[3px_3px_0_0_#ffa800]"
            >
              Go to home
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;

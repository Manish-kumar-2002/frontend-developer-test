import React from "react";
import One from "../assets/companies1.svg";
import Two from "../assets/companies2.svg";
import Three from "../assets/companies3.svg";
import Four from "../assets/companies4.svg";
import Five from "../assets/companies5.svg";
import Six from "../assets/companies6.svg";

const Companies = () => {
  return (
    <div className="overflow-hidden py-[30px] whitespace-nowrap relative">
      <div className="container relative after:content-[''] after:absolute after:top-0 after:left-[-100%] after:block after:w-[100%] after:h-full after:bg-black">
        <div className="companies-logo slide  flex gap-[20px] mb-6">
          <img src={One} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Five} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Four} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={One} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Five} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Four} alt="companies" />
          <img src={Five} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Six} alt="companies" />
        </div>
      </div>
      <div className="container relative after:content-[''] after:absolute after:top-0 after:right-[-100%] after:block after:w-[100%] after:h-full after:bg-black">
        <div className="companies-logo reverseSlide flex gap-[20px]">
          <img src={One} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Four} alt="companies" />
          <img src={Five} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={One} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Four} alt="companies" />
          <img src={Two} alt="companies" />
          <img src={Three} alt="companies" />
          <img src={Four} alt="companies" />
          <img src={Five} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Five} alt="companies" />
          <img src={Six} alt="companies" />
          <img src={Six} alt="companies" />
        </div>
      </div>
    </div>
  );
};

export default Companies;

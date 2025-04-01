import React from "react";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <div>
      {/* <div className="page">
        <div className="page__container"> */}
          {/* <a href="#popup-article" className="open-popup">
            open popup
          </a> */}
          <a
            href="#popup-article"
            className="cursor-pointer open-popup text-[#FFA800] text-[14px] font-[700] border-1 border-[#FFA800] px-[30px] py-[8px] rounded-full bg-tranparent transition-all duration-300 
            hover:outline-none hover:shadow-[3px_3px_0_0_#ffa800]"
          >
            Contact
          </a>
        {/* </div>
      </div> */}
     
    </div>
  );
};

export default contact;

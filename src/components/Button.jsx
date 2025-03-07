import React from "react";

const Button = ({ tag }) => {
  return (
    <button className="cursor-pointer px-[30px] py-[10px] md:px-[22px] md:py-[12px] bg-[#FFA800] text-black text-[12px] md:text-[14px] font-[700] rounded-full border border-[#FFA800] hover:bg-amber-300 hover:border-white transition-all duration-300">
      {tag}
    </button>
  );
};

export default Button;

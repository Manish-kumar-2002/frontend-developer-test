import React from "react";

const OfferCard = ({offerImg,offerName,offerPra}) => {
  return <div className="offer-card border-1 border-[#A1AEBF] rounded-[4px] p-[20px] pb-[40px]">
        <img className="mb-[12px] w-[48px] h-[48px]" src={offerImg} alt="logo" />
        <h3 className="font-[700] mb-[12px] text-[28px] leading-[36px]">{offerName}</h3>
        <p className="text-[background: rgba(255, 255, 255, 0.6)] font-[400] text-[14px] leading-[20px] tracking-[2%]">{offerPra}</p>
  </div>;
};

export default OfferCard;

import React from "react";
import OfferCard from "./OfferCard";
import BrandingImg from "../assets/branding.svg";
import WebImg from "../assets/web.svg";
import DigitalImg from "../assets/digital.svg";
import MobileImg from "../assets/mobile.svg";
import SeoImg from "../assets/seo.svg";
import TestingImg from "../assets/testing.svg";

const OfferWrapper = () => {
  return (
    <section className="offer-wrapper py-10 lg:py-[80px] bg-[#110F0F]">
      <div className="container">
        <div className="offer-details mb-6 text-center max-w-[634px] mx-auto my-0 lg:mb-[40px]">
          <h2 className="font-[700] mb-5 md:mb-6 text-[32px] md:text-[40px] leading-[38px] md:leading-[56px] text-white">
            We Offer
          </h2>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[2%] text-[rgba(255, 255, 255, 0.6)]">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <OfferCard
            offerImg={BrandingImg}
            offerName={"Branding"}
            offerPra={
              "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
            }
          />
          <OfferCard
            offerImg={WebImg}
            offerName={"Web development"}
            offerPra={
              "Integer ante non nunc, eget est justo vel semper nunc. Lacus"
            }
          />
          <OfferCard
            offerImg={DigitalImg}
            offerName={"Digital marketing"}
            offerPra={
              "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
            }
          />
          <OfferCard
            offerImg={MobileImg}
            offerName={"Mobile App"}
            offerPra={
              "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
            }
          />
          <OfferCard
            offerImg={SeoImg}
            offerName={"SEO"}
            offerPra={
              "Integer ante non nunc, eget est justo vel semper nunc. Lacus"
            }
          />
          <OfferCard
            offerImg={TestingImg}
            offerName={"User testing"}
            offerPra={
              "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OfferWrapper;

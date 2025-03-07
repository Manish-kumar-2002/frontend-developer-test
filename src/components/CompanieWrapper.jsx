import React from "react";
import Companies from "./Companies";

const CompanieWrapper = () => {
  return (
    <section className="compaines-wrapper py-10 lg:pt-[80px] lg:pb-[100px]">
      <div className="container">
        <div className="compaines-details md:grid grid-cols-2 gap-6">
          <h2 className="font-[700] mb-5 md:mb-0 text-[32px] md:text-[40px] leading-[38px] md:leading-[56px] text-white">
            Trusted by 200+ companies around the world
          </h2>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[2%] text-[rgba(255, 255, 255, 0.6)]">
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
            amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id
            in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus
            ac.
          </p>
        </div>
      </div>
      <Companies />
    </section>
  );
};

export default CompanieWrapper;

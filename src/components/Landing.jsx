import React from "react";
import LOGO from "../assets/grypto.png";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-[6.25rem] lg:mt-[6.75rem] mb-4">
          <img
            src={LOGO}
            alt="logo"
            className="w-[9.25rem] h-[9.25rem] lg:w-[15.63rem] lg:h-[15.63rem]"
          />
        </div>
        <p className="font-zeroestwo font-normal text-[2.63rem] leading-[3rem] lg:text-[4rem] lg:leading-[4rem] text-primary">
          Grypto
        </p>
        <p className="font-causten font-normal text-2xl px-6 text-center lg:text-4xl lg:leading-[4rem] text-primary mt-7 mb-10">
          the answer to Crypto gaming, onboarding and management.
        </p>
        <div>
          <button className="py-[0.875rem] px-[3.06rem] lg:py-[1.31rem] lg:px-[6.81rem] myBtn">
            <span className="text-xl font-normal leading-4 text-white lg:text-2xl lg:leading-8 font-causten">
              Sign In / Sign Up
            </span>
          </button>
        </div>
      </div>
      <div className="w-full mt-20 bg-bottom bg-no-repeat bg-contain md:bg-cover bg-footerMobile md:bg-footer">
        <div className="flex flex-col-reverse items-center gap-2 lg:flex-row lg:justify-between px-6 pb-4 pt-[7.88rem] lg:pt-[16.7rem]">
          <p className="text-xs font-light leading-6 text-white lg:text-base font-spacegrotesk">
            Copyright 2023 Grypto.io | All Rights Reserved.
          </p>
          <a
            href="/"
            className="text-xs font-light leading-6 text-white lg:text-base font-spacegrotesk"
          >
            Disclaimer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import LOGO from "../assets/grypto.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
        <p className="font-causten font-normal text-[23px] px-6 text-center lg:text-4xl lg:leading-[4rem] text-primary mt-7 mb-10">
          The answer to Crypto Token onboarding and management for the gaming
          industry.
        </p>
        <div>
          <Link to="/wallet">
            <button className="py-[0.875rem] px-[3.06rem] lg:py-[1.31rem] lg:px-[6.81rem] myBtn">
              <span className="text-xl font-normal leading-4 text-white lg:text-2xl lg:leading-8 font-causten">
                Sign In / Sign Up
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

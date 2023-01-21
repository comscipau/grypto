import React from "react";
import LOGO from "../assets/grypto.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SUN from "../assets/sun.svg";
import MOON from "../assets/moon.svg";
import { useState, useEffect } from "react";

const Landing = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowsMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowsMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowsMatch();
        break;
    }
  }, [theme]);

  return (
    <div className="dark:bg-black bg-white">
      <div className="flex justify-end mr-6 lg:mr-[8.75rem] mb-[4.5rem] lg:mb-[9px] pt-7 lg:pt-[3.94rem]">
        <div className="flex rounded-[20px] bg-primary text-white relative">
          <img
            src={MOON}
            alt="MOON"
            className="cursor-pointer py-[8px] pl-[19px]"
            onClick={() => setTheme("dark")}
          />
          <img
            src={SUN}
            alt="SUN"
            className="cursor-pointer pr-[19px] ml-6"
            onClick={() => setTheme("light")}
          />
          <div
            className={
              theme == "dark"
                ? "w-[3.4rem] rounded-full bg-myToggle absolute top-0 left-0 bottom-0"
                : "w-[3.4rem] rounded-full bg-myToggle absolute top-0 right-0 bottom-0"
            }
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* <div className="mt-[6.25rem] lg:mt-[6.75rem] mb-4"> */}
        <img
          src={LOGO}
          alt="logo"
          className="w-[9.25rem] h-[9.25rem] lg:w-[15.63rem] lg:h-[15.63rem] mb-4"
        />
        {/* </div> */}
        <p className="font-zeroestwo font-normal text-[2.63rem] leading-[3rem] lg:text-[4rem] lg:leading-[4rem] text-primary">
          Grypto
        </p>
        <p className="font-causten font-normal text-[23px] px-6 text-center lg:text-4xl lg:leading-[4rem] text-primary dark:text-white mt-7 mb-10">
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

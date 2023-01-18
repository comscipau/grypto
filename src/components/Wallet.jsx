import React from "react";
import LOGO from "../assets/grypto.png";
import Footer from "../components/Footer";

const Wallet = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="px-6 lg:px-[8.81rem] mt-9 lg:mt-[6.75rem] flex flex-col lg:flex-row justify-between">
        <div>
          <div className="hidden lg:flex items-center mb-[1.1875rem]">
            <img src={LOGO} alt="logo" className="w-[102px] h-[102px] mr-4" />
            <p className="font-zeroestwo font-normal text-4xl leading-9 text-primary">
              Grypto
            </p>
          </div>
          <div className="flex justify-between lg:hidden items-center mb-[5.625rem]">
            <img src={LOGO} alt="logo" className="w-16 h-16 mr-4" />
            <button className="bg-primary rounded-[25px] py-[0.6875rem] px-[2.3125rem]">
              <span className="font-causten font-normal text-white text-base leading-4 ">
                Disconnect Wallet
              </span>
            </button>
          </div>
          <div className="flex justify-center lg:justify-start font-causten font-normal text-xl lg:text-2xl text-primary mb-1">
            <p className="mr-1 lg:mr-2">$MATIC Balance:</p>
            <p>0.00</p>
          </div>
          <div className="flex justify-center lg:justify-start font-causten font-normal text-xl lg:text-2xl text-primary mb-[0.9375rem]">
            <p className="mr-1 lg:mr-[0.875rem]">$USDC Balance:</p>
            <p>0.00</p>
          </div>
          <div className="flex mb-[2.375rem]">
            <button className="font-causten font-normal text-2xl text-primary hidden lg:block">
              Disconnect Wallet
            </button>
            <span className="font-causten font-normal text-5xl leading-8 text-primary mx-2 text-center hidden lg:block">
              |
            </span>
            <button className="font-causten font-normal text-base lg:text-2xl text-primary mx-auto lg:mx-0">
              <span className="underline lg:no-underline">Refresh Balance</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 w-[19.5rem] lg:w-[21rem] mb-[7.1875rem] lg:mb-0 mx-auto lg:mx-0">
            <button className="myBtn font-causten font-normal text-xl lg:text-2xl text-white py-[1.02rem]">
              Show Wallet / Deposit Funds
            </button>
            <button className="myBtn font-causten font-normal text-xl lg:text-2xl text-white py-[1.02rem]">
              Buy using Prepaid Visa
            </button>
            <button className="myBtn font-causten font-normal text-xl lg:text-2xl text-white py-[1.02rem]">
              Send Funds to Cryptosphere
            </button>
          </div>
        </div>

        <div
          className="bg-secondary rounded-[3.125rem] h-[26.125rem] lg:h-[33.8rem] w-[19.5rem] lg:w-[24rem]
        mx-auto lg:mx-0"
        >
          <p className="text-center text-white pt-4 font-causten text-lg">
            SWAP FUNCTION CONTAINER
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wallet;

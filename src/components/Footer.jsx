import React from "react";

const Footer = () => {
  // NOTE: className="mountainSM lg:mountainLG" doesn't change the background correctly hence the 2 version display

  return (
    <div>
      {/* DESKTOP */}
      <div className="w-full mt-20 mountainLG hidden lg:block">
        <div className="flex flex-col-reverse items-center gap-2 lg:flex-row lg:justify-between px-6 pb-4 pt-[4.5rem] lg:pt-[16.1875rem]">
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

      {/* MOBILE */}
      <div className="w-full mt-[6.5625rem] mountainSM block lg:hidden">
        <div className="flex flex-col-reverse items-center gap-2 lg:flex-row lg:justify-between px-6 pb-4 pt-[4.5rem] lg:pt-[15rem]">
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

export default Footer;

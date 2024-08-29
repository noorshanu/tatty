import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 relative z-10 ">
      <img src="images/wool.png" alt="" className=" mx-auto h-[190px] absolute top-[15%] -left-12 right-0 floating" />
      <img src="images/foot.png" alt=""  className=" mx-auto" />
      <div className="container-wrapper mt-8 ">
        <p className="   mx-auto mb-2 lg:mb-3 text-xl sm:text-2xl  ">
        Legal Disclaimer: $TATY is a meme coin for fun, with no real value or profit expectation. By buying $TATY, you agree you've read and understood this.
        </p>
        <div className="">
          <h2 className=" text-6xl font-kid text-center font-bold">
          $TATY
          </h2>
          <div className=" flex items-center justify-center gap-2">
            <p className="mt-3 text-xs text-black lg:text-sm font-nubFont">
            Copyright © 2024 $TATY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

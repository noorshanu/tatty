import React from "react";
import RoadmapCards from "../components/RoadmapCards";
import Tokenomic from "./Tokenomic";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 relative  " id="token">
        <img
          src="images/about.png"
          alt=""
          className="  h-[300px] left-4 floating mx-auto "
        />

        <div className="  px-4  py-6  text-center border-[#000000] relative z-50 rounded-2xl  ">
          <h1 className=" text-xl sm:text-3xl font-bold text-center my-3">
          TATY, the raggedy cat who's done with all the weak shitcoins on Solana, is here to raise hell and break the mold. yep yep, purrfect pump!
          </h1>

        <p></p>

        <div className=" py-4">
          <Tokenomic/>

        </div>

          <div className=" flex flex-col sm:flex-row justify-center gap-4 mt-8 ">
            <span className="text-[50px] sm:text-[100px] font-kid font-bold">
              LP BURNT
            </span>{" "}
            <span className="text-[50px] sm:text-[100px] font-kid font-bold">
              {" "}
              0% TAX{" "}
            </span>{" "}
            <span className=" text-[50px] sm:text-[100px] font-kid font-bold">
              {" "}
              Mint Revoked
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

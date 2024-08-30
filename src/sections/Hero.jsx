import { BsTwitterX,  } from "react-icons/bs";
import {  FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-0  pb-[1rem] mt-16">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[110px] sm:text-[220px] font-bold text-center mt-[5rem] sm:mt-[3rem] uppercase">

          $TATY
        </h1>

        <div className=" flex justify-center mx-auto -mt-[4rem]">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-64    lg:h-[500px] 2xl:h-[550px] mx-auto floating"
          />
        </div>

        <div className=" flex justify-center gap-5 items-center mt-[2rem]">
          <a
            href="https://x.com/Tatyonsol"
            className=" text-xl text-black bg-[#ffffff] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://t.me/TatyonSol"
            target="_blank"
            className=" text-xl text-black hover:scale-125 bg-[#ffffff] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dextools.io/"
            target="_blank"
            className=" bg-[#ffffff] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
          >
            <img src="images/dext.png" alt="" className=" h-[29px] w-auto" />
          </a>
        </div>

        <p className=" text-center max-w-full px-3 mx-auto py-2 sm:max-w-2xl ">
        TATY, the raggedy cat who's done with all the weak shitcoins on Solana, is here to raise hell and break the mold. This ain’t your average meme coin—TATY’s got a squad ready to shake things up and make the market our playground!
        </p>
      </div>
    </section>
  );
}

export default Hero;

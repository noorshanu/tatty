import React from "react";

function RoadMap() {
  return (
    <section className="relative z-10 " id="road">
      <img
        src="images/army.png"
        alt=""
        className=" absolute  left-0 top-18 -z-10 h-[400px] hidden sm:block"
      />

<img
        src="images/mouse.png"
        alt=""
        className=" absolute  right-0 top-18 -z-10 h-[400px] hidden sm:block"
      />



      <div className="container-wrapper mb-4">
        <h2 className="font-kid text-4xl sm:text-6xl text-[#000000] text-center font-bold relative z-30 my-4">
          Our Roadmap
        </h2>

        <div className="flex justify-center flex-col sm:flex-row gap-5">
          <div className="bg-[#ffffff] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[130px] border-2 box-s2">
            <div>
              <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                Phase 1
              </h1>
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Build community & Social .
            </p>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Stealth Launch .
            </p>
          </div>

          <div className="bg-[#ffff] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[130px]  border-2 box-s2">
            <div>
              <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                Phase 2
              </h1>
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Strategic growth plan.
            </p>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Execute Marketing.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col sm:flex-row gap-5  mt-4">
          <div className="bg-[#ffff] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[140px] border-2 box-s2">
            <div>
              <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                Phase 3
              </h1>
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Airdrop 5% of total supply to $TATY Loyal holders .
            </p>

            <p className=" text-lg font-popins font-normal lh-1_7">
            • CMC & CG listing
            </p>
          </div>
          <div className="bg-[#ffff] py-5 px-5  rounded-2xl w-full sm:w-[350px] h-[140px] border-2 box-s2">
            <div>
              <h1 className="font-groot-one font-bold  text-black text-center  text-xl mb-1">
                Phase 4
              </h1>
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Tier 1 CEX listings
            </p>
            <p className=" text-lg font-popins font-normal lh-1_7">
              • Partnership & Silly surprises
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;

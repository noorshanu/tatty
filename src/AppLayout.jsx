import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import React, { useState, useRef } from "react";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";

import Footer from "./sections/Footer";
import Music from "./nubshiba.mp3";
import Mission from "./sections/Mission";
import HowToBuy from "./sections/HowToBuy";
import RoadMap from "./sections/RoadMap";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="rounded-lg p-8">
        <button
          className="bg-[#ffffff] rounded-full px-6 py-2 text--2xl sm:text-5xl font-kid  font-bold border-2 hover:scale-125"
          onClick={onClose}
        >
          Taty - $TATY
        </button>
      </div>
    </div>
  );
};

function AppLayout() {
  const [showPopup, setShowPopup] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Start playing music here
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <main className="  ">
        <Navbar />

        <Hero />
        <div className=" flex justify-center my-4 ">
          <button
            className="bg-[#ffffff] border-2 font-kid text-3xl box-s2  text-black font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline  hover:scale-125"
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause " : "Play Music"}
          </button>
        
        </div>
        <a href="https://solscan.io/" target="_blank" className="bg-[#ffffff59] border-2 my-2 text-black font-bold py-2 px-2 sm:px-16 rounded-full sm:text-lg text-xs box-s2
          flex justify-center w-[360px] sm:w-[720px] mx-auto">CA : B7XUACNNJryyuCgmfqAAs43nRFxhiQ9vFuGoufauELLw</a>
        <audio ref={audioRef} src={Music}></audio>

      
      </main>

      <MemeMark />

      <div>
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[50px]" />
             <div>
       <RoadMap/>
        </div>
 

        <Mission/>
        <dl className="h-[50px]" />
        <HowToBuy/>
       
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;

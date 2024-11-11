"use client";
import Windowslogo from "../../public/icons/Windowslogo.png";
import elementlogo from "../../public/icons/Element.png";
import secondelementlogo from "../../public/icons/fi_10781896.png";
import backlogo from "../../public/icons/Logos.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const Videolayout = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isVideoOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoOpen]);

  return (
    <div className="container">
      <div
        className="w-full h-full text-white bg-no-repeat bg-cover rounded-[40px] mt-28 mb-36 "
        style={{
          backgroundImage:
            "linear-gradient(to left,#3c1d1b, transparent,transparent,#3d1c1b), url('/icons/coverimg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-between ">
          <div className="p-12">
            <div className="text1">
              <h1 className="uppercase text-[44px] text-white">
                mangu <p className="uppercase text-orange-600">sarkarda</p>
              </h1>
              <p className="w-[95%] text-[1rem] mt-4 text-white mb-8">
                The gamification of great historical campaigns and tipping
                points, which played the key destinies of mankind for the Great
                Commander and statesman, will blow up the tapes of your everyday
                life!
              </p>
            </div>
            <div className="mb-20">
              <h2 className="mb-4 text-[16px]">Available:</h2>
              <div className="flex items-center gap-4">
                <div className="flex select-none cursor-pointer gap-2 pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] active:translate-y-1 duration-200">
                  <Image src={elementlogo} alt="Steam" width={24} height={24} />
                  <p className="text-[14px]">Steam</p>
                </div>
                <div className="flex select-none cursor-pointer gap-2 pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] active:translate-y-1 duration-200">
                  <Image
                    src={Windowslogo}
                    alt="Desktop app"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px]">Desktop app</p>
                </div>
                <div className="flex select-none cursor-pointer gap-2 pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] active:translate-y-1 duration-200">
                  <Image
                    src={secondelementlogo}
                    alt="VR"
                    width={24}
                    height={24}
                  />
                  <p className="text-[14px]">VR</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 group">
              <button className="pt-[10px] pb-[10px] pr-[24px] pl-[24px] bg-[#FFFFFF1A] rounded-[30px] hover:bg-[#EB5739] transition-all duration-1000 active:translate-y-1">
                About game
              </button>
              <button className="pt-[10px] pb-[10px] pr-[24px] pl-[24px] bg-[#FFFFFF1A] rounded-[30px] hover:bg-[#EB5739] active:translate-y-1 duration-1000">
                Download
              </button>
            </div>
          </div>
          <div className="mr-52 flex items-center">
            <Image className="w-[500px]" src={backlogo} alt="Back logo" />
            <div className="relative -top-[30px] right-[190px] ">
              <div
                onClick={handleVideoOpen}
                className="relative top-10 flex items-center justify-center w-28 h-28 bg-opacity-50 bg-[#FFFFFF1F] rounded-full cursor-pointer"
              >
                <div className="relative flex items-center justify-center w-24 h-24 bg-opacity-50 bg-[#FFFFFF1F] rounded-full">
                  <div className="absolute inset-1 bg-red-500 opacity-75 rounded-full animate-ping"></div>
                  <div className="relative flex items-center justify-center w-[70px] h-[70px] bg-opacity-70 bg-white rounded-full">
                    <svg
                      className="w-8 h-8 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Overlay */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-[90%] h-[90vh] bg-[#14141411] rounded-lg flex items-center justify-center">
              <button
                onClick={handleVideoClose}
                className="absolute top-1 right-10 text-white text-6xl font-mono hover:text-blue-700 duration-1000"
              >
                &times;
              </button>
              <video
                src="../../public/icons/logo.png"
                controls
                autoPlay
                className="w-[50%] h-[50%] rounded-lg"
              ></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videolayout;

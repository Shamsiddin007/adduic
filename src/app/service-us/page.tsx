"use client";
import Image from "next/image";

import Fire from "/public/icons/olov.png";
import Game from "public/Imgs/games1.png";
import Game1 from "public/Imgs/positionimg.png";
import { useState } from "react";

function Page() {
  const slides = [...Array(5)]; // 5 ta slayd
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pb-[500px]">
      {/* Hero Section */}
      <div className="bg-custom w-full flex flex-col items-center h-[500px] sm:h-[700px] justify-center">
        <span className="flex gap-2 items-center bg-[#202123] w-[90%] sm:w-[380px] rounded-full text-white text-xs sm:text-sm py-2 px-3 font-sans mb-4">
          <Image
            src={Fire}
            alt="FireLogo"
            className="drop-shadow-custom-yellow"
          />{" "}
          Working day & night to bring out the best results
        </span>
        <h2 className="font-bold text-4xl sm:text-6xl text-white text-center">
          OUR <span className="text-blue-600">SERVICES</span>
        </h2>
        <p className="text-gray-500 text-center w-[90%] sm:w-[50%] pt-4 text-sm sm:text-base">
          We provide comprehensive development solutions focused on creating
          engaging, interactive experiences that enhance user engagement,
          learning, and entertainment across a variety of platforms and
          applications.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="flex flex-col items-center pb-28 text-white text-xs sm:text-sm mt-6 sm:mt-20">
        <div className="relative w-4 h-8 sm:w-6 sm:h-12 border-2 border-white rounded-full flex items-center justify-center mb-2">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll" />
        </div>
        <p>Scroll to continue</p>
      </div>

      {/* Services Section */}
      <div className="container px-4 sm:px-0">
        {/* Slider - Visible only on mobile (hidden on desktop) */}
        <div className="relative w-full overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((_, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-4 relative">
                  {/* Background Image */}
                  <Image
                    src={Game1}
                    alt=""
                    className="absolute top-0 right-0 hidden sm:block lg:w-auto"
                  />

                  {/* Icon */}
                  <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                    <Image src={Game} alt="" />
                  </div>

                  {/* Title */}
                  <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                    Game development
                  </h1>

                  {/* Description */}
                  <p className="text-[#FFFFFF66] text-sm w-[80%]">
                    We constantly push the boundaries of creativity and technology
                    to deliver groundbreaking experiences that captivate and
                    inspire.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white rounded-full w-15 h-15 flex items-center justify-center"
            onClick={handlePrev}
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={handleNext}
          >
            ›
          </button>
        </div>

        {/* Static Grid - Visible only on desktop (md and up) */}
        <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 md:block hidden">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-4 relative"
            >
              {/* Background Image */}
              <Image
                src={Game1}
                alt=""
                className="absolute top-0 right-0 hidden sm:block lg:w-auto"
              />

              {/* Icon */}
              <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                <Image src={Game} alt="" />
              </div>

              {/* Title */}
              <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                Game development
              </h1>

              {/* Description */}
              <p className="text-[#FFFFFF66] text-sm w-[80%]">
                We constantly push the boundaries of creativity and technology
                to deliver groundbreaking experiences that captivate and
                inspire.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;

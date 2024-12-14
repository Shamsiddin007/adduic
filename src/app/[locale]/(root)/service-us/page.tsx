
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import Fire from "/public/icons/olov.png";
import Desktop from "public/icons/desctop.png";
import DesktopBig from "public/icons/desctopBig.png";
import Mobile from "public/icons/mobile.png";
import MobileBig from "public/icons/mobileBig.png";
import Vr from "public/icons/VR.png";
import VrBig from "public/icons/VRBig.png";
import Simulators from "public/icons/Simulators.png";
import SimulatorsBig from "public/icons/SimulatorsBig.png";
import Gamifications from "public/icons/gamifications.png";
import GamificationsBig from "public/icons/gamificationsBig.png";

function Page() {
  const slides = [...Array(5)]; // 5 slides
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("HomePage");

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 2000);

      return () => clearInterval(interval);
    }, [slides.length]);

  const [firstElement, secondElement] = t("services_title").split(" ");

  return (
    <div className="pb-[500px]">
      <div className="bg-custom w-full flex flex-col items-center h-[100vh] justify-center pt-[250px]">
        <span className="flex gap-2 items-center bg-[#202123] w-[90%] sm:w-[380px] rounded-full text-white text-xs sm:text-sm py-2 px-3 font-sans mb-4">
          <Image
            src={Fire}
            alt="FireLogo"
            className="drop-shadow-custom-yellow"
          />
          {t("working_message")}
        </span>
        <h2 className="font-bold text-4xl sm:text-6xl text-white text-center pt-[20px] pb-[20px]">
          {firstElement} <span className="text-blue-600">{secondElement}</span>
        </h2>
        <p className="text-gray-500 text-center w-[90%] sm:w-[50%] pt-4 text-sm sm:text-base">
          {t("services_description")}
        </p>
        <div className="pt-[50px] flex flex-col items-center pb-16 text-white text-xs sm:text-sm mt-6 sm:mt-16 sm:mb-16">
          <div className="relative w-4 h-8 sm:w-6 sm:h-12 border-2 border-white rounded-full flex items-center justify-center mb-2">
            <div className="w-1 h-2 bg-white rounded-full animate-ping" />
          </div>
          <p>{t("scroll_anim")}</p>
        </div>
      </div>

      <div className="container px-4 py-12 sm:px-0">
        <div className="relative w-full overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="w-full flex-shrink-0 px-4">
              <div className="w-full mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
                <Image
                  src={DesktopBig}
                  alt="Game1Icon"
                  className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
                />

                <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                  <Image src={Desktop} alt="GameIcon" />
                </div>

                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                 {t("service_game_box.title_game_service1")}
                </h1>
                <p className="text-[#FFFFFF66] text-sm">
                  {t("service_game_box.description_game_service1")}
                </p>
              </div>
            </div>
            <div className="w-full flex-shrink-0 px-4">
              <div className="w-full mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
                <Image
                  src={MobileBig}
                  alt="Game1Icon"
                  className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
                />

                <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                  <Image src={Mobile} alt="GameIcon" />
                </div>

                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                  {t("service_game_box.title_game_service2")}
                </h1>
                <p className="text-[#FFFFFF66] text-sm">
                  {t("service_game_box.description_game_service2")}
                </p>
              </div>
            </div>
            <div className="w-full flex-shrink-0 px-4">
              <div className="w-full mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
                <Image
                  src={VrBig}
                  alt="Game1Icon"
                  className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
                />

                <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                  <Image src={Vr} alt="GameIcon" />
                </div>

                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                  {t("service_game_box.title_game_service3")}
                </h1>
                <p className="text-[#FFFFFF66] text-sm">
                  {t("service_game_box.description_game_service3")}
                </p>
              </div>
            </div>
            <div className="w-full flex-shrink-0 px-4">
              <div className="w-full mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
                <Image
                  src={SimulatorsBig}
                  alt="Game1Icon"
                  className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
                />

                <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                  <Image src={Simulators} alt="GameIcon" />
                </div>

                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                  {t("service_game_box.title_game_service4")}
                </h1>
                <p className="text-[#FFFFFF66] text-sm">
                  {t("service_game_box.description_game_service4")}
                </p>
              </div>
            </div>
            <div className="w-full flex-shrink-0 px-4">
              <div className="w-full mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
                <Image
                  src={GamificationsBig}
                  alt="Game1Icon"
                  className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
                />

                <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
                  <Image src={Gamifications} alt="GameIcon" />
                </div>

                <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
                  {t("service_game_box.title_game_service5")}
                </h1>
                <p className="text-[#FFFFFF66] text-sm">
                  {t("service_game_box.description_game_service5")}
                </p>
              </div>
            </div>
          </div>

          <button
            aria-label="Prew"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white rounded-full w-15 h-15 text-[28px] flex items-center justify-center"
            onClick={handlePrev}
          >
            ‹
          </button>
          <button
          aria-label="Next"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full w-10 h-10 text-[28px] flex items-center justify-end"
            onClick={handleNext}
          >
            ›
          </button>
        </div>

        <div className="md:grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-8 hidden">
          <div className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
            <Image
              src={DesktopBig}
              alt="Game1Icon"
              className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
            />

            <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
              <Image src={Desktop} alt="GameIcon" />
            </div>

            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
              {t("service_game_box.title_game_service1")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm w-[90%]">
              {t("service_game_box.description_game_service1")}
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
            <Image
              src={MobileBig}
              alt="Game1Icon"
              className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
            />

            <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
              <Image src={Mobile} alt="GameIcon" />
            </div>

            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
              {t("service_game_box.title_game_service2")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm w-[90%]">
              {t("service_game_box.description_game_service2")}
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
            <Image
              src={VrBig}
              alt="Game1Icon"
              className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
            />

            <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
              <Image src={Vr} alt="GameIcon" />
            </div>

            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
              {t("service_game_box.title_game_service3")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm w-[90%]">
              {t("service_game_box.description_game_service3")}
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
            <Image
              src={SimulatorsBig}
              alt="Game1Icon"
              className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
            />

            <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
              <Image src={Simulators} alt="GameIcon" />
            </div>

            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
              {t("service_game_box.title_game_service4")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm w-[90%]">
              {t("service_game_box.description_game_service4")}
            </p>
          </div>
          <div className="w-[90%] mx-auto rounded-[20px] bg-[#3375F60D] p-5 relative">
            <Image
              src={GamificationsBig}
              alt="Game1Icon"
              className="absolute top-0 p-5 right-0 hidden sm:block lg:w-auto"
            />

            <div className="bg-[#3375F6] w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px] flex items-center justify-center rounded-full mb-4 md:mb-6 lg:mb-8">
              <Image src={Gamifications} alt="GameIcon" />
            </div>

            <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold">
            {t("service_game_box.title_game_service5")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm w-[90%]">
              {t("service_game_box.description_game_service5")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

"use client";
import Image from "next/image";
import {Link} from "@/navigation";
import { useState, useEffect } from "react";
import Windowslogo from "../../public/icons/Windowslogo.png";
import elementlogo from "../../public/icons/Element.png";
import secondelementlogo from "../../public/icons/fi_10781896.png";
import backlogo from "../../public/icons/Logos.png";
import style from "@/components/style.module.css"
import CloseBtn from "/public/Imgs/close-428 1.png";
import { useLocale, useTranslations } from "next-intl";


const Videolayout = () => {
  const t = useTranslations("HomePage")
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const locale = useLocale()

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
    setIsVideoLoading(true);
  };
  const handleVideoClose = () => setIsVideoOpen(false);

  useEffect(() => {
    document.body.style.overflow = isVideoOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoOpen]);

  const platforms = [
    { icon: elementlogo, name: t("platforms.Web_app") },
    { icon: Windowslogo, name: t("platforms.desktop_app") },
    { icon: secondelementlogo, name: t("platforms.vr") },
  ];

  const [firstTitle, secondTitle] = t("game_title").split(" ")

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="w-full h-full text-white bg-no-repeat bg-cover rounded-[20px] sm:rounded-[40px] mb-20 mt-4 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to left,#3c1d1b, transparent,transparent,#3d1c1b), url('/icons/coverimg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="p-6 sm:p-12 w-full lg:w-1/2">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] uppercase font-bold">
                {firstTitle} <span className="text-orange-600">{secondTitle}</span>
              </h1>
              <p className="text-sm sm:text-base text-white/90 max-w-xl">
                {t("game_description")}
              </p>
            </div>
            <div className="mt-8 sm:mt-12 mb-8 sm:mb-20">
              <h2 className="mb-4 text-sm sm:text-base">{t("available")}</h2>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {platforms.map((platform) => (
                  <button
                  aria-label="button"
                    key={platform.name}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-white/10 rounded-lg hover:bg-white/20 active:translate-y-0.5 transition-all duration-200"
                  >
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-xs sm:text-sm">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
            <Link href={`${locale}/portfolio/6`}>
                <button aria-label="button" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 rounded-full hover:bg-[#EB5739] transition-all duration-300 text-sm sm:text-base active:translate-y-0.5">
                  {t("about_game")}
                </button>
            </Link>
            <Link href={"https://mangusarkarda.com/"} target="blank">
              <button aria-label="button" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 rounded-full hover:bg-[#EB5739] transition-all duration-300 text-sm sm:text-base active:translate-y-0.5">
                {t("download")}
              </button>
            </Link>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 p-6 sm:p-12 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={backlogo}
                alt="Back logo"
                className="w-[280px] sm:w-[400px] lg:w-[500px] h-auto"
              />
              <button
              aria-label="button"
                onClick={handleVideoOpen}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
              >
                <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-1 bg-red-500 opacity-75 rounded-full animate-ping"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/70 rounded-full group-hover:bg-white transition-colors duration-300">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-6xl aspect-video bg-black/20 rounded-lg">
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="loader">Loading...</div>
                </div>
              )}
              <button
                onClick={handleVideoClose}
                className="absolute -top-1 right-1 z-[11] cursor-pointer text-white font-thin hover:text-blue-500 transition-colors duration-300"
                aria-label="Close video"
              >
                <Image src={CloseBtn} alt="close btn" width={40} height={40}/>
              </button>
              <div className={style.video}>
                <div className={style.video_child}>
                <iframe
                  onLoad={() => setIsVideoLoading(false)} // Yuklash tugagach animatsiyani o'chirish
                  width="80%"
                  height="80%"
                  src="https://www.youtube.com/embed/mxV0AD_2Gek"
                  title="“Mangu Sarkarda” - Oʻzbekistondagi ilk tarixiy video oʻyin treyleri!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="mt-20"
                ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videolayout;

"use client";
import Image from "next/image";
import Fire from "/public/icons/olov.png";
import Game from "public/Imgs/games1.png";
import Game1 from "public/Imgs/positionimg.png";
import Portfolio from "../portfolio/page";
import { useTranslations } from "next-intl";
import { useRef } from "react";
function Page() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("HomePage");

  const left = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const right = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const [firstTitle, secondTitle, thirtTitle] = t(
    "about_page.title_about"
  ).split(" ");
  const [our, work, values] = t("about_page.title_our_work").split(" ");
  const [what, can, we, doo] = t("about_page.what_can").split(" ");

  return (
    <div>
      <div
        className="bg-no-repeat bg-center bg-cover w-full flex flex-col items-center h-[700px] justify-center"
        style={{
          backgroundImage:
            "linear-gradient(-1deg, #040509, rgba(0,0,0, .5),rgba(0,0,0, .8) 480%), url('/Imgs/aboutbg.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full pt-32 md:pt-56 px-4 md:px-0 pb-36">
          <span className="flex justify-center gap-2 items-center bg-[#202123] w-full max-w-[450px] rounded-full text-white text-xs md:text-sm py-3 px-3 font-sans mb-4 md:mb-7">
            <Image
              src={Fire}
              alt="FireLogo"
              className="drop-shadow-custom-yellow"
              width={20}
              height={20}
            />
            {t("working_message")}
          </span>

          <h2 className="font-bold text-4xl md:text-6xl text-white uppercase text-center">
            {firstTitle} {secondTitle}{" "}
            <span className="text-blue-600">{thirtTitle}</span> ?
          </h2>

          <p className="text-gray-500 text-center max-w-[90%] md:max-w-[800px] lg:max-w-[1184px] pt-4 md:pt-8 text-sm md:text-base">
            {t("about_page.description_about")}
          </p>
        </div>
      </div>
      <div className="container text-white">
        <div className="mt-20 flex flex-col gap-9 items-center">
          <p className="text-xl text-gray-500">
            {t("about_page.title_about_small")}
          </p>
          <h2 className="font-bold text-4xl md:text-6xl text-white uppercase text-center">
            {our} {work} <span className="text-blue-600">{values}</span>
          </h2>
        </div>
        <div className="part2-about" ref={sliderRef}>
          <div className="about-child cursor-pointer group transition-all  hover:bg-[linear-gradient(-330deg,_#0a2346_12%,_transparent_90%,_#3375F60A_99%)] duration-1000 ease-in-out">
            <div className="about-child-circle flex items-center justify-center relative z-1">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                className="group-hover:stroke-blue-600 transition duration-100"
              >
                <path
                  d="M1.5 18H3.33333M18 1.5V3.33333M32.6667 18H34.5M6.26667 6.26667L7.55 7.55M29.7333 6.26667L28.45 7.55M13.7833 27.1667H22.2167M12.5 25.3333C10.9609 24.179 9.82394 22.5696 9.25029 20.7332C8.67664 18.8968 8.69534 16.9264 9.30374 15.1012C9.91213 13.2761 11.0794 11.6886 12.6402 10.5636C14.2009 9.43868 16.0761 8.83333 18 8.83333C19.9239 8.83333 21.7991 9.43868 23.3598 10.5636C24.9206 11.6886 26.0879 13.2761 26.6963 15.1012C27.3047 16.9264 27.3234 18.8968 26.7497 20.7332C26.1761 22.5696 25.0391 24.179 23.5 25.3333C22.7842 26.0419 22.2453 26.909 21.9268 27.8645C21.6083 28.82 21.5192 29.837 21.6667 30.8333C21.6667 31.8058 21.2804 32.7384 20.5927 33.4261C19.9051 34.1137 18.9725 34.5 18 34.5C17.0275 34.5 16.0949 34.1137 15.4073 33.4261C14.7196 32.7384 14.3333 31.8058 14.3333 30.8333C14.4808 29.837 14.3917 28.82 14.0732 27.8645C13.7547 26.909 13.2158 26.0419 12.5 25.3333Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blue-600 transition duration-100"
                />
              </svg>
            </div>
            <h1 className="text-[24px] pb-2">
              {t("about_page.title_innovation")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm text-center ">
              {t("about_page.description_innovation")}
            </p>
          </div>
          <div className="about-child cursor-pointer group hover:bg-[linear-gradient(-330deg,_#0a2346_12%,_transparent_90%,_#3375F60A_99%)]">
            <div className="about-child-circle flex items-center justify-center relative z-1">
              <svg
                width="37"
                height="34"
                viewBox="0 0 37 34"
                fill="none"
                className="group-hover:stroke-blue-600 transition duration-100"
              >
                <path
                  d="M32.75 18.0487L19 31.6667L5.24999 18.0487C4.34305 17.1661 3.62867 16.1054 3.15183 14.9332C2.67499 13.761 2.44602 12.5028 2.47934 11.2377C2.51267 9.9727 2.80756 8.72827 3.34545 7.5828C3.88334 6.43734 4.65257 5.41565 5.60472 4.58208C6.55686 3.74851 7.67129 3.12112 8.87781 2.7394C10.0843 2.35769 11.3568 2.22992 12.6152 2.36415C13.8735 2.49839 15.0904 2.89171 16.1893 3.51935C17.2881 4.14699 18.2451 4.99535 19 6.01102C19.7581 5.00273 20.7162 4.16177 21.8143 3.54079C22.9124 2.91981 24.1269 2.53218 25.3817 2.40214C26.6365 2.2721 27.9046 2.40247 29.1067 2.78507C30.3088 3.16768 31.419 3.79429 32.3678 4.62569C33.3166 5.45708 34.0836 6.47537 34.6208 7.61682C35.1579 8.75827 35.4537 9.99831 35.4896 11.2593C35.5254 12.5203 35.3006 13.7752 34.8292 14.9453C34.3578 16.1155 33.65 17.1757 32.75 18.0597"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blue-600 transition duration-100"
                />
              </svg>
            </div>
            <h1 className="text-[24px] pb-2">
              {t("about_page.title_passion")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm text-center">
              {t("about_page.description_passion")}
            </p>
          </div>
          <div className="about-child cursor-pointer group hover:bg-[linear-gradient(-330deg,_#0a2346_12%,_transparent_90%,_#3375F60A_99%)]">
            <div className="about-child-circle flex items-center justify-center relative z-1">
              <svg
                width="37"
                height="34"
                viewBox="0 0 37 34"
                fill="none"
                className="group-hover:stroke-blue-600 transition duration-100"
              >
                <path
                  d="M32.7501 18.0486L19.0001 31.6666L5.25011 18.0486C4.34317 17.1661 3.62878 16.1053 3.15194 14.9331C2.6751 13.7609 2.44614 12.5027 2.47946 11.2377C2.51278 9.97264 2.80767 8.72821 3.34556 7.58274C3.88345 6.43728 4.65269 5.41559 5.60483 4.58202C6.55698 3.74845 7.6714 3.12105 8.87793 2.73934C10.0845 2.35762 11.357 2.22986 12.6153 2.36409C13.8736 2.49833 15.0905 2.89165 16.1894 3.51929C17.2882 4.14693 18.2452 4.99529 19.0001 6.01096C19.7583 5.00267 20.7164 4.16171 21.8145 3.54073C22.9126 2.91975 24.127 2.53212 25.3818 2.40208C26.6366 2.27204 27.9048 2.4024 29.1069 2.78501C30.309 3.16762 31.4192 3.79423 32.368 4.62562C33.3168 5.45702 34.0837 6.47531 34.6209 7.61676C35.158 8.75821 35.4538 9.99824 35.4897 11.2593C35.5255 12.5203 35.3008 13.7751 34.8294 14.9453C34.358 16.1154 33.6501 17.1756 32.7501 18.0596M19 5.99997L12.9628 12.0371C12.6191 12.3809 12.426 12.8472 12.426 13.3333C12.426 13.8194 12.6191 14.2857 12.9628 14.6295L13.9583 15.625C15.2233 16.89 17.2766 16.89 18.5416 15.625L20.375 13.7916C21.469 12.6976 22.9528 12.083 24.5 12.083C26.0471 12.083 27.5309 12.6976 28.625 13.7916L32.75 17.9166M19.9167 23.4166L23.5833 27.0833M24.5 18.8333L28.1667 22.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blue-600 transition duration-100"
                />
              </svg>
            </div>
            <h1 className="text-[24px] pb-2">
              {t("about_page.title_collaboration")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm text-center">
              {t("about_page.description_collaboration")}
            </p>
          </div>
          <div className="about-child cursor-pointer group hover:bg-[linear-gradient(-330deg,_#0a2346_12%,_transparent_90%,_#3375F60A_99%)]">
            <div className="about-child-circle flex items-center justify-center relative z-1">
              <svg
                width="36"
                height="31"
                viewBox="0 0 36 31"
                fill="none"
                className="group-hover:stroke-blue-600 transition duration-100"
              >
                <path
                  d="M14.3333 15L10.6667 10.9667L11.7667 9.13333M7 2.16666H29L34.5 11.3333L18.9167 28.75C18.7972 28.8719 18.6546 28.9688 18.4972 29.035C18.3398 29.1011 18.1707 29.1352 18 29.1352C17.8293 29.1352 17.6602 29.1011 17.5028 29.035C17.3454 28.9688 17.2028 28.8719 17.0833 28.75L1.5 11.3333L7 2.16666Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blue-600 transition duration-100"
                />
              </svg>
            </div>
            <h1 className="text-[24px] pb-2">
              {" "}
              {t("about_page.title_quality")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm text-center">
              {t("about_page.description_quality")}
            </p>
          </div>
          <div className="about-child cursor-pointer group hover:bg-[linear-gradient(-330deg,_#0a2346_12%,_transparent_90%,_#3375F60A_99%)]">
            <div className="about-child-circle flex items-center justify-center relative z-1">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                className="group-hover:stroke-blue-600 transition duration-100"
              >
                <path
                  d="M1.5 18H3.33333M18 1.5V3.33333M32.6667 18H34.5M6.26667 6.26667L7.55 7.55M29.7333 6.26667L28.45 7.55M13.7833 27.1667H22.2167M12.5 25.3333C10.9609 24.179 9.82394 22.5696 9.25029 20.7332C8.67664 18.8968 8.69534 16.9264 9.30374 15.1012C9.91213 13.2761 11.0794 11.6886 12.6402 10.5636C14.2009 9.43868 16.0761 8.83333 18 8.83333C19.9239 8.83333 21.7991 9.43868 23.3598 10.5636C24.9206 11.6886 26.0879 13.2761 26.6963 15.1012C27.3047 16.9264 27.3234 18.8968 26.7497 20.7332C26.1761 22.5696 25.0391 24.179 23.5 25.3333C22.7842 26.0419 22.2453 26.909 21.9268 27.8645C21.6083 28.82 21.5192 29.837 21.6667 30.8333C21.6667 31.8058 21.2804 32.7384 20.5927 33.4261C19.9051 34.1137 18.9725 34.5 18 34.5C17.0275 34.5 16.0949 34.1137 15.4073 33.4261C14.7196 32.7384 14.3333 31.8058 14.3333 30.8333C14.4808 29.837 14.3917 28.82 14.0732 27.8645C13.7547 26.909 13.2158 26.0419 12.5 25.3333Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blue-600 transition duration-100"
                />
              </svg>
            </div>
            <h1 className="text-[24px] pb-2">
              {t("about_page.title_creativity")}
            </h1>
            <p className="text-[#FFFFFF66] text-sm text-center">
              {t("about_page.description_creativity")}
            </p>
          </div>
          <div className="about-child cursor-pointer group hover:bg-[linear-gradient(-330deg,_#0a2346_12%,_transparent_90%,_#3375F60A_99%)]">
            <div className="about-child-circle flex items-center justify-center relative z-1">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                className="group-hover:stroke-blue-600 transition duration-100"
              >
                <path
                  d="M29 34.5V8.83333M29 8.83333L23.5 14.3333M29 8.83333L34.5 14.3333M12.5 23.5L18 18M18 18L23.5 23.5M18 18V34.5M1.5 34.5H34.5M1.5 7L7 1.5M7 1.5L12.5 7M7 1.5V34.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-blue-600 transition duration-100"
                />
              </svg>
            </div>
            <h1 className="text-[24px] pb-2">{t("about_page.title_growth")}</h1>
            <p className="text-[#FFFFFF66] text-sm text-center">
              {t("about_page.description_growth")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end mt-5 gap-7 buttonSlayderAbout">
          <button
            onClick={left}
            aria-label="Left"
            className="text-blue-700 text-5xl transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors duration-300"
          >
            ‹
          </button>
          <button
          aria-label="Right"
            onClick={right}
            className="text-blue-700 text-5xl transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-colors duration-300"
          >
            ›
          </button>
        </div>
        <div className="part3-about">
          <div>
            <h1 className="header">
              {what} {can}{" "}
              <span>
                {we} {doo}
              </span>
            </h1>
            <p className="paragraph">{t("about_page.about_ourcompany")}</p>
            <div className="button-container">
              <button className="button" aria-label="Main">
                {t("services_buttons.more_about_us")}
              </button>
              <button className="button" aria-label="Main">
                {t("services_buttons.contact_us")}
              </button>
            </div>
          </div>
          <div className="card">
            <Image
              src={Game1}
              alt="Img keyboard"
              className="card-image"
              width={193}
              height={129}
            />
            <div className="icon">
              <Image src={Game} alt="Icon Game Logo" width={44} height={44} />
            </div>
            <h1 className="card-title">{t("game_development.title")}</h1>
            <p className="card-text">{t("game_development.description")}</p>
          </div>
        </div>

        <div className="pb-[50px] mt-0">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Page;

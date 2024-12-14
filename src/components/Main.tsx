import Image from "next/image";
import Fire from "/public/icons/olov.png";
import styles from "./style.module.css";
import { useTranslations } from "next-intl";

export default function Mani() {

  const t = useTranslations("HomePage")

  const [firstTitle, secondTitle, thirtTitle, fourTitle] = t("main_title").split(" ")

  return (
    <div className="relative">
      <div className="relative hidden sm:block">
        <div
          className="absolute top-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(48,18,90,0.8) 0%, rgba(48,18,90,0) 80%)",
            boxShadow: "0px 0px 170px 150px rgba(48,18,90,0.6)",
            backdropFilter: "blur(60px)",
          }}
        ></div>
      </div>

      <div className="container">
        <div className="relative mb-16">
          <div className={`${styles.solder}`}></div>
          <div className="w-[100%] h-[30%] lg:h-[20%] absolute -z-2 bottom-[25px] bg-custom-radial"></div>
          <div className="container md:h-screen h-[78vh] mt-[50px]">
            <div
              className="absolute bottom-[250px] right-[399px] rounded-full -z-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(51,117,246,0.8) 0%, rgba(51,117,246,0) 80%)",
                boxShadow: "0px 0px 150px 150px rgba(51,117,246,0.6)",
                backdropFilter: "blur(60px)",
              }}
            ></div>
            <div className="absolute bottom-0">
              <span className="mb-6 flex gap-2 items-center bg-[#202123] sm:w-[450px] w-[300px] rounded-full text-white text-sm py-3 sm:px-4 px-2 font-sans md:text-xs">
                <Image
                  src={Fire}
                  alt="FireLogo"
                  className="drop-shadow-custom-yellow"
                />
                {t("working_message")}
              </span>
             <h1 className="max-w-[70%] mb-12 md:mb-16 lg:mb-[100px] xl:mb-[180px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-white tracking-wider">
                {firstTitle}
                <span className="relative text-blue-500 border border-blue-500 inline-block mb-2 mx-4">
                  <span className="absolute -top-1 bg-white -left-1 w-2 h-2"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white"></span>
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></span>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></span>
                  <span className="relative mx-2">{secondTitle}</span>
                </span>{" "}
                {thirtTitle} {t("main_title1")}
                <span className="relative text-blue-500 border border-blue-500 inline-block ml-3">
                  <span className="absolute -top-1 bg-white -left-1 w-2 h-2"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white"></span>
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white"></span>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white"></span>
                  <span className="relative">{fourTitle}</span>
                </span>
              </h1>
              <p className=" text-white font-sans text-base pb-14 text-center max-w-[90%] md:max-w-[75%]">
                {t("description_first_home")}
              </p>
            </div>
            <div className="absolute -z-2 inset-0 bg-gradient-to-b from-transparent to-black shadow-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import {Link} from "@/navigation";
import order1 from "public/Imgs/Order1.png";
import order2 from "public/Imgs/Order2.png";
import order3 from "public/Imgs/Order3.png";
import order4 from "public/Imgs/Order4.png";
import arrowdown from "public/icons/arrowblack.png";
import { useTranslations } from "next-intl";

export default function Acceptance() {

  const t = useTranslations("HomePage.praktikum_box");

  const [firstElement, secondElement] = t("acceptance_title").split(" ")

  return (
    <div className="container">
      <h2 className="font-bold lg:text-5xl text-4xl sm:text-start text-center text-white font-sans uppercase md:leading-[50px] md:pb-10 ">
        {firstElement} <span className="text-blue-600">{secondElement}</span>
      </h2>
      <div className="grid xl:grid-cols-4 xl:grid-rows-1 lg:grid-cols-3 sm:grid-cols-2 justify-center gap-6 w-full text-white mb-16">
        <div className="flex flex-col items-center">
          <Image src={order1} alt="order01" className="w-full h-auto" />
          <div className="px-6 py-5 rounded-[20px] relative group overflow-hidden h-full">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                {t("info_bots.info_bot_title")}
              </h5>
              <p className="font-sans opacity-60 pb-[12px]">
                {t("info_bots.info_bot_desc1")}
              </p>
              <Link href={"https://t.me/UICGames_bot"} target="_blank" className="inline-block">
                <button aria-label="info_bots.info_bot_btn" className="flex items-center gap-3 mt-[50px] bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {t("info_bots.info_bot_btn")} <Image src={arrowdown} alt="arrowdown" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order2} alt="order01" className="w-full h-auto"/>
          <div className="px-6 py-5 rounded-[20px] relative group overflow-hidden h-full">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                {t("info_bots.info_bot_title")}
              </h5>
              <p className="font-sans opacity-60 pb-[12px] leading-[20px]">
                {t("info_bots.info_bot_desc2")}
              </p>
              <p className="font-sans opacity-60">
                C# basic / DS&A / Unity basic
              </p>
              <Link href={"https://t.me/UICGames_bot"} target="_blank" className="inline-block">
                <button aria-label="info_bots.info_bot_btn" className="flex items-center gap-3 mt-[65px] bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {t("info_bots.info_bot_btn")} <Image src={arrowdown} alt="arrowdown" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order3} alt="order01" className="w-full h-auto"/>
          <div className="px-6 py-5 rounded-[20px] h-full relative group overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                {t("info_bots.info_bot_title")}
              </h5>
              <p className="font-sans opacity-60 pb-[8px] leading-[20px]">
                {t("info_bots.info_bot_desc3")}
              </p>
              <p className="font-sans opacity-60 leading-[20px] pb-2">
                {t("info_bots.info_bot_desc4")}
              </p>
              <Link href={"https://t.me/UICGames_bot"} target="_blank" className="inline-block">
                <button aria-label="info_bots.info_bot_btn" className="flex items-center gap-3 mt-[5px] bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {t("info_bots.info_bot_btn")} <Image src={arrowdown} alt="arrowdown" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order4} alt="order01" className="w-full h-auto"/>
          <div className="px-6 py-5 rounded-[20px] relative group overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10 ">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                {t("info_bots.info_bot_title")}
              </h5>
              <p className="font-sans opacity-60 pb-[12px] leading-[20px]">
                {t("info_bots.info_bot_desc5")}
              </p>
              <p className="font-sans opacity-60 leading-[20px]">
                {t("info_bots.info_bot_desc6")}
              </p>
              <Link href={"https://t.me/UICGames_bot"} target="_blank" className="inline-block">
                <button aria-label="aria" className="flex items-center gap-3 mt-6 bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
                  {t("info_bots.info_bot_btn")} <Image src={arrowdown} alt="arrowdown" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

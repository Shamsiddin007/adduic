import Image from "next/image";
import Arrow from "public/icons/arrowblack.png";
import Earth from "public/Imgs/BlueEarth.png";
import BagIcon from "public/icons/bag.png";
import rounded1 from "public/icons/rounded1.png";
import rounded2 from "public/icons/rounded2.png";
import rounded3 from "public/icons/rounded3.png";
import Basics from "public/icons/learnBasics.png";
import Make from "public/icons/makePortfolio.png";
import Professional from "public/icons/professional.png";
import workIn from "public/icons/workintime.png";
import { useTranslations } from "next-intl";

export default function Features() {

  const t = useTranslations("HomePage")

  return (
    <div className="container">
      <h2 className="font-bold text-5xl text-white font-sans uppercase pb-10">
        {t("praktikum_box.features_title")}
      </h2>
      <div className="grid xl:grid-cols-2 justify-between gap-5 pb-16">
        <div className="">
          <div className="p-9 bg-feature rounded-[20px] border border-[#FFFFFF0D] border-opacity-95 cursor-pointer mb-5">
            <h5 className="text-[#FFFFFF] text-[48px] font-semibold">
              {t("praktikum_box.features_general_title")}
            </h5>
            <p className="text-[16px] text-[#FFFFFF] font-normal font-sans text-opacity-55">
              {t("praktikum_box.features_general_desc")}
            </p>
            <div className="flex items-end justify-end">
              <button aria-label="praktikum_box.btn_apply" className="flex items-center justify-end py-[10px] px-[24px] gap-4 bg-white rounded-full hover:bg-gray-200 transition-transform duration-300">
                {t("praktikum_box.btn_apply")} <Image src={Arrow} alt="ArrowIcons" />
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between items-center">
            <div className=" border rounded-[20px] border-[#FFFFFF0D] border-opacity-5 bg-[#10131A] relative h-[270px]">
              <div className="px-[32px] pt-[32px]">
                <h6 className="text-[28px] font-medium text-[#FFFFFF] font-sans pb-[16px]">
                  {t("praktikum_box.features_globalization_title")}
                </h6>
                <p className="text-[14px] font-normal font-sans text-[#FFFFFF] opacity-60">
                  {t("praktikum_box.features_globalization_desc")}
                </p>
              </div>
              <Image
                src={Earth}
                alt="EarthImg"
                className="ml-auto rounded-r-[20px] absolute right-0 bottom-0"
              />
            </div>
            <div className="flex flex-col items-center border rounded-[20px] border-[#FFFFFF0D] border-opacity-5 bg-[#10131A] relative h-[270px] shadow-lg text-center overflow-hidden">
              <div className="px-[32px] pt-[32px]">
                <h3 className="text-[28px] leading-8 font-medium text-[#FFFFFF] font-sans pb-2">
                  {t("praktikum_box.features_employement_title")}
                </h3>
                <p className="text-[14px] font-normal font-sans text-[#FFFFFF] opacity-60">
                  {t("praktikum_box.features_employement_desc")}
                </p>
              </div>
              <div className="flex items-center justify-center absolute bottom-0">
                <Image
                  src={rounded1}
                  alt="rounded"
                  className="absolute scale-[1.45] rounded-b rounded-[20px]"
                />
                <Image
                  src={rounded2}
                  alt="rounded"
                  className="scale-x-[1.1] scale-y-[1.03] rounded-b rounded-[20px]"
                />
                <Image
                  src={rounded3}
                  alt="rounded"
                  className="absolute bottom-0 scale-x-[1.1] scale-y-[1.03] rounded-b rounded-[20px]"
                />
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-full absolute bottom-6">
                  <Image
                    src={BagIcon}
                    alt="Contract Icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#10131A] border border-[#FFFFFF0D] border-opacity-5 rounded-[20px] p-5">
          <h2 className="text-3xl font-semibold text-white mb-3">{t("praktikum_box.study_title")}</h2>
          <p className="text-gray-400 mb-8 font-sans">
            {t("praktikum_box.study_desc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex flex-col space-x-2 items-start">
              <div className="flex items-center gap-2 pb-2">
                <Image
                  src={Basics}
                  alt="Basics"
                  className="text-blue-500 w-8 h-8"
                />
                <h3 className="text-lg font-semibold">{t("praktikum_box.learn_basic")}</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  {t("praktikum_box.learn_basic_desc")}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-x-2 items-start">
              <div className="flex items-center gap-2 pb-2">
                <Image
                  src={Make}
                  alt="Professional"
                  className="text-blue-500 w-8 h-8"
                />
                <h3 className="text-lg font-semibold">{t("praktikum_box.make_title")}</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  {t("praktikum_box.make_desc")}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-x-2 items-start">
              <div className="flex items-center gap-2 pb-2">
                <Image
                  src={Professional}
                  alt="Professional"
                  className="text-blue-500 w-8 h-8"
                />
                <h3 className="text-lg font-semibold">{t("praktikum_box.professionalMentor_title")}</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                 {t("praktikum_box.professionalMentor_desc")}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-x-2 items-start">
              <div className="flex items-center gap-2 pb-2">
                <Image src={workIn} alt="WorKInTeaM" className="" />
                <h3 className="text-lg font-semibold">{t("praktikum_box.workTema_Title")}</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  {t("praktikum_box.workTema_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
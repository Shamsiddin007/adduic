import { useTranslations } from "next-intl";
import Image from "next/image";
import Books from "public/icons/booksIcon.png";
import Vectorpeople from "public/Imgs/Vectorpeople.png";

function WhatisPracticum() {
  const t = useTranslations("HomePage");


  const [firstElement, secondElement, thirtElement] = t("praktikum_box.glav_title").split(" ")
  const [firstElement1, secondElement2] = t("praktikum_box.secondTitle_praktikum").split(" ")

  return (
    <div className="container">
      <h2 className="font-bold md:text-5xl text-3xl text-center text-white font-sans uppercase md:leading-[50px] md:pb-10 pb-5">
        {firstElement} {secondElement} <span className="text-blue-600">{thirtElement}</span>
      </h2>
      <p className="md:text-[18px] sm:text-[14px] text-[12px] font-medium text-white leading-4 md:leading-7 text-center md:pb-6 pb-3">
        {t("praktikum_box.glav_description1")}
      </p>
      <p className="text-white md:text-[14px] text-[10px] text-center opacity-80 md:w-8/12 sm:leading-5 font-sans m-auto pb-[25px]">
        {t("praktikum_box.glav_description2")}
      </p>

      <div className="md:pt-16 pb-16">
        <div className="flex items-center justify-between bg-black text-white">
          <div className="w-full">
            <h2 className="font-bold md:text-5xl text-3xl sm:text-start text-center text-white font-sans uppercase md:leading-[50px]">
              {firstElement1}<span className="text-blue-500">{secondElement2}</span>
            </h2>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
              <div className="p-6 rounded-xl bg-custom-blue border border-blue-700/35 flex-1 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-b from-gradientBlueStart to-gradientBlueEnd border border-[#3375F633] border-opacity-20 py-4 px-6 rounded-xl">
                    <Image
                      src={Books}
                      alt="BooksImg"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <span className="text-sm transparent border border-[#3375F6] rounded-full px-3 py-1 mb-[16px] cursor-pointer hover:bg-blue-500 transition-all duration-300">
                      {t("praktikum_box.month_why1")}
                    </span>
                    <h2 className="text-2xl font-semibold my-2">{t("praktikum_box.praktikum_monthTitle1")}</h2>
                    <p className="text-gray-300 font-sans mb-4">
                      {t("praktikum_box.praktikum_monthDesc1")}
                    </p>
                  </div>
                </div>
                <p className="font-sans text-[14px] text-[#FFFFFF] pb-[16px]">
                  {t("praktikum_box.praktikum_skills_title1")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["2D", "3D", "Animation", "UI/UX", "C#", "Unity"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-transparent border-[1.45px] border-[#3375F6] rounded-full cursor-pointer px-3 py-1 hover:bg-blue-500 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-custom-orange1 border border-orange-600/35 flex-1 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-b from-gradientStart to-gradientEnd border border-[#EA563866] border-opacity-20 p-6 rounded-xl">
                    <Image
                      src={Vectorpeople}
                      alt="BooksImg"
                      width={40}
                      height={45}
                      className="cursor-pointer scale-125"
                    />
                  </div>
                  <div>
                    <span className="text-sm transparent font-sans border border-borderMonth rounded-full px-3 py-1 mb-[16px] cursor-pointer hover:bg-borderMonth transition-all duration-300">
                      {t("praktikum_box.month_why2")}
                    </span>
                    <h2 className="text-2xl font-semibold font-sans my-2">{t("praktikum_box.praktikum_monthTitle2")}</h2>
                    <p className="text-gray-300 font-sans mb-4">
                      {t("praktikum_box.praktikum_monthDesc2")}
                    </p>
                  </div>
                </div>
                <p className="font-sans text-[14px] text-[#FFFFFF] pb-[16px]">
                  {t("praktikum_box.praktikum_monthTitle1")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Soft skills", "Hard skills", "ShaderLab", "Algoritm", "Solid"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-transparent border-[1.45px] border-borderMonth rounded-full cursor-pointer px-3 py-1 hover:bg-borderMonth transition-all duration-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatisPracticum;
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

export default function Features() {
  return (
    <div className="container">
      <h2 className="font-bold text-5xl text-white font-sans uppercase pb-10">
        Features
      </h2>
      <div className="grid xl:grid-cols-2 justify-between gap-5 pb-16">
        <div className="">
          <div className="p-9 bg-feature rounded-[20px] border border-[#FFFFFF0D] border-opacity-95 cursor-pointer mb-5">
            <h5 className="text-[#FFFFFF] text-[48px] font-semibold">
              General
            </h5>
            <p className="text-[16px] text-[#FFFFFF] font-normal font-sans text-opacity-55">
              This practicum provides hands-on experience <br /> and insights
              for aspiring game developers to <br /> enhance their skills.
            </p>
            <div className="flex items-end justify-end">
              <button className="flex items-center justify-end py-[10px] px-[24px] gap-4 bg-white rounded-full hover:bg-gray-200 transition-transform duration-300">
                Apply <Image src={Arrow} alt="ArrowIcons" />
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between items-center">
            <div className=" border rounded-[20px] border-[#FFFFFF0D] border-opacity-5 bg-[#10131A] relative h-[270px]">
              <div className="px-[32px] pt-[32px]">
                <h6 className="text-[28px] font-medium text-[#FFFFFF] font-sans pb-[16px]">
                  Globalization
                </h6>
                <p className="text-[14px] font-normal font-sans text-[#FFFFFF] opacity-60">
                  Join projects for competitive <br /> games and prepare for the{" "}
                  <br /> global market
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
                  Employment contract
                </h3>
                <p className="text-[14px] font-normal font-sans text-[#FFFFFF] opacity-60">
                  Gain valuable experience with a <br /> 1 year contract,
                  launching your <br /> career in tech
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
          <h2 className="text-3xl font-semibold text-white mb-3">Study</h2>
          <p className="text-gray-400 mb-8 font-sans">
            Deepen your knowledge and expertise through focused learning and
            hands-on experience, advancing your skills for success in the
            industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex flex-col space-x-2 items-start">
              <div className="flex items-center gap-2 pb-2">
                <Image
                  src={Basics}
                  alt="Basics"
                  className="text-blue-500 w-8 h-8"
                />
                <h3 className="text-lg font-semibold">Learn basics</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  Build a strong foundation by mastering core principles and
                  essential skills, setting the stage for future growth and
                  success in the industry.
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
                <h3 className="text-lg font-semibold">Make portfolio</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  Showcase your skills and accomplishments by creating a
                  standout portfolio, demonstrating your expertise and
                  creativity to potential employers or clients.
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
                <h3 className="text-lg font-semibold">Professional Mentors</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  Gain insights and guidance from experienced mentors through
                  personalized support and masterclasses, helping you refine
                  your skills and achieve your career goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-x-2 items-start">
              <div className="flex items-center gap-2 pb-2">
                <Image src={workIn} alt="WorKInTeaM" className="" />
                <h3 className="text-lg font-semibold">Work in Team</h3>
              </div>
              <div>
                <p className="text-gray-400 font-sans leading-[23px]">
                  Collaborate effectively in team environments, developing your
                  communication and teamwork skills while working on real
                  projects that have the potential to be showcased to a broader
                  audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

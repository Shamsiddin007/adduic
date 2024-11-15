import Image from "next/image";
import Link from "next/link";
import order1 from "public/Imgs/Order1.png";
import order2 from "public/Imgs/Order2.png";
import order3 from "public/Imgs/Order3.png";
import order4 from "public/Imgs/Order4.png";
import arrowdown from "public/icons/arrowblack.png";

export default function Acceptance() {
  return (
    <div className="container">
      <h2 className="font-bold lg:text-5xl text-4xl sm:text-start text-center text-white font-sans uppercase md:leading-[50px] md:pb-10 ">
        Acceptance <span className="text-blue-600">conditions</span>
      </h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 w-full text-white mb-16">
        <div className="flex flex-col items-center justify-center">
          <Image src={order1} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 bg-[#10131A] cursor-pointer p-6 h-full shadow-xl rounded-[20px] hover:bg-[#02005E]  from-transparent hover:bg-gradient-to-bl  to-black transition-all duration-500">
            <h5 className="text-[20px] font-semibold pb-[20px]">
              Sign up from the bot
            </h5>
            <p className="font-sans opacity-60">
              You can enter your information and register for the exam by going
              to a special Telegram bot using the button below
            </p>
            <button className="flex items-center gap-3 bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full mt-10 hover:bg-gray-200 hover:text-black shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              Go to bot <Image src={arrowdown} alt="arrowdown" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order2} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 bg-[#10131A] cursor-pointer p-6 h-full shadow-xl rounded-[20px] hover:bg-[#02005E]  from-transparent hover:bg-gradient-to-bl  to-black transition-all duration-500">
            <h5 className="text-[20px] font-semibold pb-[20px]">Exam</h5>
            <p className="font-sans opacity-60 pb-3">
              After registration, you will take a special exam in the following
              areas:
            </p>
            <button className="text-[14px] text-[#2B72FF]">
              C# basic / DS&A / Unity basic
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order3} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 bg-[#10131A] cursor-pointer p-6 h-full shadow-xl rounded-[20px] hover:bg-[#02005E]  from-transparent hover:bg-gradient-to-bl  to-black transition-all duration-500">
            <h5 className="text-[20px] font-semibold pb-[20px]">Exam</h5>
            <p className="font-sans opacity-60 pb-3">
              After registration, you will take a special exam in the following
              areas:
            </p>
            <button className="text-[14px] text-[#2B72FF] text-start">
              The interview will be conducted in English. The minimum required{" "}
              <br />
              level is B1
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order4} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 bg-[#10131A] cursor-pointer p-6 h-full shadow-xl rounded-[20px] hover:bg-[#02005E]  from-transparent hover:bg-gradient-to-bl  to-black transition-all duration-500">
            <h5 className="text-[20px] font-semibold pb-[20px]">Exam</h5>
            <p className="font-sans opacity-60 pb-3">
              After registration, you will take a special exam in the following
              areas:
            </p>

            <div className="font-sans pb-3">
              <span className=" opacity-60 ">
                Based on the results of the offline interview, of the
              </span>{" "}
              <span className="text-[#2B72FF] font-bold">practicum</span> {""}
              <span className=" opacity-60 ">will be selected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

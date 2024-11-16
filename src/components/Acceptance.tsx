import Image from "next/image";
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
      <div className="grid xl:grid-cols-4 xl:grid-rows-1 lg:grid-cols-3 sm:grid-cols-2 justify-center gap-6 w-full text-white mb-16">
        <div className="flex flex-col items-center">
          <Image src={order1} alt="order01" />
          <div className="px-6 py-5 rounded-[20px] relative group overflow-hidden h-full">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                Sign up from the bot
              </h5>
              <p className="font-sans opacity-60 pb-[12px]">
                You can enter your information and register for the exam by
                going to a special Telegram bot using the button below
              </p>
              <button className="flex items-center gap-3 mt-12 bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Go to bot <Image src={arrowdown} alt="arrowdown" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order2} alt="order01" />
          <div className="px-6 py-5 rounded-[20px] relative group overflow-hidden h-full">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                Sign up from the bot
              </h5>
              <p className="font-sans opacity-60 pb-[12px] leading-[20px]">
                After registration, you will take a special exam in the
                following areas:
              </p>
              <p className="font-sans opacity-60">
                C# basic / DS&A / Unity basic
              </p>
              <button className="flex items-center gap-3 mt-[60px] bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Go to bot <Image src={arrowdown} alt="arrowdown" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order3} alt="order01" />
          <div className="px-6 py-5 rounded-[20px] h-full relative group overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                Sign up from the bot
              </h5>
              <p className="font-sans opacity-60 pb-[8px] leading-[20px]">
                Then an interview will be held to check the English language
                level of the candidates who have passed the exam.
              </p>
              <p className="font-sans opacity-60 leading-[20px]">
                The interview will be conducted in English. The minimum required
                level is B1
              </p>
              <button className="flex items-center gap-3 mt-[5px] bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Go to bot <Image src={arrowdown} alt="arrowdown" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={order4} alt="order01" />
          <div className="px-6 py-5 rounded-[20px] relative group overflow-hidden">
            <div className="absolute inset-0 rounded-[20px] bg-[#10131A] group-hover:bg-order-hover transition-all duration-300"></div>
            <div className="relative z-10 ">
              <h5 className="text-[20px] font-semibold pb-[10px]">
                Sign up from the bot
              </h5>
              <p className="font-sans opacity-60 pb-[12px] leading-[20px]">
                Finally, candidates are tested on their soft skills and hard
                skills through an offline interview
              </p>
              <p className="font-sans opacity-60 leading-[20px]">
                Based on the results of the offline interview, of the practicum
                will be selected
              </p>
              <button className="flex items-center gap-3 mt-6 bg-white text-black border-[1.5px] border-gray-300 py-2 px-6 rounded-full shadow-md transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                Go to bot <Image src={arrowdown} alt="arrowdown" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import order1 from "public/Imgs/Order1.png";
import order2 from "public/Imgs/Order2.png";
import order3 from "public/Imgs/Order3.png";
import order4 from "public/Imgs/Order4.png";
import arrowdown from "public/icons/arrowblack.png";

export default function Acceptance() {
  return (
    <div className="container">
      <h2 className="font-bold text-5xl text-white font-sans uppercase leading-[50px] pb-10">
        Acceptance <span className="text-blue-600">conditions</span>
      </h2>
      <div className="grid grid-cols-4 gap-6 justify-between text-white pb-16">
        <div className="flex flex-col">
          <Image src={order1} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 p-6 shadow-xl rounded-[20px]">
            <h5 className="text-[20px] font-semibold pb-[20px]">Sign up from the bot</h5>
            <p className="font-sans opacity-60">
              You can enter your information and register for the exam by going
              to a special Telegram bot using the button below
            </p>
            <button className="flex items-center gap-3 bg-[#FFFFFF] border-[1.5px] text-black py-[10px] px-[24px] rounded-full mt-10">Go to bot <Image src={arrowdown} alt="arrowdown"/></button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={order2} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 p-6 shadow-xl rounded-[20px]">
            <h5 className="text-[20px] font-semibold pb-[20px]">Sign up from the bot</h5>
            <p className="font-sans opacity-60">
              You can enter your information and register for the exam by going
              to a special Telegram bot using the button below
            </p>
            <button className="flex items-center gap-3 bg-[#FFFFFF] border-[1.5px] text-black py-[10px] px-[24px] rounded-full mt-10">Go to bot <Image src={arrowdown} alt="arrowdown"/></button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={order3} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 p-6 shadow-xl rounded-[20px]">
            <h5 className="text-[20px] font-semibold pb-[20px]">Sign up from the bot</h5>
            <p className="font-sans opacity-60">
              You can enter your information and register for the exam by going
              to a special Telegram bot using the button below
            </p>
            <button className="flex items-center gap-3 bg-[#FFFFFF] border-[1.5px] text-black py-[10px] px-[24px] rounded-full mt-10">Go to bot <Image src={arrowdown} alt="arrowdown"/></button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={order4} alt="order01" />
          <div className="border-[#FFFFFF0D] border border-opacity-5 p-6 shadow-xl rounded-[20px]">
            <h5 className="text-[20px] font-semibold pb-[20px]">Sign up from the bot</h5>
            <p className="font-sans opacity-60">
              You can enter your information and register for the exam by going
              to a special Telegram bot using the button below
            </p>
            <button className="flex items-center gap-3 bg-[#FFFFFF] border-[1.5px] text-black py-[10px] px-[24px] rounded-full mt-10">Go to bot <Image src={arrowdown} alt="arrowdown"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

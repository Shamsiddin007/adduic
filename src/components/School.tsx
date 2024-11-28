import Image from "next/image";
import coin from "public/Imgs/coin.png";
export default function School() {
  return (
    <div className="container">
      <div className="grid lg:justify-between justify-center gap-y-8 items-center lg:grid-cols-2 mb-16">
        <div className="">
          <h2 className="font-bold md:text-5xl text-3xl text-white font-sans uppercase md:leading-[50px] pb-4">
            scholarship <p className="text-blue-600">awards</p>
          </h2>
          <p className="text-[#FFFFFF] text-[14px] font-normal leading-[23px] font-sans md:pb-[38px] pb-[28px]">
            We believe in supporting talent. This practicum offers a $14,000
            grant, distributed <br /> among selected students to help them fully
            immerse in the experience. Whether <br /> it’s for software, project
            resources, or personal development, this financial <br /> support ensures
            you have what you need to excel.
          </p>
          <button className="md:py-[10px] py-[6px] md:px-[79px] sm:px-[59px] px-[45px] bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors">Apply</button>
        </div>
        <div className="text-white">
            <Image src={coin} alt="CoinImg"/>
        </div>
      </div>
    </div>
  );
}

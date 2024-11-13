import Image from "next/image";
import coin from "public/Imgs/coin.png";
export default function School() {
  return (
    <div className="container">
      <div className="grid justify-between grid-cols-2 mb-16">
        <div className="">
          <h2 className="font-bold text-5xl text-white font-sans uppercase leading-[50px] pb-4">
            scholarship <p className="text-blue-600">awards</p>
          </h2>
          <p className="text-[#FFFFFF] text-[14px] font-normal leading-[23px] font-sans pb-[38px]">
            We believe in supporting talent. This practicum offers a $14,000
            grant, distributed <br /> among selected students to help them fully
            immerse in the experience. Whether <br /> it’s for software, project
            resources, or personal development, this financial <br /> support ensures
            you have what you need to excel.
          </p>
          <button className="bg-transparent border-[1.5px] border-[#FFFFFF52] border-opacity-[32px] py-[10px] px-[79px] rounded-full text-[#FFFFFF] hover:bg-[#3375F6] transition-all duration-300">Apply</button>
        </div>
        <div className="text-white">
            <Image src={coin} alt="CoinImg"/>
        </div>
      </div>
    </div>
  );
}

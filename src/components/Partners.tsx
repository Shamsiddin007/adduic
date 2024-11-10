import Image from "next/image";

import Partnersimg from "public/Imgs/partnersimg.png";
import Partnersimg1 from "public/Imgs/partnersimg1.png";
import Partnersimg2 from "public/Imgs/partnersimg2.png";
import Partnersimg3 from "public/Imgs/partnersimg3.png";
import Partnersimg4 from "public/Imgs/partnersimg4.png";


const Partners = () => {
  return (
    <>
    <div className="container mb-4 mt-4">
      <h1 className="font-bold text-6xl text-white text-center pb-8">
        OUR <span className="text-blue-600">PARTNERS</span>
      </h1>
      <div className="grid grid-cols-6 gap-[48px] mb-8">
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A] duration-1000 ease-in-out">
          <Image src={Partnersimg} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg1} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg2} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg3} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg4} alt="partnersimg" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-[48px]">
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg2} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg4} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg3} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg2} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg1} alt="partnersimg" />
        </div>
        <div className="cursor-pointer rounded-[12px] bg-[#FFFFFF0A] hover:bg-[#3375F61A]">
          <Image src={Partnersimg} alt="partnersimg" />
        </div>
      </div>
    </div>
    <div className="">

    </div>
    </>
  );
};

export default Partners;

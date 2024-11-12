import Image from "next/image";

import Game from "public/Imgs/games1.png";
import Game1 from "public/Imgs/positionimg.png";

const Partners = () => {
  return (
    <div className="container mt-4 grid grid-cols-2 gap-[100px] mb-20">
      <div>
        <h1 className="font-bold text-6xl text-white text-start pb-8">
          OUR <span className="text-blue-600">SERVICES</span>
        </h1>
        <p className="w-[503px] text-[#FFFFFF66]">
          We provide comprehensive development solutions focused on creating
          engaging, interactive experiences that enhance user engagement,
          learning, and entertainment across a variety of platforms and
          applications
        </p>
        <div className="m-8 flex gap-4">
          <button className="cursor-pointer w-[200px] rounded-[140px] pt-[10px] pb-[10px] pl-[32px] pr-[32px] bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-1000">
            More about us
          </button>
          <button className="cursor-pointer w-[200px] rounded-[140px] pt-[10px] pb-[10px] pl-[32px] pr-[32px] bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-1000">
            Contact us
          </button>
        </div>
      </div>
      <div className="w-[480px] h-[248px] rounded-[20px] bg-[#3375F60D] p-4 relative">
        <Image src={Game1} alt="" className="absolute top-[1px] right-0" />
        <div className="bg-[#3375F6] w-[76px] h-[76px] flex items-center justify-center rounded-[50%] mb-8">
          <Image src={Game} alt="" />
        </div>
        <h1 className="text-[28px]">Game development</h1>
        <p className="text-[#FFFFFF66] w-[480px]">
          We constantly push the boundaries of creativity and technology to
          deliver groundbreaking experiences that captivate and inspire.
        </p>
      </div>
    </div>
  );
};

export default Partners;

import Image from "next/image";

import Fire from "/public/icons/olov.png";
import Union from "/public/Imgs/Union.png";
import Game from "public/Imgs/games1.png";
import Game1 from "public/Imgs/positionimg.png";

function page() {
  return (
    <>
      <div className="bg-custom w-full flex flex-col items-center h-[700px] justify-center">
        <span className="flex gap-2 items-center bg-[#202123] w-[380px] rounded-full text-white text-sm py-2 px-3 font-sans mb-4">
          <Image
            src={Fire}
            alt="FireLogo"
            className="drop-shadow-custom-yellow"
          />{" "}
          Working day & night to bring out the best results
        </span>
        <h2 className="font-bold text-6xl text-white">
          OUR <span className="text-blue-600">SERVICES</span>
        </h2>
        <p className="text-gray-500 text-center w-[779px] pt-4">
          We provide comprehensive development solutions focused on creating
          engaging, interactive experiences that enhance user engagement,
          learning, and entertainment across a variety of platforms and
          applications
        </p>
      </div>
      <div className="flex flex-col items-center text-white text-sm mt-10">
        <div className="relative w-6 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2">
          <div className="w-1 h-2.5 bg-white rounded-full animate-scroll" />
        </div>
        <p>Scroll to continue</p>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mt-20">
          <div className="w-[600px] h-[248px] rounded-[20px] bg-[#3375F60D] p-4 relative">
            <Image src={Game1} alt="" className="absolute top-[1px] right-0" />
            <div className="bg-[#3375F6] w-[76px] h-[76px] flex items-center justify-center rounded-[50%] mb-8">
              <Image src={Game} alt="" />
            </div>
            <h1 className="text-[28px]">Game development</h1>
            <p className="text-[#FFFFFF66] w-[518px]">
              We constantly push the boundaries of creativity and technology to
              deliver groundbreaking experiences that captivate and inspire.
            </p>
          </div>
          <div className="w-[600px] h-[248px] rounded-[20px] bg-[#3375F60D] p-4 relative">
            <Image src={Game1} alt="" className="absolute top-[1px] right-0" />
            <div className="bg-[#3375F6] w-[76px] h-[76px] flex items-center justify-center rounded-[50%] mb-8">
              <Image src={Game} alt="" />
            </div>
            <h1 className="text-[28px]">Game development</h1>
            <p className="text-[#FFFFFF66] w-[518px]">
              We constantly push the boundaries of creativity and technology to
              deliver groundbreaking experiences that captivate and inspire.
            </p>
          </div>
          <div className="w-[600px] h-[248px] rounded-[20px] bg-[#3375F60D] p-4 relative">
            <Image src={Game1} alt="" className="absolute top-[1px] right-0" />
            <div className="bg-[#3375F6] w-[76px] h-[76px] flex items-center justify-center rounded-[50%] mb-8">
              <Image src={Game} alt="" />
            </div>
            <h1 className="text-[28px]">Game development</h1>
            <p className="text-[#FFFFFF66] w-[518px]">
              We constantly push the boundaries of creativity and technology to
              deliver groundbreaking experiences that captivate and inspire.
            </p>
          </div>
          <div className="w-[600px] h-[248px] rounded-[20px] bg-[#3375F60D] p-4 relative">
            <Image src={Game1} alt="" className="absolute top-[1px] right-0" />
            <div className="bg-[#3375F6] w-[76px] h-[76px] flex items-center justify-center rounded-[50%] mb-8">
              <Image src={Game} alt="" />
            </div>
            <h1 className="text-[28px]">Game development</h1>
            <p className="text-[#FFFFFF66] w-[518px]">
              We constantly push the boundaries of creativity and technology to
              deliver groundbreaking experiences that captivate and inspire.
            </p>
          </div>
          <div className="w-[600px] h-[248px] rounded-[20px] bg-[#3375F60D] p-4 relative">
            <Image src={Game1} alt="" className="absolute top-[1px] right-0" />
            <div className="bg-[#3375F6] w-[76px] h-[76px] flex items-center justify-center rounded-[50%] mb-8">
              <Image src={Game} alt="" />
            </div>
            <h1 className="text-[28px]">Game development</h1>
            <p className="text-[#FFFFFF66] w-[518px]">
              We constantly push the boundaries of creativity and technology to
              deliver groundbreaking experiences that captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

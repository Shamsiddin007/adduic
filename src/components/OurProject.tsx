import Image from "next/image";
import Logo from "public/Imgs/fullphone.png";
import Logo1 from "public/Imgs/fullphone1.png";
import Logo2 from "public/Imgs/fullphone.png";
import Logo3 from "public/Imgs/LOGO.png";
import Chevron from "public/Imgs/chevron-right.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container mb-6">
      <div className="flex items-center justify-between mb-4 gap-10">
        <h2 className="font-bold text-5xl text-white">
          OUR <span className="text-blue-600">PROJECTS</span>
        </h2>
        <Link href="portfolio">
          <button className="flex items-center justify-center rounded-[140px] bg-[#FFFFFF1A] w-[152px] h-[44px] text-white">
            All projects <Image src={Chevron} alt="Logo" />
          </button>
        </Link>
      </div>
      <div className="flex gap-[40px]">
        <div className="cursor-pointer relative w-[281px] h-96 overflow-hidden rounded-[24px] flex flex-col items-center bg-gradient-to-b from-black to-gray-800 p-5 text-white text-center shadow-md shadow-black/50 group">
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-center">
            <h3 className="text-xl font-bold">Block Jump</h3>
            <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
              2020
            </p>
            <Image
              src={Logo}
              alt="Logo"
              className="inset-0 z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800  duration-1000 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="Logo" />
          </button>
        </div>
        <div className="cursor-pointer relative w-[281px] h-96 overflow-hidden rounded-[24px] flex flex-col items-center bg-gradient-to-b from-black to-gray-800 p-5 text-white text-center shadow-md shadow-black/50 group">
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-center">
            <h3 className="text-xl font-bold">O‘ynar kamera</h3>
            <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
              2020
            </p>
            <Image
              alt="Logo"
              src={Logo1}
              className="inset-0 z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="Logo" />
          </button>
        </div>
        <div className="cursor-pointer relative w-[281px] h-96 overflow-hidden rounded-[24px] flex flex-col items-center bg-gradient-to-b from-black to-gray-800 p-5 text-white text-center shadow-md shadow-black/50 group">
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-center">
            <h3 className="text-xl font-bold">Block Runner</h3>
            <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
              2020
            </p>
            <Image
              alt="Logo"
              src={Logo2}
              className="inset-0 z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="Logo" />
          </button>
        </div>
        <div className="relative w-[281px] h-96 overflow-hidden rounded-[24px] shadow-md shadow-black/50 p-6 text-center text-white group">
          <div
            className="absolute inset-0 flex flex-col items-center pt-6 text-center"
            style={{
              background: "linear-gradient(to bottom, black, #3c1d1b)",
            }}
          >
            <h3 className="text-xl font-bold">Mangu Sarkarda</h3>
            <p className="text-gray-300 pb-10 duration-1000 group-hover:pb-[40px]">
              2021
            </p>
            <Image
              src={Logo3}
              alt="Mangu Sarkarda"
              objectFit="cover"
              className="relative inset-0 z-0 group-hover:scale-[1.07] duration-1000"           />
          </div>
          <button
            className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out hover:bg-[#888]  duration-1000 rounded-[140px] flex items-center justify-center"
            style={{
              background: "linear-gradient(to right, black, #3c1d1b)",
            }}
          >
            Learn more <Image src={Chevron} alt="Logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

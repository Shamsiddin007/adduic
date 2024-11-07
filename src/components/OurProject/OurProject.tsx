import Image from "next/image";
import Logo from "public/Imgs/img1.png";
import Logo1 from "public/Imgs/img.png";
import Logo2 from "public/Imgs/img2.png";
import Logo3 from "public/Imgs/LOGO.png";
import Chevron from "public/Imgs/chevron-right.png";

const Projects = () => {
  return (
    <div className="w-[1110px] m-auto">
      <div className="flex items-center justify-between mb-4 mr-8">
        <h2 className="font-bold text-5xl text-white">
          OUR <span className="text-blue-600">PROJECTS</span>
        </h2>
        <button className="flex items-center justify-center rounded-[140px] bg-[#FFFFFF1A] w-[152px] h-[44px] text-white">
          All projects <Image src={Chevron} alt="" />
        </button>
      </div>
      <div className="flex gap-[20px]">
      <div className="relative w-[281px] h-96 overflow-hidden rounded-lg flex flex-col items-center bg-gradient-to-b from-black to-gray-800 rounded-2xl p-5 text-white text-center shadow-md shadow-black/50 group">
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-center group-hover:pt-2 duration-300">
            <h3 className="text-xl font-bold">Block Jump</h3>
            <p className="text-gray-300 pb-14 group-hover:pb-2  duration-300">2020</p>
            <Image
              src={Logo}
              alt=""
              className="inset-0 z-0 opacity-100"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="" />
          </button>
        </div>
        <div className="cursor-pointer relative w-[281px] h-96 overflow-hidden rounded-lg flex flex-col items-center bg-gradient-to-b from-black to-gray-800 rounded-2xl p-5 text-white text-center shadow-md shadow-black/50 group">
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-center group-hover:pt-2 duration-300">
            <h3 className="text-xl font-bold">O‘ynar kamera</h3>
            <p className="text-gray-300 pb-14 group-hover:pb-2  duration-300">2020</p>
            <Image
              alt=""
              src={Logo1}
              className="inset-0 z-0 opacity-100"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="" />
          </button>
        </div>
        <div className="relative w-[281px] h-96 overflow-hidden rounded-lg flex flex-col items-center bg-gradient-to-b from-black to-gray-800 rounded-2xl p-5 text-white text-center shadow-md shadow-black/50 group">
          <div className="absolute inset-0 flex flex-col items-center pt-6 text-center group-hover:pt-2 duration-300">
            <h3 className="text-xl font-bold">Block Runner</h3>
            <p className="text-gray-300 pb-14 group-hover:pb-2  duration-300">2020</p>
            <Image
              alt=""
              src={Logo2}
              className="inset-0 z-0 opacity-100"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="" />
          </button>
        </div>
        <div className="relative w-[281px] h-96 overflow-hidden rounded-lg shadow-md shadow-black/50 p-6 text-center text-white w-64 group">
          <div
            className="absolute inset-0 flex flex-col items-center pt-6 text-center group-hover:pt-2 duration-300"
            style={{
              background: "linear-gradient(to bottom, black, #3c1d1b)",
            }}
          >
            <h3 className="text-xl font-bold">Mangu Sarkarda</h3>
            <p className="text-gray-300 pb-10 group-hover:pb-2 duration-300">2021</p>
            <Image
              src={Logo3}
              alt="Mangu Sarkarda"
              objectFit="cover"
              className="relative inset-0 z-0"
            />
          </div>
          <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[140px] flex items-center justify-center">
            Learn more <Image src={Chevron} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

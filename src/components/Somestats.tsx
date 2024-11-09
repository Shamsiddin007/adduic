"use client";
import styles from "../components/style.module.css";

const Somestats = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-black relative">
      {/* Top Background stars animation and gradient */}
      <div className={`${styles.space} h-1/2 w-full relative`}></div>

      {/* Content section */}
      <div className="container mx-auto">
        <div className="relative z-0 text-center flex flex-col justify-center items-center py-4 mt-[60px] h-1/2">
          <h1 className="text-white text-6xl font-bold">
            SOME <span className="text-blue-500">STATS</span>
          </h1>
          <p className="text-[#FFFFFF66] mt-2">Let’s talk about numbers</p>
          <div className="flex justify-center gap-72 mt-20 ml-28">
            <div className="text-center">
              <p className="text-white text-2xl">Specialists</p>
              <p className="text-[#FFFFFF] font-bold text-[130px]">8</p>
            </div>
            <div className="text-center">
              <p className="text-white text-2xl">Mobile games</p>
              <p className="text-[#FFFFFF] font-bold text-[130px]">10</p>
            </div>
            <div className="text-center">
              <p className="text-white text-2xl">Planned projects</p>
              <p className="text-[#FFFFFF] font-bold text-[130px]">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain background image on the bottom half with shadow */}
      <div
        className="bg-[url('../../public/icons/Mountainimage.png')] brightness-50 w-full h-[45%] bg-no-repeat bg-cover bg-center absolute bottom-0 z-1"
      >
      <div className="w-[100%] h-[70%] absolute z-50 bottom-[65px] right-[190px]   bg-custom-radialss"></div>

      </div>
    </div>
  );
};

export default Somestats;

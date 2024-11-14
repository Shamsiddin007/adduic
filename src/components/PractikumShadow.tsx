import Image from "next/image";
import Vio from "public/icons/vioPractikum.png";


export default function PractikumShadow() {
  return (
    <div className="relative w-full h-[650px]">
      <div className="absolute inset-0 bg-[url('/icons/vioBottom.png')] bg-no-repeat bg-cover"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-black"></div>

        {/* <div className="bg-[url('/icons/vioPractikum.png')]  bg-no-repeat bg-cover"></div> */}

      <Image
        src={Vio}
        alt="VioImg"
        width={450}
        height={500}
        className="absolute left-1/2 transform -translate-x-1/2 top-0 z-1"
      />
      <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[350px] z-1 font-bold text-center text-5xl text-white font-sans uppercase">practikum</h1>
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full  bg-[url('/icons/vioPractikum.png')] bg-no-repeat bg-center bg-contain"></div> */}
      <div></div>
    </div>
  );
}

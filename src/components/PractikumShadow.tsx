import Image from "next/image"
import Vio  from "public/icons/vioPractikum.png";
// import butonVio from "public/icons/vioBottom.png";

export default function PractikumShadow() {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute inset-0 bottom-0 bg-[url('/icons/vioBottom.png')] bg-no-repeat bg-cover pt-[15 0px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>



        <Image src={Vio} alt="VioImg" width={450} height={500} className="absolute left-1/2 transform -translate-x-1/2 top-0 z-1"/>
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full  bg-[url('/icons/vioPractikum.png')] bg-no-repeat bg-center bg-contain"></div> */}
      <div>

      </div>

    </div>
  )
}

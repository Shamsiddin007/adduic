import Image from "next/image";
import Link from "next/link";
import Chevron from "public/Imgs/chevron-right.png";
import News from "public/Imgs/KattaYangiliklar.png";
import GameDev from "public/Imgs/GameDev.png";
import Team from "public/Imgs/JamoamizgaQushiling.png";
import Coming from "public/Imgs/ComingSoon.png";

export default function LatestNews() {
  return (
    <div className="container">
      <p className="text-[#FFFFFF] text-xl pt-[64px] font-sans pb-[12px] opacity-30 mt-16">
        Stay updated about everything
      </p>
      <div className="flex items-center justify-between pb-10 gap-10">
        <h2 className="font-bold text-5xl text-white uppercase">
          latest <span className="text-blue-600">news</span>
        </h2>
        <Link href="blog">
          <button className="flex items-center justify-center rounded-[140px] bg-[#FFFFFF1A] w-[152px] h-[44px] text-white">
            All projects <Image src={Chevron} alt="Logo" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-y-7 justify-between mb-16">
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={News}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">
              UIC Games is back in the business once again!
            </h4>
          </div>
        </div>
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={GameDev}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">GameDev Goethe 2024</h4>
          </div>
        </div>
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={Team}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">
              UIC Games is looking talented game devlopers
            </h4>
          </div>
        </div>
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={Coming}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">
              Huge news are about to pe announced very soon
            </h4>
          </div>
        </div>


        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={Team}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">
              UIC Games is looking talented game devlopers
            </h4>
          </div>
        </div>
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={Coming}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">
              Huge news are about to pe announced very soon
            </h4>
          </div>
        </div>
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={News}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">
              UIC Games is back in the business once again!
            </h4>
          </div>
        </div>
        <div className="text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] w-[281px] pt-[12px] px-[12px]">
          <Image
            src={GameDev}
            alt="NewsImage"
            className="rounded-xl object-cover border border-transparent"
          />
          <div>
            <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
              8.10.2024
            </p>
            <h4 className="pb-4 font-medium">GameDev Goethe 2024</h4>
          </div>
        </div>
      </div>
    </div>
  );
}


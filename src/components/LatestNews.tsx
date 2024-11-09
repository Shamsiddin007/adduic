import Image from "next/image";
import Link from "next/link";
import Chevron from "public/Imgs/chevron-right.png";
import News from "/public/Imgs/KattaYangiliklar.png";


export default function LatestNews() {
  return (
    <div className="container">
      <p className="text-[#FFFFFF] text-xl pt-[64px] font-sans pb-[12px] opacity-30">Stay updated about everything</p>
      <div className="flex items-center justify-between mb-4 gap-10">
        <h2 className="font-bold text-5xl text-white uppercase">
        latest <span className="text-blue-600">news</span>
        </h2>
        <Link href="blog">
          <button className="flex items-center justify-center rounded-[140px] bg-[#FFFFFF1A] w-[152px] h-[44px] text-white">
            All projects <Image src={Chevron} alt="Logo" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-y-4 justify-between">
        <div className="text-white border">
            <Image src={News} alt="NewsImage" className=""/>
            <p className=" size-[14px] font-sans opacity-30">8.10.2024</p>
            <h4>UIC Games is back in the business once again!</h4>
        </div>
        <div className="text-white">122323</div>
        <div className="text-white">122323</div>
        <div className="text-white">122323</div>
        <div className="text-white">122323</div>
        <div className="text-white">122323</div>
        <div className="text-white">122323</div>
        <div className="text-white">122323</div>
      </div>
    </div>
  )
}

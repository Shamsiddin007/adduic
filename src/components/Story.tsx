import Image from "next/image";
import Vio from "/public/Imgs/Vio.png";


export default function Story() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="flex items-center justify-center relative top-0 left-0">
          <div>
            <p className="text-[#FFFFFF] text-xl pt-[64px] pb-[12px] opacity-80">
              Let’s talk about who we are.
            </p>
            <h1 className="text-6xl font-bold text-white">
              We are <span className="text-[#3375F6]">UIC GAMES!</span>
            </h1>
            <p className="w-1/2 pt-[40px] pb-4 text-base leading-5 text-white opacity-80">
              At UIC Games, we are passionate storytellers, visionary artists,
              and technical wizards dedicated to creating unforgettable gaming
              experiences. With a relentless commitment to innovation, we craft
              immersive worlds where players can lose themselves in epic
              adventures and compelling narratives.
            </p>
            <p className="w-1/2 pb-[40px] text-base leading-5 text-white opacity-80">
              Our team of talented developers, designers, and creatives come
              together to push the boundaries of what's possible, delivering
              games that resonate with players around the globe. Join us on this
              journey as we redefine the future of interactive entertainment.
            </p>
            <article className="flex gap-6 pb-16">
              <button className="bg-[#3375F6] px-[60px] py-[10px] rounded-full text-white">
                Contact us
              </button>
              <button className="bg-[#1F2022] px-16 py-[10px] rounded-full text-white">
                Learn more
              </button>
            </article>
          </div>
          <Image
            src={Vio}
            width={parseInt("683px")}
            alt="VioImage"
            className="absolute right-[-176px] bottom-8"
          />
          {/* <div className="absolute -right-44 top-40 left-1/2 bottom-64 bg-[#202123] opacity-30"></div> */}
        </div>
      </div>
    </div>
  );
}

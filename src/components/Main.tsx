import Image from "next/image";
import Fire from "/public/icons/olov.png";
import styles from "./style.module.css";

export default function Mani() {
  return (
    <div className="container">
      <div className="relative">
        <div className={`${styles.solder}`}></div>
        <div className="w-[100%] h-[30%] absolute -z-2 bottom-[25px] bg-custom-radial"></div>
        <div className="container h-screen">
          <div className="absolute bottom-0">
            <span className="mb-6 flex gap-2 items-center bg-[#202123] w-[400px] rounded-full text-white text-sm py-2 px-3 font-sans">
              <Image
                src={Fire}
                alt="FireLogo"
                className="drop-shadow-custom-yellow"
              />{" "}
              Working day & night to bring out the best results
            </span>
            <h1 className="mb-[268px] text-6xl font-bold uppercase pt-[19px] text-white tracking-wider">
              YOUR{" "}
              <span className="relative text-blue-500 border border-blue-500 inline-block mb-2">
                IDEAS
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -right-1"></span>
              </span>{" "}
              WILL <br /> BECOME A{" "}
              <span className="relative text-blue-500 border border-blue-500 inline-block">
                REALITY
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -right-1"></span>
              </span>
            </h1>
            <p className=" text-white font-sans text-base pb-14 ">
              UIC Games is a game development company founded in 2018. It
              focuses on creating engaging and immersive video games,
              <br />
              combining technology with creative storytelling to deliver unique
              gaming experiences
            </p>
          </div>
        <div className="absolute -z-2 inset-0 bg-gradient-to-b from-transparent to-black shadow-inner"></div>

        </div>
      </div>
    </div>
  );
}

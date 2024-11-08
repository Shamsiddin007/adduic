import Image from "next/image";
import Fire from "/public/icons/olov.png";
import soldier from "/public/Imgs/askar.svg";

export default function Mani() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex">
          <div className="pt-40">
            <span className="flex gap-2 items-center bg-[#202123] w-[380px] rounded-full text-white text-sm py-2 px-3">
              <Image
                src={Fire}
                alt="FireLogo"
                className="drop-shadow-custom-yellow"
              />{" "}
              working day & night to bring out the best results
            </span>
            <h1 className="text-6xl font-bold uppercase pt-[19px] text-white tracking-wider">
              YOUR {" "}
              <span className="relative text-blue-500 border border-blue-500 inline-block mb-2">
                IDEAS
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -right-1"></span>
              </span>
              {" "} WILL <br /> BECOME A {" "}
              <span className="relative text-blue-500 border border-blue-500 inline-block">
                REALITY
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -top-1 -right-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -left-1"></span>
                <span className="absolute w-2 h-2 bg-white rounded-full -bottom-1 -right-1"></span>
              </span>
            </h1>
            <p className="text-white text-base pb-14 pt-52">
              UIC Games is a game development company founded in 2018. It
              focuses on creating engaging and immersive video games,
              <br />
              combining technology with creative storytelling to deliver unique
              gaming experiences
            </p>
          </div>
          <Image
            src={soldier}
            alt="soldierImage"
            width={parseInt("600px")}
            className="sticky bottom-0 -mr-56"
          />
        </div>
      </div>
    </div>
  );
}

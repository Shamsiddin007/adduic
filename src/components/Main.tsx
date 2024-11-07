import Image from "next/image";
import Fire from "../../public/icons/🔥.png";
import soldier from "/nextjs/games/public/games_img/askar.svg";

export default function Mani() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="flex relative top-0 left-0">
          <div className="pt-40">
            <span className="flex gap-2 items-center bg-[#202123] w-[380px] rounded-full text-white text-sm py-2 px-3">
              <Image src={Fire} alt="FireLogo" className="drop-shadow-custom-yellow"/> Working day & night to bring
              out the best results
            </span>
            <h1 className="text-6xl font-bold uppercase  pt-[19px] text-white">
              Your <span className="text-[#2760D0]">ideas</span> will <br />{" "}
              become a <span className="text-[#2760D0]">reality</span>
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
            className="absolute -right-44 -top-16"
          />
        </div>
      </div>
    </div>
  );
}

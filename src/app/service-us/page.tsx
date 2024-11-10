import Image from "next/image";
import Fire from "/public/icons/olov.png";

function page() {
  return (
    <div className="container">
      <div className="bg-[#3375F6]">
        <span className="flex gap-2 items-center bg-[#202123] w-[380px] rounded-full text-white text-sm py-2 px-3 font-sans">
          <Image
            src={Fire}
            alt="FireLogo"
            className="drop-shadow-custom-yellow"
          />{" "}
          Working day & night to bring out the best results
        </span>
        <h2 className="font-bold text-5xl text-white">
          OUR <span className="text-blue-600">SERVICES</span>
        </h2>
      </div>
    </div>
  );
}

export default page;

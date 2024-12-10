import Image from "next/image";
import Books from "public/icons/booksIcon.png";
import Vectorpeople from "public/Imgs/Vectorpeople.png";

function WhatisPracticum() {
  return (
    <div className="container">
      <h2 className="font-bold md:text-5xl text-3xl text-center text-white font-sans uppercase md:leading-[50px] md:pb-10 pb-5">
        What is <span className="text-blue-600">Practicum</span>
      </h2>
      <p className="md:text-[18px] sm:text-[14px] text-[12px] font-medium text-white leading-4 md:leading-7 text-center md:pb-6 pb-3">
        At UIC Games, we are passionate storytellers, visionary artists, and
        technical wizards dedicated to creating unforgettable gaming
        experiences. With a relentless commitment to innovation, we craft
        immersive worlds where players can lose themselves in epic adventures
        and compelling narratives.
      </p>
      <p className="text-white md:text-[14px] text-[10px] text-center opacity-80 md:w-8/12 sm:leading-5 font-sans m-auto pb-[25px]">
        Our team of talented developers, designers, and creatives come together
        to push the boundaries of what&apos;s possible, delivering games that
        resonate with players around the globe. Join us on this journey as we
        redefine the future of interactive entertainment.
      </p>

      <div className="md:pt-16 pb-16">
        <div className="flex items-center justify-between bg-black text-white">
          <div className="w-full">
            <h2 className="font-bold md:text-5xl text-3xl sm:text-start text-center text-white font-sans uppercase md:leading-[50px]">
              12-MONTH <span className="text-blue-500">CURRICULUM</span>
            </h2>
            <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
              <div className="p-6 rounded-xl bg-custom-blue border border-blue-700/35 flex-1 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-b from-gradientBlueStart to-gradientBlueEnd border border-[#3375F633] border-opacity-20 py-4 px-6 rounded-xl">
                    <Image
                      src={Books}
                      alt="BooksImg"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <span className="text-sm transparent border border-[#3375F6] rounded-full px-3 py-1 mb-[16px] cursor-pointer hover:bg-blue-500 transition-all duration-300">
                      4 months
                    </span>
                    <h2 className="text-2xl font-semibold my-2">Theoretical</h2>
                    <p className="text-gray-300 font-sans mb-4">
                      Build a strong foundation in game development <br />{" "}
                      through theoretical lessons.
                    </p>
                  </div>
                </div>
                <p className="font-sans text-[14px] text-[#FFFFFF] pb-[16px]">
                  Skills you will learn
                </p>
                <div className="flex flex-wrap gap-2">
                  {["2D", "3D", "Animation", "UI/UX", "C#", "Unity"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-transparent border-[1.45px] border-[#3375F6] rounded-full cursor-pointer px-3 py-1 hover:bg-blue-500 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-custom-orange1 border border-orange-600/35 flex-1 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-b from-gradientStart to-gradientEnd border border-[#EA563866] border-opacity-20 p-6 rounded-xl">
                    <Image
                      src={Vectorpeople}
                      alt="BooksImg"
                      width={40}
                      height={45}
                      className="cursor-pointer scale-125"
                    />
                  </div>
                  <div>
                    <span className="text-sm transparent font-sans border border-borderMonth rounded-full px-3 py-1 mb-[16px] cursor-pointer hover:bg-borderMonth transition-all duration-300">
                      8 months
                    </span>
                    <h2 className="text-2xl font-semibold font-sans my-2">Practical</h2>
                    <p className="text-gray-300 font-sans mb-4">
                      Gain hands-on experience and real-world skills from <br />
                      industry professionals
                    </p>
                  </div>
                </div>
                <p className="font-sans text-[14px] text-[#FFFFFF] pb-[16px]">
                  Skills you will learn
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Soft skills", "Hard skills", "ShaderLab", "Algoritm", "Solid"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-sm bg-transparent border-[1.45px] border-borderMonth rounded-full cursor-pointer px-3 py-1 hover:bg-borderMonth transition-all duration-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                  {/* hello */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatisPracticum;

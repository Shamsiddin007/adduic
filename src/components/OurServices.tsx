import Image from "next/image";
import Game from "public/Imgs/games1.png";
import Game1 from "public/Imgs/positionimg.png";

const Partners = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center m-auto">
          <div className="space-y-6">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white text-center md:text-start">
              OUR <span className="text-blue-600">SERVICES</span>
            </h1>
            
            <p className="text-[#FFFFFF66] text-sm sm:text-base lg:text-lg max-w-xl text-center md:text-start">
              We provide comprehensive development solutions focused on creating
              engaging, interactive experiences that enhance user engagement,
              learning, and entertainment across a variety of platforms and
              applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full items-center">
              <button className="px-6 py-3 rounded-full bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] transition-all duration-300 text-sm sm:text-base w-[250px]">
                More about us
              </button>
              <button className="px-6 py-3 rounded-full bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] transition-all duration-300 text-sm sm:text-base w-[250px]">
                Contact us
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="bg-[#3375F60D] rounded-2xl p-6 sm:p-8 h-full">
              <div className="relative z-10">
                <div className="bg-[#3375F6] w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full mb-6">
                  <Image 
                    src={Game} 
                    alt="Game icon"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                
                <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                  Game development
                </h2>
                
                <p className="text-[#FFFFFF66] text-sm sm:text-base lg:text-lg max-w-lg relative z-10">
                  We constantly push the boundaries of creativity and technology to
                  deliver groundbreaking experiences that captivate and inspire.
                </p>
              </div>

              <div className="absolute top-0 right-0">
                <Image
                  src={Game1}
                  alt="Game development illustration"
                  className="object-cover object-right-top"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
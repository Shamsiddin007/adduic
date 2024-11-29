

"use client";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import styles from "../components/style.module.css";

const Somestats = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (parallaxRef.current) {
      const parallaxInstance = new Parallax(parallaxRef.current, {
        relativeInput: true,
      });
      return () => parallaxInstance.destroy();
    }
  }, []);

  const stats = [
    { label: "Specialists", value: "8" },
    { label: "Mobile games", value: "10" },
    { label: "Planned projects", value: "3" },
  ];

  return (
    <div>
      <div className="w-full md:min-h-screen h-[50%] overflow-hidden bg-black relative px-4 pb-[80px] pt-[80px]">
        <div className={`${styles.space} h-[200px] w-full relative`}></div>

        <div className="container mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            SOME <span className="text-blue-500">STATS</span>
          </h1>
          <p className="text-[#FFFFFF66] mt-2 text-sm md:text-base">
            Let&apos;s talk about numbers
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mt-12 lg:mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-white text-sm md:text-base mb-2">
                  {stat.label}
                </p>
                <p
                  className="text-white font-bold text-5xl md:text-6xl lg:text-7xl"
                  style={{
                    WebkitTextStroke: "2px #FFFFFF",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div
          ref={parallaxRef}
          className="w-[120vw] h-[50%] absolute bottom-0 -left-[10vw] z-0 hidden md:block"
        >
          <div
            data-depth="0.1"
            className="bg-[url('../../public/icons/Mountainimage.png')] brightness-50 w-full h-full bg-no-repeat bg-cover bg-center"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Somestats;

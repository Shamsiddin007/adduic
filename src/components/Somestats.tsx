"use client";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import styles from "../components/style.module.css";
import '@/app/[locale]/globals.css'
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
      <div className="group5 w-full h-screen overflow-hidden bg-black relative p-4 mt-[80px]">
        <div className={`${styles.space} h-1/2 w-full relative`}></div>

        <div className="container mx-auto px-4">
          <div className="relative z-0 text-center flex flex-col justify-center items-center py-4 mt-[35px] h-1/2">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
              SOME <span className="text-blue-500">STATS</span>
            </h1>
            <p className="text-[#FFFFFF66] mt-2 text-sm sm:text-base">
              Let&apos;s talk about numbers
            </p>

            <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-24 mt-12 lg:mt-20 w-full max-w-6xl mx-auto px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-white text-[9px] sm:text-[18px] mb-2">
                    {stat.label}
                  </p>
                  <p
                    className="text-[#FFFFFF] font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[130px]"
                    style={{
                      WebkitTextStroke: "4px #FFFFFF76",
                      WebkitTextStrokeWidth: "8px",
                      WebkitTextFillColor: "white",
                    }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={parallaxRef}
          className="group2 w-[120vw] h-[80%] absolute -bottom-8 z-1 -left-[10vw] mt-9"
        >
          <div
            data-depth="0.111111111111111111111111111111111"
            className="mountineStyle brightness-50 w-full h-[80%] bg-no-repeat bg-cover bg-center group2"
          >
          </div>
        </div>
            <div
              className="w-full h-[100%] left-0 bottom-32 right-0 absolute z-0 sm:brightness-[.9] group-2 brightness-[.0] "
              style={{
                background:
                  "linear-gradient(180deg, transparent 27%, rgba(0, 144, 254, 0.5) 100%)",
              }}
            ></div>
        <div
          className="w-full h-[200px] left-0 right-0 absolute z-2 -bottom-1 brightness-[.9] group-2"
          style={{
            background:
              "linear-gradient(180deg, transparent 27%, rgba(0, 0, 0, 0.8) 84%)",
          }}
        >
        </div>
      </div>

      <div
        className="w-full h-[70px] relative -top-2 group2"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.9) 10%, transparent 60%, transparent 90%)",
        }}
      ></div>
    </div>
  );
};

export default Somestats;

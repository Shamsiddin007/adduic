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
      return () => parallaxInstance.destroy(); // Clean up on unmount
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black relative p-4">
      {/* Top Background stars animation and gradient */}
      <div className={`${styles.space} h-1/2 w-full relative`}></div>

      {/* Content section */}
      <div className="container mx-auto">
        <div className="relative z-0 text-center flex flex-col justify-center items-center py-4 mt-[35px] h-1/2">
          <h1 className="text-white text-6xl font-bold">
            SOME <span className="text-blue-500">STATS</span>
          </h1>
          <p className="text-[#FFFFFF66] mt-2">Let’s talk about numbers</p>
          <div className="flex justify-center gap-72 mt-20 ml-28">
            <div className="text-center">
              <p className="text-white text-2xl">Specialists</p>
              <p
                className="text-[#FFFFFF] font-bold text-[130px]"
                style={{
                  WebkitTextStroke: "8px #FFFFFF76",
                  color: "white",
                }}
              >
                8
              </p>
            </div>
            <div className="text-center">
              <p className="text-white text-2xl">Mobile games</p>
              <p
                className="text-[#FFFFFF] font-bold text-[130px]"
                style={{
                  WebkitTextStroke: "8px #FFFFFF76",
                  color: "white",
                }}
              >
                10
              </p>
            </div>
            <div className="text-center">
              <p className="text-white text-2xl">Planned projects</p>
              <p
                className="text-[#FFFFFF] font-bold text-[130px]"
                style={{
                  WebkitTextStroke: "8px #FFFFFF76",
                  color: "white",
                }}
              >
                3
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mountain background image with parallax effect */}
      <div
        ref={parallaxRef}
        className="w-[120vw] h-[50%] absolute -bottom-8 z-1 -ml-40 mt-9"
        style={{
          boxShadow: "90px 80px 30px rgba(239, 94, 9, 0.2)", // Adds a shadow effect
          background: "linear-gradient(to top, black, trannsparent)", // Adds gradient fade
        }}
      >
        <div
          data-depth="0.111111111111111111111111111111111"
          className="bg-[url('../../public/icons/Mountainimage.png')] brightness-50 w-full h-full bg-no-repeat bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
};

export default Somestats;

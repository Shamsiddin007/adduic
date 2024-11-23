// "use client";
// import { useEffect, useRef } from "react";
// import Parallax from "parallax-js";
// import styles from "../components/style.module.css";

// const Somestats = () => {
//   const parallaxRef = useRef(null);

//   useEffect(() => {
//     if (parallaxRef.current) {
//       const parallaxInstance = new Parallax(parallaxRef.current, {
//         relativeInput: true,
//       });
//       return () => parallaxInstance.destroy();
//     }
//   }, []);

//   const stats = [
//     { label: "Specialists", value: "8" },
//     { label: "Mobile games", value: "10" },
//     { label: "Planned projects", value: "3" },
//   ];

//   return (
//     <div>
//       <div className="group5 w-full h-screen overflow-hidden bg-black relative p-4 mt-[80px]">
//         <div className={`${styles.space} h-1/2 w-full relative`}></div>

//         <div className="container mx-auto px-4">
//           <div className="relative z-0 text-center flex flex-col justify-center items-center py-4 mt-[35px] h-1/2">
//             <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
//               SOME <span className="text-blue-500">STATS</span>
//             </h1>
//             <p className="text-[#FFFFFF66] mt-2 text-sm sm:text-base">
//               Let's talk about numbers
//             </p>

//             <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-24 mt-12 lg:mt-20 w-full max-w-6xl mx-auto px-4">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <p className="text-white text-lg sm:text-[12px] mb-2">
//                     {stat.label}
//                   </p>
//                   <p
//                     className="text-[#FFFFFF] font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[130px]"
//                     style={{
//                       WebkitTextStroke: "4px #FFFFFF76",
//                       WebkitTextStrokeWidth: "4px",
//                       WebkitTextFillColor: "white",
//                       "@media (min-width: 1024px)": {
//                         WebkitTextStrokeWidth: "8px",
//                       },
//                     }}
//                   >
//                     {stat.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div
//           ref={parallaxRef}
//           className="group2 w-[120vw] h-[50%] absolute -bottom-8 z-1 -left-[10vw] mt-9"
//         >
//           <div
//             data-depth="0.111111111111111111111111111111111"
//             className="bg-[url('../../public/icons/Mountainimage.png')] brightness-50 w-full h-full bg-no-repeat bg-cover bg-center group2"
//           ></div>
//         </div>

//         <div className="w-full h-[50%] absolute -bottom-8 z-1 mt-9 sm:hidden">
//           <div className="bg-[url('../../public/icons/Mountainimage.png')] brightness-50 w-full h-full bg-no-repeat bg-cover bg-center group2"></div>
//         </div>

//         <div
//           className="w-full h-[200px] left-0 right-0 absolute z-2 -bottom-1 brightness-[.9] group-2"
//           style={{
//             background:
//               "linear-gradient(180deg, transparent 27%, rgba(0, 144, 254, 0.2) 84%)",
//           }}
//         ></div>
//       </div>

//       <div
//         className="w-full h-[70px] relative -top-0 group2"
//         style={{
//           background:
//             "linear-gradient(rgba(0, 144, 254, 0.2) 10%, transparent 60%, transparent 90%)",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Somestats;

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
      <div className="w-full md:min-h-screen h-[30%] overflow-hidden bg-black relative px-4 pt-[80px]">
        <div className={`${styles.space} h-[200px] w-full relative`}></div>

        <div className="container mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            SOME <span className="text-blue-500">STATS</span>
          </h1>
          <p className="text-[#FFFFFF66] mt-2 text-sm md:text-base">
            Let's talk about numbers
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
          className="w-[120vw] h-[50%] md:h-[200px] absolute bottom-0 -left-[10vw] z-0 hidden md:block"
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

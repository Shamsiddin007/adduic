"use client"

import Image from "next/image";
import { useState } from "react";
import SingleImg from "public/Imgs/singleImage.png";
import { useData } from "@/components/ContextProvider";

type Post = {
  id: number;
  postdate: number;
  titlePost: string;
  description: string;
  description2: string;
  imgPost: string;
};

export default function ProjectPage() {

  const single: Post = useData()
  const [showFullText, setShowFullText] = useState(false)
  const [showFullText2, setShowFullText2] = useState(false)

  if (!single) return <div>Loading...</div>;
  
  return (
    <div className="pb-[500px]">
      <div className="container">
        <div className="md:w-8/12 m-auto pt-32">
          {/* Post title */}
          <h1 className="xl:text-[32px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[18px] font-extralight pb-5 border-b-2 border-[#FFFFFF1F] border-opacity-10">
            {single.titlePost}
          </h1>

          {/* Post info */}
          <div className="flex items-center justify-between pb-6 pt-[13px]">
            <p className="text-white lg:text-[14px] sm:text-[12px] text-[11px] opacity-50 font-sans">
              {single.postdate}
            </p>
            <p className="text-white text-[14px] opacity-50 font-sans">352</p>
          </div>

          {/* Post image */}
          <Image
            src={single.imgPost}
            alt="NewsImage"
            className="m-auto w-[600px] md:h-[450px] rounded-xl object-center border border-cyan-50 border-opacity-25 mb-6"
            width={400}
            height={300}
          />

          {/* First block: Title + description */}
          <h2 className="text-white font-euclid md:text-[24px] sm:text-[21px] text-[20px] mb-4">
            {single.titlePost}
          </h2>

          <p
          className={`text-white font-sans opacity-80 text-[16px] mb-6 ${
              showFullText ? "" : "line-clamp-3"
          }`}
          >
          {single.description}
          </p>
          <div className="flex items-center justify-center md:mb-16 mb-10">
          <button
              onClick={() => setShowFullText(prev => !prev)}
              className="text-blue-500 hover:underline"
          >
              {showFullText ? "Show less" : "Show more"}
          </button>
          </div>
          
          {/* Second block: Additional image + description2 */}
          <Image
            src={SingleImg}
            alt="SingleImg"
            className="m-auto w-[600px] rounded-xl object-center mb-6"
            width={400}
            height={300}
          />
          
          <p
          className={`text-white font-sans opacity-80 text-[16px] mb-6 ${
              showFullText2 ? "" : "line-clamp-3"
          }`}
          >
          {single.description2}
          </p>
          <div className="flex items-center justify-center md:mb-16 mb-10">
          <button
              onClick={() => setShowFullText2(prev => !prev)}
              className="text-blue-500 hover:underline"
          >
              {showFullText2 ? "Show less" : "Show more"}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

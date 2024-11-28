"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import SingleImg from "public/Imgs/singleImage.png";

type Post = {
  id: number;
  postdate: number;
  titlePost: string;
  description: string;
  description2: string;
  imgPost: string;
};

type ProjectPageProps = {
  params: { id: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;
  const [single, setSingle] = useState<Post | null>(null);
  const [showFullText, setShowFullText] = useState(false); // Birinchi blok uchun
  const [showFullText2, setShowFullText2] = useState(false); // Ikkinchi blok uchun


  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMxMjM1MDM4LCJleHAiOjE3NjI3NzEwMzh9.4cOiyxDSL4rSMbgbGYvgbN3sTHPLACdcMf0HPWx9poE&t=2024-11-10T10%3A37%3A18.316Z"
    )
      .then((response) => response.json())
      .then((data) => {
        const project = data.allnews.find(
          (item: Post) => item.id === Number(id)
        );
        setSingle(project);
      });
  }, [id]);

  if (!single) return <div>Loading...</div>;

  const toggleTextVisibility = () => {
    setShowFullText((prev) => !prev);
  };

  const toggleTextVisibility2 = () => {
    setShowFullText2((prev) => !prev);
  };

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
              onClick={toggleTextVisibility}
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
              onClick={toggleTextVisibility2}
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

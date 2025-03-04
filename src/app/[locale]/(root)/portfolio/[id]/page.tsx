"use client";

import Image from "next/image";
import elementLogo from "public/Imgs/elementLogo.png";
import WindowsLogo from "public/Imgs/windowsLogo.png";
import secendelementLogo from "public/Imgs/secendElementLogo.png";
import { useState } from "react";
import { useData } from "@/components/ContextProvider";
import { useTranslations } from "next-intl";

type ProjectPageProps = {
  params: { id: string };
};

type Post = {
  id: number;
  titlegame: string;
  description: string;
  logo: string;
  backgroundCover: string;
  moredescription: string;
  highlights: {image: string}[]
};

export default function ProjectPage({ params }: ProjectPageProps) {

  const post = useData() as Post
  const [showFullText, setShowFullText] = useState(false)
  const t = useTranslations("HomePage")
  console.log(params.id);
  

  if (!post) return <div>Loading...</div>;

  const toggleTextHandle = () => {
    setShowFullText((prev) => !prev);
  };

  const [firstElement, secondElement] = t("some_highlights").split(" ")

  return (
    <div className="pb-[500px]">
      <div
        className="w-full h-[100vh] pb-[50px] bg-cover bg-center lg:pt-[300px] sm:pt-[200px] pt-[150px]"
        style={{
          backgroundImage: `url(${post.backgroundCover})`,
        }}
      >
        <div className="text-center text-white">
          <Image
            src={post.logo}
            alt="Logo"
            className="m-auto max-w-[80%] sm:max-w-[60%] lg:max-w-[500px] object-contain h-auto"
            width={400}
            height={300}
          />
          <h1 className="text-4xl font-bold mb-4 sm:mt-6 mt-3">{post.titlegame}</h1>
          <p className="text-lg px-3 sm:px-8 pb-8 text-[#FFFFFFCC] container">
            {post.description}
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 my-8">
          {/* Available section */}
          <div className="block flex-col lg:flex-row lg:items-center gap-4  text-white">
            <h2 className="text-[16px] whitespace-nowrap mb-4">{t("available")}</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] cursor-pointer duration-200">
                <Image src={elementLogo} alt="Steam" width={24} height={24} />
                <p className="text-[14px]">Steam</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] cursor-pointer duration-200">
                <Image src={WindowsLogo} alt="Desktop app" width={24} height={24} />
                <p className="text-[14px]">{t("platforms.desktop_app")}</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] cursor-pointer duration-200">
                <Image src={secendelementLogo} alt="VR" width={24} height={24} />
                <p className="text-[14px]">VR</p>
              </div>
            </div>
          </div>

          {/* Buttons section */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="cursor-pointer w-[200px] rounded-full px-8 py-3 bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-300">
              {t("about_game")}
            </button>
            <button className="cursor-pointer w-[200px] rounded-full px-8 py-3 bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-300">
              {t("download")}
            </button>
          </div>
        </div>

        <div className="mb-28">
          <p
            className={`text-white font-sans opacity-80 text-[16px] mb-6 ${
              showFullText ? "" : "line-clamp-3"
            }`}
          >
            {post.moredescription}
          </p>
          <div className="flex items-center justify-center md:mb-16 mb-10">
            <button
              onClick={toggleTextHandle}
              className="text-blue-500 hover:underline"
            >
              {showFullText ? t("toggle_showless") : t("toggle_showmore")}
            </button>
          </div>
        </div>

        <div className="container pb-20">
          <h2 className="font-bold text-3xl sm:text-5xl text-white text-start">
            {firstElement} <span className="text-blue-600">{secondElement}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {post.highlights.map((highlight: {image: string}, index) => (
              <Image
                key={index}
                src={highlight.image}
                alt={`Highlight ${index + 1}`}
                className="rounded-lg h-[200px] w-[450px]"
                width={400}
                height={300}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
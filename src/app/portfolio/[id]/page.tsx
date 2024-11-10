"use client";

import Image from "next/image";
import elementLogo from "public/Imgs/elementLogo.png";
import WindowsLogo from "public/Imgs/windowsLogo.png";
import secendelementLogo from "public/Imgs/secendElementLogo.png";
import Highlights from "public/Imgs/highlights.png"
import { useEffect, useState } from "react";

type Post = {
  id: number;
  titlegame: string;
  description: string;
  logo: string;
  backgroundCover: string;
  moredescription: string;
};

type ProjectPageProps = {
  params: { id: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxMjMzNjM1LCJleHAiOjE3NjI3Njk2MzV9.fQtXBjhOh6s_HknmxmExSjru-sEIlMvUHoMoG5Dm-pE&t=2024-11-10T10%3A13%3A55.385Z"
    )
      .then((response) => response.json())
      .then((data) => {
        const project = data.singleprojects.find(
          (item: Post) => item.id === Number(id)
        );
        setPost(project);
      });
  }, [id]);

  if (!post) return <div>Loading</div>;

  return (
    <>
      <div
        className="w-full pt-[200px] pb-[50px]"
        style={{
          backgroundImage: `url(${post.backgroundCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={post.logo} alt="Logo" className="m-auto" />
        <h1 className="text-4xl font-bold text-center mb-4 mt-4 text-white">
          {post.titlegame}
        </h1>
        <p className="text-lg text-center pl-[100px] pr-[100px] pb-8 text-[#FFFFFFCC]">
          {post.description}
        </p>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 ml-16 mt-8 mb-8 gap-36">
          <div className="flex gap-8 items-center justify-center text-white">
            <h2 className="text-[16px]">Available:</h2>
            <div className="flex items-center gap-4">
              <div className="flex select-none cursor-pointer gap-2 pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] active:translate-y-1 duration-200">
                <Image src={elementLogo} alt="Steam" width={24} height={24} />
                <p className="text-[14px]">Steam</p>
              </div>
              <div className="flex select-none cursor-pointer gap-2 pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] active:translate-y-1 duration-200">
                <Image
                  src={WindowsLogo}
                  alt="Desktop app"
                  width={24}
                  height={24}
                />
                <p className="text-[14px]">Desktop app</p>
              </div>
              <div className="flex select-none cursor-pointer gap-2 pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#FFFFFF0F] rounded-lg hover:bg-[#FFFFFF0B] active:translate-y-1 duration-200">
                <Image
                  src={secendelementLogo}
                  alt="VR"
                  width={24}
                  height={24}
                />
                <p className="text-[14px]">VR</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 container">
            <button className="cursor-pointer w-[200px] rounded-[140px] pt-[10px] pb-[10px] pl-[32px] pr-[32px] bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-1000">
              About Game
            </button>
            <button className="cursor-pointer w-[200px] rounded-[140px] pt-[10px] pb-[10px] pl-[32px] pr-[32px] bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-1000">
              Download
            </button>
          </div>
        </div>
        <div className="mb-28">
          <p className="text-[#FFFFFFCC] w-[782px] m-auto">
            {post.moredescription}
          </p>
        </div>
        <div className="container pb-20">
          <h2 className="font-bold text-5xl text-white">
            OUR <span className="text-blue-600">PROJECTS</span>
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-8 m-8">
            <Image src={Highlights} alt="Highlights" className="rounded-lg"/>
            <Image src={Highlights} alt="Highlights" className="rounded-lg"/>
            <Image src={Highlights} alt="Highlights" className="rounded-lg"/>
            <Image src={Highlights} alt="Highlights" className="rounded-lg"/>
            <Image src={Highlights} alt="Highlights" className="rounded-lg"/>
            <Image src={Highlights} alt="Highlights" className="rounded-lg"/>
          </div>
        </div>
      </div>
    </>
  );
}

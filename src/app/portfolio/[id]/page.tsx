"use client";

import Image from "next/image";
import elementLogo from "public/Imgs/elementLogo.png";
import WindowsLogo from "public/Imgs/windowsLogo.png";
import secendelementLogo from "public/Imgs/secendElementLogo.png";
import Highlights from "public/Imgs/highlights.png";
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
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxMjYzNDQ0LCJleHAiOjE3NjI3OTk0NDR9.LR1i1jdY-dZ1LUdenb9T8oKsJa_dtJNQ6pcmg2njGZM&t=2024-11-10T18%3A30%3A45.640Z"
    )
      .then((response) => response.json())
      .then((data) => {
        const project = data.singleprojects.find(
          (item: Post) => item.id === Number(id)
        );
        setPost(project);
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="pb-[500px]">
      <div
        className="w-full h-[800px] pt-[200px] pb-[50px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${post.backgroundCover})`,
        }}
      >
        <div className="text-center text-white">
          <Image
            src={post.logo}
            alt="Logo"
            className="m-auto max-w-[80%] sm:max-w-[60%] lg:max-w-[500px] object-contain h-auto"
          />
          <h1 className="text-4xl font-bold mb-4 mt-4">{post.titlegame}</h1>
          <p className="text-lg px-8 pb-8 text-[#FFFFFFCC] container">
            {post.description}
          </p>
        </div>
      </div>

      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          <div className="flex gap-8 items-center text-white">
            <h2 className="text-[16px]">Available:</h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF0F] hover:bg-blue-700/10 rounded-lg cursor-pointer text-sm text-white transition-colors duration-200">
                <Image src={elementLogo} alt="Steam" width={24} height={24} />
                <p className="text-[14px]">Steam</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF0F] hover:bg-blue-700/10 rounded-lg cursor-pointer text-sm text-white transition-colors duration-200">
                <Image
                  src={WindowsLogo}
                  alt="Desktop app"
                  width={24}
                  height={24}
                />
                <p className="text-[14px]">Desktop app</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF0F] hover:bg-blue-700/10 rounded-lg cursor-pointer text-sm text-white transition-colors duration-200">
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

          <div className="flex gap-4 justify-center">
            <button className="cursor-pointer w-[200px] rounded-full px-8 py-3 bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-300">
              About Game
            </button>
            <button className="cursor-pointer w-[200px] rounded-full px-8 py-3 bg-[#FFFFFF1A] text-white hover:bg-[#3375F6] duration-300">
              Download
            </button>
          </div>
        </div>

        <div className="mb-28">
          <p className="text-[#FFFFFFCC] max-w-4xl mx-auto">
            {post.moredescription}
          </p>
        </div>

        <div className="container pb-20">
          <h2 className="font-bold text-5xl text-white text-center">
            OUR <span className="text-blue-600">PROJECTS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <Image
              src={Highlights}
              alt="Highlight"
              className="rounded-lg"
              width={600}
              height={400}
            />
            <Image
              src={Highlights}
              alt="Highlight"
              className="rounded-lg"
              width={600}
              height={400}
            />
            <Image
              src={Highlights}
              alt="Highlight"
              className="rounded-lg"
              width={600}
              height={400}
            />
            <Image
              src={Highlights}
              alt="Highlight"
              className="rounded-lg"
              width={600}
              height={400}
            />
            <Image
              src={Highlights}
              alt="Highlight"
              className="rounded-lg"
              width={600}
              height={400}
            />
            <Image
              src={Highlights}
              alt="Highlight"
              className="rounded-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

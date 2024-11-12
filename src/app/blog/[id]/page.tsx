"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SingleImg from "public/Imgs/singleImage.png";
import Forma from "@/app/forma/forma";

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

  if (!single) return <div>Loading</div>;

  return (
    <>
      <div className="container">
        <div className="w-[782px] m-auto ">
          <h1 className="text-[32px] font-extralight pb-5 border-b-2 border-[#FFFFFF1F] border-opacity-10">
            {single.titlePost}
          </h1>
          <div className="flex items-center justify-between pb-6 pt-[13px]">
            <p className="text-white text-[14px] opacity-50 font-sans">
              {single.postdate}
            </p>
            <p className="text-white text-[14px] opacity-50 font-sans">352</p>
          </div>
          <img
            src={single.imgPost}
            alt="NewsImage"
            className="w-full h-[500px] rounded-xl object-center border border-cyan-50 border-opacity-25 mb-6"
          />

          <h2 className="text-white font-euclid text-[24px] mb-4">
            {single.titlePost}
          </h2>
          <p className="text-white font-sans opacity-80 text-[16px] mb-6">
            {single.description}
          </p>
          <Image
            src={SingleImg}
            alt="SingleImg"
            className="rounded-xl object-center mb-6"
          />
          <p className="text-white font-sans opacity-80 text-[16px] mb-16">
            {single.description2}
          </p>
        </div>
        <Forma />
      </div>
    </>
  );
}

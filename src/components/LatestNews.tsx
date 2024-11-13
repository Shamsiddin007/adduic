"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Chevron from "public/Imgs/chevron-right.png";

type User = {
  id: number;
  title: string;
  date: string;
  imgLogo: string;
};

export default function LatestNews() {
  const [trips, setTrips] = useState<User[]>([]);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMxMjM1MDM4LCJleHAiOjE3NjI3NzEwMzh9.4cOiyxDSL4rSMbgbGYvgbN3sTHPLACdcMf0HPWx9poE&t=2024-11-10T10%3A37%3A18.316Z"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((dat) => {
        setTrips(dat.allnews);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="container px-4">
      <p className="text-[#FFFFFF] text-sm md:text-xl pt-8 md:pt-[64px] font-sans pb-3 md:pb-[12px] opacity-30 mt-8 md:mt-16">
        Stay updated about everything
      </p>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 md:pb-10 gap-4 md:gap-10">
        <h2 className="font-bold text-3xl md:text-5xl text-white uppercase">
          latest <span className="text-blue-600">news</span>
        </h2>
        <Link href="blog">
          <button className="flex items-center justify-center rounded-full bg-[#FFFFFF1A] w-full md:w-[152px] h-[44px] text-white hover:bg-[#3375F6] transition-all duration-300">
            All projects <Image src={Chevron} alt="Logo" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-7 justify-between mb-16">
        {trips.slice(0, 8).map((link, id) => (
          <Link href={`/blog/${link.id}`} key={id}>
            <div className="text-white rounded-lg flex flex-col border border-[#FFFFFF1A] bg-[#10131A] w-full h-[377px] pt-3 px-3 md:px-[12px] border-[#FFFFFF1A] hover:scale-[1.05] transition-transform duration-500">
              <img
                src={link.imgPost}
                alt="NewsImage"
                className="rounded-xl object-cover border border-transparent h-[180px] md:h-auto"
              />
              <p className="text-sm md:text-[14px] font-sans opacity-30 pt-3 md:pt-[14px] pb-2 md:pb-[8px]">
                {link.postdate}
              </p>
              <h4 className="text-base md:text-lg pb-2 md:pb-4 font-medium">
                {link.titlePost}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

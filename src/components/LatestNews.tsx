"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Chevron from "public/Imgs/chevron-right.png";

export default function LatestNews() {
    const [trips, setTrips] = useState([]);

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
    <div className="container">
      <p className="text-[#FFFFFF] text-xl pt-[64px] font-sans pb-[12px] opacity-30 mt-16">
        Stay updated about everything
      </p>
      <div className="flex items-center justify-between pb-10 gap-10">
        <h2 className="font-bold text-5xl text-white uppercase">
          latest <span className="text-blue-600">news</span>
        </h2>
        <Link href="blog">
          <button className="flex items-center justify-center rounded-[140px] bg-[#FFFFFF1A] w-[152px] h-[44px] text-white">
            All projects <Image src={Chevron} alt="Logo" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-y-7 justify-between mb-16">
          {trips.slice(0, 8).map((link, id) => (
              <Link href={`/blog/${link.id}`} key={id}>
                <div className="text-white rounded-lg flex flex-col border-[0.03px] bg-[#10131A] w-[281px] h-[377px] pt-[12px] px-[12px] border-[#FFFFFF1A] hover:scale-[1.1] transition-all duration-500">
                  <img
                    src={link.imgPost}
                    alt="NewsImage"
                    className="rounded-xl object-cover border border-transparent"
                  />
                  <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px]">
                    {link.postdate}
                  </p>
                  <h4 className="pb-4 font-medium">{link.titlePost}</h4>
                </div>
              </Link>
            ))}
        </div>
    </div>
  );
}

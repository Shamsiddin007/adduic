"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Chevron from "public/Imgs/chevron-right.png";


interface NewsItem {
  id: string;          // yoki number, agar id raqam bo'lsa
  titlePost: string;
  postdate: string;
  imgPost: string;
}


export default function LatestNews() {
  const [trips, setTrips] = useState<NewsItem[]>([]);

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
      <div className="flex flex-col sm:flex-row items-center justify-between pb-10">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-2 sm:mb-0">
          latest <span className="text-blue-600">news</span>
        </h2>

        <Link href="blog">
          <button className="flex items-center justify-center gap-2 sm:px-6 sm:py-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm transition-colors group">
            All projects <Image src={Chevron} alt="Logo" className="w-4 h-4 group-hover:scale-125 transition-all duration-300" />
          </button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-[340px] sm:w-full m-auto gap-7 justify-between sm:mb-16 mb-8">
        {trips.slice(0, 8).map((link, id) => (
          <Link href={`/blog/${link.id}`} key={id}>
            <div className="h-full text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] pt-[12px] px-[12px] hover:scale-[1.02] transition-all duration-500">
              <Image
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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Link} from "@/navigation";
import Chevron from "public/Imgs/chevron-right.png";
import { useLocale, useTranslations } from "next-intl";

interface NewsItem {
  id: string;
  titlePost: string;
  postdate: string;
  imgPost: string;
}

interface APIResponse {
  allnews: NewsItem[];
}

export default function LatestNews() {
  const t = useTranslations("HomePage");
  const [trips, setTrips] = useState<NewsItem[]>([]);
  const [skeleton, setSkeleton] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMyNzc1ODQwLCJleHAiOjE3NjQzMTE4NDB9.VQc6kKyJ5alk8C13csiwcOjY0d9R0pEG7cVjKcpOFjQ&t=2024-11-28T06%3A37%3A20.579Z"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: APIResponse) => {
        setTrips(data.allnews);
        setSkeleton(false)
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const [firrstTitle, secondTitle] = t("latest_new_Title").split(" ");

  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-10">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-2 sm:mb-0">
          {firrstTitle} <span className="text-blue-600">{secondTitle}</span>
        </h2>

        <Link href={`${locale}/blog`}>
          <button className="flex items-center justify-center gap-2 sm:px-6 sm:py-3 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm transition-colors group">
            {t("all_Project_btn")}{" "}
            <Image
              src={Chevron}
              alt="Logo"
              className="w-4 h-4 group-hover:scale-125 transition-all duration-300"
            />
          </button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-auto sm:w-full m-auto gap-7 justify-center sm:justify-between sm:mb-16 mb-8">
        {skeleton
          ? Array.from({ length: 8 }).map((idx, id) => (
              <div
                key={id}
                className=" h-full py-0 overflow-hidden text-white rounded-lg flex flex-col bg-[#1a1a1a] pt-[12px] px-[12px] animate-pulse"
              >
                <div className="bg-gray-700 rounded-xl max-sm:w-[300px] w-full lg:h-[270px] md:h-[195px] sm:h-[250px] h-[270px]"></div>
                <div className="mt-4 mb-2 bg-gray-700 rounded w-[50%] h-[14px]"></div>
                <div className="mt-2 mb-6 bg-gray-700 rounded w-[70%] h-[18px]"></div>
              </div>
            ))
          : trips.slice(0, 8).map((link: NewsItem, id: number) => (
              <Link href={`${locale}/blog/${link.id}`} key={id}>
                <div className="h-full text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] pt-[12px] px-[12px] hover:scale-[1.02] transition-all duration-500">
                  <Image
                    src={link.imgPost}
                    alt="NewsImage"
                    className="rounded-xl object-cover border border-transparent"
                    width={400}
                    height={300}
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

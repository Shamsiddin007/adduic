"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Arrow from "public/icons/arrow.png";
import Levelup from "@/components/Levelup";
import { useTranslations } from "next-intl";

interface NewsItem {
  id: string;
  titlePost: string;
  postdate: string;
  imgPost: string;
}

function AllNews() {
  const [trips, setTrips] = useState<NewsItem[]>([]);
  const [visibleTrips, setVisibleTrips] = useState<number>(8);
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations("HomePage")

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMzOTQzNjQ0LCJleHAiOjE3NjU0Nzk2NDR9.fMEBw3c2WJyt36DazZ2vvsGaZSKQm3voFUYbbMKdacE&t=2024-12-11T19%3A00%3A43.569Z"
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

  const handleSeeMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleTrips((prevVisibleTrips) => prevVisibleTrips + 4);
      setLoading(false);
    }, 1000);
  };

  const [firstElement, secondElement] = t("blog_news").split(" ")

  return (
    <div className="pb-[450px]">
      <Levelup />
      <div className="container">
        <p className="text-[#FFFFFF] text-center text-xl font-sans pb-[12px] opacity-30 md:mt-16 mt-8">
          {t("blog_desc1")}
        </p>
        <h2 className="font-bold text-center text-3xl sm:text-5xl text-white uppercase pb-10">
          {firstElement} <span className="text-blue-600">{secondElement}</span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-auto sm:w-full m-auto gap-7 justify-center sm:justify-between sm:mb-16 mb-8">
          {Array.isArray(trips) &&
            trips.slice(0, visibleTrips).map((link: NewsItem, id: number) => (
              <Link href={`/blog/${link.id}`} key={id}>
                <div className="h-full py-0 overflow-hidden text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] pt-[12px] px-[12px] sm:hover:scale-[1.02] transition-all duration-500">
                  <Image
                    src={link.imgPost}
                    alt="NewsImage"
                    className="rounded-xl object-cover border border-transparent"
                    width={400}
                    height={300}
                  />
                  <p className="text-[14px] font-sans opacity-30 pt-[14px] pb-[8px] w-1/2">
                    {link.postdate}
                  </p>
                  <h4 className="pb-4 font-medium text-sm max-sm:w-[200px]">{link.titlePost}</h4>
                </div>
              </Link>
            ))}
        </div>

        {visibleTrips < trips.length &&
          (loading ? (
            <div className="flex justify-center items-center mb-12">
              <div className="loader border-t-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
            </div>
          ) : (
            <button 
              aria-label="SeeMore"
              onClick={handleSeeMore}
              className="text-white flex items-center gap-2 bg-[#FFFFFF1A] py-[10px] px-[24px] rounded-full m-auto  mb-12"
            >
              {t("see_more")}
              <Image src={Arrow} alt="ArrowIcons" />
            </button>
          ))}
      </div>
    </div>
  );
}

export default AllNews;

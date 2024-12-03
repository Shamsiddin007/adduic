"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Arrow from "public/icons/arrow.png";
import Levelup from "@/components/Levelup";

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

  return (
    <div className="pb-[450px]">
      <Levelup />
      <div className="container">
        <p className="text-[#FFFFFF] text-center text-xl font-sans pb-[12px] opacity-30 md:mt-16 mt-8">
          Stay updated about everything
        </p>
        <h2 className="font-bold text-center text-5xl text-white uppercase pb-10">
          All <span className="text-blue-600">news</span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-auto sm:w-full m-auto gap-7 justify-center sm:justify-between sm:mb-16 mb-8">
          {Array.isArray(trips) &&
            trips.slice(0, visibleTrips).map((link: NewsItem, id: number) => (
              <Link href={`/blog/${link.id}`} key={id}>
                <div className="h-full py-0 overflow-hidden text-white rounded-lg flex flex-col border-[1px] border-transparent bg-[#10131A] pt-[12px] px-[12px] hover:scale-[1.02] transition-all duration-500">
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
                  <h4 className="pb-4 font-medium text-sm">{link.titlePost}</h4>
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
              onClick={handleSeeMore}
              className="text-white flex items-center gap-2 bg-[#FFFFFF1A] py-[10px] px-[24px] rounded-full m-auto  mb-12"
            >
              See more
              <Image src={Arrow} alt="ArrowIcons" />
            </button>
          ))}
      </div>
    </div>
  );
}

export default AllNews;

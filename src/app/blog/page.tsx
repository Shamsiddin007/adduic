"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "public/icons/arrow.png";
import Levelup from "@/components/Levelup";

// Type definition for the individual news item.
interface NewsItem {
  id: string;        // Unique identifier for each news item
  titlePost: string; // Title of the news post
  postdate: string;  // Date when the news post was created
  imgPost: string;   // URL for the image of the news post
}

function AllNews() {
  // State hooks with types
  const [trips, setTrips] = useState<NewsItem[]>([]);  // Array of NewsItem objects
  const [visibleTrips, setVisibleTrips] = useState<number>(8);  // Number of visible news items
  const [loading, setLoading] = useState<boolean>(false);  // Loading state

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
        setTrips(dat.allnews);  // Update state with the fetched news
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);  // This effect runs once when the component mounts

  // Function to handle "See more" button click
  const handleSeeMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleTrips((prevVisibleTrips) => prevVisibleTrips + 4);  // Show 4 more news items
      setLoading(false);
    }, 1000);  // Simulate loading delay
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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-[340px] sm:w-full m-auto gap-7 justify-between sm:mb-16 mb-8">
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

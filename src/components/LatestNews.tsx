"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Chevron from "public/Imgs/chevron-right.png";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  imgLogo: string;
  imgPost: string;
  postdate: string;
  titlePost: string;
};

export default function LatestNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMxMjM1MDM4LCJleHAiOjE3NjI3NzEwMzh9.4cOiyxDSL4rSMbgbGYvgbN3sTHPLACdcMf0HPWx9poE&t=2024-11-10T10%3A37%3A18.316Z"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        return res.json();
      })
      .then((data) => {
        setNews(data.allnews);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="container px-4 py-8">
        <div className="text-white text-center">
          <p>Failed to load news. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
        <p className="text-[#FFFFFF] text-sm md:text-xl font-sans opacity-30 mt-8 md:mt-16">
          Stay updated about everything
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase">
            latest <span className="text-blue-600">news</span>
          </h2>
          
          <Link href="/blog">
            <button className="flex items-center justify-center gap-2 rounded-full bg-[#FFFFFF1A] px-6 py-3 text-white hover:bg-[#3375F6] transition-all duration-300 w-full sm:w-auto">
              All news
              <Image 
                src={Chevron} 
                alt="Chevron right" 
                className="w-4 h-4"
              />
            </button>
          </Link>
        </div>
      </div>

      {/* News Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {[...Array(8)].map((_, index) => (
            <div 
              key={index}
              className="animate-pulse bg-[#10131A] rounded-lg h-[377px]"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {news.slice(0, 8).map((item) => (
            <Link 
              href={`/blog/${item.id}`} 
              key={item.id}
              className="block group"
            >
              <article className="bg-[#10131A] border border-[#FFFFFF1A] rounded-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105">
                <div className="p-3">
                  {/* Image Container */}
                  <div className="aspect-video relative overflow-hidden rounded-xl">
                    <img
                      src={item.imgPost}
                      alt={item.titlePost}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-4 space-y-2">
                    <time className="text-sm text-white/30">
                      {item.postdate}
                    </time>
                    <h3 className="text-white font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {item.titlePost}
                    </h3>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type Partnyor = { id: number; link: string; logo: string };

const Projects = () => {
  const t = useTranslations("HomePage");
  const [partnyor, setPartnyor] = useState<Partnyor[]>([]);

  const [firstTitle, secondTitle] = t("OurPartnyors").split(" ");

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/partnyor/partnyor.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3BhcnRueW9yL3BhcnRueW9yLmpzb24iLCJpYXQiOjE3MzQxNjA4MzQsImV4cCI6MTc2NTY5NjgzNH0.jRH37KCspHzqNWzpOTRDwNz8Qzt5-EXAC3fYmme72ro&t=2024-12-14T07%3A20%3A32.693Z"
    )
      .then((response) => response.json())
      .then((data) => {
        setPartnyor(data.partnyor);
      });
  }, []);

  return (
    <div className="container mx-auto overflow-hidden">
      <h1 className="font-bold text-white text-center pb-8 text-3xl md:text-3xl lg:text-6xl">
        {firstTitle} <span className="text-blue-600">{secondTitle}</span>
      </h1>

      <Swiper
        className="m-auto w-[90%] md:w-[90%]"
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
        }}
      >
        {partnyor.map((logo, id) => (
          <>
            <SwiperSlide className="w-[100px] sm:w-[200px] md:w-[300px] p-2 flex justify-center">
              <div className="relative group duration-1000 p-4 sm:p-8">
                <div className="w-[150px] h-[80px] !bg-[#1b1a1ac7] sm:group-hover:bg-gradient-to-r from-[#215bcf50] via-transparent to-[#215bcf4e] transition-all duration-1000 sm:w-[181px] sm:h-[112px] rounded-lg flex items-center justify-center">
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.logo}
                      alt={`project image ${id + 1}`}
                      className="p-2 sm:w-[120px] w-[110px]"
                      width={150}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <style jsx global>{`
        @media (max-width: 500px) {
          .group:hover .group-hover\:top-\[-6px\] {
            top: -150px !important;
          }
          .group:hover .hover\:bg-gradient-to-r {
            background: none !important;
          }
          .group:hover {
            transform: scale(1) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;

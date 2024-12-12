"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectImg1 from "public/icons/Слой_x0020_1.png";
import ProjectImg2 from "public/icons/Logo(2).png";
import ProjectImg3 from "public/icons/Group 3(1).png";
import ProjectImg4 from "public/icons/Logo(3).png";
import ProjectImg5 from "public/icons/Logo(1).svg";

import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("HomePage");

  const [firstTitle, secondTitle] = t("OurPartnyors").split(" ");

  return (
    <div className="container mx-auto overflow-hidden">
      <h1 className="font-bold text-white text-center pb-8 text-2xl md:text-3xl lg:text-4xl">
        {firstTitle} <span className="text-blue-600">{secondTitle}</span>
      </h1>

      <Swiper
        className="m-auto w-[80%]"
        loop={true}
        autoplay={{
          delay: 2000,
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
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
      >
        <SwiperSlide className="sm:w-[200px] w-[150px]">
          <div className="relative group duration-1000 p-8">
            <div className="hover:bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] w-[100px] cursor-pointer border-none border-[1px] sm:w-[200px] h-[112px] rounded-lg flex items-center justify-center bg-[#FFFFFF0A] duration-1000">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg1}
                  alt="project image"
                />
              </Link>
            </div>
              <div className="absolute -top-[150px] group-hover:top-[-6px] ml-6 duration-300">
                <span className="text-white">Uzbekistanlik Club</span>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sm:w-[200px] w-[150px]">
        <div className="relative group duration-1000 p-8">
            <div className="hover:bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] w-[100px] cursor-pointer border-none border-[1px] sm:w-[200px] h-[112px] rounded-lg flex items-center justify-center bg-[#FFFFFF0A] duration-1000">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg2}
                  alt="project image"
                />
              </Link>
            </div>
              <div className="absolute -top-[150px] group-hover:top-[-6px] ml-20 duration-300">
                <span className="text-white">SQB</span>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:w-[200px] w-[150px]">
        <div className="relative group duration-1000 p-8">
            <div className="hover:bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] w-[100px] cursor-pointer border-none border-[1px] sm:w-[200px] h-[112px] rounded-lg flex items-center justify-center bg-[#FFFFFF0A] duration-1000">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg3}
                  alt="project image"
                  
                />
              </Link>
            </div>
              <div className="absolute -top-[150px] group-hover:top-[-6px] ml-[70px] duration-300">
                <span className="text-white">Imkon</span>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:w-[200px] w-[150px]">
        <div className="relative group duration-1000 p-8">
            <div className="hover:bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] w-[100px] cursor-pointer border-none border-[1px] sm:w-[200px] h-[112px] rounded-lg flex items-center justify-center bg-[#FFFFFF0A] duration-1000">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg4}
                  alt="project image"
                  
                />
              </Link>
            </div>
              <div className="absolute -top-[150px] group-hover:top-[-6px] ml-16 duration-300">
                <span className="text-white">UIC Group</span>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:w-[200px] w-[150px]">
        <div className="relative group duration-1000 p-8">
            <div className="hover:bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] w-[100px] cursor-pointer border-none border-[1px] sm:w-[200px] h-[112px] rounded-lg flex items-center justify-center bg-[#FFFFFF0A] duration-1000">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg5}
                  alt="project image"
                  
                />
              </Link>
            </div>
              <div className="absolute -top-[150px] group-hover:top-[-4px] ml-16 duration-300 mb-2">
                <span className="text-white">Paylov</span>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;

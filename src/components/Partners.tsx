"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import "./style.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectImg1 from "public/icons/Слой_x0020_1.png";
import ProjectImg2 from "public/icons/Logo(2).png";
import ProjectImg3 from "public/icons/Group 3(1).png";
import ProjectImg4 from "public/icons/Logo(3).png";
import ProjectImg5 from "public/icons/Logo(1).svg";

import { Autoplay} from 'swiper/modules';


const Projects = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <h1 className="font-bold text-white text-center pb-8 text-2xl md:text-3xl lg:text-4xl">
        OUR <span className="text-blue-600">PARTNERS</span>
      </h1>

      <Swiper
        className="m-auto w-[80%]"
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 5,
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
            <div className="w-[150px] border-gray-700 border-[1px] sm:w-[181px] h-[112px] rounded-lg  flex items-center justify-center bg-[#FFFFFF0A] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg1}
                  alt="project image"
                  className="object-cover w-[114px] h-[46px]"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:w-[200px] w-[150px]">
            <div className="w-[150px] border-gray-700 border-[1px] sm:w-[181px] h-[112px] rounded-lg  flex items-center justify-center bg-[#FFFFFF0A] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
              <Link href={"https://sqb.uz/"} target="blank">
                <Image
                  src={ProjectImg2}
                  alt="project image"
                  className="object-cover w-[114px] h-[41px]"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:w-[200px] w-[150px]">
            <div className="w-[150px] border-gray-700 border-[1px] sm:w-[181px] h-[112px] rounded-lg  flex items-center justify-center bg-[#FFFFFF0A] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
              <Link href={"https://it-market.uz/"} target="blank">
                <Image
                  src={ProjectImg3}
                  alt="project image"
                  className="object-cover w-[90px] h-[38px]"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:w-[200px] w-[150px]">
            <div className="w-[150px] border-gray-700 border-[1px] sm:w-[181px] h-[112px] rounded-lg  flex items-center justify-center bg-[#FFFFFF0A] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
              <Link href={"https://uic.group"} target="blank">
                <Image
                  src={ProjectImg4}
                  alt="project image"
                  className="object-coverw-[144px] h-[29px]"
                />
              </Link> 
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:w-[200px] w-[150px]">
            <div className="w-[150px] border-gray-700 border-[1px] sm:w-[181px] h-[112px] rounded-lg  flex items-center justify-center bg-[#FFFFFF0A] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
              <Link href={"https://uzbekistans.club/"} target="blank">
                <Image
                  src={ProjectImg1}
                  alt="project image"
                  className="object-cover w-[114px] h-[46px]"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:w-[200px] w-[150px]">
            <div className="w-[150px] border-gray-700 border-[1px] sm:w-[181px] h-[112px] rounded-lg  flex items-center justify-center bg-[#FFFFFF0A] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
              <Link href={"https://paylov.uz/"} target="blank">
                <Image
                  src={ProjectImg5}
                  alt="project image"
                  className="object-cover w-[118px] h-[38px]"
                />
              </Link>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;

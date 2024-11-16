"use client";

import Image from "next/image";
import "./style.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectImg1 from "public/Imgs/partnersimg.png";
import ProjectImg2 from "public/Imgs/partnersimg1.png";
import ProjectImg3 from "public/Imgs/partnersimg2.png";
import ProjectImg4 from "public/Imgs/partnersimg3.png";
import ProjectImg5 from "public/Imgs/partnersimg4.png";

const Projects = () => {
  return (
    <div className="container mb-10 mt-4">
      <h1 className="font-bold text-white text-center pb-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        OUR <span className="text-blue-600">PARTNERS</span>
      </h1>

      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          800: {
            slidesPerView: 4,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="group1 cursor-pointer rounded-[12px]">
            <Image src={ProjectImg1} alt="project image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group1 cursor-pointer rounded-[12px]">
            <Image src={ProjectImg2} alt="project image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group1 cursor-pointer rounded-[12px]">
            <Image src={ProjectImg3} alt="project image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group1 cursor-pointer rounded-[12px]">
            <Image src={ProjectImg4} alt="project image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group1 cursor-pointer rounded-[12px]">
            <Image src={ProjectImg5} alt="project image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group1 cursor-pointer rounded-[12px]">
            <Image src={ProjectImg1} alt="project image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
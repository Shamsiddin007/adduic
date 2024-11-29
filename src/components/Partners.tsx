"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectImg1 from "public/Imgs/partnersimg.png";
import ProjectImg2 from "public/Imgs/partnersimg1.png";
import ProjectImg3 from "public/Imgs/partnersimg2.png";
import ProjectImg4 from "public/Imgs/partnersimg3.png";
import ProjectImg5 from "public/Imgs/partnersimg4.png";

import { Autoplay} from 'swiper/modules';


const Projects = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <h1 className="font-bold text-white text-center pb-8 text-2xl md:text-3xl lg:text-4xl">
        OUR <span className="text-blue-600">PARTNERS</span>
      </h1>

      <Swiper
        className="mx-auto max-w-[80%]"
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={16}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
      >
        <SwiperSlide>
          <div className="rounded-[8px] w-[200px] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
            <Link href={"https://uzbekistans.club/"} target="blank">
              <Image
                src={ProjectImg1}
                alt="project image"
                className={styles.cardich}
                width={200}
                height={120}
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-[8px] w-[200px] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
            <Link href={"https://sqb.uz/uz/individuals/"} target="blank">
              <Image
                src={ProjectImg2}
                alt="project image"
                className={styles.cardich}
                width={200}
                height={120}
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-[8px] w-[200px] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
            <Link href={"https://imkon.uz/"} target="blank">
              <Image
                src={ProjectImg3}
                alt="project image"
                className={styles.cardich}
                width={200}
                height={120}
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-[8px] w-[200px] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
            <Link href={"https://uic.group/"} target="blank">
              <Image
                src={ProjectImg4}
                alt="project image"
                className={styles.cardich}
                width={200}
                height={120}
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-[8px] w-[200px] hover:shadow-custom-blue-light-inset2 duration-1000 ease-in-out">
            <Link href={"https://paylov.uz/"} target="blank">
              <Image
                src={ProjectImg5}
                alt="project image"
                className={styles.cardich}
                width={200}
                height={120}
              />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;

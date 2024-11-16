"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Chevron from "public/Imgs/chevron-right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Project = { id: number; title: string; date: string; imgLogo: string };

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxMjYzNDQ0LCJleHAiOjE3NjI3OTk0NDR9.LR1i1jdY-dZ1LUdenb9T8oKsJa_dtJNQ6pcmg2njGZM&t=2024-11-10T18%3A30%3A45.640Z"
    )
      .then((response) => response.json())
      .then((data) => {
        const limitedProjects = data.ourprojects.slice(0, 4);
        setProjects(limitedProjects);
      });

    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-4 sm:py-16">
      <div className="container m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            OUR <span className="text-blue-600">PROJECTS</span>
          </h2>
          <Link href="/portfolio">
            <button className="flex items-center justify-center gap-2 rounded-full bg-[#FFFFFF1A] px-6 py-3 text-white hover:bg-[#3375F6] transition-all duration-300">
              All projects{" "}
              <Image src={Chevron} alt="Chevron right" className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {isMobile ? (
          <div className="relative">
            <Swiper
              spaceBetween={15}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Link href={`/portfolio/${project.id}`}>
                    <div className="group relative w-full rounded-2x p-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl bg-[#FFFFFF1A] mb-12">
                      <div className="flex h-full flex-col items-center text-center">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
                          {project.date}
                        </p>
                        <div className="flex-grow relative w-full">
                          <img
                            src={project.imgLogo}
                            alt={project.title}
                            className="inset-0 m-auto z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
                          />
                        </div>
                        <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
                          Learn more <Image src={Chevron} alt="Logo" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 grid-rows-1 justify-between gap-8">
            {projects.map((project) => (
              <Link href={`/portfolio/${project.id}`}>
                <div
                  className="group relative h-[400px] w-full overflow-hidden rounded-2xl p-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative z-10 flex h-full flex-col items-center text-center">
                    <h3 className="text-[16px] font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
                      {project.date}
                    </p>

                    <div className="flex-grow relative w-full">
                      <img
                        src={project.imgLogo}
                        alt={project.title}
                        className="inset-0 m-auto z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
                      />
                    </div>
                    <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
                      Learn more <Image src={Chevron} alt="Logo" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;

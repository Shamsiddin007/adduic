"use client"

import styles from "./style.module.css";

import Link from "next/link";

export default function Story() {

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact-section");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="relative">
        <div className={`${styles.vio}`}></div>
        <div className="container">
          <div className="">
            <div className="">
              <h1 className="text-4xl md:text-6xl font-bold text-white md:text-start text-center">
                We are <span className="text-[#3375F6]">UIC GAMES!</span>
              </h1>
              <p className="w-full md:w-1/2 pt-[20px] md:pt-[40px] pb-4 text-base font-sans leading-5 text-white opacity-80 md:text-start text-center">
                At UIC Games, we are passionate storytellers, visionary artists,
                and technical wizards...
              </p>
              <p className="w-full md:w-1/2 pb-[20px] md:pb-[40px] text-base leading-5 font-sans text-white opacity-80 md:text-start text-center">
                Our team of talented developers, designers, and creatives come
                together to push the boundaries...
              </p>
              <article className="flex flex-col md:flex-row gap-4 md:gap-6 pb-16 w-full items-center">
                <div className="flex items-center gap-4">
                  <button
                    className="py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors"
                    onClick={scrollToContact}
                  >
                    Contact us
                  </button>
                </div>
                <Link href="/about">
                  <button className="py-[10px] px-7 bg-[#1F2022] hover:bg-blue-700 rounded-full text-sm text-white transition-colors">
                    Learn more
                  </button>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

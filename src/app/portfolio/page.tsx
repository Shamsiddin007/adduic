"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import Chevron from "public/Imgs/chevron-right.png";

function page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3Byb2plY3RzLmpzb24iLCJpYXQiOjE3MzEwMDM2ODAsImV4cCI6MTc2MjUzOTY4MH0.-1a1XQuXDJt2EddHs-DHPpVg8Ulwgs6E0Qi9SKwq3wY&t=2024-11-07T18%3A21%3A17.873Z"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.ourprojects);
      });
  }, []);

  return (
    <div className="container m-auto">
      <div className="">
        <h1 className="font-bold text-6xl text-white text-center pt-10 pb-16">
          OUR <span className="text-blue-600">PROJECTS</span>
        </h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 ">
        {posts.map((user, id) => (
          <Link href={`/portfolio/${user.id}`} key={id}>
            <div className="cursor-pointer relative w-[281px] h-96 overflow-hidden rounded-[24px] flex flex-col items-center bg-gradient-to-b from-black to-gray-800 p-5 text-white text-center shadow-md shadow-black/50 mb-8 group">
              <h3 className="text-xl font-bold">{user.title}</h3>
              <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
                {user.date}
              </p>
              <img
                src={user.imgLogo}
                alt="Logo"
                className="inset-0 z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
              />
              <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
                Learn more <Image src={Chevron} alt="Logo" />
              </button>
            </div>
          </Link>
        ))}
      </div>
      <button className="w-[150px] text-white px-4 py-2 bg-[#FFFFFF1A] rounded-[140px] flex items-center justify-center ml-auto mr-auto mb-8">
        Load more
      </button>
    </div>
  );
}

export default page;

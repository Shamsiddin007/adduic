// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// import Chevron from "public/Imgs/chevron-right.png";

// type Post = {
//   id: number;
//   title: string;
//   date: string;
//   imgLogo: string;
// };

// function Page() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [visibleTrips, setVisibleTrips] = useState(8);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch(
//       "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxMjYzNDQ0LCJleHAiOjE3NjI3OTk0NDR9.LR1i1jdY-dZ1LUdenb9T8oKsJa_dtJNQ6pcmg2njGZM&t=2024-11-10T18%3A30%3A45.640Z"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data.ourprojects);
//       });
//   }, []);

//   const handleSeeMore = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setVisibleTrips((prevVisibleTrips) => prevVisibleTrips + 4);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="container m-auto">
//       <div className="mt-[150px]">
//         <h1 className="font-bold text-6xl text-white text-center pb-16">
//           OUR <span className="text-blue-600">PROJECTS</span>
//         </h1>
//       </div>
//       <div className="grid grid-cols-4 grid-rows-2">
//         {Array.isArray(posts) &&
//           posts.slice(0, visibleTrips).map((post) => (
//             <Link href={`/portfolio/${post.id}`} key={post.id}>
//               <div className="cursor-pointer relative w-[281px] h-96 overflow-hidden rounded-[24px] flex flex-col items-center bg-gradient-to-b from-black to-gray-800 p-5 text-white text-center shadow-md shadow-black/50 mb-8 group hover:border-slate-400	hover:border-2 hover:border-solid ease-in-out duration-300">
//                 <h3 className="text-xl font-bold">{post.title}</h3>
//                 <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
//                   {post.date}
//                 </p>
//                 <img
//                   src={post.imgLogo}
//                   alt="Logo1"
//                   className="inset-0 z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
//                 />
//                 <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
//                   Learn more <Image src={Chevron} alt="Logo" />
//                 </button>
//               </div>
//             </Link>
//           ))}
//       </div>
//       {visibleTrips < posts.length &&
//         (loading ? (
//           <div className="flex justify-center items-center mb-12">
//             <div className="loader border-t-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
//           </div>
//         ) : (
//           <button
//             onClick={handleSeeMore}
//             className="text-white flex items-center gap-2 bg-[#FFFFFF1A] py-[10px] px-[24px] rounded-full m-auto  mb-12"
//           >
//             Load more
//           </button>
//         ))}
//     </div>
//   );
// }

// export default Page;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import Chevron from "public/Imgs/chevron-right.png";

type Post = {
  id: number;
  title: string;
  date: string;
  imgLogo: string;
};

function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleTrips, setVisibleTrips] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxMjYzNDQ0LCJleHAiOjE3NjI3OTk0NDR9.LR1i1jdY-dZ1LUdenb9T8oKsJa_dtJNQ6pcmg2njGZM&t=2024-11-10T18%3A30%3A45.640Z"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.ourprojects);
      });
  }, []);

  const handleSeeMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleTrips((prevVisibleTrips) => prevVisibleTrips + 4);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container m-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-[100px] sm:mt-[150px]">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center pb-8 sm:pb-16">
          OUR <span className="text-blue-600">PROJECTS</span>
        </h1>
      </div>

      {/* Responsiv grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8">
        {Array.isArray(posts) &&
          posts.slice(0, visibleTrips).map((post) => (
            <Link href={`/portfolio/${post.id}`} key={post.id}>
                <div className="group relative h-[420px] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-black to-gray-800 p-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  {" "}
                  <div className="relative z-10 flex h-full flex-col items-center text-center">
                    {" "}
                    <h3 className="text-xl font-bold mb-2">
                      {post.title}
                    </h3>{" "}
                    <p className="text-gray-300 pb-14 duration-1000 group-hover:pb-[40px]">
                      {" "}
                      {post.date}{" "}
                    </p>{" "}
                    <div className="flex-grow relative w-full">
                      {" "}
                      <img
                        src={post.imgLogo}
                        alt={post.title}
                        className="inset-0 m-auto z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
                      />{" "}
                    </div>{" "}
                    {/* Learn More Button */}{" "}
                    <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
                      {" "}
                      Learn more <Image src={Chevron} alt="Logo" />{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
            </Link>
          ))}
      </div>

      {visibleTrips < posts.length &&
        (loading ? (
          <div className="flex justify-center items-center mb-12">
            <div className="loader border-t-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
          </div>
        ) : (
          <button
            onClick={handleSeeMore}
            className="text-white flex items-center gap-2 bg-[#FFFFFF1A] py-2 px-6 sm:py-[10px] sm:px-[24px] rounded-full m-auto mb-12"
          >
            Load more
          </button>
        ))}
    </div>
  );
}

export default Page;

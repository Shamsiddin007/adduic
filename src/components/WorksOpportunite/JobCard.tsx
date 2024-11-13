// JobCard.tsx

"use client";
import Link from "next/link";
import strelka from "../../../public/icons/strelka.png";
import Image from "next/image";
interface Job {
  title: string;
  location: string;
  hours: string;
  salaryRange: string;
}

interface JobCardProps {
  jobs: Job[];
}

const JobCard: React.FC<JobCardProps> = ({ jobs }) => {
  return (
    <div className="container select-none mx-auto px-4">
      <div className="h-[max-content] w-full text-white pb-24 pt-20 mb-10">
        <p className="text-[18px] text-center font-thin text-[#FFFFFF66]">
          Feel free to reach out and join our team
        </p>
        <h1 className="text-4xl lg:text-6xl capitalize mt-8 text-center flex items-center justify-center gap-6">
          work <span className="text-[#3375F6]">opportunities</span>
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="px-6 py-5 w-full sm:w-[70%] md:w-[45%] lg:w-[30%] rounded-[24px] flex-grow"
              style={{
                backgroundImage: "linear-gradient(110deg, #3375F61C,transparent,transparent,#3375F61C)",
                border: "0.03px solid #FFFFFF1A",
              }}
            >
              <h2 className="text-lg lg:text-xl font-thin mb-4">{job.title}</h2>
              <p className="relative top-0 bottom-0 mb-4 -left-3 w-[110%] h-[1px] bg-[#FFFFFF1A] rounded"></p>
              <div className="flex items-center mb-6 text-sm md:text-base">
                <span className="mr-2">📍</span>
                <p>{job.location} / {job.hours}</p>
              </div>
              <Link href="/workopportunite">
                <div className="bg-[#FFFFFF14] text-start rounded-lg text-blue-200 font-medium flex items-center cursor-pointer justify-between hover:bg-blue-700 duration-1000 active:translate-x-3">
                  <div className="flex items-center gap-3">
                    <article className="text-start w-[25%] rounded p-2 text-xl bg-[#FFFFFF0A] ">
                      📍
                    </article>
                    <article>{job.salaryRange}</article>
                  </div>
                  <p className="relative -left-3">
                    <Image src={strelka} alt="strelka" className="w-4 h-4 pr-2 opacity-1" />
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default JobCard;

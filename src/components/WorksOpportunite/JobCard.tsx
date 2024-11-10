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
    <div className="container select-none mx-auto">
      <div className="h-[400px] w-full text-white mb-16 pt-10">
      <p className="text-[18px] text-center font-thin text-[#FFFFFF66]">
        Feel free to reach out and join our team
      </p>
      <h1 className="text-6xl capitalize mt-8 text-center flex items-center justify-center gap-6">
        work <span className="text-[#3375F6]">opportunities</span>
      </h1>
      <div>
        <div className="flex items-center justify-around mt-20">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="px-10 py-5 w-[30%] rounded-[24px] "
              style={{
                boxShadow: "-5px 2px 43px -2px rgba(8, 102, 174, 0.3) inset",
              }}
            >
              <h2 className="text-xl font-thin  mb-4">{job.title}</h2>
              <div className="flex items-center mb-6">
                <span className="mr-2">📍</span>
                <p>
                  {job.location} / {job.hours}
                </p>
              </div>
              <Link href='/workopportunite '>
              <div className="bg-[#FFFFFF14] text-start rounded-lg text-blue-200 font-medium flex items-center cursor-pointer justify-between hover:bg-blue-700 duration-1000 active:translate-x-3">
                <div className="flex items-center gap-3">
                  <article className="text-start w-[25%] rounded p-2 text-xl bg-[#FFFFFF1A] ">
                    📍
                  </article>
                  <article>{job.salaryRange}</article>
                </div>
                <Image
                  src={strelka}
                  alt="strelka"
                  className="w-4 h-4 pr-2 opacity-1"
                />
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default JobCard;

"use client";
import { useEffect, useState } from "react";
import money from "/public/icons/moneyImg.png";
import strelka from "/public/icons/strelka.png";
import calendar from "/public/icons/calendar.png";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

type Jobs = {
  id: number;
  jobTitle: string;
  weekJob: string;
  jobTime: number;
  jobPrice: number;
};

export default function Page() {
  const [trips, setTrips] = useState<Jobs[]>([]);
  const locale = useLocale();
  

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/workOpportunity/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3dvcmtPcHBvcnR1bml0eS9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxNDc0OTQ0LCJleHAiOjE3NjMwMTA5NDR9.gVmYXET9c8Aq1kZOYUdY-5z6Sh-ICeLJDl62TK8Dw8I&t=2024-11-13T05%3A15%3A44.885Z"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((dat) => {
        setTrips(dat.workopportunity);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  


  return (
    <section className="container mb-[500px] mt-[150px]">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:w-auto md:w-[500px] md:m-auto gap-8 mt-20 w-auto">
        {trips.map((job) => (
          <div
            key={job.id}
            className="px-8 py-6 w-full rounded-[24px] bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] border border-[#FFFFFF1A]"
          >
            <h2 className="text-xl font-thin mb-4 text-white">
              {job.jobTitle}
            </h2>
            <p className="relative mb-4 w-[100%] h-[1px] bg-[#FFFFFF1A] rounded"></p>
            <div className="flex items-center mb-6">
              <span className="mr-2">
                <Image src={money} alt="money img" />
              </span>
              <p className="text-white">
                {job.weekJob} / {job.jobTime}
              </p>
            </div>
            <Link  href={`${locale}/workopportunite/${job.id}`}>
              <div className="bg-[#FFFFFF14] text-start rounded-lg text-blue-200 font-medium flex items-center cursor-pointer justify-between hover:bg-blue-700 duration-300 active:translate-x-3">
                <div className="flex items-center gap-3">
                  <article className="text-start rounded p-3 text-xl bg-[#FFFFFF0A]">
                    <Image
                      src={calendar}
                      alt="calendar"
                      width={22}
                      height={22}
                    />
                  </article>
                  <article>{job.jobPrice}</article>
                </div>
                <p className="relative -left-3">
                  <Image
                    src={strelka}
                    alt="strelka"
                    className="w-4 h-4 pr-2 opacity-1"
                  />
                </p>
              </div>
            </Link>
          </div>
        ))}
        {trips.map((job) => (
          <div
            key={job.id}
            className="px-8 py-6 w-full rounded-[24px] bg-gradient-to-r from-[#3375F61C] via-transparent to-[#3375F61C] border border-[#FFFFFF1A]"
          >
            <h2 className="text-xl font-thin mb-4 text-white">
              {job.jobTitle}
            </h2>
            <p className="relative mb-4 w-[100%] h-[1px] bg-[#FFFFFF1A] rounded"></p>
            <div className="flex items-center mb-6">
              <span className="mr-2">
                <Image src={money} alt="money img" />
              </span>
              <p className="text-white">
                {job.weekJob} / {job.jobTime}
              </p>
            </div>
            <div className="bg-[#FFFFFF14] text-start rounded-lg text-blue-200 font-medium flex items-center cursor-pointer justify-between hover:bg-blue-700 duration-300 active:translate-x-3">
              <div className="flex items-center gap-3">
                <article className="text-start rounded p-3 text-xl bg-[#FFFFFF0A]">
                  <Image src={calendar} alt="calendar" width={22} height={22} />
                </article>
                <article>{job.jobPrice}</article>
              </div>
              <p className="relative -left-3">
                <Image
                  src={strelka}
                  alt="strelka"
                  className="w-4 h-4 pr-2 opacity-1"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

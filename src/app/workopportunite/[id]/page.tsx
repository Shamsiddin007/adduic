"use client";
import { useState, useEffect } from "react";
import facebook from "/public/icons/facebook.png";
import instagram from "/public/icons/instagram.png";
import telegram from "/public/icons/telegram.png";
import calendar from "/public/icons/calendar.png";
import clock from "/public/icons/clock.png";
import money from "/public/icons/moneyImg.png";
import Image from "next/image";
import NotFound from "@/app/not-found";


type Job = {
  id: number;
  jobTitle: string;
  weekJob: string;
  jobTime: number;
  jobPrice: number;
};
type ProjectPageProps = {
  params: { id: string };
};
export default function ProjectPage({ params }: ProjectPageProps) {
  const [single, setSingle] = useState<Job | null>(null);
  const { id } = params;


  if(!Number(id)){
    return <NotFound/>
  }


  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/workOpportunity/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3dvcmtPcHBvcnR1bml0eS9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxNDc0OTQ0LCJleHAiOjE3NjMwMTA5NDR9.gVmYXET9c8Aq1kZOYUdY-5z6Sh-ICeLJDl62TK8Dw8I&t=2024-11-13T05%3A15%3A44.885Z"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // JSON ma'lumotini tekshirish
        const project = data.workopportunity.find(
          (item: Job) => item.id === Number(id)
        ); // to'g'ri massiv
        setSingle(project);
      });
  }, [id]);

  if (!single) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container text-white">
      <div className="pb-[500px] w-full">
        <div className="w-full py-5 px-4 sm:px-12 rounded-xl m-[150px_0px_20px_0px] bg-[#2b2b2e] text-start mb-12">
          <h1 className="mb-3 text-xl sm:text-2xl">{single.jobTitle}</h1>
          <p className="w-full h-[2px] rounded-lg bg-gray-400 mb-8"></p>
          <div className="flex flex-col md:flex-row items-start sm:items-center justify-start gap-6 sm:gap-20">
            <article className="flex gap-4 sm:gap-8">
              <span className="p-2 rounded-xl cursor-pointer transition duration-1000 border hover:border-[#2365eb]">
                <Image
                  src={facebook}
                  alt="facebook icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className="p-2 rounded-xl cursor-pointer transition duration-1000 border hover:border-[#2365eb]">
                <Image
                  src={instagram}
                  alt="instagram icon"
                  width={20}
                  height={20}
                />
              </span>
              <span className="p-2 rounded-xl cursor-pointer transition duration-1000 border hover:border-[#2365eb]">
                <Image src={telegram} alt="telegram icon" />
              </span>
            </article>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <article className="flex items-center gap-2">
                <p className="rounded-[50%] bg-gray-700 cursor-pointer p-2">
                  <Image src={calendar} alt="calendar icon" width={20} />
                </p>
                <span>{single.weekJob}</span>
              </article>
              <article className="flex items-center gap-2">
                <p className="rounded-[50%] bg-gray-700 cursor-pointer p-1">
                  <Image src={clock} alt="clock icon" width={28} />
                </p>
                <span>{single.jobTime}</span>
              </article>
              <article className="flex items-center gap-2">
                <p className="rounded-[50%] bg-gray-700 cursor-pointer py-[10px] px-[6px]">
                  <Image src={money} alt="money icon"  />
                </p>
                <p>{single.jobPrice}</p>
              </article>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full sm:w-[85%] px-4 sm:px-0">
            <article>
              <h2 className="text-2xl sm:text-3xl mb-5 mt-10">Requirements</h2>
              <ul className="list-disc ml-5">
                <li className="mb-3">Experience in software testing.</li>
                <li className="mb-3">
                  Knowledge of testing methodologies and understanding of the
                  software development lifecycle.
                </li>
                <li className="mb-3">
                  Experience writing test cases and test plans.
                </li>
                <li className="mb-3">
                  Understanding the basics of test automation and experience
                  working with automation tools (e.g. Selenium, Appium, JUnit,
                  TestNG).
                </li>
                <li className="mb-3">
                  The desire to learn new technologies and testing
                  methodologies.
                </li>
                <li className="mb-3">
                  Knowledge of software testing theory (methods, techniques);
                </li>
              </ul>
            </article>
            <article>
              <h2 className="text-2xl sm:text-3xl mb-5 mt-16">Conditions</h2>
              <ul className="list-disc ml-5">
                <li className="mb-3">
                  The work schedule is 5/2 09:00 to 18:00;
                </li>
                <li className="mb-3">Corporate education and trainings;</li>
                <li className="mb-3">
                  Working with a professional team to develop interesting
                  projects;
                </li>
                <li className="mb-3">
                  Friendly and supportive atmosphere in the team, regular team
                  events, team building, including marathons and quizzes;
                </li>
                <li className="mb-3">
                  The company is proud to provide its employees with the most
                  modern and high-quality equipment for work;
                </li>
                <li className="mb-3">A modern office with work facilities;</li>
                <li className="mb-3">
                  Timely payment of labor, including a system of bonuses for
                  outstanding results;
                </li>
                <li className="mb-3">
                  Employment in accordance with the Labor Code of the Republic
                  of Uzbekistan.
                </li>
              </ul>
              <p>
                If you are ready to join our team and contribute to the
                development of innovative projects, please send your resume For
                more information about our capabilities, please follow this
                (https://uic.games/about).
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

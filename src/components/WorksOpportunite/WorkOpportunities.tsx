// WorkOpportunities.tsx

"use client";
import JobCard from './JobCard';

const WorkOpportunities = () => {
  const jobs = [
    {
      title: "Unity developer",
      location: "Dushanba - Shanba",
      hours: "09:00 - 18:00",
      salaryRange: "$600 - $1200",
    },
    {
      title: "Unreal Engine developer",
      location: "Dushanba - Shanba",
      hours: "09:00 - 18:00",
      salaryRange: "$800 - $2000",
    },
    {
      title: "Fullstack developer",
      location: "Dushanba - Shanba",
      hours: "09:00 - 18:00",
      salaryRange: "$1500 - $4800",
    },
  ];

  return <JobCard jobs={jobs} />;
};

export default WorkOpportunities;

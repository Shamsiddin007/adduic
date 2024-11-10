"use client";

import { useEffect, useState } from "react";

export default function IdNews() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMxMTgwNTQzLCJleHAiOjE3NjI3MTY1NDN9.mglO11v5bzC5A1T72z3M0C7o9uqKn89UwcPnWa5ZGCo&t=2024-11-09T19%3A29%3A03.728Z"
    )
      .then((all) => {
        if (!all.ok) {
          throw new Error("Network response was not ok");
        }
        return all.json();
      })
      .then((news) => {
        console.log(news);
        setAllNews(news.allnews);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  return (
    <div className="container">
      SHAMSIDDIN
      {allNews.map((all, id) => (
        <div key={id}>
          {/* <h2 className="text-white">{all.id}</h2> */}
        </div>
      ))}
    </div>
  );
}

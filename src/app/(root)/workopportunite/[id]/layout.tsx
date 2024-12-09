import ContextProvider from "@/components/ContextProvider";
import { notFound } from "next/navigation"

const BASE_URL: string = "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/workOpportunity/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3dvcmtPcHBvcnR1bml0eS9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxNDc0OTQ0LCJleHAiOjE3NjMwMTA5NDR9.gVmYXET9c8Aq1kZOYUdY-5z6Sh-ICeLJDl62TK8Dw8I&t=2024-11-13T05%3A15%3A44.885Z"

type Job = {
    id: number;
    jobTitle: string;
    weekJob: string;
    jobTime: number;
    jobPrice: number;
  };
  
export default async function PortfolioLayout({children, params}: { children: React.ReactNode, params: {id: string}}) {

    const id = Number(params.id)
    if (!id) return notFound()

    const data = await fetch(BASE_URL)
    if (!data.ok) return notFound()

    const single = (await data.json()).workopportunity.find((item: Job) => item.id === id) 
    if (!single) return notFound()

  return (
    <ContextProvider single={single}>
      {children}
    </ContextProvider>
  )
}

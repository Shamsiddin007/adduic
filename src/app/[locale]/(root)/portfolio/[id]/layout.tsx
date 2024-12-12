import ContextProvider from "@/components/ContextProvider";
import { notFound } from "next/navigation"

const BASE_URL: string = "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMzOTQyMTE0LCJleHAiOjE3NjU0NzgxMTR9._68RmmuxXz8Dp7-uGaqVt7B9bRNGQ_kvn1KISNYzdhY&t=2024-12-11T18%3A35%3A13.549Z"
type Post = {
    id: number;
    titlegame: string;
    description: string;
    logo: string;
    backgroundCover: string;
    moredescription: string;
    highlights: string[]
};
  
export default async function PortfolioLayout({children, params}: { children: React.ReactNode, params: {id: string}}) {

    const id = Number(params.id)
    if (!id) return notFound()

    const data = await fetch(BASE_URL)
    if (!data.ok) return notFound()

    const single = (await data.json()).singleprojects.find((item: Post) => item.id === id) 
    if (!single) return notFound()

  return (
    <ContextProvider single={single}>
      {children}
    </ContextProvider>
  )
}
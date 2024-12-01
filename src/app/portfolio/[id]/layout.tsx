import { notFound } from "next/navigation"

const BASE_URL: string = "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMxMjYzNDQ0LCJleHAiOjE3NjI3OTk0NDR9.LR1i1jdY-dZ1LUdenb9T8oKsJa_dtJNQ6pcmg2njGZM&t=2024-11-10T18%3A30%3A45.640Z"
type Post = {
    id: number;
    titlegame: string;
    description: string;
    logo: string;
    backgroundCover: string;
    moredescription: string;
};
  
export default async function PortfolioLayout({children, params}: { children: React.ReactNode, params: {id: string}}) {

    const id = params.id
    if (!Number(id)) notFound()

    const data = await fetch(BASE_URL)
    if (!data.ok) notFound()
    
    if (!(await data.json()).singleprojects.find((item: Post) => item.id === Number(id))) notFound()

  return children
}

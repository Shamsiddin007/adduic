import { notFound, redirect } from "next/navigation";

const BASE_URL: string = "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/allnews/news.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L2FsbG5ld3MvbmV3cy5qc29uIiwiaWF0IjoxNzMyNzc1ODQwLCJleHAiOjE3NjQzMTE4NDB9.VQc6kKyJ5alk8C13csiwcOjY0d9R0pEG7cVjKcpOFjQ&t=2024-11-28T06%3A37%3A20.579Z"
type Post = {
    id: number;
    postdate: number;
    titlePost: string;
    description: string;
    description2: string;
    imgPost: string;
};
  
export default async function Bloglayout({children, params}: { children: React.ReactNode, params: {id: string}}) {

    const id = params.id
    if (!Number(id)) notFound()

    const data = await fetch(BASE_URL)

    if (!data.ok) notFound()
    if (!(await data.json()).allnews.find((item: Post) => item.id === Number(id))) notFound()

    return children
}
  
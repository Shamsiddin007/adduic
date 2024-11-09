import Main from "@/components/Main";
import Story from "@/components/Story";
import OurProjct from "@/components/OurProject"
import Video from '@/components/videolayout'
// import LatestNews from "@/components/LatestNews";

export default function Home() {
  return (
    <div>
      <Main/>
      <Story/>
      <OurProjct/>
      <Video/>
      {/* <LatestNews/> */}
    </div>
   )
}

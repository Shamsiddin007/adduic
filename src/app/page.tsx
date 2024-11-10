import Main from "@/components/Main";
import Story from "@/components/Story";
import OurProjct from "@/components/OurProject";
import Video from "@/components/videolayout";
import Partner from "@/components/Partners";
import OurServices from "@/components/OurServices"

export default function Home() {
  return (
    <div>
      <Main/>
      <Story/>
      <OurProjct/>
      <Video/>
      <OurServices/>
      <Partner/>
      {/* <LatestNews/> */}
    </div>
   )
}

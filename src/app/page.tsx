import Main from "@/components/Main";
import Story from "@/components/Story";
import OurProjct from "@/components/OurProject/OurProject"
import Video from '@/components/videolayout'

export default function Home() {
  return (
    <div className="container">
      <Main/>
      <Story/>
      <OurProjct/>
      <Video/>
    </div>
   )
}

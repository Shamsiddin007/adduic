import Main from "@/components/Main";
import Story from "@/components/Story";
import OurProjct from "@/components/OurProject";
import Video from "@/components/videolayout";
import Partner from "@/components/Partners";
import OurServices from "@/components/OurServices"
import Somestats from "@/components/Somestats";
import LatestNews from "@/components/LatestNews";
import WorkOpportunities from "@/components/WorksOpportunite/WorkOpportunities";
import Forma from "@/components/Forma/Forma";
export default function Home() {
  return (
    <div>
      <Main/>
      <Story/>
      <OurProjct/>
      <Video/>
      <OurServices/>
      <Partner/>
      <Somestats/>
      <LatestNews/>
      <WorkOpportunities/>
      <Forma/>
    </div>
   )
}



import Main from "@/components/Main";
import Story from "@/components/Story";
import OurProjct from "@/components/OurProject/OurProject"
import Video from '../components/videolayout'

export default function Home() {
  return (
    <div className="sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Main/>
      <Story/>
      <OurProjct/>
      <Video/>
      )
}

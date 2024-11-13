import Acceptance from "@/components/Acceptance"
import Features from "@/components/Features"
import School from "@/components/School"
import WhatisPracticum from "@/components/WhatisPracticum"
import Forma from "../forma/forma"
import PractikumShadow from "@/components/PractikumShadow"

function page() {
    return (
      <div>
        <PractikumShadow/>
        <WhatisPracticum/>
        <Features/>
        <School/>
        <Acceptance/>
        <Forma/>
      </div>
    )
  }

  export default page

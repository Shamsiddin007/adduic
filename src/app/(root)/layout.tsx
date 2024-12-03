import Footerlayout from "@/components/Footerlayout";
import Navbarlayout from "@/components/Navbarlayout";
import TestLaunch from "@/components/testLaunch/TestLaunch";
import { Analytics } from "@vercel/analytics/next";


export default function RootLayout({ children}: {children: React.ReactNode} ){

    return (
    <>
        <Navbarlayout/>
        <div>
          {children}
          <Analytics />
          <TestLaunch/>
        </div>
        <Footerlayout/>
    </>
  )
}

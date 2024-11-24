import type { Metadata } from "next";
import Navbarlayout from "@/components/Navbarlayout";
import Footerlayout from "@/components/Footerlayout";
// import FormaLayout from "@/app/forma/forma"
import './globals.css'
import TestLaunch from "@/components/testLaunch/TestLaunch";
import Loader from "@/components/Loader/Loader";
// import Forma from "@/app/forma/forma";



export const metadata: Metadata = {
  title: "UIC Games",
  description: "Games ishlab chiqaruvchi O'zbekistonda Yagona IT Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Loader/>
        <Navbarlayout/>
        <div>
          {children}
          <TestLaunch/>
        </div>
        {/* <FormaLayout/> */}
        <Footerlayout/>
      </body>
    </html>
  );
}

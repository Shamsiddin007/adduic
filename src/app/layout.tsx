import type { Metadata } from "next";
import Navbarlayout from "@/components/Navbarlayout";
import Footerlayout from "@/components/Footerlayout";
import './globals.css'
import TestLaunch from "@/components/testLaunch/TestLaunch";



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
        <Navbarlayout/>
        <div>
          {children}
          <TestLaunch/>
        </div>
        <Footerlayout/>
      </body>
    </html>
  );
}

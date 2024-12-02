import type { Metadata } from "next";
import './globals.css'
import Loader from "@/components/Loader/Loader";

export const metadata: Metadata = {
  title: "UIC Games",
  description: "Games ishlab chiqaruvchi O'zbekistonda Yagona IT Company",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body>
        <Loader/>
        {children}
      </body>
    </html>
  );
}

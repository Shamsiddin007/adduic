import type { Metadata } from "next";
import "./globals.css";
import Navbatlayout from "@/component/navbatlayout";

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
        <Navbatlayout/>
        <div className="mt-24">
          {children}
        </div>
      </body>
    </html>
  );
}

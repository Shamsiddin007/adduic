import type { Metadata } from "next";
import "./globals.css";
import NavbarLayout from "@/component/Navbarlayout";

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
        <NavbarLayout/>
        <div className="mt-24">
          {children}
        </div>
      </body>
    </html>
  );
}

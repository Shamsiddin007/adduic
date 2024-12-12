import type { Metadata } from "next";
import './globals.css'
import Loader from "@/components/Loader/Loader";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "UIC Games",
  description: "Games ishlab chiqaruvchi O'zbekistonda Yagona IT Company",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{locale: string}>
}>) {

  const locale =  (await params).locale
  const messages = await getMessages()
  
  return (
      <html lang="en">
        <body>
          <Loader/>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
  );
}

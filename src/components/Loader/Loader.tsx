"use client";

import NProgress from "nprogress";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import '@/app/globals.css'

const Loader = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({
        showSpinner: false
    })
    NProgress.start(); // Loaderni boshlash
    const timer = setTimeout(() => NProgress.done(), 500); // Sahifa yuklanganda tugatish

    return () => {
      clearTimeout(timer);
      NProgress.done(); // Har safar tozalash
    };
  }, [pathname]);

  return null; // Vizual komponentga ehtiyoj yo'q
};

export default Loader;

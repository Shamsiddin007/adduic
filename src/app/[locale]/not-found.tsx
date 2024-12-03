"use client"

import Link from "next/link";

function NotFound() { 
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center flex-col gap-10">
       <h1 className="text-white text-5xl">404 - Sahifa topilmadi</h1>
       <Link href="/" className="text-white"><button className="py-4 px-6 bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-500">Asosiyga Qaytish</button></Link>
      
    </div>
  )
}

export default NotFound;

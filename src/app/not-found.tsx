"use client"

import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";

function NotFound() {

    const [showNotFound, setShowNotFound] = useState(false)


    useEffect(()=> {
        const timer = setTimeout(()=> {
            setShowNotFound(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])


    if(!showNotFound){
        return <Loader/>
    }

  return (
    <div>
       <h1 className="text-white text-5xl">404 - Sahifa topilmadi</h1>
    </div>
  )
}

export default NotFound;

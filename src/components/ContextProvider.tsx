"use client"

import { createContext, useContext, useState } from "react"

const Context = createContext<any>(null)

export default function ContextProvider({ children, single }: {children: React.ReactNode, single?: object}) {

    const [data, setData] = useState(single)
    
    return (
      <Context.Provider value={data}>
          {children}
      </Context.Provider>
    )
}

export const useData = () => useContext(Context);

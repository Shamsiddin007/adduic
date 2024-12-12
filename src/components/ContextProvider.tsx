"use client"

import { createContext, useContext, useState, ReactNode } from "react";
type ContextType = object | null
const Context = createContext<ContextType>(null)

interface ContextProviderProps{
  children: ReactNode;
  single?: ContextType
}

export default function ContextProvider({ children, single }: ContextProviderProps) {

    const [data, setData] = useState<ContextType>(single || null)
    console.log(setData);
    
    return (
      <Context.Provider value={data}>
          {children}
      </Context.Provider>
    )
}

export const useData = () => {
  const context = useContext(Context);
  if(context === undefined){
    throw new Error('Usedata not end')
  }
  return context
} 
import React, { createContext, useContext, useEffect, useState } from "react";
const DataContaxt = createContext({});
export default function Store({ children }) {
  const [Auth, setAuth] = useState({
    user: {},
  });
  useEffect(()=>{
    setAuth({
        ...Auth,
        user:JSON.parse(localStorage.getItem("user"))??{}
    })
  },[])
  return (
    <DataContaxt.Provider value={[Auth, setAuth]}>
      {children}
    </DataContaxt.Provider>
  );
}

export const useAuth = ()=> useContext(DataContaxt);

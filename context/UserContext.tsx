import React, { createContext, useContext, useEffect, useState } from "react";
import {UserCredential} from "firebase/auth";

const userCtx = createContext({ user: "", updateUser: (user: string) => {} });

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    let localUser = localStorage.getItem("infdosUser");
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  const updateUser = (user:string) => {
    setUser(user);
    let stringCreds = JSON.stringify(user);
		localStorage.setItem("infdosUser", stringCreds);
  };

  return <userCtx.Provider value={{user, updateUser}}>{children}</userCtx.Provider>;
};

export const useUser = () => {
  return useContext(userCtx);
};

import React, { createContext, useContext, useEffect, useState } from "react";

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
		localStorage.setItem("infdosUser",user);
  };

  return <userCtx.Provider value={{user, updateUser}}>{children}</userCtx.Provider>;
};

export const useUser = () => {
  return useContext(userCtx);
};

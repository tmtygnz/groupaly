import React, { createContext, useContext, useEffect, useState } from "react";
import { UserCredential } from "firebase/auth";
import Ajv, { JSONSchemaType } from "ajv";

const userCtxDefault: IUser = {
  user: null,
  updateUser: (user: UserCredential) => null,
};
const userCtx = createContext<IUser>(userCtxDefault);

export const NewUserProvider: React.FC = ({ children }) => {
  console.log("Debyg");
  const [user, setUser] = useState<UserCredential | null>(null);

  useEffect(() => {
    console.log("Debyg");
    let localUser = localStorage.getItem("infdosUser");
    if (localUser) {
      let jsonUser: UserCredential = JSON.parse(localUser);
      setUser(jsonUser);
    }
		console.log(user);
  }, []);

  const updateUser = (user: UserCredential) => {
    setUser(user);
    let stringCreds = JSON.stringify(user);
    localStorage.setItem("infdosUser", stringCreds);
  };

  return <userCtx.Provider value={{ user, updateUser }}>{children}</userCtx.Provider>;
};

interface IUser {
  user: UserCredential | null;
  updateUser: (user: UserCredential) => void;
}

export const useUser = () => {
  console.log("Debyg");

  return useContext(userCtx);
};

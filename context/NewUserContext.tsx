import React, { createContext, useContext, useEffect, useState } from "react";
import { UserCredential } from "firebase/auth";
import Ajv, { JSONSchemaType } from "ajv";
import { IUser } from "../interface/IUser";

const userCtxDefault: IUserContext = {
  user: null,
  updateUser: (user: IUser) => null,
};
const userCtx = createContext<IUserContext>(userCtxDefault);

export const NewUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    let localUser = localStorage.getItem("infdosUser");
    if (localUser) {
      let jsonUser: IUser = JSON.parse(localUser);
      setUser(jsonUser);
    }
  }, []);

  const updateUser = (user: IUser) => {
    setUser(user);
    let stringCreds = JSON.stringify(user);
    localStorage.setItem("infdosUser", stringCreds);
  };

  return <userCtx.Provider value={{ user, updateUser }}>{children}</userCtx.Provider>;
};

interface IUserContext {
  user: IUser | null;
  updateUser: (user: IUser) => void;
}

export const useUser = () => {
  return useContext(userCtx);
};

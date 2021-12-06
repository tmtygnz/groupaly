import React, { createContext, useContext, useEffect, useState } from "react";
import { UserCredential } from "firebase/auth";
import Ajv, { JSONSchemaType } from "ajv";

const userCtxDefault: IUserContext = {
  user: null,
  updateUser: (user: UserCredential) => null,
};
const userCtx = createContext<IUserContext>(userCtxDefault);

export const NewUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserCredential | null>(null);

  useEffect(() => {
    let localUser = localStorage.getItem("infdosUser");
    if (localUser) {
      let jsonUser: UserCredential = JSON.parse(localUser);
      setUser(jsonUser);
    }
  }, []);

  const updateUser = (user: UserCredential) => {
    setUser(user);
    let stringCreds = JSON.stringify(user);
    localStorage.setItem("infdosUser", stringCreds);
  };

  return <userCtx.Provider value={{ user, updateUser }}>{children}</userCtx.Provider>;
};

interface IUserContext {
  user: UserCredential | null;
  updateUser: (user: UserCredential) => void;
}

export const useUser = () => {
  return useContext(userCtx);
};

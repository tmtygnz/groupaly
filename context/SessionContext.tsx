import { stringLength } from "@firebase/util";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IMessage } from "../interface/IMessage";
import { ISession } from "../interface/ISession";
import { IUser } from "../interface/IUser";
import { useUser } from "./NewUserContext";
import io, { Socket } from "socket.io-client";
import router from "next/dist/client/router";

const sessionCtxDefault: ISession = {
  id: "",
  socket: null,
};

interface ISessionContextProp {
  id: string;
}

const sessionCTX = createContext(sessionCtxDefault);

export const SessionContext: React.FC<ISessionContextProp> = ({
  children,
  id,
}) => {
  const user = useUser();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [roomId, setId] = useState("");

  useEffect(() => {
    setId(id);
  }, [id]);

  useEffect((): any => {
    let newSocket = io("localhost:3001", { rejectUnauthorized: false });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    console.log({ user: user, id: id });
    socket?.emit("join", { user: user, id: roomId });
    socket?.on("new-user-join", (a: any) => {
      console.log(a);
    });
  }, [socket, setId]);

  return (
    <sessionCTX.Provider
      value={{
        id,
        socket,
      }}
    >
      {children}
    </sessionCTX.Provider>
  );
};

export const useSession = () => {
  return useContext(sessionCTX);
};

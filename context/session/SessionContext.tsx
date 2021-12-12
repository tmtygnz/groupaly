import React, { createContext, useEffect, useState } from "react";
import { ISession } from "../../interface/ISession";
import { IUser } from "../../interface/IUser";
import { useUser } from "../NewUserContext";
import { useSocket } from "./SocketConnectionContext";

const sessionCtx = createContext<ISession | null>(null);

interface SessionContextProps {
  sessionID: string;
}

export const SessionContext: React.FC<SessionContextProps> = ({
  children,
  sessionID,
}) => {
  const socket = useSocket();
  const user = useUser();
  const [id, setSID] = useState("");
  const [users, setUsers] = useState<Array<IUser>>([]);
  useEffect(() => {
    setSID(sessionID);
    socket?.emit("join-session", {user, id});
    socket?.on("new-user-join", x=>console.log(x));
  }, [sessionID]);

  return (
    <sessionCtx.Provider value={{ id, users }}>{children}</sessionCtx.Provider>
  );
};

import React, { createContext, useContext, useEffect, useState } from "react";
import { IMessage } from "../interface/IMessage";
import { ISession } from "../interface/ISession";
import { IUser } from "../interface/IUser";
import { useUser } from "./NewUserContext";
import { useSocket } from "./SocketContext";

const sessionContextDefault: ISession = {
  sid: "",
  users: [],
  messages: [],
};

interface sessionContextProps {
  sid: string;
}

const sessionCtx = createContext<ISession>(sessionContextDefault);

export const SessionContext: React.FC<sessionContextProps> = ({
  children,
  sid,
}) => {
  const user = useUser();
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const socket = useSocket();

  useEffect(() => {
    if (sid) {
      socket.emit("join", { user, sid });
    }
  }, []);

  return (
    <sessionCtx.Provider value={{ sid, users, messages }}>
      {children}
    </sessionCtx.Provider>
  );
};

export const useSession = () => {
  return useContext(sessionCtx);
};

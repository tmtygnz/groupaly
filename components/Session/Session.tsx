import React, { createContext, useContext, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Spotify } from "./Spotify";
import { Timer } from "./Timer";
import { io } from "socket.io-client";
import { IUser } from "../../interface/IUser";
import { IMessage } from "../../interface/IMessage";
import { ISession } from "../../interface/ISession";
import { useUser } from "../../context/NewUserContext";

const socket = io("http://localhost:3001");

interface sessionCtx {
  sid: string;
}

const sessionCtxDefaults: ISession = {
  sid: "",
  socket: socket,
  users: [],
  messages: [],
};

const sessionCtx = createContext<ISession>(sessionCtxDefaults);

export const Session: React.FC<sessionCtx> = ({ children, sid }) => {
  const { user, updateUser } = useUser();
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log({ user, sid });
      socket.emit("me-join", { user, sid });
    });

    socket.on("user-join", (x) => {
      alert(x);
    });
  }, [sid]);

  return (
    <sessionCtx.Provider value={{ sid, socket, users, messages }}>
      <div className="h-full w-full flex flex-col">
        <div className="flex flex-col h-full p-5">
          <div className="top w-full">
            <Timer />
          </div>
          <div className="bottom w-full h-full mt-5">
            <Spotify />
          </div>
        </div>
        <div className="nav-bar">
          <Navbar />
        </div>
      </div>
    </sessionCtx.Provider>
  );
};

export const useSession = () => {
  return useContext(sessionCtx);
};

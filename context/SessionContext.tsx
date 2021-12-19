import React, { createContext, useContext } from "react";
import io, {Socket} from "socket.io-client";

const socket = io("http://localhost:3001");
let sessionCtx = createContext<Socket>(socket);

export const SessionContext:React.FC = ({children}) => {
  return (
    <sessionCtx.Provider value={socket}>
      {children}
    </sessionCtx.Provider>
  )
}

export const useSocket = () => {
  return useContext(sessionCtx);
}
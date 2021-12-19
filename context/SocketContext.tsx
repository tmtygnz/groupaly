import React, { createContext, useContext } from "react";
import io, {Socket} from "socket.io-client";

const socket = io("http://localhost:3001");
let socketCtx = createContext<Socket>(socket);

export const SocketContext:React.FC = ({children}) => {
  return (
    <socketCtx.Provider value={socket}>
      {children}
    </socketCtx.Provider>
  )
}

export const useSocket = () => {
  return useContext(socketCtx);
}
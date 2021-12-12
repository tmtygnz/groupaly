import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const socketConnectionCtx = createContext<Socket | null>(null);

export const SocketConnectionContext: React.FC = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socketNew = io("http://localhost:3001");
    setSocket(socketNew);
  }, [setSocket]);

  return (
    <socketConnectionCtx.Provider value={socket!}>
      {children}
    </socketConnectionCtx.Provider>
  );
};

export const useSocket = () => {
  return useContext(socketConnectionCtx);
};

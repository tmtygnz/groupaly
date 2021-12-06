import { IMessage } from "./IMessage";
import { IUser } from "./IUser";
import { Socket } from "socket.io-client";
export interface ISession {
  id: string|null;
  socket: Socket | null;
}
export interface IJoin {
  user: IUser;
  id:string;
}
import { IMessage } from "./IMessage";
import { IUser } from "./IUser";
import { Socket } from "socket.io-client";
export interface ISession {
  id: string;
  users: Array<IUser>;
}
export interface IJoin {
  user: IUser;
  id:string;
}
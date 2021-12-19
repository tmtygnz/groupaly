import { IMessage } from "./IMessage";
import { IUser } from "./IUser";
import { Socket } from "socket.io-client";
export interface ISession {
  sid: string;
  users: Array<IUser>;
  messages: Array<IMessage>;
}
export interface IJoin {
  user: IUser;
  id: string;
}

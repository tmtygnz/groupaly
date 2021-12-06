import { Timestamp } from "firebase/firestore";

export interface IUser {
  name: string;
  dateCreated: Timestamp;
  key: string;
  sessionsCompletedThisWeek: Array<number>;
  taskCompletedWeek: Array<number>;
  numSessionsCompleted: number;
  numTaskCompleted: number;
}

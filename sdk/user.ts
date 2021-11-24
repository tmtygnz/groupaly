import axios from "axios";
import { Timestamp } from "firebase/firestore";

export const getUserFromServer = async (userID: string): Promise<IUser> => {
  let response = await axios.get("http://localhost:3001/users/get", {
    headers: {
      userID: userID,
    },
  });
  return response.data;
};

export interface IUser {
  name: string;
  dateCreated: Timestamp;
  key: string;
  sessionsCompletedThisWeek: Array<number>;
  taskCompletedWeek: Array<number>;
  numSessionsCompleted: number;
  numTaskCompleted: number;
}

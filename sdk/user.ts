import axios from "axios";
import { Timestamp } from "firebase/firestore";
import { IUser } from "../interface/IUser";

export const getUserFromServer = async (userID: string): Promise<IUser> => {
  let response = await axios.get("http://localhost:3001/users/get", {
    headers: {
      userID: userID,
    },
  });
  return response.data;
};


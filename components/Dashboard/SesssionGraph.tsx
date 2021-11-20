import React, { useEffect, useState } from "react";
import { getUserFromServer, IUser } from "../../authentication/user";
import { useUser } from "../../context/NewUserContext";

export const SesssionGraph = () => {
  const {user, updateUser} = useUser();
  const [sessionsDone, setSessionsDone] = useState<Array<number>>([0])
  useEffect(() => {
    const getUser = async () => {
      let resp = await getUserFromServer(user?.user.uid!);
      console.log(resp);
      setSessionsDone(resp.sessionsDoneThisWeek);
    }
    getUser();
  }, [user?.user.displayName])
  return <div>{sessionsDone.length}</div>;
};

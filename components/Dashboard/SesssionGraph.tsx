import React, { useEffect, useState } from "react";
import { getUserFromServer, IUser } from "../../authentication/user";
import { useUser } from "../../context/NewUserContext";

export const SesssionGraph = () => {
  const { user, updateUser } = useUser();
  const [sessionsDone, setSessionsDone] = useState<Array<number>>([0, 0, 0]);
  useEffect(() => {
    const getUser = async () => {
      if (user?.user.uid != undefined) {
        let resp = await getUserFromServer(user?.user.uid!);
        console.log(resp);
        setSessionsDone(resp.sessionsDoneThisWeek);
      }
    };
    getUser();
  }, [user?.user.uid]);
  return <div>{sessionsDone.length}</div>;
};

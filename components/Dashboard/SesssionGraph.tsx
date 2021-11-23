import React, { useEffect, useState } from "react";
import { getUserFromServer, IUser } from "../../authentication/user";
import { useUser } from "../../context/NewUserContext";

export const SesssionGraph = () => {
  const { user, updateUser } = useUser();
  const [numSessionCompleted, setNumSessionCompleted] = useState(0);
  useEffect(() => {
    if (user?.user.uid != undefined) {
      const getUser = async () => {
        let resp = await getUserFromServer(user?.user.uid!);
        setNumSessionCompleted(resp.numSessionsCompleted);
      };
      getUser();
    }
  }, [user]);

  return (
    <div className="bg-baige_red w-56 p-5 rounded shadow-sm">
      <div className="header text-3xl font-bold">{numSessionCompleted}</div>
      <div className="sub">
        Sessions Completed
      </div>
    </div>
  );
};

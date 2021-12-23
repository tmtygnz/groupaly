import React, { useEffect } from "react";
import { useSession } from "./Session";

export const Participants = () => {
  const session = useSession();
  useEffect(() => {
    session.socket?.on("user-join", (x) => console.log(x));
  }, [session.socket]);
  return (
    <div className="bg-baige_red h-full p-5 rounded w-3/12">
      <div className="Header text-3xl font-bold">Participants</div>
      <div className="Sub mt-3 flex justify-center items-center">
        {session.users.map((x) => (
          <p>{x.name}</p>
        ))}
      </div>
    </div>
  );
};

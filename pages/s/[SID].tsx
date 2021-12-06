import { useRouter } from "next/router";
import React from "react";
import { Navbar } from "../../components/Session/Navbar";
import { Spotify } from "../../components/Session/Spotify";
import { Timer } from "../../components/Session/Timer";
import { SessionContext } from "../../context/SessionContext";

const SessionPage = () => {
  const router = useRouter();
  const { SID } = router.query;
  return (
    <SessionContext id={SID?.toString()!}>
      <div className="h-full w-full flex flex-col">
        <div className="flex flex-col h-full p-5">
          <div className="top w-full">
            <Timer />
          </div>
          <div className="bottom w-full h-full mt-5">
            <Spotify />
          </div>
        </div>
        <div className="nav-bar">
          <Navbar />
        </div>
      </div>
    </SessionContext>
  );
};

export default SessionPage;
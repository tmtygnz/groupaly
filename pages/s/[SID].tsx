import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Session/Navbar";
import { Spotify } from "../../components/Session/Spotify";
import { Timer } from "../../components/Session/Timer";
import { Button } from "../../components/ui/Button";
import { SessionContext, useSession } from "../../context/SessionContext";
import { SocketContext, useSocket } from "../../context/SocketContext";

const SessionPage = () => {
  const router = useRouter();
  const socket = useSocket();
  const { SID } = router.query;
  useEffect(() => {
    if (!SID) {
      console.log("Hello");
    } else {
      console.log("hiu");
    }
  }, [SID]);
  return (
    <div className="h-full">
      {SID ? (
        <SocketContext>
          <SessionContext sid={SID?.toString()!}>
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
        </SocketContext>
      ) : (
        <p>Gathering Data</p>
      )}
    </div>
  );
};

export default SessionPage;

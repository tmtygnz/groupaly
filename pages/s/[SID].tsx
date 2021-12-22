import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Session/Navbar";
import { Session } from "../../components/Session/Session";
import { Spotify } from "../../components/Session/Spotify";
import { Timer } from "../../components/Session/Timer";
import { Button } from "../../components/ui/Button";
import { FullPageLoader } from "../../components/ui/FullPageLoader";
import { Loader } from "../../components/ui/Loader";

const SessionPage = () => {
  const router = useRouter();
  const { SID } = router.query;
  return <div className="h-full">{SID ? <Session sid={SID?.toString()!} /> : <FullPageLoader />}</div>;
};

export default SessionPage;

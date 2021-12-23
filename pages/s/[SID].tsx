import { useRouter } from "next/router";
import React from "react";
import { Session } from "../../components/Session/Session";
import { FullPageLoader } from "../../components/ui/FullPageLoader";

const SessionPage = () => {
  const router = useRouter();
  const { SID } = router.query;
  return <div className="h-full">{SID ? <Session sid={SID?.toString()!} /> : <FullPageLoader />}</div>;
};

export default SessionPage;

import { useRouter } from "next/router";
import React from "react";
import { Timer } from "../../components/Session/Timer";

const SessionPage = () => {
  const router = useRouter();
  const { SID } = router.query;
  return (
    <div className="h-full flex p-5">
      <div className="top w-full">
        <Timer/>
      </div>
    </div>
  );
};

export default SessionPage;

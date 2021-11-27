import React, { useEffect, useState } from "react";
import Moment from "react-moment";

export const Timer = () => {
  const [sec, setSec] = useState(0);
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  useEffect(() => {
    setInterval(() => {
      const timeNow = new Date().getTime();
      const range = countDownDate - timeNow;
      var seconds = Math.floor((range % (1000 * 60)) / 1000);
      setSec(sec => seconds);
    }, 1000);
  }, []);

  return (
    <div className="bg-baige_red p-5 rounded">
      <div className="header font-bold text-2xl">Timer</div>
      <div className="time">{sec}</div>
    </div>
  );
};

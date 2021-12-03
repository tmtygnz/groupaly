import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { FiPlay, FiPause, FiSquare } from "react-icons/fi";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState("00:00.00");
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timer>();
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  const startTimer = (countDownAmount: number) => {
    setIsCountingDown(true);
    let timeToEnd = countDownAmount * 60 * 1000;
    setTimer(
      setInterval(() => {
        timeToEnd -= 1000;
        const minutes = Math.floor(timeToEnd / (60 * 1000));
        const seconds = Math.floor((timeToEnd - minutes * 60 * 1000) / 1000);
        const formattedTime = `${minutes}:${seconds}`;
        setTimeLeft(formattedTime);
        if (timeToEnd == 0) {
          alert("Done");
          stopTimer();
        }
      }, 1000)
    );
  };

  const stopTimer = () => {
    setIsCountingDown(false);
    clearInterval(timer!);
  };

  return (
    <div className="bg-baige_red rounded w-3/12 p-5">
      <div className="header font-bold text-3xl">Timer</div>
      <div className="text-4xl font-semibold flex justify-center mt-3">
        {timeLeft}
      </div>
      {isCountingDown ? (
        <div className="buttons flex justify-center mt-3">
          <Button Type="black">
            <FiPause />
          </Button>
          <Button className="ml-3" onClick={() => stopTimer()}>
            <FiSquare />
          </Button>
        </div>
      ) : (
        <div className="buttons flex justify-center mt-3 ">
          <select className="pr-2 border border-black bg-black text-white">
            <option value="30">30 mins</option>
            <option value="25">25 mins</option>
            <option value="20">20 mins</option>
            <option value="15">15 mins</option>
            <option value="10">10 mins</option>
            <option value="5">5 mins</option>
          </select>
          <Button className="ml-3" onClick={() => startTimer(0.1)}>
            <FiPlay />
          </Button>
        </div>
      )}
    </div>
  );
};

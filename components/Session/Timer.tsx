import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { FiPlay, FiPause, FiSquare } from "react-icons/fi";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isCountingDown, setIsCountingDown] = useState(true);
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  useEffect(() => {
    setInterval(() => {
      const timeNow = new Date().getTime();
      const range = countDownDate - timeNow;
      var hours = Math.floor(
        (range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var mins = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((range % (1000 * 60)) / 1000);
      var time = `${hours}:${mins}.${seconds}`;
      setTimeLeft((timeLeft) => time);
    }, 1000);
  }, []);

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
          <Button className="ml-3">
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
          <Button className="ml-3">
            <FiPlay />
          </Button>
        </div>
      )}
    </div>
  );
};

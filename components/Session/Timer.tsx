import React from "react";
import Moment from "react-moment";

export const Timer = () => {
  return (
    <div className="bg-baige_red p-5 rounded">
      <div className="header font-bold text-2xl">Time</div>
      <div className="time">
        <Moment interval={1000}>1976-04-19T12:59-0500</Moment>
      </div>
    </div>
  );
};

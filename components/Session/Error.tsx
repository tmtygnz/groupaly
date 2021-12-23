import React from "react";
import { Loader } from "../ui/Loader";

export const Error = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="spinner"><Loader/></div>
      <span className="text-4xl font-bold ml-3">Error Connecting... Trying to Reconnnect.</span>
    </div>
  );
};

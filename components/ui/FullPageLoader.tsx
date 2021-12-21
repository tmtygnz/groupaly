import React from "react";
import { Loader } from "./Loader";

export const FullPageLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Loader />
    </div>
  );
};

import React from "react";

export const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="9" stroke="white" stroke-width="6" stroke-dasharray="6 6"/>
    </svg>
  );
};

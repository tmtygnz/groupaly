import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button
      className="font-black rounded-fhalf text-white 
			bg-black py-3 px-7 bg-normal-normal hover:bg-normal-hover active:bg-normal-select"
    >
      {children}
    </button>
  );
};

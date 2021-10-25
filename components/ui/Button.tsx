import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: keyof typeof colorTypes;
}

const colorTypes = {
  normal: "bg-normal-normal hover:bg-normal-hover active:bg-normal-select border-normal-normal",
  red: "bg-red-normal hover:bg-red-hover active:bg-red-select border-red-normal",
};

export const Button: React.FC<Props> = ({ children, colorType = "normal" }) => {
  return (
    <button
      className={`font-bold border rounded text-white
			py-3 px-3.5 ${colorTypes[colorType]}`}
    >
      {children}
    </button>
  );
};

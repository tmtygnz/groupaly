import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Type?: keyof typeof colorTypes;
  padding?: keyof typeof buttonPadding;
}

const buttonPadding = {
	sm: "px-5 py-px",
  normal: "px-8 py-2.5",	
};

const colorTypes = {
  normal: "bg-maroonish-normal hover:bg-maroonish-hover active:bg-maroonish-active text-white",
  blue: "bg-blue-accent hover:bg-blue-accent-dark text-white",
};

export const Button: React.FC<Props> = ({
  children,
  className,
  Type = "normal",
  padding = "normal",
}) => {
  return (
    <button
      className={`font-bold rounded-lg transition duration-200 ease-in-out
			${colorTypes[Type]} ${buttonPadding[padding]} ${className}`}
    >
      {children}
    </button>
  );
};

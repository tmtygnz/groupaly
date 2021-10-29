import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Type?: keyof typeof colorTypes;
  padding?: keyof typeof buttonPadding;
}

const buttonPadding = {
	sm: "py-1.5 px-2",
  normal: "py-1.5 px-6",	
};

const colorTypes = {
  normal: "bg-normal-normal hover:bg-normal-darker",
  red: "bg-error-normal hover:bg-error-darker",
	normal_outline: "border border-normal-normal bg-normal-normal hover:bg-opacity-0 hover:text-normal-normal",
	red_outline: "border border-error-normal bg-error-normal hover:bg-opacity-0 hover:text-error-normal",
	ghost: "bg-black bg-opacity-0 hover:bg-opacity-10"
};

export const Button: React.FC<Props> = ({
  children,
  className,
  Type = "normal",
  padding = "normal",
}) => {
  return (
    <button
      className={`rounded transition duration-200 ease-in-out
			${colorTypes[Type]} ${buttonPadding[padding]} ${className}`}
    >
      {children}
    </button>
  );
};

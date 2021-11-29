import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Type?: keyof typeof colorTypes;
  padding?: keyof typeof buttonPadding;
}

const buttonPadding = {
  none: "",
  sm: "px-5 py-px",
  normal: "px-8 py-2.5",
};

const colorTypes = {
  red: "bg-red hover:bg-opacity-70",
  black: "bg-black hover:bg-opacity-70"
};

export const Button: React.FC<Props> = ({
  children,
  className,
  Type = "red",
  padding = "normal",
  ...props
}) => {
  return (
    <button
      className={`${className} font-bold transition duration-200 ease-in-out text-baige
			${colorTypes[Type]} ${buttonPadding[padding]}`}
      {...props}
    >
      {children}
    </button>
  );
};

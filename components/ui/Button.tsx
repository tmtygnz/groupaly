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
  normal: "bg-brn-500 hover:bg-brn-400 active:ring-4 text-white",
  blue: "bg-blue-accent hover:bg-blue-accent-dark text-white",
};

export const Button: React.FC<Props> = ({
  children,
  className,
  Type = "normal",
  padding = "normal",
  ...props
}) => {
  return (
    <button
      className={`font-bold rounded-lg transition duration-200 ease-in-out
			${colorTypes[Type]} ${buttonPadding[padding]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

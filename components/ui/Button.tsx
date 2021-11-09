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
  weborange:
    "bg-web-orange-300 hover:bg-web-orange-350 active:bg-web-orange-400",
  bluepearl:
    "bg-black-pearl-500 hover:bg-black-pearl-600 active:bg-black-pearl-700",
  elecviolet:
    "bg-electric-violet-600 hover:bg-electric-violet-700 active:bg-electric-violet-800",
};

export const Button: React.FC<Props> = ({
  children,
  className,
  Type = "elecviolet",
  padding = "normal",
  ...props
}) => {
  return (
    <button
      className={`font-bold transition duration-200 ease-in-out
			${colorTypes[Type]} ${buttonPadding[padding]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

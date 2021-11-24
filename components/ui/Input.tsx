import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: keyof typeof sizes;
}

const sizes = {
  normal: "text-base",
  large: "text-xl",
  small: "text-sm",
};

export const Input: React.FC<Props> = ({ inputSize = "normal", ...props }) => {
  return (
    <div className="">
      <input
        className={`border border-black bg-baige_red  placeholder-red py-2 px-3 focus:border-red focus:border-2 font-bold`}
        {...props}
      />
    </div>
  );
};

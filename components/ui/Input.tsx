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
    <div className="m-10">
      <input
        className={`border focus:border-electric-violet-900 focus:outline-none ${sizes[inputSize]} px-4 py-2.5 
        placeholder-electric-violet-400 transition duration-200 ease-in-out`}
        {...props}
      />
    </div>
  );
};

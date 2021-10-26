import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	size?: keyof typeof sizes
}

const sizes = {
	normal:"w-36",
	lg:"w-80"
}

export const Input: React.FC<Props> = ({size ="normal", ...props}) => {
  return (
    <div>
      <input
        className={`bg-black border border-gray-800 focus:border-white transition duration-200 ease-in-out
				text-white outline-none px-2 py-1 rounded ${sizes[size]}`}
				{...props}
      />
    </div>
  );
};

import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  url?: string;
}

export const Avatar: React.FC<Props> = ({ url, className, ...props }) => {
  return (
      <img
        className={`rounded-full transition duration-200 ease-in-out hover:ring ${className}`}
        src={url}
        width={25}
        height={25}
				{...props}
      />
  );
};

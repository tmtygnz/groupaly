import Link, { LinkProps } from "next/link";
import React, { HTMLAttributes } from "react";

interface Props extends LinkProps,HTMLAttributes<HTMLDivElement> {}

export const Alink: React.FC<Props> = ({children, ...props}) => {
  return (
    <div className={`${props.className} hover:underline`}>
      <Link href={props.href}>{children}</Link>
    </div>
  );
};

import React from "react";
import { InfdosLogo } from "../../icon/InfdosLogo";
import { Alink } from "../ui/Alink";

export const Header = () => {
  return (
    <div className="bg-brn-700 w-screen h-14 flex items-center justify-between p-5">
      <div className="flex items-center">
        <InfdosLogo />
        <span className="banner ml-3 text-xs">
          This application is still in development if you encounter any bug
          please report it imidately
        </span>
      </div>
      <div className="flex items-center justify-evenly">
        <Alink href="#" className="m-2">
          Dashboard
        </Alink>
        <Alink href="#" className="m-2">
          Settings
        </Alink>
        <Alink href="#" className="m-2">
          Account
        </Alink>
      </div>
    </div>
  );
};

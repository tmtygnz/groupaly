import React from "react";
import { InfdosLogo } from "../../icon/InfdosLogo";
import { Alink } from "../ui/Alink";
import { Avatar } from "../ui/Avatar";

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
        <Avatar
          className="m-2"
          url="https://lh3.googleusercontent.com/a-/AOh14Gj7sGErI0WJghdsJvDK-LMznbglIlHlvmCPG51BjQ=s96-c"
        />
      </div>
    </div>
  );
};

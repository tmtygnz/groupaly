import React from "react";
import { useUser } from "../../context/NewUserContext";
import { InfdosLogo } from "../../icon/InfdosLogo";
import { Alink } from "../ui/Alink";
import { Avatar } from "../ui/Avatar";

export const Header = () => {
  const { user, updateUser } = useUser();
  return (
    <div className="border-b-2 hover:shadow-xl transition duration-200 ease-in-out border-black w-screen h-14 flex items-center justify-between p-5">
      <div>
        <InfdosLogo />
      </div>
      <div className="flex items-center justify-center">
        <Alink href={"#"} className="mx-2">
          Settings
        </Alink>
        <div className="mx-2 cursor-pointer">
          <div className="avatar flex items-center justify-between bg-red rounded-full p-2 hover:bg-black transition duration-200 ease-in-out">
            <Avatar url={"https://bit.ly/3qmTENg"} />
            <div className="name text-baige mx-1">{user?.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

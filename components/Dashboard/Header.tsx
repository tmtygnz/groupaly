import React from "react";
import { useUser } from "../../context/NewUserContext";
import { InfdosLogo } from "../../icon/InfdosLogo";
import { Alink } from "../ui/Alink";
import { Avatar } from "../ui/Avatar";

export const Header = () => {
  const {user, updateUser} = useUser();
  return (
    <div className="border-b-2 hover:shadow-xl transition duration-200 ease-in-out border-black w-screen h-14 flex items-center justify-between p-5">
      <div>
        <InfdosLogo/>
      </div>
      <div className="flex items-center justify-center">
        <Alink href={"#"} className="mx-2">
          Dashboard
        </Alink>
        <Alink href={"#"} className="mx-2">
          Settings
        </Alink>
        <Alink href={"#"} className="mx-2">
          <Avatar url={user?.user.photoURL!}/>
        </Alink>
      </div>
    </div>
  );
};

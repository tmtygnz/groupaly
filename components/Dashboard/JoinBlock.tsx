import React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const JoinBlock = () => {
  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="">
        <div className="Header text-2xl font-bold">
          Join or Create a new Session.
        </div>
				<div className="w w-72 mt-3">This application is still in development. If you encounter a bug please report it immediately</div>
        <div className="join-and-create mt-3 flex flex-col">
          <Button>New Session</Button>
          <div className="join flex items-center mt-2">
            <Input placeholder="Session UID"/>
						<Button Type="black" className="ml-2">Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

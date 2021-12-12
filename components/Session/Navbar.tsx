import React from "react";
import { Button } from "../ui/Button";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const copyCode = async () => {
    const emojis = ["📎", "😆", "🐐", "🧑‍💻"];
    const randEmoji = Math.floor(Math.random() * 4);
    navigator.clipboard.writeText("test-code");
    toast(`Code Copied ${emojis[randEmoji]}`);
  };
  return (
    <div className="bg-baige_red flex justify-between w-full p-5">
      <div className="code inline-flex items-center rounded overflow-hidden bg-red">
        <div className="code-text text-baige font-semibold m-2">
          
        </div>
        <div className="copy-button">
          <Button Type="black" onClick={() => copyCode()}>
            Copy
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Button Type="red">
          <div className="flex items-center">
            <IoClose />
            <div className="ml-1">Leave</div>
          </div>
        </Button>
      </div>
      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
};

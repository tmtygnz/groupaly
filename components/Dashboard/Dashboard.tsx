import React from "react";

export const Dashboard = () => {
  return (
    <div className="h-full">
      <div className="banner h-20 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 rounded m-3 realtive">
        <div>
          <span className="Quote font-bold">
            You can't connect the dots looking forward; you can only connect
            them looking backwards
          </span>
          <span className="Author font-light italic"> - Steve Jobs.</span>
        </div>
      </div>
    </div>
  );
};

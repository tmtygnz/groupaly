import axios from "axios";
import React, { useEffect, useState } from "react";
import dashboard from "../../pages/dashboard";
import { JoinBlock } from "./JoinBlock";
import { StatsBlock } from "./StatsBlock";

export const Dashboard = () => {
  return (
    <div className="heightWithoutHeader flex">
      <JoinBlock />
      <StatsBlock />
    </div>
  );
};

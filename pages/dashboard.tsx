import type { NextPage } from "next";
import React from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { Header } from "../components/Dashboard/Header";
const dashboard: NextPage = () => {
  return (
    <div>
			<Header/>
      <Dashboard/>
    </div>
  );
};

export default dashboard;

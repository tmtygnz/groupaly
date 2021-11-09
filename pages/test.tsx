import type { NextPage } from "next";
import React from "react";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { Header } from "../components/Dashboard/Header";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
const test: NextPage = () => {
  return (
    <div>
      <Button>Go Back</Button>
      <Input placeholder="john.doe@gmail.com"/>
    </div>
  );
};

export default test;

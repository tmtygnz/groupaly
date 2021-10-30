import type { NextPage } from "next";
import React from "react";
import { Button } from "../components/ui/Button";
const Home: NextPage = () => {
  return (
    <div className={`h-screen p-5 text-white`}>
      <Button>Button</Button>
    </div>
  );
};

export default Home;

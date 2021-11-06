import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { useUser } from "../context/NewUserContext";

const Home: NextPage = () => {
  const router = useRouter();
  let { user, updateUser } = useUser();
  if(user!) {
    console.log(user);
    router.push("/dashboard");
  }
  console.log(user);
  return (
    <div className={`h-screen p-5 text-white`}>
      <Button onClick={() => router.push("/dashboard")}>Go To Dashboard</Button>
    </div>
  );
};

export default Home;

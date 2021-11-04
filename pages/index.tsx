import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../components/ui/Button";
import { useUser } from "../context/UserContext";
const Home: NextPage = () => {
  const router = useRouter();
  let { user, updateUser } = useUser();
  if(user.length != 0) {
    router.push("/dashboard");
  }
  return (
    <div className={`h-screen p-5 text-white`}>
      <Button onClick={() => router.push("/dashboard")}>Go To Dashboard</Button>
    </div>
  );
};

export default Home;

import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { useUser } from "../context/NewUserContext";
import axios from "axios";
import cookie from "cookie";

const Home: NextPage = () => {
  const router = useRouter();

  let { user, updateUser } = useUser();
  if (user!) {
    //redirect
    console.log(user);
  }
  return (
    <div className={`h-screen p-5 text-white`}>
      <Button onClick={() => router.push("/dashboard")}>Go To Dashboard</Button>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: true,
    },
  };
};


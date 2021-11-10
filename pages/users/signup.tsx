import { NextPage } from "next";
import router, { useRouter } from "next/router";
import React from "react";
import {
  init,
  signUpWithFacebook,
  signUpWithGoogle,
} from "../../authentication/signup";
import { Button } from "../../components/ui/Button";
import { useUser } from "../../context/NewUserContext";

interface Props {
  auth: string;
}

const signup: React.FC<Props> = ({ auth }) => {
  let { user, updateUser } = useUser();
  const router = useRouter();
  init(auth);
  
  const Google = async () => {
    let userData = await signUpWithGoogle();
    updateUser(userData);
    router.push("/");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-brn-300 w-80 p-5 rounded-lg">
        <div className="Header">
          <span className="text-2xl font-bold">Sign Up</span>
        </div>
        <div className="Terms mt-2">
          <span className="text-sm">
            By signing up in you are agreeing to out Terms of Service and
            privacy policy
          </span>
        </div>
        <div className="Platforms flex flex-col mt-3">
          <Button className="my-2" onClick={async () => await Google()}>
            Google
          </Button>
          <Button className="my-2" onClick={() => signUpWithFacebook()}>
            Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default signup;

export const getServerSideProps = async () => {
  return {
    props: {
      auth: process.env.FIREBASE,
    },
  };
};

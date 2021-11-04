import { NextPage } from "next"
import React from "react";
import { init, loginWithGoogle } from "../../authentication/login";
import { Button } from "../../components/ui/Button";

interface Props {
	auth:string
}

const singup: React.FC<Props> = ({auth}) => {
	init(auth);
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<div className="bg-brn-300 w-80 p-5 rounded-lg">
				<div className="Header">
					<span className="text-2xl font-bold">Sign Up</span>
				</div>
				<div className="Terms mt-2">
					<span className="text-sm">By signing up in you are agreeing to out Terms of Service and
						privacy policy
					</span>
				</div>
				<div className="Platforms flex flex-col mt-3">
					<Button className="my-2" onClick={() => loginWithGoogle()}>Google</Button>
					<Button className="my-2">Facebook</Button>
				</div>
			</div>
		</div >
	);
}

export default singup;

export const getServerSideProps = async () => {
	return {
		props: {
			auth: process.env.FIREBASE
		}
	}
}
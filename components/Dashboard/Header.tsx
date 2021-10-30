import React from 'react'
import { Alink } from '../ui/Alink'
import { Button } from '../ui/Button'

export const Header = () => {
	return (
		<div className="bg-dark-header w-screen h-14 flex items-center justify-evenly p-5">
			<div>Infdos</div>
			<div className="flex items-center justify-evenly">
				<Alink href="#" className="m-2">Dashboard</Alink>
				<Alink href="#" className="m-2">Settings</Alink>
				<Button padding="sm" Type="blue" className="m-2">Account</Button>
			</div>
		</div>
	)
}

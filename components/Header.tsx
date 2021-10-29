import React from 'react'
import { InfdosLogo } from '../icon/InfdosLogo'
import { Alink } from './ui/Alink'

export const Header = () => {
	return (
		<div className="w-screen flex items-center justify-evenly bg-white border fixed">
				<div>
					<InfdosLogo/>
				</div>
        <div className="flex items-center justify-center h-14 ">
          <Alink href="https://www.google.com" className="px-3">
            Settings
          </Alink>
          <Alink href="https://www.google.com" className="px-3">
            Dashboard
          </Alink>
          <Alink href="https://www.google.com" className="px-3">
            Account
          </Alink>
        </div>
      </div>
	)
}

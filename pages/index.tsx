import type { NextPage } from 'next'
import { Input } from '../components/ui/Input'

const Home: NextPage = () => {
  return (
    <div className={`h-screen bg-black p-5`}>
			<Input type="password" placeholder="Password"/>
    </div>
  )
}

export default Home

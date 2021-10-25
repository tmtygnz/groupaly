import type { NextPage } from 'next'
import { Button } from '../components/ui/Button'

const Home: NextPage = () => {
  return (
    <div className={`h-screen bg-black`}>
			<Button>Button Test</Button>
    </div>
  )
}

export default Home

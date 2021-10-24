import type { NextPage } from 'next'
import { Button } from '../components/ui/Button'

const Home: NextPage = () => {
  return (
    <div className={`h-screen bg-black`}>
			<Button>Try notion for free</Button>
    </div>
  )
}

export default Home

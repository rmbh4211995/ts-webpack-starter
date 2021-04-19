import React from 'react'
import Button from '../components/Button'
interface HomepageProps {
  name: string
  depth: number
}

const Homepage = (props: HomepageProps) => {
  return (
    <div className='mt-2'>
      Time to start coding!
      <Button />
    </div>
  )
}

export default Homepage

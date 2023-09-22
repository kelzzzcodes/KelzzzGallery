import React from 'react'
import { Banner } from '../components'
import { useAuth } from '../useAuth'

const Landing = () => {
  const { user } = useAuth()
  console.log(user)
  return (
    <div>
      <Banner />
    </div>
  )
}

export default Landing

import React from 'react'
import backgroundImage from '../assets/backgroundImage.avif'

const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat h-[calc(100vh-250px)] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}

export default Banner

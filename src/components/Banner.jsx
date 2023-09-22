import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/backgroundImage.avif'

const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat h-[calc(100vh-170px)]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center w-[70%] md:w-[40%] h-full ">
        <div className="flex flex-col gap-4 items-start justify-center text-white   h-full">
          <div className="text-3xl md:text-7xl flex flex-col gap-2">
            <h2>Welcome To</h2>
            <h2>KelzzzGalery</h2>
          </div>
          <div className="flex gap-4 ">
            <Link to={`/signin`}>
              <button className="font-bold px-4 py-2  md:px-12 md:py-4  ring-1 ring-white bg-[#2b124c] rounded-md">
              Sign in
            </button>
            </Link>
            <Link to={`/signup`}>
              <button className="font-bold px-4 py-2  md:px-12 md:py-4 ring-1 ring-white bg-[#2b124c] rounded-md">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

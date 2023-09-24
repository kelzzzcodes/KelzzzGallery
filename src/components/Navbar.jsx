import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'

const Navbar = () => {
  const { user } = useAuth()

  const handleLogOut = async() => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error.message)

    }

  }
  return (
    <div className="w-full px-4 py-8 bg-white fixed top-0 h-20 flex items-center   justify-between ">
      <div>
        <Link to={`/`}>
          <h1 className="text-2xl">
            Kelzzz<span className="text-blue-600">Galerry</span>
          </h1>
        </Link>
      </div>
      <div className=" mr-2 md:mr-12">
        <div className="flex flex-col items-center justify-center ">
          {user ? (
            <Link to={`/`}>
              <button onClick={handleLogOut} className="font-bold  py-2 px-4 text-black hover:text-white hover:bg-indigo-800 rounded-md">
                Log out
              </button>
            </Link>
          ) : (
            <Link to={`/signin`}>
              <button className="font-bold  py-2 px-4 text-black hover:text-white hover:bg-indigo-800 rounded-md">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

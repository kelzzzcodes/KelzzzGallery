import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import RegistrationImage from '../assets/registrationImage.jpg'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";


const SignUp = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const  handleSubmit =async (e)=>{
     e.preventDefault();

     try {
      await createUserWithEmailAndPassword(auth, email,password)
      navigate('/')
     } catch (error) {
      setError(error.message)
     }

  }

  return (
    <div className=" h-[calc(100vh-224px)] mt-20 flex items-center justify-center">
      <div className="flex gap-4 items-center justify-center  text-black border-2 border-gray-300  w-[50%] h-[500px] ">
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && error}
            <div className="flex items-center gap-2 text-green-700 border-b-2 border-gray-400">
              <MdEmail size={32} />
              <input
                placeholder="Enter Your Email"
                className="p-2 outline-none"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 text-green-700 border-b-2 border-gray-400">
              <AiFillLock size={32} />
              <input
                placeholder="Enter Your Password"
                className="p-2 outline-none"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="w-[90%] flex items-center justify-center mx-auto">
              <button className="flex items-center justify-center  bg-[#2b124c] w-full p-2 rounded-md text-white text-lg font-bold ">
                Sign up
              </button>
            </div>
            <div>
              <p>
                Have an account ?
                <Link to={`/signin`}>
                  <span className="underline">Sign in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div
          className="flex bg-cover bg-no-repeat w-full h-full"
          style={{ backgroundImage: `url(${RegistrationImage})` }}
        ></div>
      </div>
    </div>
  )
}

export default SignUp

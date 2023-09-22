import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import RegistrationImage from '../assets/registrationImage.jpg'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'

const SignIn = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate("/gallery")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}

  return (
    <div className=" h-[calc(100vh-224px)] mt-20 flex items-center justify-center">
      <div className="flex gap-4 items-center justify-center  text-black border-2 border-gray-300  w-[50%] h-[500px] ">
        <div className='flex flex-col gap-4 p-4'>
          <h2 className='text-2xl font-bold'>Log In</h2>

          <form className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 text-green-700 border-b-2 border-gray-400'>
              <MdEmail  size={32}/>
              <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"  className='p-2 outline-none'/>
            </div>
            <div className='flex items-center gap-2 text-green-700 border-b-2 border-gray-400'>
              <AiFillLock  size={32}/>
              <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"  className='p-2 outline-none'/>
            </div>

            <div className='w-[90%] flex items-center justify-center mx-auto'>
                <button
                onClick={onLogin}
                className='flex items-center justify-center  bg-[#2b124c] w-full p-2 rounded-md text-white text-lg font-bold '>
                    Login
                </button>
            </div>
            <div>
                <p>Don't have an account ? <Link to={`/signup`}><span className='underline'>Sign up</span></Link></p>
            </div>
          </form>
        </div>

        <div className='flex bg-cover bg-no-repeat   w-full h-full' style={{ backgroundImage: `url(${RegistrationImage})` }}>

        </div>
      </div>
    </div>
  )
}

export default SignIn

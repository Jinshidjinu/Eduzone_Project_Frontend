import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import {GoogleLogin} from 'react-google-login'
// import loginImg from '../../assets/Images/LoginImg/stock-vector-e-learning-vector-flat-concept-design-with-student-sitting-behind-work-desk-student-in-learning-758900497.jpg'
import log from '../../assets/Images/LoginImg/SingleImg.svg'
import { Link } from 'react-router-dom'
import { useState } from "react";

const  Login = () => {

 const cliendId = '96836127407-kkfc754a6vbacon0kbomq2su9ajtvu4r.apps.googleusercontent.com';

 const onLoginSuccess = (response) => {
  console.log('Login success:', response.profileObj);
}

const onFailureSuccess = (res) => {
  console.log('login failed :',res);
}
  return (
    <div>
         <div className="bg-white min-h-screen flex justify-center items-center ">
             
            <div className="bg-white flex items-center rounded-2xl shadow-lg w-[800px]  ">
                
               <div>
                 <img className='w-[380px] h-[500px]' src={log} alt="" />
                </div>  

                <div className='bg-white w-1/2 h-[440px]  p-2'>
                  <h2 className='font-bold text-2xl ml-40 text-[#9280D9] '>Login</h2>

                  <form action="" className='flex  flex-col gap-3'>
                    <div className="relative">
                      <h1 className="absolute text-gray-400 font-bold ">Email</h1>
                   <input 
                    className="p-2 mt-8 rounded-xl border w-full outline-none"
                    type="text"
                    name='email' 
                    placeholder='Email' 
                    
                    />

                    </div>
                    <div className='relative'>
                      <h2 className="absolute text-gray-400 font-bold ">Password</h2>
                     <input 
                     className="p-2 mt-8 rounded-xl border w-full  outline-none"
                     type="password"
                     name='password'
                     placeholder='Password'

                    />
                    <IoEyeOutline className="absolute top-1/2 right-3 transulate-y-1/2 text-gray-400 mt-2 "/>
                    </div>

                   <button className="bg-[#9280D9] rounded-lg text-white py-2 hover:scale-110 duration-300 mt-2">Login</button>
                   <p className='text-xs  text-blue-600'>Forgot your password?</p>
                  </form>

                  <div className='mt-8 grid grid-cols-3 items-center '>
                    <hr className='border-gray-500' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='border-gray-500' />
                    </div>
            
                        <GoogleLogin
                            clientId={cliendId}
                            buttonText="Login With Google"
                            onSuccess={onLoginSuccess}
                            onFailure={onFailureSuccess}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-2 text-sm hover:scale-110 duration-300'>
                                    <FcGoogle className='text-xl' />
                                    Login With Google
                                </button>
                            )}
                        />
             <div className="flex justify-between items-center mt-3">
                    <p className="text-xs"> if you Don't have an account.you can register here!..</p>

                    <Link to='/signup'>
                    
                    <button className="bg-gray-200  px-5 border rounded-xl hover:scale-105 duration-300 text-violet-700">Register</button>
                    </Link>

                   </div>
                  </div>   

            </div>
         </div>

    </div>
  )
}

export default Login
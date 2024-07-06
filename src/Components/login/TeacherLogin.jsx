import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from 'react-google-login';
import log from '../../assets/Images/LoginImg/Learning.gif';
import { Link } from 'react-router-dom';



const TeacherLogin = () => {
    const cliendId = '96836127407-kkfc754a6vbacon0kbomq2su9ajtvu4r.apps.googleusercontent.com';

    const onLoginSuccess = (response) => {
        console.log('Login success:', response.profileObj);
    }

    const onFailureSuccess = (res) => {
        console.log('login failed :', res);
    }

    return (
        <div className="bg-white min-h-screen flex justify-center items-center ">
            <div className="bg-white flex flex-col md:flex-row items-center rounded-2xl shadow-lg max-w-3/4 p-5 md:p-10  mt-12">
                <div className="sm:block hidden w-1/2 p-5">
                    <img className='w-full h-auto' src={log} alt="" />
                </div>
                <div className='md:w-1/2 p-2'>
                    <h2 className='font-bold text-2xl text-blue-500 mb-5 md:text-3xl '>Login</h2>
                    <form className='flex flex-col gap-3'>
                        <div className="relative">
                            <label htmlFor="email" className="absolute text-gray-400 font-bold">Email</label>
                            <input
                                id="email"
                                className="p-2 mt-8 rounded-xl border w-full outline-none"
                                type="text"
                                name='email'
                                placeholder='Email'
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="absolute text-gray-400 font-bold">Password</label>
                            <input
                                id="password"
                                className="p-2 mt-8 rounded-xl border w-full  outline-none"
                                type="password"
                                name='password'
                                placeholder='Password'
                            />
                            <IoEyeOutline className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-2" />
                        </div>
                        <button className="bg-blue-500 rounded-lg text-white py-2 hover:scale-105 duration-300 mt-2   ">Login</button>
                        <p className='text-xs text-blue-600'>Forgot your password?</p>
                    </form>
                    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 items-center'>
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
                    <div className="flex flex-col md:flex-row justify-between items-center mt-3">
                        <p className="text-xs md:text-sm mb-2 md:mb-0">Don't have an account? <Link to='/teachersignup' className="text-blue-600">Register here!</Link></p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;

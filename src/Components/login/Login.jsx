import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from 'react-google-login';
import log from '../../assets/Images/LoginImg/SingleImg.svg';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";
import  {useDispatch} from 'react-redux'
import { setStudentToken } from "../../Redux/Reducer/Reducer";

const Login = () => {
    const [LoginData , setLoginData] = useState({
        email:'',
        password:'',

    })
    const [errors, setErrors] = useState('');

    const naviagate = useNavigate()
    const dispatch  = useDispatch()
    const cliendId = '96836127407-kkfc754a6vbacon0kbomq2su9ajtvu4r.apps.googleusercontent.com';
    const onLoginSuccess = (response) => {
        console.log('Login success:', response.profileObj);
    }
    const onFailureSuccess = (res) => {
        console.log('login failed :', res);
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLoginData({
            ...LoginData,
            [name]  : value,
        })
    }
     
    const handleSubmit =  async (e) =>{
        e.preventDefault();
        setErrors('')
        try {
            const response = await axiosInstance.post('/students/auth/login', LoginData)
            if (response) {
                dispatch(setStudentToken(response?.data))
                naviagate('/studentshome')
            }
        } catch (error) {
            setErrors(error.response.data.err || error.response.data.error);
        }
    }

    return (
        <div className="bg-white min-h-screen flex justify-center items-center ">
            <div className="bg-white flex flex-col md:flex-row items-center rounded-2xl shadow-lg max-w-3/4 p-5 md:p-10  mt-12">
                <div className="sm:block hidden w-1/2 p-5">
                    <img className='w-full h-auto' src={log} alt="" />
                </div>
                <div className='md:w-1/2 p-2'>
                    <h2 className='font-bold text-2xl text-[#9280D9] mb-5 md:text-3xl '>Login</h2>
                    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    {errors ? (
                             <p className='text-red-600 text-sm mb-2'>{errors}</p>
                        ): "" }
                        <div className="relative">
                            <label htmlFor="email" className="absolute text-gray-400 font-bold">Email</label>
                            <input
                                id="email"
                                className="p-2 mt-8 rounded-xl border w-full outline-none"
                                type="email"
                                name='email'
                                value={LoginData.email}
                                placeholder='Email'
                                onChange={handleChange}
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
                                value={LoginData.password}
                                onChange={handleChange}
                            />
                            <IoEyeOutline className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-2" />
                        </div>
                        <button className="bg-[#9280D9] rounded-lg text-white py-2 hover:scale-105 duration-300 mt-2   ">Login</button>
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
                        <p className="text-xs md:text-sm mb-2 md:mb-0">Don&apose;t have an account? <Link to='/signup' className="text-blue-600">Register here!</Link></p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

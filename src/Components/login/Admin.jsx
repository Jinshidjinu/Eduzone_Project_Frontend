import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import  {useDispatch} from 'react-redux'
import { useState } from "react";
import logo from '../../assets/Images/AdminImg/hacker-mid-pacific-ict-center-cyberfed-magnificent-seven-2.png'
import axiosInstance from "../../config/axiosConfig";

const Admin = () => {
    const [LoginData , setLoginData] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState('');
    const navigate = useNavigate()
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLoginData({
            ...LoginData,
            [name]  : value,
        })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axiosInstance.post('/admin/auth/Adminlogin', LoginData);
            console.log('Login success:', response.data);
            if (response) {
                navigate('/');
            }
        } catch (error) {
            console.log(error, "show");
            setErrors(error.response.data.err || error.response.data.error);
          }
    }
     return (
          <div className="bg-white min-h-screen flex justify-center items-center ">
            <div className="bg-white flex flex-col md:flex-row items-center rounded-2xl shadow-lg max-w-3/4 p-5 md:p-10  mt-12">
                <div className="sm:block hidden w-1/2 p-5">
                    <img className='w-[600px] h-auto' src={logo} alt="" />
                </div>
                <div className='md:w-1/2 p-2'>
                    <h2 className='font-bold text-2xl text-black mb-5 md:text-3xl '>Login</h2>
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
                        <button className="bg-black rounded-lg text-white py-2  mt-2   ">Login</button>
                        <p className='text-xs text-blue-600'>Forgot your password?</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Admin
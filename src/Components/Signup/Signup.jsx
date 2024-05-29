import Img from '../../assets/Images/LoginImg/SingleImg.svg';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="bg-white w-[830px] md:max-w-1/2 h-auto flex flex-col md:flex-row items-center rounded-2xl shadow-lg mt-12">
                <div className="sm:block hidden w-1/2 p-5">
                    <img className='w-full h-auto' src={Img} alt="" />
                </div>
                <div className='bg-white md:w-1/2 rounded-2xl mb-10 p-4'>
                    <h1 className='font-bold text-2xl text-center text-[#9280D9] mb-5 md:text-3xl'>Sign Up</h1>
                    <form className='flex flex-col'>
                        <div className="relative">
                            <input
                                className="p-2 mt-7 rounded-md border w-full outline-none"
                                type="text"
                                name='name'
                                placeholder='Name'
                            />
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="text"
                                name='email'
                                placeholder='Email'
                            />
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="tel"
                                name='phone'
                                placeholder='Phone'
                            />
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="password"
                                name='password'
                                placeholder='Password'
                            />
                            <IoEyeOutline className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-2'/>
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="password"
                                name='confirmpassword'
                                placeholder='Confirm Password'
                            />
                        </div>
                        <div className='flex gap-4 mt-3'>
                            <label>
                                <input 
                                    type="radio"
                                    name='field'
                                    value='mentor'
                                />
                                Mentor
                            </label>
                            <label>
                                <input
                                    type="radio" 
                                    name='field'
                                    value='student'
                                />
                                Student
                            </label>
                        </div>
                        <button className='bg-[#9280D9] rounded-lg text-white py-2 hover:scale-10 duration-300 mt-2'>Sign Up</button>
                    </form>
                    <div className='flex flex-col md:flex-row gap-2 items-center mt-3'>
                        <p className="text-xs md:text-sm mb-2 md:mb-0 ">Already a Member! <Link to='/' className="text-blue-600">Login Here!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;

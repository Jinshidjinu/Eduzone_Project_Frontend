import { useState } from 'react';
import Img from '../../assets/Images/LoginImg/SingleImg.svg';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import axiosInstance from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });
    
   

    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/signup", formData);
            if (response.status === 201) {
                console.log('Signup Successful');
                navigate(`/otpverify/${formData.email}`);
            } else {
                console.log('Signup Failed', response.data);
            }
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data); // Assuming error.response.data is an object with validation errors
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="bg-white w-[830px] md:max-w-1/2 h-auto flex flex-col md:flex-row items-center rounded-2xl shadow-lg mt-12">
                <div className="sm:block hidden w-1/2 p-5">
                    <img className='w-full h-auto' src={Img} alt="" />
                </div>
                <div className='bg-white md:w-1/2 rounded-2xl mb-10 p-4'>
                    <h1 className='font-bold text-2xl text-center text-[#9280D9] mb-5 md:text-3xl'>Sign Up</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                    {errors.required && <p className='text-red-600 ml-2'>{errors.required}</p>}
                        <div className="relative">
                            <input
                                className="p-2 mt-7 rounded-md border w-full outline-none"
                                type="text"
                                name='name'
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <p className='text-red-600'>{errors.name}</p>}
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <p className='text-red-600'>{errors.email}</p>}
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="password"
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <IoEyeOutline className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-2' />
                        </div>
                        {errors.password && <p className='text-red-600'>{errors.password}</p>}
                        <div className='relative'>
                            <input
                                className='p-2 mt-8 rounded-md border w-full outline-none'
                                type="password"
                                name='confirmpassword'
                                placeholder='Confirm Password'
                                value={formData.confirmpassword}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.confirmpassword && <p className='text-red-600'>{errors.confirmpassword}</p>}
                        <Button variant="primary" content='Sign Up' size="md" className="mt-4" type="submit" />
                    </form>
                    <div className='flex flex-col md:flex-row gap-2 items-center mt-3'>
                        <p className="text-xs md:text-sm mb-2 md:mb-0">Already a Member! <Link to='/' className="text-blue-600">Login Here!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;

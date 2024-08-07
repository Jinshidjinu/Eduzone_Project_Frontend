import { useState } from 'react';
import Img from '../../assets/Images/LoginImg/Learning.gif';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosConfig';

const TeacherSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        phone: '',
        qualification: '',
        subject:'',
    
    });

    const navigate = useNavigate()
    const [errors, setErrors] = useState('');

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
            const response = await axiosInstance.post("/Teachers/auth/TeacherSignup", formData);
            if (response) {
                navigate(`/mentorsOtp/${response.data.email}`)
            }
        } catch (error) {
            console.log(error, "show");
            setErrors(error.response.data.err || error.response.data.error);
        }
    };

    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="bg-white w-[830px] md:max-w-1/2 h-auto flex flex-col md:flex-row items-center rounded-2xl shadow-lg mt-12">
                <div className="sm:block hidden w-1/2 p-5">
                    <img className='w-full h-auto' src={Img} alt="learning" />
                </div>
                <div className='bg-white md:w-1/2 rounded-2xl mb-10 p-4'>
                    <h1 className='font-bold text-2xl text-center text-blue-500 mb-5 md:text-3xl'>Sign Up</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit}>

                     {errors ?(<p className='text-red-600 ml-2'>{errors}</p> ):"" }
                        <div className="relative">
                            <input
                                className="p-2 mt-5 rounded-md border w-full outline-none"
                                type="text"
                                name='name'
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-5 rounded-md border w-full outline-none'
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='relative '>
                            <input
                                className='p-2 mt-5 rounded-md border w-full outline-none'
                                type="text"
                                name='phone'
                                placeholder='Phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='relative '>
                            <select
                                className='p-2 mt-5 rounded-md border w-full outline-none'
                                name='qualification'
                                value={formData.qualification}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected>Select Qualification</option>
                                <option value="CMA">CMA USA</option>
                                <option value="bachelors and CMA">Bachelor&apos;s Degree and CMA USA</option>
                                <option value="Masters and CMA">Master&apos;s Degree and CMA USA</option>
                            </select>
                        </div>
                        <div className='relative '>
                            <select
                                className='p-2 mt-5 rounded-md border w-full outline-none'
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected >Choose Subject</option>
                                <option value="CMA USA">CMA USA</option>
                                <option value="ACCA">ACCA</option>
                                <option value="CA">CA</option>
                            </select>
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-5 rounded-md border w-full outline-none'
                                type="password"
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <IoEyeOutline className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 mt-2' />
                        </div>
                        <div className='relative'>
                            <input
                                className='p-2 mt-5 rounded-md border w-full outline-none'
                                type="password"
                                name='confirmpassword'
                                placeholder='Confirm Password'
                                value={formData.confirmpassword}
                                onChange={handleChange}
                            />
                        </div>
                    
                        <Button variant="primary" content='Sign Up' size="md" className="mt-4 bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-blue-500 hover:bg-blue-500" type="submit" onClick={handleSubmit} />
                    </form>
                    <div className='flex flex-col md:flex-row gap-2 items-center mt-3'>
                        <p className="text-xs md:text-sm mb-2 md:mb-0">Already a Member! <Link to='/teacherlogin' className="text-blue-600">Login Here!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherSignup;

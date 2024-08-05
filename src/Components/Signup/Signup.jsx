import { useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import axiosInstance from '../../config/axiosConfig';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        phone: '',
        qualification: '',
        subject:'',  
    });
    
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          const response = await axiosInstance.post("/students/auth/register", formData);
          if (response) {
            navigate(`/otpverify/${response.data.email}`);
          }
        } catch (error) {
          console.log(error, "show");
          setErrors(error.response.data.err || error.response.data.error);
        }
      };

    return (
        <div className='flex flex-col md:flex-row min-h-screen'>  
            <div className="bg-[#9280D9] w-full md:w-1/2 h-[30vh] md:h-screen rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none relative overflow-hidden p-5 md:p-10 flex justify-center items-center">
                <div className="text-white flex flex-col items-center text-center">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-5">&#10052;</span>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-bold">Indian Institute of Commerce</span>
                        <span className="text-3xl md:text-5xl font-bold">EDUZONE</span>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0">
                    <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-white bg-opacity-20 bottom-1 right-10 rounded-xl transform rotate-45"></div>
                    <div className="absolute bottom-1 right-16 w-16 h-16 md:w-24 md:h-24 bg-[#FFD700] rounded-r-xl transform rotate-12"></div>
                </div>
            </div>

            <div className='flex justify-center w-full md:w-1/2 bg-white items-center p-5 md:p-10'>
                <div className='bg-white w-full max-w-md shadow-xl rounded-xl p-6 md:p-8'>
                    <h1 className='font-bold text-2xl md:text-3xl text-center text-[#9280D9] mb-5'>Sign Up</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        {errors ? (
                             <p className='text-red-600 text-sm mb-2'>{errors}</p>
                        ): "" }
                        
                        <div className="relative mb-4">
                            <input
                                className="p-2 rounded-md border w-full outline-none"
                                type="text"
                                name='name'
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='relative mb-4'>
                            <input
                                className='p-2 rounded-md border w-full outline-none'
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                         
                        </div>

                        <div className='relative mb-4'>
                            <input
                                className='p-2 rounded-md border w-full outline-none'
                                type="password"
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <IoEyeOutline className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400' />
                       
                        </div>

                        <div className='relative mb-4'>
                            <input
                                className='p-2 rounded-md border w-full outline-none'
                                type="password"
                                name='confirmpassword'
                                placeholder='Confirm Password'
                                value={formData.confirmpassword}
                                onChange={handleChange}
                            />
                       
                        </div>

                        <div className='relative mb-4'>
                            <input
                                className='p-2 rounded-md border w-full outline-none'
                                type="text"
                                name='phone'
                                placeholder='Phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                         
                        </div>

                        <div className='relative mb-4'>
                            <select
                                className='p-2 rounded-md border w-full outline-none'
                                name='qualification'
                                value={formData.qualification}
                                onChange={handleChange}
                            >
                                <option value="" disabled selected>Select Qualification</option>
                                <option value="high_school">Higher Secondary</option>
                                <option value="bachelors">Bachelor&apos;s Degree</option>
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
                        <Button variant="primary" content='Sign Up' size="md" className="w-full" type="submit" />
                    </form>
                    <div className='text-center mt-4'>
                        <p className="text-sm">Already a Member? <Link to='/' className="text-blue-600">Login Here!</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Signup;
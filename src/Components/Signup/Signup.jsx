import Img from '../../assets/Images/LoginImg/SingleImg.svg'
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div>

      <div className="bg-white w-full h-screen flex justify-center items-center ">
       <div className="bg-white  w-1/2 h-[580px] flex items-center rounded-2xl shadow-lg">
          
          <div>
            <img className='w-[380px] h-[500px]' src={Img} alt="" />
          </div>

          <div className='bg-white w-1/2 h-[500px] rounded-2xl mb-7 p-2'>
          
          <h1 className='font-bold text-2xl ml-40 text-[#9280D9] '>Sign Up</h1>

          <form action="" className='flex flex-col '>

          <div className="relative">
            {/* <h1 className="absolute text-gray-400 font-bold">Name</h1> */}
            <input 
             className="p-2 mt-8 rounded-xl border w-full outline-none"
             type="text"
             name='name' 
             placeholder='Name' 
            />
          </div>

          <div className='relative'>
            {/* <h1 className='absolute text-gray-400 font-bold'>Email</h1> */}
            <input 
            className='p-2 mt-8 rounded-xl border w-full outline-none' 
            type="text"
            name='email'
            placeholder='Email'            
            />
          </div>

          <div className='relative'>

            {/* <h1 className='absolute text-gray-400 font-bold'>Phone</h1> */}
            <input 
            className='p-2 mt-8 rounded-xl border w-full outline-none'
            type="tel" 
            name='phone'
            placeholder='Phone'

            />
          </div>
          <div className='relative'>

            {/* <h1 className='absolute text-gray-400 font-bold'>Phone</h1> */}
            <input 
            className='p-2 mt-8 rounded-xl border w-full outline-none'
            type="password" 
            name='password'
            placeholder='Password'

            />
            <IoEyeOutline className='absolute top-1/2 right-3 trasulate-y-1/2 text-gray-400 mt-2'/>
          </div>
          <div className='relative'>

            {/* <h1 className='absolute text-gray-400 font-bold'>Phone</h1> */}
            <input 
            className='p-2 mt-8 rounded-xl border w-full outline-none'
            type="password" 
            name='confirmpassword'
            placeholder='ConfirmPassword'

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

           <button className='bg-[#9280D9]  rounded-lg text-white py-2 hover:scale-110 duration-300 mt-2'>Sign Up</button>

          </form>

          <div className='flex justify-between items-center mt-3'>
          <p className="text-xs font-sans "> Already a Member....!</p>
           <Link to='/'>
           <button className='bg-gray-200  px-5 border rounded-xl hover:scale-105 duration-300 text-violet-700'>Login Here</button>
           </Link>

          </div>

          </div>
       </div>
      
      </div>

    </div>
  )
}

export default Signup
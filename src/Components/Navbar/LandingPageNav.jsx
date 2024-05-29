import React from 'react'
import Logo from  '../../assets/Images/LoginImg/Landing Logo.png'


function LandingPageNav() {
  return (
    <div className='bg-[#a294d4] w-full min-h-[45px] flex items-center '>
        
        <img className='w-[150px] ' src={Logo} alt="" />

        
        <div className='flex justify-end w-full gap-5 p-3 text-opacity-50 font-medium font-sans'>
            <button>Become a tutor</button>
            <button className=' border-black border-[2px] p-2 hover:bg-blue-950 hover:text-gray-300 duration-300'>SignUp/login</button>
       
        </div>
    </div>
  )
}

export default LandingPageNav
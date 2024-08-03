import  { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import Profile from '../../assets/Images/DashImg/jinshi.jpg'
// import Logo from '../../assets/Images/LoginImg/Landing Logo.png';
import { IoChevronDown } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const DashNav = () => {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className='Top'>
        <div className='h-[100px] w-full border-b border-[#00000056] flex  items-center justify-between pt-[20px] lg:pl-[24px] pl-[4px] md:pr-[32px] pr-[5px] '>
            <div className='flex items-center justify-center gap-[25px]'>
                <IoMenu onClick={()=>setOpenMenu(true)} className='flex md:hidden text-[35px] text-white'/>
               <h1 className='md:text-[30px] text-[20px] font-semibold text-white'>Dashboard</h1>
            </div>
               <div className='flex items-center justify-between gap-[10px] md:gap-[17px]'>
                 <div className='flex md:h-[51px] md:w-[280px] h-[30px] w-[30px] bg-white md:rounded-[25px]  rounded-full justify-center items-center md:pl-[18px]'>
                    <FiSearch className='md:text-[18px] text-[#00000084]'/>
                    <input type="text" placeholder='search for anything..' className='h-[44px] w-[250px] md:flex hidden rounded-[25px] md:pl-[12px] border-none outline-none' />
                 </div>
                 <div className='md:h-[51px] md:w-[51px] h-[30px] w-[30px] rounded-full bg-white flex items-center justify-center hover:cursor-pointer'>
                   <IoMdNotifications className='md:text-[27px] text-[22px]'/>
                 </div>
                 <div className='flex md:h-[51px] md:w-[200px] h-[40px] w-[40px] md:bg-white rounded-full md:rounded-[25px] items-center justify-between  md:pr-[15px] md:pt-[5px] md:pl-[2px]'>  
                  <div className='flex items-center gap-4 justify-center hover:cursor-pointer'>
                    <img src={Profile} alt="" className='md:h-[40px] h-[40px] w-[40px] md:w-[40px] rounded-full mb-2'/>
                    <div>
                        <h3 className='text-[14px] md:flex hidden font-semibold'>Jinshid M</h3>
                        <h3 className='text-[10px] md:flex hidden'>Founder & CEO</h3>
                    </div>
                  </div>
                    <div className='md:flex hidden hover:cursor-pointer'>
                        <IoChevronDown/>
                    </div>
                 </div>
               </div>
        </div>
      <div className={` absolute h-[100%] w-[100%] top-0 ${openMenu === true ? 'flex' :'hidden'}`}>        
        <div className='h-[100%] relative text-white flex  pl-[50px] gap-[15px] font-medium justify-center flex-col  w-[55%] bg-black'>
         <RxCross2 onClick={()=>setOpenMenu(false)} className='absolute top-[12px] right-[10px] text-white'/>
           <a href="">Dashboard</a>
           <a href="">Projects</a>
           <a href="">Tasks</a>
           <a href="">Dashboard</a>
           <a href="">Time log</a>
           <a href="">Resource mgnt</a>
           <a href="">Users</a>
           <a href="">Project template</a>
           <a href="">Menu settings</a>
        </div>
        <div onClick={()=>setOpenMenu(false)} className='h-[100%]  w-[45%] bg-[#2b2edf23]'></div>
        </div>  
    </div>
  )
}

export default DashNav
import { useState } from 'react';
import Logo from '../../assets/Images/LoginImg/Landing Logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
const LandingPageNav = () => {
  const [isPopup, setPopup] = useState(false);
  const [LandNav, setLandNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const togglePopup = () => {
    setPopup(!isPopup);
  }

  const handleNav = () => {
    setLandNav(!LandNav);
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[rgb(244,239,250)] max-w-full min-h-[70px] md:mx-auto flex items-center justify-between px-4 md:px-4'>
      <img className='w-[140px] md:w-[200px]' src={Logo} alt="Logo" />
      <div className='hidden md:flex gap-5 text-blue-900 font-[600]'>
        <ul className='flex gap-5'>
          <li>HOME</li>
          <li>OUR TEAM</li>
          <li
            className='relative flex items-center'
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span>COURSE</span>
            <IoMdArrowDropdown className='ml-1' />
            <ul className={`absolute left-0 top-6 mt-2 bg-white border rounded shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
              <li className='px-4 py-2 hover:bg-gray-200'>CA</li>
              <li className='px-4 py-2 hover:bg-gray-200'>ACCA</li>
              <li className='px-4 py-2 hover:bg-gray-200'>CMA</li>
            </ul>
          </li>
          <li>CAREERS</li>
          <li>CONTACT US</li>
        </ul>
      </div>

      <div className='hidden md:flex items-center gap-3'>
        <button
          className='text-white rounded-lg p-2 hover:bg-gradient-to-r from-[#A54A99] to-[#490692] duration-300 bg-[#9C4DF4] font-sans text-sm'
          onClick={togglePopup}
        >
          <span className='z-10 relative'>Sign Up / Login</span>
        </button>
        {isPopup && (
          <div className='absolute top-16 mt-2 text-gray-800 right-12 bg-[rgb(244,239,250)] rounded-lg p-2 w-44 h-24 shadow-lg flex flex-col gap-3'>
            <h1 className='text-gray-500 text-center'>Join for free!.</h1>
            <div className='flex items-center gap-2'>
              <button className='w-1/2 h-8 bg-[#9C4DF4] text-white'><Link to="/"> Students  </Link></button>
              <button className='w-1/2 h-8 bg-[#9C4DF4] text-white'><Link to="/teacherlogin"> Teacher  </Link></button>
            </div>
          </div>
        )}
        <AccountCircleIcon className='text-[#9280D9] text-3xl' />
      </div>

      <div onClick={handleNav} className='block md:hidden mr-6 z-20'>
        {LandNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={LandNav ? 'z-10 fixed h-screen flex justify-center top-[60px] left-0 right-0 text-center ease-out duration-500' : 'fixed right-[-100%]'}>
        <ul className='p-8 bg-[rgb(244,239,250)] rounded-lg text-2xl text-gray-800 w-full font-Freeman'>
          <li className='w-full hover:bg-violet-400 p-4 rounded-2xl hover:text-gray-200'>Home</li>
          <li className='p-4 hover:bg-violet-400 rounded-2xl hover:text-gray-200'>OUR TEAM</li>
          <li className='p-4 hover:bg-violet-400 rounded-2xl hover:text-gray-200'>COURSE</li>
          <li className='p-4 hover:bg-violet-400 rounded-2xl hover:text-gray-200'>CAREERS</li>
          <li className='p-4 hover:bg-violet-400 rounded-2xl hover:text-gray-200'>CONTACT US</li>

          <div className='flex gap-4 mt-4 justify-center'>
            <button className="text-white rounded-2xl p-2 hover:bg-gradient-to-r from-[#A54A99] to-[#490692] duration-300 bg-[#9C4DF4] font-sans text-sm w-full"
            onClick={togglePopup}
            >
              <span className="z-10 relative">Sign Up / Login</span>
            </button>
            {isPopup && (
          <div className='absolute mt-12  text-gray-800  bg-violet-200  rounded-lg p-2 w-44 h-24 shadow-lg flex flex-col gap-3'>
            <h1 className='text-gray-500 text-center'>Join for free!</h1>
            <div className='flex items-center gap-2'>
             
              <button className='w-1/2 h-8 bg-[#9C4DF4] text-white text-sm'> <Link to="/"> Student  </Link></button>
            
              <Link to="/teacherlogin">
              <button className='w-1/2 h-8 bg-[#9C4DF4] text-white text-sm'><Link to="/teacherlogin"> Teacher  </Link></button>
              </Link>
            </div>
          </div>
        )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default LandingPageNav;

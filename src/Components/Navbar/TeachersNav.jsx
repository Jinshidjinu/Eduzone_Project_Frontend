
import { useState } from 'react'
import Logo from '../../assets/Images/LoginImg/Landing Logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Button from '../Button/Button'

const TeachersNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-[rgb(244,239,250)]">
      <div className="max-w-full min-h-[70px] md:mx-auto flex items-center justify-between px-4">
        <img className="w-[140px] md:w-[200px]" src={Logo} alt="Logo" />

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-4 text-blue-900 font-semibold">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
          </ul>
          <Button content="Profile" variant="secondary" />
        </div>

        <div className="md:hidden z-20" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={`${
          nav ? 'fixed top-[70px] left-0 right-0 h-screen z-10' : 'fixed -right-full'
        } flex justify-center text-center transition-all duration-500 bg-[rgb(244,239,250)]`}
      >
        <ul className="p-8 rounded-lg text-2xl text-gray-800 w-full font-Freeman flex flex-col gap-5 items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <Button content="Profile" variant="secondary" />
        </ul>
      </div>
    </nav>
  );
};

export default TeachersNav;
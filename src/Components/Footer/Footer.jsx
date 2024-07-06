import Logo from '../../assets/Images/LoginImg/Landing Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className='bg-[#F0F0F0]'>
         
    <div className='grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-20 md:px-0 lg:ml-20 p-2'>
        
    <div>
           <img className='w-[150px] md:[150px] ' src={Logo} alt="" />
          <ul className='mt-2 space-y-2 p-2 text-sm'>
            <li>
                <div className='flex gap-3'>
                <h2><FaFacebookF/></h2>
                <h2 className='w-[18px] h-[18px] bg-orange-600 rounded-full flex items-center justify-center'><AiOutlineInstagram className='text-sm text-white'/></h2>
                <h2><FaSquareXTwitter/></h2>
                <h2><FaLinkedin/></h2>
                </div></li>
            <li className=''>@2024 Eduzone.co</li>  
            <li className=''>Eduzone is a registered </li>
            <li className=''>trademark of Eduzone.co</li>
          </ul>
        </div>

        <div>
            <h1 className='font-bold mb-2 text-blue-900 '>Courses</h1>
            <ul className='mt-2 space-y-2  text-md font-light '>
                <li>Classroom Courses </li>
                <li>virtual Classroom Courses</li>
                <li>E-Learning Courses </li>
                <li>Offline Courses</li>
                <li>24*7 available Courses</li>
            </ul>
        </div>

        <div className='font-bold mb-2 text-blue-900'>
            <h1 className=''>Community</h1>
            <ul className='mt-2 space-y-2  text-md font-light'>
                <li>Learners</li>
                <li>Partners</li>
                <li>Transaction</li>
                <li>Blog</li>
                <li>Teaching Center</li>
            </ul>
        </div>

        <div className='font-bold mb-2 text-blue-900'>
            <h1 className=''>Quick Links</h1>
            <ul className='mt-2 space-y-2 text-md font-light'>
                <li>Home</li>
                <li>Professional Education</li>
                <li>Courses</li>
                <li>Admissions</li>
            </ul>
        </div>

        <div className='font-bold mb-2 text-blue-900'>
            <h1 className=''>More</h1>
            <ul className='mt-2 space-y-2 text-md font-light'>
                <li>Investors</li>
                <li>Terms </li>
                <li>Privacy</li>
                <li>Help</li>
            </ul>
        </div>
    </div>
   
    </div>
  )
}

export default Footer
import React from 'react';
import LandingBackgrnd from '../../assets/Images/Allimg/—Pngtree—modern flat design concept of_5332889.png';
import LandingPageNav from '../Navbar/LandingPageNav';
 

function Landingpage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingPageNav />
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start flex-grow">
        <div className="w-full md:w-1/2 flex flex-col  md:mb-0 justify-center  gap-3 p-4 md:p-10">
          <div className=" text-3xl md:text-5xl font-Freeman pb-2 flex flex-col gap-3 text-gray-700 ">
            <h1 >EDUZONE</h1>
            <h1>ONLINE <span className='text-[#9280D9]'>LEARNING</span> </h1>
          </div>
          <div className="text-sm md:text-base font-font2 flex flex-col gap-8">
            <p className='text-blue-299'>
              Welcome to EDUZONE, your gateway to an innovative and enriching learning experience.
              At EDUZONE, we believe in empowering students with knowledge that transcends boundaries.
              Through our interactive online platform, we offer a diverse range of courses tailored to
              your needs. Whether you're a high school student exploring new interests or a working professional,
              EDUZONE provides a supportive environment where you can thrive. Our team of dedicated
              educators fosters critical thinking and lifelong learning.
            </p>
            <div>
            <hr className={`w-[80%] bg-gray-600 h-[8px] border-transparent  rounded-r-lg`} />
  
            </div>

          </div>
          <button className="border border-[#9280D9] font-bold w-[150px] h-[50px] hover:bg-[#a294d4] hover:text-gray-200  duration-300 mt-5">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 flex justify-center md:justify-end">
          <img className="max-w-full h-auto" src={LandingBackgrnd} alt="Landing Background" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;

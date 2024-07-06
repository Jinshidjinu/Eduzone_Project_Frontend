import React from 'react';
import LandingBackgrnd from '../../assets/Images/Allimg/HomeBackground.png';
import LandingPageNav from '../../Components/Navbar/LandingPageNav';
import  Button from '../../Components/Button/Button'
import VideocallChild from '../../assets/Images/LandingPage/videcallChild.png'
import liveClasses from '../../assets/Images/LandingPage/liveClasses.png'
import { IoVolumeMediumSharp } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import LiveStreaming from '../../assets/Images/LandingPage/liveStreaming.jpg'
import Acca from '../../assets/Images/LandingPage/Acca.jpg'
import CA from '../../assets/Images/LandingPage/CA.jpeg'
import Covid from '../../assets/Images/LandingPage/Covid-19.png'
import CMAusa from'../../assets/Images/LandingPage/CMA USA.jpg'
import Tutors from '../../assets/Images/LandingPage/Tutor.png'

import { IoMdPlayCircle } from "react-icons/io";
import Footer from '../../Components/Footer/Footer';

const  StudentsHome = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(244,239,250)]">
      <LandingPageNav />
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start flex-grow ">
        <div className="w-full md:w-1/2 flex flex-col  md:mb-0 justify-center  gap-3 p-4 md:p-10">
          <div className=" text-3xl md:text-5xl font-Freeman pb-2 flex flex-col gap-3 text-gray-700  mt-20">
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
          <button className="border border-[#9280D9] bg-[#9C4DF4]  hover:bg-gradient-to-r from-[#A54A99] to-[#490692] text-white font-bold w-[130px] h-[40px] ho hover:text-gray-200  duration-300 mt-5">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-10 flex justify-center md:justify-end mt-9">
          <img className="max-w-full h-auto" src={LandingBackgrnd} alt="Landing Background" />
        </div>
      </div>
      

      <div className='bg-[rgb(244,239,250)] flex justify-center flex-col items-center  gap-4 p-4 md:p-8'>
         <div  className='bg-[rgb(244,239,250)] w-full  md:w-1/2 flex  flex-col h-[300px] p-4  text-center gap-3 items-center '>
               <h1 className='text-4xl font-bold text-blue-950 '>High quality video,audio</h1>
               <h1 className='text-center text-4xl font-bold text-blue-950 '>& live classes</h1> 

               <div className='flex flex-col items-center gap-6'>

              <p className='font-font2 '>
                High-definition video is video of higher resolution and quality than standard-definition. while there is no standardized meaning for high-definition, generally any video 
                image with considerably more than 480 vertical scan lines or 576 vertical lines considered high-definition. 
               </p>
          
               <Button className='bg-[#9C4DF4] w-[140px] h-[50px] ' content=' Visit Courses'/>
               </div>
         
         </div>
         <div className='bg-white w-full  md:w-[880px]  rounded-2xl flex flex-col items-center p-6'>
         <div
            className='bg-cover w-full md:w-[820px] h-[430px] rounded-2xl flex items-end justify-between p-4'
            style={{ backgroundImage: `url(${liveClasses})` }}
          >
            <div className='bg-white w-[130px] h-[150px]  flex justify-center items-center rounded-lg mb-2'>
              <div className='bg-white w-[112px] h-[140px]  rounded-lg'>
               <img src={VideocallChild} alt="" className='w-[112px]  h-[140px] rounded-lg' />
              </div>
            </div>
            <div className='bg-[#FF6652] w-[50px] h-[50px] rounded-full flex items-center justify-center mb-2'>
                   <MdCallEnd  className='text-white'/>
               </div>
          <div className='bg-[#9C4DF4] w-[50px] h-[50px] rounded-full flex items-center justify-center mb-2'>
             <MdKeyboardArrowUp className='text-white  w-5 h-5'/>
          </div>
          </div>
         </div>


         <div className='bg-[rgb(244,239,250)] w-full  md:w-[880px] h-[150px] flex flex-wrap justify-between'>
           
           <div className='bg-white w-full  md:w-[250px] h-[70px] rounded-lg flex items-center  p-3 gap-3'>
            <div className='bg-red-100 w-[50px] h-[50px] rounded-lg flex justify-center items-center'>
             <IoVolumeMediumSharp  className='text-orange-500 h-10 w-7'/>
            </div>
             <h2 className='font-bold'>Audio Classes</h2>
           </div>
           <div className='bg-white w-full  md:w-[250px] h-[70px] rounded-lg flex items-center p-3 gap-3'>
            <div className='bg-red-300 w-[50px] h-[50px] rounded-lg flex justify-center items-center'>
            <img src={LiveStreaming} alt=""  />
            </div>
             <h2 className='font-bold'>Live Classes</h2>
           </div>
           <div className='bg-white w-full  md:w-[250px] h-[70px] rounded-lg flex items-center p-3  gap-3'>
            <div className='bg-green-100 w-[50px] h-[50px] rounded-lg flex justify-center items-center'>
             <IoMdPlayCircle  className='text-green-600 h-10 w-7'/>
            </div>
             <h2 className='font-bold'>Recorded Classes</h2>
           </div>
         </div>
      </div>



      <div className='bg-[rgb(244,239,250)] md:w-full w-full md:h-[850px] h-auto text-center mt-10 flex flex-col gap-10 '>
        <h1 className='text-blue-950 text-4xl font-bold'>Courses</h1>
        <div className='bg-[rgb(244,239,250)] w-full flex flex-wrap justify-evenly p-2'>   
        <div className='bg-white md:w-[30%] w-full md:h-[600px] h-auto text-start rounded-lg flex flex-col items-center gap-2 '>
          <img src={Acca} alt="ACCA Course" className='rounded-lg  w-[100%] h-[35%]'/>
          <h1 className='font-bold'>ACCA</h1>
          <p className='text-sm font-serif  text-justify px-4'>The minimum entry qualification for an ACCA student is Plus two and Exemptions are available for Graduate, Post Graduate students, Partly/Fully qualified Chartered Accountants, Partly/Fully qualified Cost Accountants etc.
          The ACCA Qualification will provide it is motivate  you with skills and knowledgerelevant to any business, 
          whichmeans you are free to choosewhich type of accountancy role andorganisation.
          </p>
          <Button className='w-[130px] h-[40px] bg-[#9C4DF4]' content='Read More'/>
        </div>
        <div className='bg-white md:w-[30%] w-full md:h-[600px] h-auto text-start rounded-lg flex flex-col items-center gap-2 '>
          <img src={CMAusa} alt="CMA Course" className='rounded-lg w-[100%] h-[35%] '/>
          <h1 className='font-bold'>CMA USA</h1>
          <p className='text-sm font-serif text-justify  px-4'>The Certified Management Accountant (CMA) USA Course is a professional financial accounting certification program offered by the Institute of Management Accountants (IMA). 
            It is a globally recognised certification that unlocks many opportunities for professionals.it is very difficult exams
            Jumping into the US CMA certification of an journey  skills that unlock doors to leadership roles. 
          </p>
          <Button className='w-[130px] h-[40px] bg-[#9C4DF4]' content='Read More'/>
        </div>
        <div className='bg-white md:w-[30%] w-full md:h-[600px] text-start rounded-lg flex flex-col items-center gap-2 '>
          <img src={CA} alt="CA Course" className='rounded-lg w-[100%] h-[35%]'/>
          <h1 className='font-bold'>CA</h1>
          <p className='text-sm font-serif text-justify px-4'>A highly qualified Chartered Accountant with extensive experience in accounting and auditing. Possesses strong analytical, problem solving and communication skills, with a proven ability to provide accurate and timely financial information.
          This might involve financial reporting, taxation, auditing, forensic accounting, corporate finance, business recovery and insolvency, or accounting systems and processes.
          </p>
          <Button className='w-[130px] h-[40px] bg-[#9C4DF4]' content='Read More'/>
        </div>
        </div> 
      </div>



      <div className='bg-[rgb(244,239,250)] h-auto md:h-[700px] p-4 md:p-0 w-full flex justify-center '>
        <div className='bg-[rgb(244,239,250)] w-full md:w-[80%]  rounded-xl  flex flex-col md:flex-row'>
        <div className='bg-[#EDE9F2] w-full md:w-1/2    h-[550px] flex flex-col justify-center md:p-10 gap-3 rounded-t-lg md:rounded-t-none md:rounded-l-lg'>
          <div className='w-[140px] h-[40px] bg-[#E4E2F4] flex items-center justify-center rounded-lg '>
            <p className='text-[#9C4DF4] font-sans'>College Level</p>
          </div> 
          <div  className='text-3xl md:text-4xl  font-bold pb-2 flex flex-col gap-3 text-gray-700'>
            <h1>Don't Waste time in </h1>
            <h1>COVID-19 Pandemic.</h1>
            <h1>Develop your skills.</h1>
          </div>
          <p className=' text-justify font-sans'>High-definition video is video of higher resolution and quality than standard-definition. while there is no standardized meaning for high-definition,generally any video.</p>
           <Button className='bg-[#9C4DF4] w-[150px] h-[45px]' content='Register Now'/>
        </div>
      <div className='bg-[#EDE9F2] w-full   md:w-1/2 h-au md:h-[550px] flex  items-center rounded-r-lg md:rounded-b-none md:rounded-r-lg p-4 md:p-0 '>
        <img src={Covid} alt="" />
      </div>
        </div>
      </div>


       <div className='bg-[rgb(244,239,250)] w-full flex md:flex-row flex-col-reverse '>
            <div className='hidden items-center   w-1/2 justify-center h-[520px] bg-[rgb(244,239,250)] md:flex'>
                  
                    <div className=" w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-gradient-to-r from-[#FF6652] to-[#FFA07A] rounded-full flex items-center justify-center ">  
                      <img src={Tutors} alt="" className='ml-0 md:ml-10 w-3/4 h-3/4' />
                    </div>    

            </div>

          <div className='bg-[rgb(244,239,250)] w-full  md:w-1/2 flex  items-center'> 
          <div className='bg-[rgb(244,239,250)] w-[600px]  h-[550px] flex flex-col justify-center p-5 gap-3 rounded-s-lg '>
 
          <div  className=' text-3xl md:text-4xl  font-bold pb-2 flex flex-col gap-3 text-gray-700 '>
            <h1>Want to share your </h1>
            <h1>knowledge? Join us</h1>
            <h1>a Mentor</h1>
          </div>
          <p className=' text-justify font-sans'>The ideal candidate should possess excellent communication skills, empathy, and a genuine desire to help others succeed.
             Previous mentoring or teaching experience is preferred but not required. If you are enthusiastic about making a positive impact in the lives of students</p>
             <Button className='bg-[#9C4DF4] w-[150px] h-[45px]' content='Apply Now'/>
          </div>
            
            </div>

       </div>

       


       <div className='bg-white w-full  h-[500px] flex justify-center items-center  '>

        <div className='bg-white w-full md:w-[900px] h-[400px] flex flex-col justify-center p-10 gap-7'>
        <div  className='text-3xl md:text-4xl font-bold pb-2 flex flex-col gap-3 text-gray-700'>
            <h1> DREAM TEAM </h1>
            <h1>LEARN FROM INDIA'S BEST</h1>
        
          </div>
          <p className=' text-justify font-sans'>Eduzone is proud to bring India’s Best CA,ACCA,CMA teachers under one roof to provide our users the best possible learning experience and an unparalleled advantage to help them crack CA,ACCA,CMA and  finals. Get unlimited access to the Dream Team as a part of the Eduzone Learning family. </p>

          <Button className='bg-[#9C4DF4] w-[150px] h-[45px] rounded-none  hover:text-gray-200  ' content='OUR TEAM ' />

        </div>

       </div>

       <Footer/>
        
    </div>
  );
}

export default StudentsHome;

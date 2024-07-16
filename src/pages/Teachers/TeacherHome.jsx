import TeachersNav from "../../Components/Navbar/TeachersNav"
import Card from "../../Components/HomeCard/Card"
import GroupStudy from '../../assets/Images/HomeCard/teaching.png'
import instructorIMG from '../../assets/Images/TeacherHome/front-view-male-student-red-checkered-shirt.png'
import { useState } from "react"
import Button from "../../Components/Button/Button"

const TeacherHome = () => {

  const [activeTab, setActiveTab] = useState('requirements');

  const requirements = [
    'An undergraduate degree',
    'Participate in supervised teaching',
    'State teaching license',
    'Purse graduate studies'
  ];
  const rules = [
    'Maintain professional conduct',
    'Prepare lesson plans',
    'Assess student progress',
    'Communicate with parents/guardians'
  ];

  return (
    <div>
      <TeachersNav/>
        <div className="w-full h-[350px] flex  justify-center bg-[rgb(244,239,250)]">
        <div className="p-8 ">
          <Card 
          title="Join Eduzon as  " 
          title2="a  Mentor "
          illustrationSrc={GroupStudy}
          illustrationAlt='teaching'           
          />     
        </div>   
        </div>

        <div className="w-full h-[90vh] flex justify-center items-center bg-[rgb(244,239,250)]">
          <div className="w-1/3 h-[80vh] bg-[#FFDEDA] flex items-end rounded-2xl justify-center">  
             <img src={instructorIMG} alt="instructorIMG" className="w-[390px] h-[540px]" />
        </div>
       <div className="w-1/2 h-[80vh] bg-[rgb(244,239,250)] flex items-center ">
       <div className="max-w-2xl mx-auto p-6 bg-[rgb(244,239,250)] rounded-lg ">
        <h1 className="text-3xl font-semibold text-blue-950  mb-4">Apply As Instructor</h1>
       <p className="text-gray-700 mb-4">
        Teaching is a vital and admirable career. As such, it comes with quite a bit of
        responsibility, both in practice and in preparation with many skills required to
        be a teacher. The following steps provide a general breakdown of the
        requirements for teachers:
      </p>
      
      <div className="flex border-b mb-4">
        <button 
          className={`py-2 px-4 ${activeTab === 'requirements' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('requirements')}
        >
          Intstructor Requirements
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 'rules' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('rules')}
        >
          Instructor Rules
        </button>
      </div>
      <ul className="list-none pl-0 mb-6">
        {activeTab === 'requirements' 
          ? requirements.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full bg-red-500 mr-3"></span>
                {item}
              </li>
            ))
          : rules.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full bg-red-500 mr-3"></span>
                {item}
              </li>
            ))
        }
      </ul>

    <Button variant="secondary" content="Apply Now" />
    </div>
          </div>

        </div>
         
    </div>
  )
}

export default TeacherHome
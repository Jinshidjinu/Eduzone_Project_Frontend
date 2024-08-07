import { FaPlus } from "react-icons/fa6";
import Logo from '../../assets/Images/LoginImg/Landing Logo.png';
import { useState } from "react";
import Dash from '../../assets/Images/DashImg/briefcase.png'
import users from '../../assets/Images/DashImg/user.png'
import { IoList } from "react-icons/io5";
import { BiVideoPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const DashMenu = ({value}) => {
    const [active,setActive] = useState(1)

    return (
      <div className='h-[100vh]  lg:flex hidden relative pl-[20px] gap-[40px] md:flex-col md:items-center pt-[68px]  ' >
        
          <div className='flex  flex-col  w-full items-center  gap-[30px]'>
            <div>
            <img src={Logo} alt="" className={`h-[50px] w-[150px] ${value === true ? 'hidden' : 'flex'}`} />
            </div>
            <div className={`h-[50px]  bg-[#2c2cea89]  flex items-center  gap-[10px]  ${value === true ? 'w-[50px] rounded-full items-center justify-center' : 'w-[190px] rounded-[25px] pl-[7px] pr-[10px]'}`}>
              <button className='h-[35px] w-[35px] rounded-full bg-white flex items-center justify-center'>
                    <FaPlus className='text-[20px] text-[#6369FF]'/>
              </button>
                <h1 className={`text-[14px] text-white ${value === true ? 'hidden' :'flex'}`}>Create new <br /> Project</h1>
            </div>
          </div>
          <div className='flex gap-[8px] flex-col relative '>
              <div>
             
                <button onClick={()=>setActive(1)} className={`flex h-[50px]  items-center  font-medium  ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 1 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                   <img src={Dash} alt="" className={`w-[20px] h-[20px] ${active ===1 ? 'hidden' : 'flex'}`}/>
                   <h1 className={value === true ? 'hidden' :'flex'}> <Link to="/dashboard">Dashboard </Link></h1>
                  </button>
            

                  <Link to="/userslist">
                <button onClick={()=>setActive(2)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 2 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                   <img src={users} alt="" className={`w-[20px] h-[20px] ${active === 2 ? 'hidden' : 'flex'}`}/>
                   <h1 className={value === true ? 'hidden' :'flex'}>Users</h1>
                  </button>
                  </Link>

                  <Link to="/addvideos">
                <button onClick={()=>setActive(3)} className={`flex h-[50px] items-center font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[10px] pl-[17px] rounded-[25px]'} ${active === 3 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                   <BiVideoPlus className="text-2xl  "/>
                   <h1 className={value === true ? 'hidden' :'flex'}> Add Videos</h1>
                  </button>
                  </Link>
              
                  <Link to="/videolist">
                <button onClick={()=>setActive(4)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[10px] pl-[17px] rounded-[25px]'} ${active === 4 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                  <IoList className="text-2xl  "/>
                   <h1 className={value === true ? 'hidden' :'flex'}>List Videos</h1>
                  </button>
                  </Link>

                <button onClick={()=>setActive(5)} className={`flex h-[50px]  items-center  font-medium ${value=== true ?'w-[50px] rounded-full items-center justify-center':'w-[190px] gap-[15px] pl-[17px] rounded-[25px]'} ${active === 5 ? 'bg-[#2c2cea89] text-white' : '' }`}>
                   {/* <img src={users} alt="" className={`w-[20px] h-[20px] ${active === 7 ? 'hidden' : 'flex'}`}/> */}
                   <h1 className={value === true ? 'hidden' :'flex'}>Users</h1>
                  </button>
               
               
              </div>
          </div>
      </div>
    )
}

export default DashMenu
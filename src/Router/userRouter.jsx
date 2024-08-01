
import { Route,Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Header from '../Components/Navbar/Header'
import LandingPageNav from '../Components/Navbar/LandingPageNav'
import StudentsHome from '../pages/User/StudensHome'
import OtpVerify from '../pages/User/OtpVerify'
import Spinner from '../Components/shared/Spinner'
const userRouter = () => {
  
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>
            <Route path="/otpverify/:email" element={<OtpVerify />} />
            <Route exact path='/spinner' element={<Spinner/>}></Route>    
            <Route exact path='/header' element={<Header/>}></Route>
            <Route exact path='/landing' element={<LandingPageNav/>}></Route>
            <Route exact path='/studentsHome' element={<StudentsHome/>}></Route>

        </Routes>
    </div>
  )
}

export default userRouter
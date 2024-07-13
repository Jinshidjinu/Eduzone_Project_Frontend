
import { Route,Routes } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import TeacherLogin from '../Components/Login/TeacherLogin'
import TeacherSignup from '../Components/Signup/TeacherSignup'
import Header from '../Components/Navbar/Header'
import LandingPageNav from '../Components/Navbar/LandingPageNav'
import StudentsHome from '../pages/User/StudensHome'
import OtpVerify from '../pages/OtpVerify'
import OtpTeacher from '../pages/Teachers/OtpTeacher'
import Spinner from '../Components/shared/Spinner'
const userRouter = () => {
  
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>
            <Route exact path="/otpverify/:email" element={<OtpVerify />} />
            <Route exact path='/teacherlogin' element={<TeacherLogin/>}></Route>
            <Route exact path='/teachersignup' element={<TeacherSignup/>}></Route>
            <Route exact path='/mentorsOtp/:email' element={<OtpTeacher/>}></Route>
            <Route exact path='/spinner' element={<Spinner/>}></Route>    
            <Route exact path='/header' element={<Header/>}></Route>
            <Route exact path='/landing' element={<LandingPageNav/>}></Route>
            <Route exact path='/studentsHome' element={<StudentsHome/>}></Route>

        </Routes>
    </div>
  )
}

export default userRouter
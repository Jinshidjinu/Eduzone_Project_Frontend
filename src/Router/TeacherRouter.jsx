import { Route,Routes } from 'react-router-dom'
import TeacherLogin from '../Components/Login/TeacherLogin'
import TeacherSignup from '../Components/Signup/TeacherSignup'
import OtpTeacher from '../pages/Teachers/OtpTeacher'
import TeacherHome from '../pages/Teachers/TeacherHome'
import TeachersNav from '../Components/Navbar/TeachersNav'

const TeacherRouter = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/teachersNav' element={<TeachersNav/>}></Route>
            <Route exact path='/teacherlogin' element={<TeacherLogin/>}></Route>
            <Route exact path='/teachersignup' element={<TeacherSignup/>}></Route>
            <Route exact path='/mentorsOtp/:email' element={<OtpTeacher/>}></Route>
            <Route exact path='/teachersHome' element={<TeacherHome/>}></Route>
        </Routes>
    </div>
  )
}
export default TeacherRouter
import { Route,Routes } from 'react-router-dom'
import AdminLogin from "../Components/Login/Admin"
const AdminRouter = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/adminlogin' element={<AdminLogin/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminRouter
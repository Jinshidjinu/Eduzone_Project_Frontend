import { Route,Routes } from 'react-router-dom'
import AdminLogin from "../Components/Login/Admin"
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
const AdminRouter = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/adminlogin' element={<AdminLogin/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminRouter
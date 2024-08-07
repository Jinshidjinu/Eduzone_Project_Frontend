import { Route,Routes } from 'react-router-dom'
import AdminLogin from "../Components/Login/Admin"
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import Userlist from '../pages/Admin/Dashboard/Userlist'
import Addvideo from '../pages/Admin/Dashboard/Addvideo'
import VideoListPage from '../pages/Admin/Dashboard/VideoListPage'
const AdminRouter = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/adminlogin' element={<AdminLogin/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            <Route exact path='/userslist' element={<Userlist/>}></Route>
            <Route exact path='/addvideos' element={<Addvideo/>}></Route>
            <Route exact path='/videolist' element={<VideoListPage/>}></Route>

        </Routes>
    </div>
  )
}

export default AdminRouter
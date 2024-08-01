import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './Router/userRouter';
import TeacherRouter from './Router/TeacherRouter';
import AdminRouter from './Router/AdminRouter';

const  App = () => {
  return (
   <div>
      <BrowserRouter>
        <UserRouter/>
        <TeacherRouter/>
        <AdminRouter/>
     </BrowserRouter>
   </div>
   
  )
}

export default App

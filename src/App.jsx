import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './Router/userRouter';
import TeacherRouter from './Router/TeacherRouter';
const  App = () => {
  return (
   <div>
    
      <BrowserRouter>
        <UserRouter/>
        <TeacherRouter/>
     </BrowserRouter>
   </div>
   
  )
}

export default App

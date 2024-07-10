import './App.css'
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './Router/userRouter';

const  App = () => {
  return (
   <div>
    
      <BrowserRouter>
        <UserRouter/>
     </BrowserRouter>
   </div>
   
  )
}

export default App

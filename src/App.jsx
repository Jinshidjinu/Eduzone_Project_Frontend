import './App.css'
// import Signup from './pages/StudentsSide/Signup';
import Login from '../src/Components/login/Login'
import Signup from '../src/Components/Signup/Signup';
import LandingPageNav from './Components/Navbar/LandingPageNav';
import Landingpage from './Components/LandingPage/Landingpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
 
  return (
    
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          
          <Route exact path='/landing' element={<LandingPageNav/>}/>
          <Route exact path='/landingPage' element={<Landingpage/>} />
    

        </Routes>
     </BrowserRouter>
   
    
  
  )
}

export default App

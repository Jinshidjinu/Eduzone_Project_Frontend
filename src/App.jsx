import './App.css'

import { BrowserRouter } from 'react-router-dom';
import axiosInstance from './config/axiosConfig';
import { useEffect, useState } from 'react';
import UserRouter from './Router/userRouter';

const  App = () => {

  const [message,setMessage] = useState('')

    useEffect(() => {
        axiosInstance.get('/hello')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
       },[]);


  return (
   <div>
    
      <BrowserRouter>
        <UserRouter/>
          {/* <Route exact path='/hello' element={<Sample/>} /> */}
     </BrowserRouter>
   </div>
   
  )
}

export default App

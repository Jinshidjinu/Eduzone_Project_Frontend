import { configureStore } from "@reduxjs/toolkit";
import  authreducer from '../Reducer/Reducer'



const store = configureStore({

    reducer:{
       general : authreducer,
    }
})

export default store
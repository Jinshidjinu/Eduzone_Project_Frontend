import {createSlice} from '@reduxjs/toolkit'



const initialState ={
  AuthstoreToken : localStorage.getItem("studentToken") || "",
  studnetId: ''

}

export const AuthSlice = createSlice({
  name:"Authentication",
  initialState,
  reducers:{
   
    setStudentToken :(state,{payload})=>{
      state.AuthstoreToken =payload.accessToken
      localStorage.setItem("studentToken",payload.accessToken)
      state.studnetId = payload?.response?._id
    },
    setStudentNewToken :(state,action)=>{
        state.AuthstoreToken = action.payload
        localStorage.setItem("studentToken",action.payload)
      
    } 
  }
})

export const { setStudentToken ,setStudentNewToken} = AuthSlice.actions;
export default AuthSlice.reducer
import {useDispatch} from 'react-redux'
import axiosInstance from '../config/axiosConfig'
import { setStudentNewToken } from '../Redux/Reducer/Reducer';


function StudentRefreshToken() {
    const dispatch = useDispatch();
    const refreshToken =async  ()=>{
        try {
            const response = await axiosInstance.get('/students/auth/StudentToken')
            const newAccessToken = response?.data?.refreshToken
            dispatch(setStudentNewToken(newAccessToken))
            return newAccessToken
        } catch (error) {
            console.log(error, "axios error");
            
        }

    }
    return refreshToken

}

export default StudentRefreshToken
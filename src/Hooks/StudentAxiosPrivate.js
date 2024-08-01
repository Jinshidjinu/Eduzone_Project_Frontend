import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import StudentRefreshToken from "./StdntRefreshToken";


function StudentAxiosPrivate() {
  const { AuthstoreToken } = useSelector((state) => state.general);
  const refreshToken = StudentRefreshToken();

  const axiosPrivate = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
  });

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config?.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${AuthstoreToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );  
   
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          // Make a new request using the original configuration
          return axios(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [ refreshToken]);
  return axiosPrivate;
}
export default StudentAxiosPrivate;
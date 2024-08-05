import axiosInstance from "../../config/axiosConfig"
import { useEffect, useState } from "react"

const UsersList = () => {
  const [users, setUsers] = useState([]);


useEffect(() => {
const StudentDatas =async () =>{
   try {
      const response = await axiosInstance.get('/admin/auth/userdetails')
      setUsers(response.data)
      console.log(response.data,'jdffhfdj');
      
   } catch (error) {
    console.error('Error fetching users data:', error);
   }
}
StudentDatas()
}, []);
  return (
        <div className='flex-1 p-5 flex  items-start'>
          <div className='w-full  overflow-x-auto mt-4'>
            <table className='table-auto border-collapse w-full'>
              <thead>
                <tr className="bg-slate-600 text-white">
                  <th className='px-4 py-2'>ID</th>
                  <th className='px-4 py-2'>Name</th>
                  <th className='px-4 py-2'>Email</th>
                  <th className='px-4 py-2'>Phone</th>
                  <th className='px-4 py-2'>Subject</th>
                  <th className='px-4 py-2'>Qualification</th>
                  <th className='px-4 py-2'>Edit</th>
                  <th className='px-4 py-2'>Delete</th>
                </tr>
              </thead>
              <tbody>
            {users.map(user => (
              <tr key={user.id} className="bg-white">
                <td className='px-4 py-2'>{user._id}</td>
                <td className='px-4 py-2 text-center'>{user.name}</td>
                <td className='px-4 py-2 text-center'>{user.email}</td>
                <td className='px-4 py-2 text-center'>{user.phone}</td>
                <td className='px-4 py-2 text-center'>{user.subject}</td>
                <td className='px-4 py-2 text-center'>{user.qualification}</td>
                <td className='px-4 py-2 text-center'>
                  <button className='bg-green-800 w-[60px] rounded-md text-white'>Edit</button>
                </td>
                <td className='px-4 py-2 text-center'>
                  <button className='bg-red-800 w-[50px] rounded-md text-white'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
          </div>
        </div>
  )
}

export default UsersList
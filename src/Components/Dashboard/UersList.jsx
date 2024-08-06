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
}, [])

 const handleBlockandUnblock = async (id) =>{
  try {
    const response = await axiosInstance.post(`/admin/auth/studentsBlock/${id}`)
    setUsers(users.map(user => 
      user._id === id ? {...user,status:response.data.student.status}:user
    ));
  } catch (error) {
    console.error('Error updating user status:', error);
  }
 }

  const handleDelete = async (id) =>{
            try {
              const response = await axiosInstance.post(`/admin/auth/studentDelete/${id}`)
              console.log(response); 
            } catch (error) {
              console.error('Error updating user status:', error);
            }  
  }

  return (
        <div className='flex-1 p-5 flex  items-start'>
          <div className='w-full  overflow-x-auto mt-4'>
            <table className='table-auto border-collapse w-full'>
              <thead>
                <tr className="bg-slate-600 text-white">
                  <th className='px-4 py-2'>No</th>
                  <th className='px-4 py-2'>Name</th>
                  <th className='px-4 py-2'>Email</th>
                  <th className='px-4 py-2'>Phone</th>
                  <th className='px-4 py-2'>Subject</th>
                  <th className='px-4 py-2'>Qualification</th>
                  <th className='px-4 py-2'>Status</th>
                  <th className='px-4 py-2'>Delete</th>
                </tr>
              </thead>
              <tbody>
            {users.map((user,index) => (
              <tr key={user.id} className="bg-white">
                <td className='px-4 py-2'>{index + 1}</td>
                <td className='px-4 py-2 text-center'>{user.name}</td>
                <td className='px-4 py-2 text-center'>{user.email}</td>
                <td className='px-4 py-2 text-center'>{user.phone}</td>
                <td className='px-4 py-2 text-center'>{user.subject}</td>
                <td className='px-4 py-2 text-center'>{user.qualification}</td>
                <td className='px-4 py-2 text-center'>
                <div
                    onClick={() => handleBlockandUnblock(user._id)}
                    className={`cursor-pointer w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
                      user.status === "blocked" ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                        user.status === "blocked" ? "translate-x-0" : "translate-x-6"
                      }`}
                    />
                  </div>
                </td>
                <td className='px-4 py-2 text-center'>
                  <button className='bg-red-800 w-[50px] rounded-md text-white' onClick={()=> handleDelete(user._id)}>Delete</button>
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
import { useEffect, useState } from "react"
import axiosInstance from "../../config/axiosConfig"
import { MdMovieEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";


const VideosList = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        const videoslisting = async () =>{
            try {
                const response =  await axiosInstance.get('/admin/auth/videosdetails')
                setVideos(response.data)
            } catch (error) {
                console.error('Error fetching users data:', error);
            }
        }
        videoslisting()

    },[])

    const handleDelete = async (id) => {
        console.log(id, 'id');
    
        try {
            const response = await axiosInstance.post(`/admin/auth/videoDelete/${id}`);
            console.log(response.data, 'deleted');
        } catch (error) {
            console.error('Delete Error status:', error);
        }
    }

  return (
    <div className='flex-1 p-5 flex  items-start'>
    <div className='w-full  overflow-x-auto mt-4'>
      <table className='table-auto border-collapse w-full'>
        <thead>
          <tr className="bg-slate-600 text-white">
            <th className='px-4 py-2'>No</th>
            <th className='px-4 py-2'>Title</th>
            <th className='px-4 py-2'>Description</th>
            <th className='px-4 py-2'>VideoPath</th>
            <th className='px-4 py-2'>Edit</th>
            <th className='px-4 py-2'>Delete</th>
          </tr>
        </thead>
        <tbody>
        {videos.map((details,index)=>(
        <tr key={details.id}  className="bg-white">
          <td className='px-4 py-2'>{index + 1}</td>
          <td className='px-4 py-2 text-center'>{details.title}</td>
          <td className='px-4 py-2 text-center'>{details.description}</td>
          <td className='px-4 py-2 text-center'>{details.videoPath}</td>
          <td className='px-4 py-2 text-center'><MdMovieEdit className="text-3xl text-green-700"/></td>
          <td className='px-4 py-2 text-center'>
             <TiDelete className="text-3xl text-red-600" onClick={()=> handleDelete(details._id)}/>
          </td>
        </tr>
          ))}
    </tbody>
      </table>
    </div>
  </div>
  )
}

export default VideosList
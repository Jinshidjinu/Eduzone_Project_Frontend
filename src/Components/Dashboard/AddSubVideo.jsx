import { useState } from 'react';
import Button from '../Button/Button';
import axiosInstance from '../../config/axiosConfig';


const AddSubVideo = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        videoFile: null
    });

    const { title, description, videoFile } = formData;
    const [videoPreview, setVideoPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState('');
    
    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: files ? files[0] : value
        }));

        if (id === "videoFile" && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);
            setVideoPreview(fileUrl);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !videoFile) {
            alert('Please fill in all fields and select a video file.');
            return;
        }

        const data = new FormData();
        data.append('title', title);
        data.append('description', description);
        data.append('video', videoFile);

        try {
            setIsLoading(true);
            const response = await axiosInstance.post('/admin/auth/addvideos', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response) {
                console.log('Success:', response.data);
                alert("happiness")
                // Reset form
                setFormData({
                    title: '',
                    description: '',
                    videoFile: null
                });
                setVideoPreview(null);
            }
        }  catch (error) {
            console.log(error, "show");
            setErrors(error.response.data.err || error.response.data.error);
          }
    };

    return (
        <div className="container mx-auto h-[100vh] px-4 py-8 flex items-center flex-col">
            <h1 className="text-2xl font-bold mb-6 text-gray-700">Add New Video</h1>
            <form onSubmit={handleSubmit} className="max-w-lg">
            {errors ? (
                             <p className='text-red-600 text-sm mb-2'>{errors}</p>
                        ): "" }
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="videoFile" className="block text-gray-700 font-bold mb-2">
                        Choose Video File
                    </label>
                    <input
                        type="file"
                        id="videoFile"
                        accept="video/*"
                        onChange={handleChange}
                        className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {videoPreview && (
                    <div className="mb-4">
                        <h2 className="text-gray-700 font-bold mb-2">Video Preview</h2>
                        <video
                            src={videoPreview}
                            controls
                            className="w-[400px] h-[200px] border border-gray-300 rounded-md"
                        />
                    </div>
                )}
                <Button 
                    content={isLoading ? "Uploading..." : "Upload Video"} 
                    variant="addButtons" 
                    disabled={isLoading}
                />
            </form>
        </div>
    );
};

export default AddSubVideo;
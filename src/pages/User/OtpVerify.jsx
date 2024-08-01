
import  { useState, useRef, useEffect } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OtpVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const { email } = useParams();
  console.log(email, "mail id");

  const navigate = useNavigate();
  const [errors, setErrors] = useState('');
  
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    console.log('Submitting OTP:', otpString);
    try {
      const response = await axiosInstance.post('/students/auth/verifyOtp',{email, otpString });
      console.log('Server response', response.data);
      if (response) {
        navigate('/')
      }
    } catch (error) {
      console.log('Error verifying OTP', error);
      setErrors(error.response.data.err || error.response.data.error );
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify Your Email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We&apos;ve sent a code to your email. Please enter it below.
        </p>
      </div>
      <div className="mt-8 max-w-md w-full mx-auto">
      {errors ? (
        <p className='text-red-600 text-md text-center mb-2'>{errors}</p>
      ) : null}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="otp" className="sr-only">
                OTP
              </label>
              <div className="flex justify-between space-x-2">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    ref={inputRefs[index]}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full h-12 sm:h-16 text-2xl sm:text-3xl text-center font-semibold border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
                  />
                ))}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Verify
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Didn&apos;t receive the code?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => console.log('Resend OTP')}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default OtpVerify;
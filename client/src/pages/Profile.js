import React, {useState} from 'react';
import avater from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';


const Profile = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile]=useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password:''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
     values = await Object.assign(values, {profile: file || ''})
     console.log(values);
    }
  })

  const toggleFIeld = ()=>{
    setShowPassword(!showPassword);
  }

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }
  return (
    <div className='flex justify-center items-center w-[100%] h-screen'>
      {/* This is where the errors will show in this page  */}
      <Toaster position='top-center' reverseOrder={false} ></Toaster>

      <div className="glass">
        <h1 className=" text-black font-black text-3xl text-center mt-10">Register</h1>
        <p className="mt-5     text-gray-400 text-xs align-middle text-center px-[25%]"> Happy to join us.</p>
       
      <form action="" onSubmit={formik.handleSubmit} className="">
        
        <label htmlFor='profile'>
        <img src={file||avater} alt=""  className='w-[25%] mx-auto my-5 border border-white shadow-md rounded-[100%]'/>
        </label>
        <input onChange={onUpload} type="file" className="hidden" id='profile' name='profile'  />

      <div className="flex flex-col justify-center items-center space-y-3">
      <input {...formik.getFieldProps('email')} type="text" placeholder='Email' className="textbox" />
      <input {...formik.getFieldProps('username')} type="text" placeholder='Username' className="textbox" />
      <input {...formik.getFieldProps('password')} type="text" placeholder='Password' className="textbox" />
       <button type='submit' className='btn'>Register</button>
      </div>

      </form>
       <p className={showPassword ? "hidden":"text-center my-5 text-gray-500 text-sm"}>Already Register? <a href="/login" className=" text-red-600">Login Now</a></p>

      </div>
    </div>

  )
}

export default Profile
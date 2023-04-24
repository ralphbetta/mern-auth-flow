import React, {useState} from 'react';
import profile from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate, passwordValidate } from '../helper/validate';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: !showPassword? usernameValidate:passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      if(values.username != '' && !showPassword){
        toggleFIeld();
      }else if(values.password != ''){
        console.log(values);
        console.log(showPassword)
      }
    


    }
  })

  const toggleFIeld = ()=>{
    setShowPassword(!showPassword);
  }
  return (
    <div className='flex justify-center items-center w-[100%] h-screen'>
      {/* This is where the errors will show in this page  */}
      <Toaster position='top-center' reverseOrder={false} ></Toaster>

      <div className="glass">
        <h1 className=" text-black font-black text-3xl text-center mt-10">Hello Again!</h1>
        <p className="mt-5     text-gray-400 text-xs align-middle text-center px-[25%]"> Explore more by connecting with us.</p>
        <img src={profile} alt=""  className='w-[30%] mx-auto my-7 border border-white shadow-md rounded-[100%]'/>
      <form action="" onSubmit={formik.handleSubmit} className="">
  
      <div className={showPassword ? "hidden":"flex flex-col justify-center items-center space-y-5"}>
      <input {...formik.getFieldProps('username')} type="text" placeholder='Username' className="textbox" />
       <button type='submit' className='btn'>Let's Go</button>
      </div>

      <div className={!showPassword ? "hidden":"flex flex-col justify-center items-center space-y-5"}>
      <input {...formik.getFieldProps('password')} type="password" placeholder='Password' className="textbox" />
       <button type='submit' className='btn'>Let's Go</button>
      </div>

      </form>
       <p className={showPassword ? "hidden":"text-center my-5 text-gray-500 text-sm"}>Not a Member? <a href="/register" className=" text-red-600">Register Now</a></p>
       <p className={!showPassword ? "hidden":"text-center my-5 text-gray-500 text-sm"}>Forgot Password? <a href="/register" className=" text-red-600">Recover Now</a></p>

      </div>
    </div>
  )
}

export default Login
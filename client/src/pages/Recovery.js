import React, {useState} from 'react';
import profile from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate, passwordValidate } from '../helper/validate';


const Recovery = () => {

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
        <h1 className=" text-black font-black text-3xl text-center mt-10">Recovery</h1>
        <p className="mt-5 text-gray-400 text-xs align-middle text-center px-[25%]"> Enter OTP to recover password.</p>

        <p className="mt-12 mb-2 text-gray-400 text-[10px] align-middle text-center px-[10%]"> Enter 6 digit OTP sent to your email address</p>
      <form action="" onSubmit={formik.handleSubmit} className="">
      <div className="flex flex-col justify-center items-center space-y-5">
      <input {...formik.getFieldProps('username')} type="numbr" placeholder='_  _  _  _' className="textbox text-center" />
       <button type='submit' className='btn'>Recover</button>
      </div>

      </form>
       <p className="text-center my-5 text-gray-500 text-xs">Can't get OTP? <a href="/register" className=" text-red-600">Resend</a></p>

      </div>
    </div>
  )
}

export default Recovery
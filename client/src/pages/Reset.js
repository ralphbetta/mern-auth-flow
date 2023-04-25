import React, {useState} from 'react';
import profile from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidate } from '../helper/validate';


const Reset = () => {

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validate: resetPasswordValidate,
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
        <h1 className=" text-black font-black text-3xl text-center mt-10">Reset</h1>
      <form action="" onSubmit={formik.handleSubmit} className="">
  
      <p className="text-gray-400 text-xs text-center"> Enter new password</p>


      <div className="flex flex-col justify-center items-center space-y-5 mt-14">
      <input {...formik.getFieldProps('password')} type="password" placeholder='Password' className="textbox" />
      <input {...formik.getFieldProps('confirm_password')} type="password" placeholder='Confirm Password' className="textbox my-0" />
      </div>

      <div className=' flex justify-center mt-5'>
      <button type='submit' className='btn'>Reset</button>
      </div>

      </form>
     
      </div>
    </div>
  )
}

export default Reset
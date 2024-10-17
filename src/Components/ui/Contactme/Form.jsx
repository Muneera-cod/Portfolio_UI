import React from 'react'
import { useFormik } from 'formik';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Form() {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
        },
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
         toast("Registered successfully")
        },
      });
  return (
    <>
    <ToastContainer/>   
    <form  onSubmit={formik.handleSubmit} className='flex flex-col  gap-[15px] w-full'>
   
       
    <div className='flex sm:flex-col md:flex-row gap-[15px]'>
      <input value={formik.values.name}  onChange={formik.handleChange} placeholder='Name*' className='rounded-[5px] p-[15px] sm:w-full md:w-1/2'></input>
      <input value={formik.values.email}  onChange={formik.handleChange} placeholder='Email Address*' className='rounded-[5px] p-[15px] sm:w-full md:w-1/2'></input>
    </div>
    <input placeholder='How can we help you?' className='rounded-[5px] p-[15px]'></input><p></p>
    <textarea placeholder='How can we help you?' rows={4} className='rounded-[5px] p-[15px]'></textarea>
    <div className='flex gap-[8px] items-center'>
      <input type='checkbox' className='w-[15px] h-[15px] rounded-[3px]'></input>
      <p className='text-[14px] font-[400] leading-[14px] text-[#E9EFFF]'>By submitting, i’m agreed to the <a className='underline'>Terms & Conditons</a></p>
    </div>
    <input type='submit' value='Register now' className='sm:w-full lg:w-1/2 bg-[#00489A] rounded-[50px] py-[17px] px-[33px] font-[700] text-[20px] leading-[20px] text-white'/>
 </form></>
  )
}

export default Form
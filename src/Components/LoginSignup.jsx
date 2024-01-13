import React, { useState } from 'react'

import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

const LoginSignup = () => {

  const [action,setAction] = useState("Login")

  return (
    <div className='flex flex-col m-auto mt-24 bg-white pb-8 w-[600px] rounded-lg'>
        <div className='flex flex-col items-center gap-2 w-full mt-8'>
            <div className='text-blue-700 text-5xl font-extrabold'>{action}</div>
            <div className='w-16 h-[6px] bg-blue-700 rounded-lg mt-2'></div>
        </div>
        <div className='mt-14 flex flex-col gap-6'>
          {action==="Login" ? <div></div> : <div className='flex items-center m-auto w-[480px] h-20 bg-slate-200 rounded-md'>
               <img className='my-0 mx-7' src={user_icon} alt="" /> 
               <input className='h-12 w-[400px] bg-transparent text-[#797979] text-lg outline-none font-medium' placeholder='Name' type="text" />
            </div>}
            <div className='flex items-center m-auto w-[480px] h-20 bg-slate-200 rounded-md'>
               <img className='my-0 mx-7' src={email_icon} alt="" /> 
               <input className='h-12 w-[400px] bg-transparent text-[#797979] text-lg outline-none font-medium' placeholder='Email Id' type="email" />
            </div>
            <div className='flex items-center m-auto w-[480px] h-20 bg-slate-200 rounded-md'>
               <img className='my-0 mx-7' src={password_icon} alt="" /> 
               <input className='h-12 w-[400px] bg-transparent text-[#797979] text-lg outline-none font-medium' placeholder='Password' type="password" />
            </div>
        </div>
        {action==="Sign Up" ? <div></div> : <div className='pl-16 mt-7 text-[#797979] text-lg font-medium'>Forgot Password? <span className='text-blue-600 cursor-pointer font-bold hover:text-blue-900'>Click Here!</span></div>}
        <div className='flex gap-8 my-14 mx-auto'>
            <div className={action==="Login"?'bg-gray-300 text-gray-600 flex justify-center items-center w-[220px] h-[60px] rounded-full text-[19px] font-bold cursor-pointer':'flex justify-center items-center w-[220px] h-[60px] text-white bg-blue-700 rounded-full text-[19px] font-bold cursor-pointer hover:bg-blue-900'} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?'bg-gray-300 text-gray-600 flex justify-center items-center w-[220px] h-[60px] rounded-full text-[19px] font-bold cursor-pointer':'flex justify-center items-center w-[220px] h-[60px] text-white bg-blue-700 rounded-full text-[19px] font-bold cursor-pointer hover:bg-blue-900'} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Store/Store'

const Login = () => {
  const [Auth,setAuth]=useAuth()
  const navigate = useNavigate()
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const AddValue = (e) =>{
    const {name,value}=e.target
    setData({...data,[name]:value})
  }
  const SubmitHandle =(e)=>{
    e.preventDefault()
   const {email,password} = data
   if(email && password){
    if(email=='masom3456@gmail.com' && password=='MasomRana456'){
      localStorage.setItem("user",JSON.stringify(data))
      setAuth(prev=>{
        return {
          ...prev,
          user:data
        }
      })
      navigate("/admin")
    }else{
      alert("password or Email not valid")
    }
   }else{
    alert("Fill All the data")
   }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-red-800'>
        <form onSubmit={SubmitHandle} className=' w-full max-w-[400px] py-20 flex-col gap-5 p-7 bg-white rounded-lg flex justify-center items-center'>
          <div className='text-3xl pb-4'>Login</div>
            
            <input onChange={AddValue} type="email" className='px-3 w-full   py-2 border-b focus:outline-none'  name="email"  placeholder='Email Adress' />
            <input onChange={AddValue} type="password" className='px-3 w-full  py-2 border-b focus:outline-none'  name="password"  placeholder='Password' />
           <div className='w-full'>
            <button className='py-4 w-full text-xl bg-teal-500 text-white'>Login</button>
           </div>
        </form>
    </div>
  )
}

export default Login
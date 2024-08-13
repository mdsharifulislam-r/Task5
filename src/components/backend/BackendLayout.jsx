import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../Store/Store'
const BackendLayout = () => {
  const [Auth,setAuth]=useAuth()
  function Logout(){
    localStorage.removeItem("user")
    setAuth({
      ...Auth,
      user:{}
    })
    alert('logout successfull')
  }
  return (
    <>
      <div className='flex'>
        <Sidebar />
          
        <div className='flex-grow'>
          <div className='w-full h-[40px] bg-black flex justify-between px-4 items-center'>
        
            <span className='text-white'>Welcome to Dashboard</span>
           <div className='flex items-center gap-3'>
            <Link to="/" className='text-white'>Visit Frontend</Link> 
            <span className='text-white cursor-pointer' onClick={Logout}>Logout</span>
           </div>
          </div>
           
          <Content>
           <div className='container-admin'>
            <Outlet />
           </div>
          </Content>
        </div>
      </div>
    </>
  )
}

export default BackendLayout
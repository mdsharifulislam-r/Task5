import React from 'react'
import Login from '../../pages/backend/Login'
import { Outlet } from 'react-router-dom'
import BackendLayout from './BackendLayout'
import { useAuth } from '../../Store/Store'

export default function AuthAdminLogin() {
    const [Auth,setAuth]=useAuth()
   
    const admin = JSON.parse(localStorage.getItem("admin"))
  return !Auth?.user?.email?<Login/>:<BackendLayout><Outlet/></BackendLayout>
}

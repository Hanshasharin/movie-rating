import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { Outlet } from 'react-router-dom'
const AdminRoot = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
      <hr/>
      <footer>COPY RIGHT</footer>
    </>
  )
}

export default AdminRoot

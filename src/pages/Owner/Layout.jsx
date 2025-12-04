import React from 'react'
import NavbarOwner from '../../compponents/Owner/NavbarOwner'
import SideBar from '../../compponents/Owner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <NavbarOwner></NavbarOwner>
      <div className="flex">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>

    </div>
  )
}

export default Layout
import React, { useState } from 'react'
import Navbar from './compponents/Navbar'
import { Route,Routes,useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { CarDetails } from './pages/CarDetails'
import { Cars } from './pages/Cars'
import { MyBooking } from './pages/MyBooking'
import { Footer } from './compponents/Footer'
import Layout from './pages/Owner/Layout'
import Dashboard from './pages/Owner/Dashboard'
import AddCar from './pages/Owner/AddCar'
import ManageCars from './pages/Owner/ManageCars'
import ManageBooking from './pages/Owner/ManageBooking'

const App = () => {
  const [showLogin,setShowLogin]= useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/car-details/:id' element={<CarDetails/>}></Route>
      <Route path="/cars/car-details/:id" element={<CarDetails />} />
      <Route path='/cars' element={<Cars/>}></Route>
      <Route path='/my-bookings' element={<MyBooking/>}></Route>

      <Route path='/owner' element={<Layout></Layout>} >
       <Route index element={<Dashboard/>}/>
       <Route path='add-car' element={<AddCar/>}/>
       <Route path='manage-car' element={<ManageCars/>}/>
       <Route path='manage-bookings' element={<ManageBooking/>}/>
      </Route>

      </Routes>
        
        {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App
import React, { useState } from 'react'
import Navbar from './compponents/Navbar'
import { Route,Routes,useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { CarDetails } from './pages/CarDetails'
import { Cars } from './pages/Cars'
import { MyBooking } from './pages/MyBooking'

const App = () => {
  const [showLogin,setShowLogin]= useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/car-details/:id' element={<CarDetails/>}></Route>
      <Route path='/cars' element={<Cars/>}></Route>
      <Route path='/my-booking' element={<MyBooking/>}></Route>

      </Routes>
    </>
  )
}

export default App
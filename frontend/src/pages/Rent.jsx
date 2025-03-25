import React from 'react'
import Header from '../components/RentHeader'
import { Route,Routes } from 'react-router-dom'

import Carbooking from '../components/Carbooking';
import CarRentHome from '../components/CarRentHome';
import CarDetailsPage from '../components/carDetails';

const Rent = () => {
  return (
    <div>
        <Header></Header>
        <Routes>
         <Route path='/' element={<CarRentHome/>}/>
         <Route path='/Cardetails' element={<CarDetailsPage/>}/>
         <Route path='/booking' element={<Carbooking/>}/>
        </Routes>
      
    </div>
  )
}

export default Rent

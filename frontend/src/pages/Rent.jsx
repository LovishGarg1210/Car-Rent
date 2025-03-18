import React from 'react'
import Header from '../components/RentHeader'
import { Route,Routes } from 'react-router-dom'
import CarDetails from '../components/CarDetails';
import Carbooking from '../components/Carbooking';

const Rent = () => {
  return (
    <div>
        <Header></Header>
        <Routes>
         <Route path='/' element={<CarDetails/>}/>
         <Route path='/booking' element={<Carbooking/>}/>
        </Routes>
      
    </div>
  )
}

export default Rent

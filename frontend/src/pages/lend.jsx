import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Lendheader from '../components/LendHeader'
import CarLendHome from '../components/CarLendHome'
import CarLendPage from '../components/CarLendPage'
import LendedCars from '../components/CarLendedPage'
import CarLendBookings from '../components/CarLendBookings'


const Lend = () => {
  return (
    <div>
        <Lendheader></Lendheader>
        <Routes>
         <Route path='/' element={<CarLendHome/>}/>
         <Route path='/CarLend' element={<CarLendPage/>}/>
         <Route path='/CarLended' element={<LendedCars/>}/>
         <Route path='/Bookings' element={<CarLendBookings/>}/>
         {/* <Route path='/CarLend' element={<CarLend/>}/>
         <Route path='/CarLended' element={<CarLended/>}/>
         <Route path='/Bookings' element={<Bookings/>}/>
         <Route path='/Payments' element={<Payments/>}/> */}
        
        </Routes>
    
      
    </div>
  )
}

export default Lend

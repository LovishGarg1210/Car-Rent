// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';

import { Routes,Route } from 'react-router-dom';
import Register from './pages/Register';

import Home from './pages/home.jsx';
import SignIn from './pages/SignIn.jsx';
import Rent from './pages/Rent.jsx';
import { useLocation } from 'react-router-dom';


function App() {
  const location=useLocation();
const isRent = location.pathname.startsWith('/Rent');


  return (
    <div className="min-h-screen">
     {!isRent && <Navbar />}
      <Routes> 
      <Route path='/' element={<Home/>}/>
      {/* <Route path='*' element={<Navigate to='/' replace/>}/> */}

        <Route path='/Register' element={<Register/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Rent/*' element={<Rent/>}/>


      </Routes>
     
      
    </div>
  );
}

export default App;

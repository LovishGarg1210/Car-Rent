import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/home.jsx';
import SignIn from './pages/SignIn.jsx';
import Rent from './pages/Rent.jsx';
import { useLocation } from 'react-router-dom';
import Lend from './pages/lend.jsx';

function App() {
  const location = useLocation();
  
  // Check if the path is either '/Rent' or '/Lend'
  const isSpecialRoute = location.pathname.startsWith('/Rent') || location.pathname.startsWith('/Lend');

  return (
    <div className="min-h-screen">
      {/* Render Navbar only if it's not '/Rent' or '/Lend' */}
      {!isSpecialRoute && <Navbar />}
      {!isSpecialRoute &&  <div className='md:hidden h-16'> </div>}
     
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Rent/*' element={<Rent />} />
        <Route path='/Lend/*' element={<Lend />} />
      </Routes>
    </div>
  );
}

export default App;

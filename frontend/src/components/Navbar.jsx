
// components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">DriveEase</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/"  className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
            <a href="#cars" onClick={(e)=>{navigate("/")}} className="text-gray-800 hover:text-blue-600 font-medium">Cars</a>
            <a href="#lend" onClick={(e)=>{navigate("/")}} className="text-gray-800 hover:text-blue-600 font-medium">Lend Your Car</a>
            <a href="#how" onClick={(e)=>{navigate("/")}} className="text-gray-800 hover:text-blue-600 font-medium">How It Works</a>
            <a href="#faq" onClick={(e)=>{navigate("/")}} className="text-gray-800 hover:text-blue-600 font-medium">FAQ</a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <button onClick={(e)=>{navigate("/SignIn")}} className="px-4 py-2 text-blue-600 font-medium">Sign In</button>
            <button onClick={(e)=>{navigate("/Register")}} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Register</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <a href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">Home</a>
          <a href="#cars" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">Cars</a>
          <a href="#lend" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">Lend Your Car</a>
          <a href="#how" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">How It Works</a>
          <a href="#faq" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">FAQ</a>
          <div className="flex flex-col space-y-2 pt-2">
            <button className="px-4 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg">Sign In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

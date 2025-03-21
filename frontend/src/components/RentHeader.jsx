// components/Header.jsx
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react'; // Import Search icon
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [search, setSearch] = useState(''); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Toggle mobile menu state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);  // Update search query on input change
  };

  const handleRentCar = () => {
    const email = localStorage.getItem('email');  // Check if email is stored in localStorage
    const token = localStorage.getItem('token');  // Check if token is stored in localStorage

    if (email && token) {
      navigate('/rent-a-car');  // Navigate to Rent a Car page if both are available
    } else {
      navigate('/SignIn');  // Otherwise, navigate to login page
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          CarRental
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg w-full max-w-md">
          <Search className="text-gray-500 h-5 w-5" />  {/* Search Icon */}
          <input
            type="text"
            onInput={handleChange}
            placeholder="Search for cars, locations, etc..."
            className="bg-transparent focus:outline-none w-full text-gray-700"
          />
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 ml-6">
          <a href="#cardetails" onClick={() => navigate("/Rent/")} className="text-gray-700 hover:text-blue-500 font-medium">Car Details</a>
          <Link to="/Rent/booking" className="text-gray-700 hover:text-blue-500 font-medium">Booking</Link>
          <Link to="#payment" className="text-gray-700 hover:text-blue-500 font-medium">Payment</Link>
          <Link to="#booking-history" className="text-gray-700 hover:text-blue-500 font-medium">Booking History</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>

        {/* Rent a Car Button */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={handleRentCar}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Rent a Car
          </button>
        </div>
      </div>

      {/* Mobile Search and Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {/* Search Bar for Mobile */}
          <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg w-full max-w-md mx-auto">
            <Search className="text-gray-500 h-5 w-5" />  {/* Search Icon */}
            <input
              type="text"
              onInput={handleChange}
              placeholder="Search for cars, locations, etc..."
              className="bg-transparent focus:outline-none w-full text-gray-700"
            />
          </div>

          {/* Navigation Links for Mobile */}
          <nav className="flex flex-col items-center space-y-4 mt-4">
            <a href="#cardetails" onClick={() => { navigate("/Rent/"); toggleMobileMenu(); }} className="text-gray-700 hover:text-blue-500 font-medium">Car Details</a>
            <Link to="/Rent/booking" className="text-gray-700 hover:text-blue-500 font-medium" onClick={toggleMobileMenu}>Booking</Link>
            <Link to="#payment" className="text-gray-700 hover:text-blue-500 font-medium" onClick={toggleMobileMenu}>Payment</Link>
            <Link to="#booking-history" className="text-gray-700 hover:text-blue-500 font-medium" onClick={toggleMobileMenu}>Booking History</Link>
          </nav>

          {/* Rent a Car Button for Mobile */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleRentCar}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Rent a Car
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

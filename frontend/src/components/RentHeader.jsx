// components/Header.jsx
import React from 'react';
import { ChevronDown, Search } from 'lucide-react'; // Import Search icon
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Function to navigate to Rent a Car page
  const handleRentCar = () => {
    const email = localStorage.getItem('email');  // Check if email is stored in localStorage
    const token = localStorage.getItem('token');  // Check if token is stored in localStorage

    if (email && token) {
      navigate('/rent-a-car');  // Navigate to Rent a Car page if both are available
    } else {
      navigate('/SignIn');  // Otherwise, navigate to login page
    }
  };

  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          CarRental
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg w-full max-w-md">
          <Search className="text-gray-500 h-5 w-5" />  {/* Search Icon */}
          <input
            type="text"
            placeholder="Search for cars, locations, etc..."
            className="bg-transparent focus:outline-none w-full text-gray-700"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 ml-6">
         
          <a href="/Rent/" className="text-gray-700 hover:text-blue-500 font-medium">Car Details</a>
          <a href="/Rent/booking" className="text-gray-700 hover:text-blue-500 font-medium">Booking</a>
          <a href="#payment" className="text-gray-700 hover:text-blue-500 font-medium">Payment</a>
          <a href="#booking-history" className="text-gray-700 hover:text-blue-500 font-medium">Booking History</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>

        {/* Rent a Car Button */}
        <div className="flex space-x-4">
          <button
            onClick={handleRentCar}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Rent a Car
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

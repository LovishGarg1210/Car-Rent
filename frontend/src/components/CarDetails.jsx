import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

const CarDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const [carData, setCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);
  const [loading,setloading]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setloading(true);
        const response = await axios.get('https://car-rental-backend-1-7ej4.onrender.com/api/cars');
        const data = response.data;
        setCarData(data);
        setloading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCarData();
  }, []);

  const handleBookNow = (car) => {
    const token = localStorage.getItem('token');
    if (token) {
      setSelectedCar(car);
      setIsModalOpen(true);
    } else {
      navigate('/Register');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStartDate('');
    setEndDate('');
   setTotalPrice(0);
    setSelectedCar(null);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    if (startDate && endDate && selectedCar) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = (end - start) / (1000 * 60 * 60 * 24) + 1; // Calculate days (inclusive)
      if (days > 0) {
        setTotalPrice(days * selectedCar.pricePerDay);
      } else {
        setTotalPrice(0);
      }
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [startDate, endDate]);

  const handleConfirmBooking = async () => {
    const token = localStorage.getItem('token'); 
    const userId=localStorage.getItem('userId')// Assuming you have a token for authentication
    if (!token) {
      console.error('User not authenticated');
      return;
    }
  
    const bookingData = {
      userId,
      carId: selectedCar._id,
      startDate,
      endDate,
      totalPrice,
      
    };
  
    try {
      const response = await axios.post(
      ' https://car-rental-backend-1-7ej4.onrender.com/api/bookings', // Replace with your backend API endpoint
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token for authentication
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 201) {
        console.log('Booking Confirmed:', response.data);
        alert('Booking successful!');
      } else {
        console.error('Error during booking:', response.status, response.data);
        alert('Booking failed!');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('There was an error confirming the booking.');
    }
  
    handleCloseModal();
  };

 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-lg font-bold text-blue-600">Loading...</h1>
        </div>
      </div>
    </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 id="cardetails" className="text-3xl font-bold text-gray-800 mb-6">Available Cars</h1>
      {error && <div>Error: {error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carData.map((car) => (
          <div
            key={car._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
              <span
                className={`${
                  car.availability ? 'text-green-600' : 'text-red-600'
                } font-semibold`}
              >
                {car.availability ? 'Available' : 'Not Available'}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{car.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold">Rs{car.pricePerDay}/day</span>
              {car.availability ? (
                <button
                  onClick={() => handleBookNow(car)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
                >
                  Book Now
                </button>
              ) : (
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Not Available
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Book Your Car</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Price per Day</label>
              <input
                type="text"
                value={selectedCar.pricePerDay}
                disabled
               
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>
           
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Total Price</label>
              <input
                type="text"
                value={`$${totalPrice}`}
                readOnly
                className="mt-1 p-2 block w-full border rounded-md bg-gray-100"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;

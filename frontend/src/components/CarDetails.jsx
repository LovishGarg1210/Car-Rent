import React, { useState, useEffect } from 'react';
import '../App.css';
import LuxaryCar from '../../public/image/luxarycar.jpg';

const CarDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [Time, setTime] = useState('');
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch('https://car-rental-backend-1-7ej4.onrender.com/api/cars'); 
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data = await response.json();
        setCarData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCarData();
  }, []);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStartDate('');
    setEndDate('');
    setTime('');
  };

  const handleConfirmBooking = () => {
    console.log('Booking Confirmed:', startDate, endDate, Time);
    handleCloseModal();
  };

  if (loading) {
    return <div>Loading car data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="parallax1"></div>
      <div className='marquee'>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to DriveEase</h1>
      </div>
      <div className="parallaxbox">
        <div className="parallax-container">
          <div className="parallax-left">
            <h1 className="parallax-title">Your Dream Car Awaits</h1>
            <p className="parallax-subtitle">Unbeatable Prices, Unmatched Luxury</p>
            <a href="#cars" className="parallax-btn">Explore Now</a>
          </div>
          <div className="parallax-right">
            <img src={LuxaryCar} alt="Luxury Car" className="parallax-image" />
          </div>
        </div>
      </div>
      <div className="parallax2"></div>

      <h1 id='cardetails' className="text-3xl font-bold text-gray-800 mb-6">Available Cars</h1>
      
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
                  car.availability === 'Available'
                    ? 'text-green-600'
                    : 'text-red-600'
                } font-semibold`}
              >
                {car.availability}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{car.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold">{car.pricePerDay}</span>
              {car.availability === 'Available' ? (
                <button
                  onClick={handleBookNow}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Book Your Car</h3>

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
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                value={Time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md"
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

export default CarDetails;

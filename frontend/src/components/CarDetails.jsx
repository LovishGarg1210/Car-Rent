import React, { useState } from 'react';

const carData = [
  {
    id: 1,
    name: 'Tesla Model S',
    pricePerDay: '$100/day',
    imageUrl: 'data:image/jpeg;base64,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',
    description: 'The Tesla Model S is an electric sedan that offers exceptional performance, range, and luxury features.',
    availability: 'Available',
  },
  {
    id: 2,
    name: 'Ford Mustang',
    pricePerDay: '$80/day',
    imageUrl: 'data:image/jpeg;base64,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',
    description: 'The Ford Mustang is an iconic American muscle car with a powerful engine and stylish design.',
    availability: 'Booked',
  },
  {
    id: 3,
    name: 'BMW 3 Series',
    pricePerDay: '$90/day',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aVUAO32pQzPtf9CnA_CFEq-ul31yn2rfmw&s',
    description: 'The BMW 3 Series offers a perfect balance of performance, luxury, and practicality for everyday driving.',
    availability: 'Available',
  },
];

const CarDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [Time,setTime]=useState('')
  
    const handleBookNow = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setStartDate('');
      setEndDate('');
      setTime('')
    };
  
    const handleConfirmBooking = () => {
      console.log('Booking Confirmed:', startDate, endDate);
      // Handle the form submission here
      handleCloseModal();
    };
  
  return (
    <div className="container mx-auto p-4">




      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Cars</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carData.map((car) => (
          <div
            key={car.id}
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
                <button   onClick={handleBookNow} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all">
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

            {/* Start Date Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>

            {/* End Date Input */}
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
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="Time"
                value={Time}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md"
              />
            </div>

            {/* Action Buttons */}
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

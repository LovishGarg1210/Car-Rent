import React from 'react';
import { motion } from 'framer-motion'; // for animations

const LendedCars = () => {
  const lentCars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      status: 'Rented',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      status: 'Available',
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      status: 'Rented',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cars Lent by You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lentCars.map((car) => (
          <motion.div
            key={car.id}
            whileHover={{ scale: 1.05 }} // hover effect
            whileTap={{ scale: 0.95 }}   // tap effect
            className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {car.make} {car.model}
              </h2>
              {car.status === 'Rented' ? (
                <span className="text-sm text-red-500 font-bold">Rented</span>
              ) : (
                <span className="text-sm text-green-500 font-bold">Available</span>
              )}
            </div>
            <p className="text-sm mb-2">
              <strong>Year:</strong> {car.year}
            </p>
            <p className="text-sm mb-4">
              <strong>Status:</strong> {car.status}
            </p>
            <motion.button
              whileHover={{ backgroundColor: '#2563EB', scale: 1.05 }} // hover effect on button
              className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-all duration-200"
            >
              View Details
            </motion.button>
            {car.status === 'Rented' && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">75% Rented Duration</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LendedCars;

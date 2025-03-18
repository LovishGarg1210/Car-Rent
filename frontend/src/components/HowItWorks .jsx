import React from 'react';
import { Search, Calendar, Car, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Search & Compare",
      description: "Browse through our wide selection of cars and compare prices, features, and reviews."
    },
    {
      icon: <Calendar className="h-12 w-12 text-blue-600" />,
      title: "Book Your Car",
      description: "Choose your pickup and return dates, and book instantly with no hidden fees."
    },
    {
      icon: <Key className="h-12 w-12 text-blue-600" />,
      title: "Pick Up & Go",
      description: "Get the keys from our pickup location or the car owner and start your journey."
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Return & Review",
      description: "Drop off the car at the agreed location and share your experience."
    }
  ];

  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you're renting or lending, our streamlined process makes it easy to get on the road.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-4">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

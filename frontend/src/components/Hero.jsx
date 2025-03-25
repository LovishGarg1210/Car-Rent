import React, { useState, useEffect } from 'react';
import { Calendar, Car, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(0);

  // Background images for the slider
  const backgroundImages = [
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470',
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRentCar = () => {
    navigate('/Rent');
  };

  const handleLendCar = () => {
    navigate('/Lend');
  };

  // Animation variants
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              activeImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/80">
          {/* Animated particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="stars-container">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white pt-16">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 z-50">
              DriveEase
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-6 opacity-90 drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Rent or Lend - Your Journey, Your Way
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button
              onClick={handleRentCar}
              className="group bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              Rent a Car
              <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleLendCar}
              className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              Lend Your Car
              <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

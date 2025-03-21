import React, { useState, useEffect } from 'react';
import { Calendar, Car, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [carType, setCarType] = useState('');
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
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-slideUp">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100">
              DriveEase
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 opacity-90 drop-shadow-md animate-slideUp animation-delay-200">
            Rent or Lend - Your Journey, Your Way
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center animate-slideUp animation-delay-300">
            <button
              onClick={handleRentCar}
              className="group bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              Rent a Car
              <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
              Lend Your Car
              <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Search Form with Glass Effect */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-full max-w-lg md:max-w-4xl text-white border border-white/20 animate-fadeIn animation-delay-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4 md:col-span-1">
              <div className="relative group">
                <label className="text-sm font-medium block mb-1 text-blue-100">Pick-up Location</label>
                <div className="flex items-center border border-white/30 rounded-lg p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-blue-300 mr-2" />
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none text-blue-50 placeholder-blue-200/50"
                    placeholder="City, Airport, etc."
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-sm font-medium block mb-1 text-blue-100">Drop-off Location</label>
                <div className="flex items-center border border-white/30 rounded-lg p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-blue-300 mr-2" />
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none text-blue-50 placeholder-blue-200/50"
                    placeholder="Same as pick-up"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 md:col-span-1">
              <div className="relative group">
                <label className="text-sm font-medium block mb-1 text-blue-100">Pick-up Date</label>
                <div className="flex items-center border border-white/30 rounded-lg p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <Calendar className="h-5 w-5 text-blue-300 mr-2" />
                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-blue-50"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-sm font-medium block mb-1 text-blue-100">Return Date</label>
                <div className="flex items-center border border-white/30 rounded-lg p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                  <Calendar className="h-5 w-5 text-blue-300 mr-2" />
                  <input
                    type="date"
                    className="w-full bg-transparent outline-none text-blue-50"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="space-y-4">
                <div className="relative group">
                  <label className="text-sm font-medium block mb-1 text-blue-100">Car Type</label>
                  <div className="flex items-center border border-white/30 rounded-lg p-3 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                    <Car className="h-5 w-5 text-blue-300 mr-2" />
                    <select
                      className="w-full bg-transparent outline-none text-blue-50"
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                    >
                      <option value="" className="bg-blue-900 text-white">
                        All Car Types
                      </option>
                      <option value="economy" className="bg-blue-900 text-white">
                        Economy
                      </option>
                      <option value="compact" className="bg-blue-900 text-white">
                        Compact
                      </option>
                      <option value="luxury" className="bg-blue-900 text-white">
                        Luxury
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleRentCar}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center mx-auto"
            >
              Find a Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


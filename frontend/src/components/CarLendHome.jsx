import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCarSide, FaMoneyBillWave, FaShieldAlt, FaUserFriends, FaChevronRight, FaStar } from 'react-icons/fa';
import {  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CarLendHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // // Featured cars available for lending
  // const featuredCars = [
  //   {
  //     id: 1,
  //     name: "Tesla Model 3",
  //     image: "https://via.placeholder.com/800x450",
  //     owner: "Michael S.",
  //     price: 85,
  //     location: "San Francisco, CA",
  //     rating: 4.9,
  //     reviews: 52
  //   },
  //   {
  //     id: 2,
  //     name: "BMW 3 Series",
  //     image: "https://via.placeholder.com/800x450",
  //     owner: "Sarah P.",
  //     price: 95,
  //     location: "Los Angeles, CA",
  //     rating: 4.8,
  //     reviews: 37
  //   },
  //   {
  //     id: 3,
  //     name: "Audi Q5",
  //     image: "https://via.placeholder.com/800x450",
  //     owner: "David L.",
  //     price: 110,
  //     location: "Chicago, IL",
  //     rating: 4.7,
  //     reviews: 29
  //   }
  // ];

  // User success stories
  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpohbzlvf_TnIW6Ez-X8oRJiSBFSQq4fBU_A&s",
      text: "I was able to offset my car payments completely by lending my car just 8 days a month. CarLend changed my financial situation!",
      earnings: "$1,250/month"
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpohbzlvf_TnIW6Ez-X8oRJiSBFSQq4fBU_A&s",
      text: "The verification process was seamless, and I had my first booking within 24 hours of listing my car. The support team is excellent.",
      earnings: "$950/month"
    },
    {
      id: 3,
      name: "Robert Chen",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpohbzlvf_TnIW6Ez-X8oRJiSBFSQq4fBU_A&s",
      text: "As someone with two cars that were sitting idle most of the time, CarLend has turned my unused assets into a profitable side business.",
      earnings: "$1,700/month"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navigation */}
   

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 pt-20 pb-32  ">
        <div className="absolute inset-0 bg-opacity-70 overflow-hidden">
          <div className="absolute -right-96 -bottom-96 w-2/3 h-2/3 rounded-full bg-blue-400 bg-opacity-20 blur-2xl"></div>
          <div className="absolute -left-96 -top-96 w-2/3 h-2/3 rounded-full bg-indigo-400 bg-opacity-20 blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Turn Your <span className="text-yellow-300">Car</span> Into A <span className="text-yellow-300">Money-Making</span> Asset
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Join thousands of car owners earning passive income by lending their vehicles on CarLend. Get complete insurance coverage and earn up to $1,500 per month.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/Lend/CarLend" className=" cursor-pointer z-50 px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">
                  List Your Car
                </Link>
                <a href="#HOW-IT-WORKS" className=" scroll-smooth cursor-pointer z-50 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-700 transition transform hover:-translate-y-1">
                  Learn How
                </a>
              </div>
              <div className="mt-12 flex items-center">
                <div className="flex -space-x-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpohbzlvf_TnIW6Ez-X8oRJiSBFSQq4fBU_A&s" alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpohbzlvf_TnIW6Ez-X8oRJiSBFSQq4fBU_A&s" alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpohbzlvf_TnIW6Ez-X8oRJiSBFSQq4fBU_A&s" alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                      ))}
                    </div>
                    <span className="ml-2 text-white font-semibold">4.9/5</span>
                  </div>
                  <p className="text-blue-100 text-sm">From over 2,500 car owners</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">How Much Could You Earn?</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600 text-sm">Economy Car</p>
                      <p className="text-blue-600 font-bold text-2xl">$600-900</p>
                      <p className="text-gray-500 text-xs">per month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600 text-sm">SUV</p>
                      <p className="text-blue-600 font-bold text-2xl">$800-1200</p>
                      <p className="text-gray-500 text-xs">per month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600 text-sm">Luxury Car</p>
                      <p className="text-blue-600 font-bold text-2xl">$1000-1500</p>
                      <p className="text-gray-500 text-xs">per month</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600 text-sm">Electric</p>
                      <p className="text-blue-600 font-bold text-2xl">$900-1400</p>
                      <p className="text-gray-500 text-xs">per month</p>
                    </div>
                  </div>
                  <Link to="/Lend/CarLended" className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg font-medium transition">
                    Calculate Your Earnings
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <p className="font-bold text-blue-900 text-center text-sm">Get Paid Weekly!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
         
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,0L24,42.7C48,85,96,171,144,213.3C192,256,240,256,288,213.3C336,171,384,85,432,48C480,11,528,21,576,64C624,107,672,181,720,218.7C768,256,816,256,864,240C912,224,960,192,1008,149.3C1056,107,1104,53,1152,74.7C1200,96,1248,192,1296,208C1344,224,1392,160,1416,128L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
</svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white" id='HOW-IT-WORKS'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">How CarLend Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Start earning passive income from your car in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center relative hover:shadow-lg transition transform hover:-translate-y-2">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">List Your Car</h3>
              <p className="text-gray-600">Create a detailed profile for your vehicle with photos, features, and availability. Set your own pricing and rules.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center relative hover:shadow-lg transition transform hover:-translate-y-2">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Approve Bookings</h3>
              <p className="text-gray-600">Review rental requests from verified users. Accept bookings that match your schedule with a single click.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center relative hover:shadow-lg transition transform hover:-translate-y-2">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Earn Money</h3>
              <p className="text-gray-600">Get paid automatically after each rental. Transfer earnings to your bank account anytime. No hidden fees.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
              Learn more about the process <FaChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Car Owners Choose CarLend</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We provide everything you need to safely and securely lend your car</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-blue-600 mb-4 text-4xl">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">$1M Insurance Coverage</h3>
              <p className="text-gray-600">Your vehicle is fully protected with our comprehensive insurance policy for every rental.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-blue-600 mb-4 text-4xl">
                <FaUserFriends />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Verified Renters</h3>
              <p className="text-gray-600">Every renter undergoes a thorough background and driving history check before approval.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-blue-600 mb-4 text-4xl">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Competitive Earnings</h3>
              <p className="text-gray-600">Set your own competitive rates and earn up to 85% of each booking amount.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-blue-600 mb-4 text-4xl">
                <FaCarSide />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">24/7 Roadside Assistance</h3>
              <p className="text-gray-600">Emergency support is always available to assist renters with any issues during trips.</p>
            </div>
          </div>
        </div>
      </section>

  
{/* 
      {/* Featured Cars Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Cars for Rent</h2>
            <p className="text-xl text-gray-600">Explore a variety of cars available for rent from trusted owners near you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">Owned by {car.owner}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-blue-600">${car.price}/day</div>
                    <div className="flex items-center">
                      {[...Array(Math.floor(car.rating))].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      {car.rating % 1 !== 0 && <FaStar className="text-yellow-400 half-star" />}
                      <span className="ml-2 text-sm text-gray-500">{car.reviews} reviews</span>
                    </div>
                  </div>
                  <Link to={`/car/${car.id}`} className="block w-full py-3 mt-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */} 

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from car owners who have turned their vehicles into profitable assets with CarLend.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
                <img src={testimonial.photo} alt={testimonial.name} className="mx-auto rounded-full mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-lg font-semibold text-blue-600">Earning: {testimonial.earnings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
         <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4">DriveEase</h3>
                    <p className="text-gray-400 mb-4">Your premium car rental solution for business and leisure travel.</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
                      <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
                      <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
                      <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                      <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                      <li><Link to="/Rent/cardetails" className="text-gray-400 hover:text-white transition">Car Fleet</Link></li>
                      <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                      <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Car Categories</h3>
                    <ul className="space-y-2">
                      <li><Link to="/Rent/cardetails?category=luxury" className="text-gray-400 hover:text-white transition">Luxury Cars</Link></li>
                      <li><Link to="/Rent/cardetails?category=suv" className="text-gray-400 hover:text-white transition">SUVs</Link></li>
                      <li><Link to="/Rent/cardetails?category=economy" className="text-gray-400 hover:text-white transition">Economy Cars</Link></li>
                      <li><Link to="/Rent/cardetails?category=electric" className="text-gray-400 hover:text-white transition">Electric Cars</Link></li>
                      <li><Link to="/Rent/cardetails?category=exotic" className="text-gray-400 hover:text-white transition">Exotic Cars</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <address className="not-italic text-gray-400">
                      <p className="mb-2">123 Luxury Drive</p>
                      <p className="mb-2">New York, NY 10001</p>
                      <p className="mb-2">Email: info@driveease.com</p>
                      <p className="mb-2">Phone: (123) 456-7890</p>
                    </address>
                  </div>
                </div>
                <div className="border-t border-gray-800 pt-8">
                  <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} DriveEase. All rights reserved.</p>
                </div>
              </div>
            </footer>
    </div>
  );
};

export default CarLendHome;

import React from 'react';
import LuxaryCar from '../image/luxarycar.jpg';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaCarSide, FaMoneyBillWave, FaShieldAlt, FaHeadset, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CarRentHome = () => {
  // Sample featured cars data
  
  // Sample testimonials
  const testimonials = [
    { id: 1, name: 'John Smith', role: 'Business Traveler', text: 'DriveEase made my business trip so much more comfortable. The luxury car was perfectly maintained and the service was excellent.' },
    { id: 2, name: 'Sarah Johnson', role: 'Frequent Traveler', text: 'I"ve been using DriveEase for years and they never disappoint. Their selection of vehicles and competitive pricing keep me coming back.' },
    { id: 3, name: 'Michael Chen', role: 'Tourist', text: 'Exploring the city in style was made possible thanks to DriveEase. The reservation process was smooth and the car was amazing.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto p-4">
        <div className="parallax1"></div>
        <div className="marquee">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to DriveEase</h1>
        </div>
        <div className="parallaxbox mt-10">
          <div className="parallax-container">
            <div className="parallax-left">
              <h1 className="parallax-title">Your Dream Car Awaits</h1>
              <p className="parallax-subtitle">Unbeatable Prices, Unmatched Luxury</p>
              <Link to="/Rent/cardetails" className="parallax-btn">Explore Now</Link>
            </div>
            <div className="parallax-right">
              <img src={LuxaryCar} alt="Luxury Car" className="parallax-image" />
            </div>
          </div>
        </div>
        <div className="parallax2"></div>
      </div>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose DriveEase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaCarSide />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-gray-600">Choose from our extensive fleet of luxury and economy vehicles to match your style and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">Enjoy competitive pricing with no hidden fees and special discounts for loyal customers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-gray-600">All our vehicles are regularly serviced and come with comprehensive insurance coverage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is available round-the-clock to assist you with any queries.</p>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Car</h3>
              <p className="text-gray-600">Browse our selection and find the perfect vehicle for your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">Complete your reservation in minutes with our simple booking system.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Ride</h3>
              <p className="text-gray-600">Pick up your car and hit the road with confidence and style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury Driving?</h2>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who choose DriveEase for their rental needs. Book your dream car today!</p>
          <Link to="/Rent/cardetails" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition duration-300">Book Now</Link>
        </div>
      </section>

      {/* Footer */}
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

export default CarRentHome;

  // components/Footer.jsx
  import React from 'react';
  import { Facebook, Twitter, Instagram, Mail, PhoneCall, MapPin } from 'lucide-react';
  
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DriveEase</h3>
              <p className="text-gray-400 mb-4">
                The easiest way to rent or lend cars. Join our community of drivers and car owners today.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#cars" className="text-gray-400 hover:text-white">Browse Cars</a></li>
                <li><a href="#lend" className="text-gray-400 hover:text-white">Lend Your Car</a></li>
                <li><a href="#how" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Safety Information</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Insurance Coverage</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <span className="text-gray-400">123 Main Street, City, State 12345</span>
                </li>
                <li className="flex items-center">
                  <PhoneCall className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-400">(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-400">support@driveease.com</span>
                </li>
              </ul>
              <div className="mt-4">
                <h5 className="text-sm font-medium mb-2">Subscribe to our newsletter</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 text-white px-3 py-2 rounded-l-lg focus:outline-none flex-grow"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6">
            <p className="text-gray-400 text-center text-sm">
              © {new Date().getFullYear()} DriveEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
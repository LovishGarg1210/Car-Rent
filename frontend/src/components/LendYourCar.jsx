
import React from 'react';
import { DollarSign, ShieldCheck, Calendar, Clock } from 'lucide-react';

const LendYourCar = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-blue-600" />,
      title: "Earn Extra Income",
      description: "Make money when you're not using your car. Average owners earn $500-$1000 per month."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Insurance Coverage",
      description: "All rentals include comprehensive insurance coverage to protect your vehicle."
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      title: "Flexible Schedule",
      description: "You decide when your car is available. Keep full control of your calendar."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Quick Setup",
      description: "Get started in minutes. Our team will guide you through the entire process."
    }
  ];

  return (
    <section id="lend" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Earn Money by Lending Your Car</h2>
            <p className="text-gray-600 mb-8">
              Turn your idle vehicle into a source of income. Join thousands of car owners who are offsetting their car payments by lending their vehicles when they're not in use.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg">
              Start Earning Today
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Register Your Car</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Car Make</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Toyota"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Car Model</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Camry"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Year</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 2022"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Location</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City, State"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Daily Rate ($)</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 50"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                Register Your Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LendYourCar;

import React, { useState } from 'react';
import { FaCarSide, FaCalculator, FaQuestionCircle, FaUsers } from 'react-icons/fa';

const CarLendPage = () => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    location: '',
    pricePerDay: '',
    availableFrom: '',
    availableTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCalculate = (e) => {
    e.preventDefault();
    // Calculate earnings logic
    const calculatedAmount = parseInt(formData.pricePerDay) * 30;
    alert(`You can earn Rs${calculatedAmount} per month by lending your ${formData.carMake}`);
    setFormData({
      carMake: '',
      pricePerDay: '',
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form Data:', formData);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Hero Section */}
      <section className="bg-blue-100 p-6 rounded-2xl text-center shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Lend Your Car & Earn Effortlessly</h1>
        <p className="text-lg text-gray-600 mt-2">Let your car work for you by joining our car-sharing community.</p>
      </section>

      {/* Earn Calculator */}
      <section className="my-8 p-6 bg-white shadow-md rounded-lg">
        <div className="flex items-center mb-4">
          <FaCalculator className="text-blue-500 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800 ml-2">Estimate Your Earnings</h2>
        </div>
        <p className="text-gray-600">Use our calculator to estimate how much you can earn by lending your car.</p>
        <form className="mt-4 flex space-x-4">
          <input
            type="text"
            name="carMake"
            value={formData.carMake}
            onChange={handleChange}
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="Car Make"
          />
          <input
            type="text"
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="Price per Day"
          />
          <button onClick={handleCalculate} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">Calculate</button>
        </form>
      </section>

      {/* Success Stories */}
      <section className="my-8 p-6 bg-blue-50 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaUsers className="text-green-500 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800 ml-2">Success Stories</h2>
        </div>
        <p className="text-gray-600 mb-4">Discover how others have turned their idle cars into a source of income.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">John's Story</h3>
            <p className="text-gray-600 mt-2">John earns $500 a month by lending his car when he’s not using it. “It’s easy, and the extra income is great!”</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">Sarah's Story</h3>
            <p className="text-gray-600 mt-2">Sarah paid off her car loan faster by renting her vehicle. “It’s like my car pays for itself!”</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">Mark's Story</h3>
            <p className="text-gray-600 mt-2">Mark loves the convenience and the extra cash flow. “I can share my car when I don't need it, and it helps cover my monthly expenses.”</p>
          </div>
        </div>
      </section>

      {/* Lend Your Car Form */}
      <section className="my-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">Lend Your Car</h2>
        <p className="text-gray-600 mb-4">Fill out the form to lend your car and start earning today.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="carMake"
            value={formData.carMake}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Car Make"
            required
          />
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Car Model"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Location"
            required
          />
          <input
            type="text"
            name="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Price per Day ($)"
            required
          />
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-gray-700">Available From:</label>
              <input
                type="date"
                name="availableFrom"
                value={formData.availableFrom}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-gray-700">Available To:</label>
              <input
                type="date"
                name="availableTo"
                value={formData.availableTo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Lender FAQs */}
      <section className="my-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaQuestionCircle className="text-yellow-500 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800 ml-2">FAQs for Lenders</h2>
        </div>
        <ul className="space-y-2">
          <li className="text-gray-700">
            <strong>Q:</strong> How do I know my car will be safe?<br />
            <strong>A:</strong> We offer comprehensive insurance and vet all renters to ensure the safety of your car.
          </li>
          <li className="text-gray-700">
            <strong>Q:</strong> How do I get paid?<br />
            <strong>A:</strong> You’ll receive payment directly to your bank account once the rental is completed.
          </li>
          <li className="text-gray-700">
            <strong>Q:</strong> Is there any fee for listing my car?<br />
            <strong>A:</strong> No, listing your car is free. We only take a small percentage when a rental is made.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CarLendPage;

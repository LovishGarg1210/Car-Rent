import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SignIn() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate an API call to login the user
      const response = await axios.post('https://car-rental-backend-1-7ej4.onrender.com/api/auth/login', formData);

      // Assuming the API returns a success response with user info or token
      console.log('API Response:', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);

      // Handle successful login (store token, redirect, etc.)
      alert('Login successful!');
      
      // Navigate to home page or dashboard
      navigate('/');
    } catch (error) {
      // Handle login error (show error message, etc.)
      console.error('Login failed:', error);
   
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

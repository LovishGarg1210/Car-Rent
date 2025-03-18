// Booking page with Tailwind CSS for displaying user bookings in a table

import React, { useState, useEffect } from 'react';

const Carbooking = () => {
    // Mock booking data (you can replace this with API calls)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Simulate API call to fetch bookings (replace this with actual API call)
        const fetchBookings = async () => {
            const data = [
                { id: 1, car: 'Toyota Corolla', date: '2025-03-20', time: '10:00 AM', status: 'Confirmed' },
                { id: 2, car: 'Ford Mustang', date: '2025-03-22', time: '2:00 PM', status: 'Pending' },
                { id: 3, car: 'Tesla Model 3', date: '2025-03-25', time: '5:30 PM', status: 'Cancelled' },
            ];
            setBookings(data);
        };
        fetchBookings();
    }, []);

    return (
        <div className="container mx-auto p-4  min-h-screen">
            <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">My Bookings</h2>
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="py-4 px-6 text-left text-sm uppercase font-semibold">Car</th>
                            <th className="py-4 px-6 text-left text-sm uppercase font-semibold">Date</th>
                            <th className="py-4 px-6 text-left text-sm uppercase font-semibold">Time</th>
                            <th className="py-4 px-6 text-left text-sm uppercase font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 0 ? (
                            bookings.map((booking) => (
                                <tr key={booking.id} className="even:bg-gray-100 odd:bg-white hover:bg-gray-200">
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-base font-medium">
                                        {booking.car}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-700 text-base">
                                        {booking.date}
                                    </td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-700 text-base">
                                        {booking.time}
                                    </td>
                                    <td className={`py-4 px-6 border-b border-gray-200 text-base font-semibold `}>
                                        {booking.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="py-8 text-center text-lg text-gray-600 font-semibold">
                                    No bookings available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Function to set status color based on booking status

export default Carbooking;

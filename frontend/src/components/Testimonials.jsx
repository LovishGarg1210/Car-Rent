
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Brown",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvhEiEgRP5TEa0WFrmZhNGC1BGPHqQsGMsw&s",
      role: "Renter",
      content: "I needed a car for a weekend trip and found the perfect vehicle on DriveEase. The booking process was seamless, and the car was in excellent condition. Will definitely use again!"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvhEiEgRP5TEa0WFrmZhNGC1BGPHqQsGMsw&s",
      role: "Car Owner",
      content: "I've been lending my car on DriveEase for six months now and have made enough to cover my car payments. The platform is user-friendly, and the insurance coverage gives me peace of mind."
    },
    {
      id: 3,
      name: "David Wilson",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvhEiEgRP5TEa0WFrmZhNGC1BGPHqQsGMsw&s",
      role: "Renter",
      content: "The variety of cars available is impressive. I was able to rent a luxury car for a special occasion at a reasonable price. The entire experience exceeded my expectations."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about their DriveEase experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

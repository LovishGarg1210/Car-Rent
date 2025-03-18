
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does car rental work on DriveEase?",
      answer: "Browse our selection of cars, choose one that fits your needs, select your rental dates, and book instantly. You can pick up the car from the owner or a designated pickup location."
    },
    {
      question: "What documents do I need to rent a car?",
      answer: "You need a valid driver's license, proof of insurance, and a credit card for the security deposit. International renters may need additional documentation."
    },
    {
      question: "Is insurance included in the rental price?",
      answer: "Basic insurance coverage is included in all rentals. Additional premium coverage options are available during the booking process."
    },
    {
      question: "How do I lend my car on DriveEase?",
      answer: "Register your car with photos and details, set your availability and pricing, and our team will review and approve your listing. Once approved, renters can book your car."
    },
    {
      question: "What happens if my car gets damaged during a rental?",
      answer: "All cars are covered by our comprehensive insurance policy. In case of damage, our claims team will guide you through the process to ensure repairs are handled promptly."
    },
    {
      question: "Can I cancel my reservation?",
      answer: "Yes, cancellations made more than 48 hours before the pickup time receive a full refund. Cancellations within 48 hours are subject to our cancellation policy."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about renting and lending cars on DriveEase.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
               
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                <div 
                  className={`px-4 pb-4 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
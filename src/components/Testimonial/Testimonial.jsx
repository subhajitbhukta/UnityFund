import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonial() {
  const testimonials = [
    {
      quote: "This NGO changed my life! Their support gave me the tools I needed to succeed.",
      name: "John Doe",
      title: "Beneficiary",
      image: "https://www.akshayapatra.org/includefiles/hopestories/homeimgs/Gun-gun-Kashyap-Testimonial.png",
    },
    {
      quote: "The impact this organization has had on our community is immeasurable. We are so grateful.",
      name: "Jane Smith",
      title: "Community Leader",
      image: "https://www.akshayapatra.org/includefiles/hopestories/homeimgs/Momamad-Noor-Ali-Testimonial.png",
    },
    {
      quote: "Their dedication to helping others is inspiring. I'm proud to be a donor.",
      name: "Emily Johnson",
      title: "Donor",
      image: "https://www.akshayapatra.org/includefiles/hopestories/homeimgs/Hitakshi.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-gray-100 py-12 mb-6">
      <div className="absolute inset-0">
        <img
          src="https://give.do/blog/wp-content/uploads/2023/11/5-NGOs-to-support-this-Childrens-Day-Give-blog.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-30 filter blur-sm"
          style={{ boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.6)' }}
        />
      </div>
      <div className="relative container mx-auto px-6  bg-opacity-90 rounded-lg py-12 ">
        <h2 className="text-5xl  text-center text-gray-800 mb-8">Impact Stories</h2>
        <div className="relative max-w-4xl mx-auto">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-5"
            onClick={prevSlide}
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <div className="flex items-center h-1/2 gap-6  duration-300">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-32 h-32 object-cover rounded-full"
            />
            <div className="text-left">
              <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
              <p className="text-gray-700 text-lg italic mb-4">"{testimonials[currentIndex].quote}"</p>
              <h4 className="text-gray-900 font-semibold text-xl">{testimonials[currentIndex].name}</h4>
              <p className="text-gray-500">{testimonials[currentIndex].title}</p>
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 -mr-6"
            onClick={nextSlide}
          >
            <FaChevronRight className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  { id: 1, image: 'https://www.akshayapatra.org/includefiles/banners/1583x550.jpg' },
  { id: 2, image: 'https://www.akshayapatra.org/includefiles/banners/1583x55015.jpg' },
  { id: 3, image: 'https://www.akshayapatra.org/includefiles/banners/Web_1583x5503.jpg' }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full h-96 sm:h-80 md:h-96 lg:h-4/6 overflow-hidden">
      {/* Slider Image */}
      <img
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Previous Slide Button */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaArrowLeft />
      </button>

      {/* Next Slide Button */}
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;

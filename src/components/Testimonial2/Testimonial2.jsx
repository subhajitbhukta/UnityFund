import React, { useState, useEffect } from 'react';
// import {FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonial2() {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi exercitationem ipsum laborum ab dicta obcaecati soluta architecto? Asperiores quaerat quisquam ipsa nam aperiam sit culpa, ratione quae tenetur modi illo harum dignissimos cupiditate maxime blanditiis!", 
      name: "John Doe",
      title: "Beneficiary",
      image: "https://www.akshayapatra.org/includefiles/hopestories/homeimgs/Gun-gun-Kashyap-Testimonial.png",
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt, distinctio et, esse iure perferendis rem, animi praesentium ea ad perspiciatis at fugit! Placeat vitae natus saepe amet quibusdam perferendis sit cum molestias, recusandae neque praesentium debitis facere animi nostrum eaque temporibus illo commodi.", 
      name: "Jane Smith",
      title: "Community Leader",
      image: "https://www.akshayapatra.org/includefiles/hopestories/homeimgs/Momamad-Noor-Ali-Testimonial.png",
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste perferendis neque expedita nostrum obcaecati eveniet corrupti laboriosam sint distinctio excepturi debitis, ducimus voluptatem unde sunt, ipsa hic aliquid beatae tenetur officia. Explicabo maxime quod commodi magnam ducimus.", 
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds
  
    return () => clearInterval(autoSlide);
  },);
  

  return (
    <div className="relative bg-sky-600">
      <div className="relative container mx-auto px-6 bg-opacity-90 rounded-lg py-12 bg-sky-700">
        <h2 className="text-3xl md:text-5xl text-center text-white mb-8">Hear from our Biggest Contributors</h2>
        <div className="relative max-w-4xl mx-auto">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-5"
            onClick={prevSlide}
          >
            {/* <FaChevronLeft className="text-gray-800" /> */}
          </button>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 duration-300">
            <div className="flex-shrink-0">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover"
              />
            </div>
            <div className="text-left flex-1">
              {/* <FaQuoteLeft className="text-indigo-500 text-3xl md:text-4xl mb-4" /> */}
              <p className="text-slate-50 text-base md:text-lg italic mb-4">"{testimonials[currentIndex].quote}"</p>
              <h4 className="text-white font-semibold text-lg md:text-xl">{testimonials[currentIndex].name}</h4>
              <p className="text-slate-300">{testimonials[currentIndex].title}</p>
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
            onClick={nextSlide}
          >
            {/* <FaChevronRight className="text-gray-800" /> */}
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-200'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;

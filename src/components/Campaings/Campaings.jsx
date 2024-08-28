import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Campaings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const campaigns = [
    {
      image: 'https://timesnext.com/content/images/wp-content/uploads/2020/09/JAGOFOUNDATION-768x509-1.jpg',
      title: 'Campaign 1',
      description: 'Help us build a school in rural areas.',
      totalGoal: 100000,
      currentContribution: 2000,
    },
    {
      image: 'https://media.gettyimages.com/id/1168343240/photo/in-this-photograph-taken-on-september-7-a-differently-abled-man-interacts-with-his-mother-as.jpg?s=612x612&w=0&k=20&c=wPg4wKUeI8tPW3vMXsT-Vcw3E8KKKRdpmfk7kYhXRBE=',
      title: 'Campaign 2',
      description: 'Support clean water projects.',
      totalGoal: 50000,
      currentContribution: 10000,
    },
    {
      image: 'https://timesnext.com/content/images/wp-content/uploads/2020/09/JAGOFOUNDATION-768x509-1.jpg',
      title: 'Campaign 1',
      description: 'Help us build a school in rural areas.',
      totalGoal: 100000,
      currentContribution: 2000,
    },
    {
      image: 'https://example.com/image3.jpg',
      title: 'Campaign 3',
      description: 'Support education for children.',
      totalGoal: 75000,
      currentContribution: 30000,
    },
  ];

  const itemsToShow = window.innerWidth < 640 ? 1 : 3; // Show 1 item on small screens, 3 on larger screens

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset index on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= campaigns.length - itemsToShow ? 0 : prevIndex + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, itemsToShow]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? campaigns.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= campaigns.length - itemsToShow ? 0 : prevIndex + itemsToShow
    );
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ongoing Campaigns</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {campaigns.map((campaign, index) => {
                const percentage = ((campaign.currentContribution / campaign.totalGoal) * 100).toFixed(2);
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4"
                    style={{ maxWidth: `calc(100% / ${itemsToShow})` }}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 mx-auto">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                      <p className="text-gray-700 mb-4">{campaign.description}</p>
                      <div className="mb-4">
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-white bg-lime-700">
                              {percentage}%
                            </span>
                            <span className="text-xs font-semibold text-gray-600">
                              ₹{campaign.currentContribution.toLocaleString()} of ₹{campaign.totalGoal.toLocaleString()}
                            </span>
                          </div>
                          <div className="relative">
                            <div className="h-2 bg-gray-300 rounded">
                              <div
                                style={{ width: `${percentage}%` }}
                                className="h-full bg-blue-500 rounded"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
                        Donate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Campaings;

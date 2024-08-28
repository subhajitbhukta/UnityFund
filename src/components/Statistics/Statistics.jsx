import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClock, faChild } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const statistics = [
  { id: 1, number: '1000', label: 'Lorem ipsum', icon: faUsers },
  { id: 2, number: '17', label: 'Lorem ipsum Service', icon: faClock },
  { id: 3, number: '37000', label: 'Lorem ipsum Impacted', icon: faChild },
];

function Statistics() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
    <div ref={sectionRef} className="flex flex-col items-center space-y-12 p-8 bg-gray-100">
      <h1 className="text-center text-4xl font-semibold mb-3">Our Impact</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {statistics.map(stat => (
          <div
            key={stat.id}
            className="relative flex flex-col items-center justify-center p-8 border-b border-gray-500"
          >
            <FontAwesomeIcon icon={stat.icon} className="text-orange-400 text-5xl mb-4" />
            <span className="text-4xl font-bold text-gray-700">
              {isInView ? <CountUp end={parseInt(stat.number.replace(/,/g, ''))} duration={2} separator="," /> : stat.number}
            </span>
            <span className="text-lg font-medium text-gray-700 mt-2 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
</>
  );
}

export default Statistics;

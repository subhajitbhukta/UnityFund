import React from "react";

function Marque() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  return (
    <div className="w-screen mt-20 flex items-center justify-center bg-white text-black overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-4xl text-center p-2 font-medium mb-2.5 text-blue-900">
          With Great Outcomes.
        </div>
        <div className="text-xl text-center p-3 font-light mb-10 text-gray-500">
          Our customers have gotten offers from awesome companies.
        </div>
        <div className="relative w-full flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-20">
            {row1.concat(row1).map((el, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-40 mx-2"
              >
                <img
                  src={el}
                  className="w-40 h-40 object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marque;

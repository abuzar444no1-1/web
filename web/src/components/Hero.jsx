import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious food delivered to your door
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Order from your favorite restaurants with just a few clicks
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter your delivery address..."
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-150">
                Find Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
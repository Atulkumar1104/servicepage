import React from "react";

const HeroSection = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
      <main className="px-6 py-40 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
          ReactJS Development Company: Build Modern, High-Performance Web
          Applications
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Elevate your user experience with our expert ReactJS development
          solutions.
        </p>

        <p className="text-gray-300 mb-12 max-w-4xl mx-auto">
          Looking for a dynamic and engaging web presence? Our expert ReactJS
          developers build high-performance, scalable, and user-friendly web
          applications tailored to your specific business needs. We leverage the
          power of ReactJS to deliver exceptional user experiences that drive
          results.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-orange-500 text-gray-900 rounded-md font-bold hover:bg-orange-600 transition-colors duration-300">
            Get started
          </button>
          <button className="px-8 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors text-black font-bold duration-300">
            Contact sales
          </button>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;

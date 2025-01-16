import React from "react";

const CTASection = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Simpler, more sophisticated background */}
      <div className="absolute inset-0 bg-[#090f1b]" />

      {/* Very subtle purple tint overlay */}
      <div className="absolute inset-0 bg-purple-900/5" />

      {/* Content container with minimum height */}
      <div className="relative flex flex-col items-center justify-center px-6 py-24 min-h-[24rem]">
        {/* Main heading with precise gradient match */}
        <h2 className="text-6xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-[#60A5FA] via-[#7C6EE6] to-[#A855F7] bg-clip-text text-transparent">
            The Future of Workflow Automation is Now
          </span>
        </h2>

        {/* Description with exact color match */}
        <p className="text-gray-300 text-lg mb-12 max-w-2xl text-center leading-relaxed">
          Get started with GitHub Actions today and explore community created
          actions in the GitHub Marketplace.
        </p>

        {/* Buttons matching the screenshot exactly */}
        <div className="flex gap-4">
          <button
            className="px-8 py-3 bg-[#2563EB] text-white rounded-lg font-semibold 
            hover:bg-blue-600 transition-colors"
          >
            Get started
          </button>

          <button
            className="px-8 py-3 bg-[#111827] text-white rounded-lg font-semibold 
            hover:bg-gray-900 transition-colors"
          >
            Contact sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

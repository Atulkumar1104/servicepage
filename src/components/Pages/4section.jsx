import React, { useState } from "react";
import { Zap, Layout, Code, RefreshCw } from "lucide-react";

const ReactBenefitsSection = () => {
  const allServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance and Scalability",
      description:
        "Ideal for applications with complex user interfaces and large amounts of data. ReactJS's virtual DOM and efficient rendering mechanism ensure optimal performance even as your application grows.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Dynamic User Experiences",
      description:
        "Perfect for creating engaging and user-friendly web applications. React's component-based architecture enables the creation of interactive interfaces that respond instantly to user actions.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cross-Platform Compatibility",
      description:
        "A great option for reaching both web and mobile audiences with a unified codebase. React's learn once, write anywhere philosophy makes it ideal for cross-platform development.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Fast Development Cycles",
      description:
        "Accelerates time to market and reduces development costs. React's rich ecosystem of tools and components, combined with its reusable component model, speeds up the development process.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Long-Term Maintainability and Scalability",
      description:
        "Ensures your application can adapt and grow with your business needs.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(allServices.length / itemsPerPage);

  const displayedServices = allServices.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="bg-gradient-to-b from-[#010102] to-gray-900 min-h-screen text-white px-6 py-12">
      {/* Header section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Is ReactJS Right for Your Project?
        </h1>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#06090f] to-gray-800 rounded-lg p-6 flex flex-col space-y-4 hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
          >
            <div className="rounded-full bg-gray-700 p-4 w-16 h-16 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {totalPages > 1 && (
        <div className="flex justify-end  mt-8 space-x-4">
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
            }
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < totalPages - 1 ? prev + 1 : prev
              )
            }
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 disabled:opacity-50"
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReactBenefitsSection;

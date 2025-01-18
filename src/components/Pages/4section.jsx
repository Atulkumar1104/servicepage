import React, { useState } from "react";
import { Zap, Layout, Code, RefreshCw, ChevronRight,ChevronLeft } from "lucide-react";

const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={`animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-orange-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-orange-500 before:to-transparent ${className}`}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  );
};

const BenefitCard = ({ service }) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 rounded-lg p-6 flex flex-col space-y-4 group hover:bg-gray-800 transition-all duration-300">
      <div className="relative z-10">
        <div className="rounded-full bg-gray-700 p-4 w-16 h-16 flex items-center justify-center">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
      <div className="absolute inset-0">
        <Meteors number={10} />
      </div>
    </div>
  );
};

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
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen text-white px-6 py-12">
      {/* Header section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          Is ReactJS Right for Your Project?
        </h1>
      </div>
      {/* Navigation buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center ml-[1180px] mb-7 mt-8 space-x-4">
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
            }
            className="p-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < totalPages - 1 ? prev + 1 : prev
              )
            }
            className="p-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {displayedServices.map((service, index) => (
          <BenefitCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ReactBenefitsSection;

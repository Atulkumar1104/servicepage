import React, { useState } from "react";
import {
  Code2,
  Layout,
  Smartphone,
  ServerCog,
  Building2,
  FileCode,
  Puzzle,
  ArrowRightLeft,
  Wrench,
  Box,
  Globe,
  Palette,
  Database,
  Settings,
  Gamepad2,
  AppWindow,
  Share2,
  RefreshCw,
  ShoppingCart,
  Users,
} from "lucide-react";

const HoverCard = ({ title, description, icon: Icon, imageUrl }) => {
  return (
    <div className="relative w-full h-72 sm:h-80 md:h-96 group bg-white cursor-pointer overflow-hidden rounded-lg shadow-md">
      {/* Fixed Content - Always Visible */}
      <div className="absolute top-0 left-0 w-full p-4 sm:p-6 z-20 flex flex-col gap-2 sm:gap-4">
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-100 rounded-lg shadow-sm p-1.5 sm:p-2 flex items-center justify-center">
          <Icon className="w-full h-full text-orange-600" strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-0.5 sm:mb-1">
            {title}
          </h2>
        </div>
      </div>

      {/* Card Content Container */}
      <div className="relative w-full h-full">
        {/* Image View (Default State) */}
        <div className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:opacity-0">
          <div className="w-full h-full relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Text View (Hover State) */}
        <div className="absolute inset-0 bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 touch-device:opacity-100">
          <div className="h-full flex flex-col p-4 sm:p-6 pt-32 sm:pt-44">
            <p className="text-base sm:text-lg leading-relaxed text-gray-800">
              {description}
            </p>
            <div className="mt-auto">
              <button className="text-gray-800 font-semibold hover:underline flex items-center text-base sm:text-lg">
                Learn More
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 8;

  const cards = [
    {
      title: "Custom React JS App Development",
      description:
        "Tailored applications built from the ground up to match your unique requirements.",
      icon: Code2,
      imageUrl:
        "https://i.pinimg.com/736x/87/38/98/8738983e5e0b1c8bfb51b294162feeb9.jpg",
    },
    {
      title: "ReactJS Consulting",
      description:
        "Expert guidance and strategic planning to maximize the effectiveness of your ReactJS projects.",
      icon: Layout,
      imageUrl:
        "https://i.pinimg.com/736x/07/bc/76/07bc769a095a95e63fed1fca814229cb.jpg",
    },
    {
      title: "React Native App Development",
      description:
        "Developing cross-platform mobile applications for iOS and Android using React Native.",
      icon: Smartphone,
      imageUrl:
        "https://i.pinimg.com/736x/07/bc/76/07bc769a095a95e63fed1fca814229cb.jpg",
    },
    {
      title: "React JS API Integration",
      description:
        "Seamlessly integrating third-party APIs to extend the functionality of your ReactJS applications.",
      icon: ServerCog,
      imageUrl:
        "https://i.pinimg.com/736x/65/0d/21/650d2188c7d3b037ca3d77a03521a2c8.jpg",
    },
    {
      title: "React JS Enterprise App Development",
      description:
        "Building scalable and robust enterprise-grade applications using ReactJS.",
      icon: Building2,
      imageUrl:
        "https://i.pinimg.com/736x/f1/23/8c/f1238cbee14928a2f578c68cf9ad12f8.jpg",
    },
    {
      title: "React JS Template Creation",
      description:
        "Developing reusable templates to accelerate development and maintain consistency.",
      icon: FileCode,
      imageUrl:
        "https://i.pinimg.com/736x/f1/23/8c/f1238cbee14928a2f578c68cf9ad12f8.jpg",
    },
    {
      title: "React JS Plugin Development",
      description:
        "Creating custom plugins to extend the functionality of existing ReactJS applications.",
      icon: Puzzle,
      imageUrl:
        "https://i.pinimg.com/736x/ed/a9/8a/eda98a246ffbd958fbe63f67fd51361d.jpg",
    },
    {
      title: "React JS Migration Service",
      description:
        "Migrating existing applications to ReactJS for improved performance and maintainability.",
      icon: ArrowRightLeft,
      imageUrl:
        "https://i.pinimg.com/736x/ed/a9/8a/eda98a246ffbd958fbe63f67fd51361d.jpg",
    },
    {
      title: "React JS Support and Maintenance",
      description:
        "Providing ongoing support and maintenance to ensure your applications run smoothly.",
      icon: Wrench,
      imageUrl: "/api/placeholder/800/600?text=Support+&+Maintenance",
    },
    {
      title: "ReactJS Product Development",
      description:
        "Take your product idea from concept to launch with our full-cycle ReactJS development services.",
      icon: Box,
      imageUrl: "/api/placeholder/800/600?text=Product+Development",
    },
    {
      title: "React Mobile Web App Development",
      description:
        "Creating high-performance mobile web applications using ReactJS.",
      icon: Globe,
      imageUrl: "/api/placeholder/800/600?text=Mobile+Web+Apps",
    },
    {
      title: "React Web Design",
      description:
        "Designing visually appealing and user-friendly web interfaces using ReactJS.",
      icon: Palette,
      imageUrl: "/api/placeholder/800/600?text=Web+Design",
    },
    {
      title: "Redux Web Development",
      description:
        "Implementing Redux for efficient state management in complex ReactJS applications.",
      icon: Database,
      imageUrl: "/api/placeholder/800/600?text=Redux+Development",
    },
    {
      title: "Reactjs Development Environment Setup",
      description:
        "Configuring and optimizing development environments for efficient ReactJS development.",
      icon: Settings,
      imageUrl: "/api/placeholder/800/600?text=Dev+Environment",
    },
    {
      title: "Reactjs Game Development",
      description:
        "Developing engaging and interactive web-based games using ReactJS.",
      icon: Gamepad2,
      imageUrl: "/api/placeholder/800/600?text=Game+Development",
    },
    {
      title: "React Application Development",
      description:
        "A broad term covering all aspects of building applications using ReactJS.",
      icon: AppWindow,
      imageUrl: "/api/placeholder/800/600?text=React+Applications",
    },
    {
      title: "ReactJS Social And Interactive Apps",
      description:
        "Building social networking and interactive web applications using ReactJS.",
      icon: Share2,
      imageUrl: "/api/placeholder/800/600?text=Social+Apps",
    },
    {
      title: "ReactJS Upgradation",
      description:
        "Upgrading existing ReactJS applications to the latest versions for improved performance and security.",
      icon: RefreshCw,
      imageUrl: "/api/placeholder/800/600?text=React+Upgrades",
    },
    {
      title: "ReactJS ECommerce Development",
      description:
        "Building robust and scalable e-commerce platforms using ReactJS.",
      icon: ShoppingCart,
      imageUrl: "/api/placeholder/800/600?text=ECommerce+Development",
    },
    {
      title: "ReactJS Portal Development",
      description:
        "Creating secure and user-friendly web portals using ReactJS.",
      icon: Users,
      imageUrl: "/api/placeholder/800/600?text=Portal+Development",
    },
  ];

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our ReactJS Development Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            We offer a comprehensive suite of ReactJS development services to
            meet all your needs
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {visibleCards.map((card, index) => (
            <HoverCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8 space-x-3">
          <button
            onClick={handlePrev}
            className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;

import React, { useState, useEffect, useCallback } from "react";

const InternalNavbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: "services", label: "Our Services" },
    { id: "process", label: "Our Process" },
    { id: "why-us", label: "Why Us ?" },
    { id: "industries", label: "Industries" },
    { id: "technology", label: "Technology" },
    { id: "contact", label: "Contact Us" },
  ];

  // Check visibility and active section
  const handleScroll = useCallback(() => {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    const currentScroll = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Show/hide navbar
    setIsVisible(currentScroll >= heroHeight);

    // Check which section is in view
    if (currentScroll >= heroHeight) {
      const scrollPosition = currentScroll + window.innerHeight / 2;

      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error("Section not found:", sectionId);
      return;
    }

    try {
      const navbarHeight = 56; // Fixed navbar height
      const sectionPosition = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    } catch (error) {
      console.error("Scroll error:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      className="w-full fixed top-0 z-40 border-b border-gray-950 transition-all duration-300
        bg-gradient-to-r from-orange-600 via-orange-500 to-red-600"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Title on the left */}
          <div className="flex-shrink-0">
            <h2 className="text-white font-semibold text-lg">
              React Development
            </h2>
          </div>

          {/* Navigation items */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {navItems.map(({ id, label }) => (
              <div key={id} className="relative group">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200
                    ${
                      activeSection === id
                        ? "text-white bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }
                    relative
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
                    before:bg-white before:transition-transform before:duration-200
                    ${
                      activeSection === id
                        ? "before:scale-x-100"
                        : "before:scale-x-0"
                    }
                    group-hover:before:scale-x-100
                    `}
                >
                  {label}
                </button>

                {/* Hover highlight effect */}
                <div
                  className={`absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-200
                    ${
                      activeSection === id
                        ? "opacity-0"
                        : "group-hover:opacity-100"
                    }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InternalNavbar;

import React, { useState, useEffect } from "react";

const InternalNavbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const navItems = [
    { id: "services", label: "Our Services" },
    { id: "process", label: "Our Process" },
    { id: "why-us", label: "Why Us ?" },
    { id: "industries", label: "Industries" },
    { id: "technology", label: "Technology" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 132;
      const scrollPosition = window.scrollY + navbarHeight;

      // If at the top of the page (hero section), set active section to null
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection(null);
        return;
      }

      // Check other sections
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let currentSection = null;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = navItems[i].id;
          break;
        }
      }

      // Update active section
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 132;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-20 bg-gray-900 border-b border-gray-950 z-40">
      <div className="max-w-7xl ml-[590px] px-4">
        <div className="flex items-center justify-center h-12">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors duration-200 
                  ${
                    activeSection === id
                      ? "text-white bg-orange-700"
                      : "text-gray-300 hover:text-white hover:bg-orange-600/30"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default InternalNavbar;

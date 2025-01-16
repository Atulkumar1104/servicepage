import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on page navigation
  useEffect(() => {
    // If there's no scroll target, scroll to top
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Effect to handle scrolling to specific sections after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure the component has mounted
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Clear the state after scrolling
          window.history.replaceState({}, document.title);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      // Navigate to home with scroll target in state
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={handleHomeClick}>
              <img
                src="https://i0.wp.com/xstrategyservices.com/wp-content/uploads/2023/12/1024_1024-icon.png?fit=1024%2C1024&ssl=1"
                alt="Company Logo"
                className="h-16 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-white hover:text-orange-600 px-3 py-2 font-medium"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about-section")}
              className="text-white hover:text-orange-600 px-3 py-2 font-medium"
            >
              About
            </button>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-orange-600 px-3 py-2 font-medium"
            >
              Blogs
            </Link>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="text-white hover:text-orange-600 px-3 py-2 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="block text-white hover:text-orange-600 px-3 py-2 font-medium"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("about-section")}
              className="block text-white hover:text-orange-600 px-3 py-2 font-medium w-full text-left"
            >
              About
            </button>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-orange-600 px-3 py-2 font-medium"
            >
              Blogs
            </Link>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="block text-white hover:text-orange-600 px-3 py-2 font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

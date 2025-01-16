import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(true);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(true);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Services & Success Stories Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Custom software development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Dedicated development teams
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  IT consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Digital transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Staff augmentation services
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-12 mb-4">
              Success stories
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Case studies
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-[312px] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Mission and values
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  International presence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Management team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Corporate social responsibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Industry contribution
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Our clients and awards
                </a>
              </li>
            </ul>
          </div>

          {/* Expertises Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertises</h3>

            {/* Technology Dropdown */}
            <div className="mb-6">
              <button
                onClick={() => setIsTechnologyOpen(!isTechnologyOpen)}
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white"
              >
                <span>Technology</span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transform transition-transform ${
                    isTechnologyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isTechnologyOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Cloud Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Mobile Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Web Development
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="mb-6">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transform transition-transform ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isSolutionsOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Business Intelligence (BI)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Data engineering services
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <h3 className="text-lg mt-32 font-semibold mb-4">
                Kickass solution hub
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Kickass IoT Accelerator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Kickass ERP system
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Kickass Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    An AI-powered virtual assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    DevOps Accelerator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Authorization Accelerator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    uCrop
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="text-lg font-semibold mt-16 mb-4">X-Quality</h3>
            <h3 className="text-lg font-semibold mt-8 mb-4">Insights</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  FinTech
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Transportation and mobility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Smart Home and appliances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Energy and resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Real estate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  All articles
                </a>
              </li>
            </ul>
          </div>

          {/* Yalantis Solution Hub Column */}

          {/* Industries & Insights Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Fintech
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Transportation and mobility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Smart home and appliances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Software products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Real estate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Energy consumption management system
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact & Rating */}
          <div>
            <button className="bg-transparent border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors mb-8">
              CONTACT US
            </button>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>

            {/* Clutch Rating */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gray-800 rounded-full p-3">
                <span className="text-2xl font-bold">C</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">4.8</span>
                  <div className="flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-orange-500">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Kickass rating on Clutch
                </p>
              </div>
            </div>

            {/* Logo and Copyright */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Kickass</h2>
              <p className="text-sm text-gray-400">
                ©Copyright 2024 Kickass - Software engineering and IT consulting
                company. All rights reserved
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-white"
                >
                  Cookies notice
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-white"
                >
                  Privacy notice
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-white"
                >
                  Quality policy
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-400 hover:text-white"
                >
                  Kickass Sustainability Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

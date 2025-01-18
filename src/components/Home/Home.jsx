import React from "react";
import InternalNavbar from "../internalNavBar";
import GitHubActionsClone from "../Pages/cloneGithub";
import CardGrid from "../Pages/cardGrid";
import AIServicesSection from "../Pages/4section";
import ReactBenefitsSection from "../Pages/4section";
import IntegratedStickyScroll from "../Pages/processPage";
import CrystalPartnershipsGrid from "../Pages/partner";
import CTASection from "../Pages/cTa";
import IndustryInsights from "../Pages/industryInsights";
import CombinedTechNav from "../Pages/technologies";
import LatestInsights from "../Pages/latestInsights";
import FAQSection from "../Pages/faqSection";
import Hyperspeed from "../Backgrounds/Hyperspeed/Hyperspeed";
import Carousel from "../Pages/featuredProjects";
import ContactSection from "../Pages/contactUs";
import CardSpotlightDemo from "../Pages/weserve/mainPage";

function Home() {
  const effectOptions = {
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black w-full">
      {/* Add Internal Navigation Bar */}
      <InternalNavbar />

      {/* Hero Section with Animation */}
      <div className="relative h-screen">
        {/* Animation Container */}
        <div className="absolute inset-0">
          <Hyperspeed effectOptions={effectOptions} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full">
          <main className="px-6 py-40 max-w-6xl mx-auto text-center">
            {/* Added backdrop-blur and background for better text readability */}
            <div className="backdrop-blur-[1.5px] bg-gray-900/30 p-8 -mt-10 rounded-lg">
              <h1 className="text-5xl font-bold mt-8 leading-tight mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                ReactJS Development Company: Build Modern, High-Performance Web
                Applications
              </h1>
              <p className="text-xl text-gray-100 mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Elevate your user experience with our expert ReactJS development
                solutions.
              </p>

              <p className="text-gray-100 mb-12 text-xl max-w-4xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Looking for a dynamic and engaging web presence? Our expert
                ReactJS developers build high-performance, scalable, and
                user-friendly web applications tailored to your specific
                business needs. We leverage the power of ReactJS to deliver
                exceptional user experiences that drive results.
              </p>

              <div className="flex justify-center space-x-4">
                <button className="px-8 py-3 bg-orange-500 text-gray-900 rounded-md font-bold hover:bg-orange-600 transition-colors duration-300">
                  Get started
                </button>
                <button className="px-8 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors text-black font-bold duration-300">
                  Contact sales
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Rest of the content with solid background */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div>
          <GitHubActionsClone />
        </div>

        <div id="services">
          <CardGrid />
        </div>

        <div>
          <ReactBenefitsSection />
        </div>

        <div id="process" className="space-y-8 sm:space-y-12 md:space-y-16">
          <IntegratedStickyScroll />
        </div>

        <div id="why-us">
          <CrystalPartnershipsGrid />
        </div>

        <div className="bg-gradient-to-b from-gray-90 to-black">
          <Carousel />
        </div>

        <div className="bg-gradient-to-b from-black to-gray-900">
          <CardSpotlightDemo />
        </div>

        <div className="p-10 bg-gradient-to-b from-gray-900 to-black">
          <CTASection />
        </div>

        <div id="industries" className="bg-gradient-to-b from-black to-gray-900">
          <IndustryInsights />
        </div>

        <div id="technology">
          <CombinedTechNav />
        </div>

        <div>
          <LatestInsights />
        </div>

        <div className="-m-1">
          <FAQSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default Home;

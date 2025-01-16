import React from "react";
import GitHubActionsClone from "../Pages/cloneGithub";
import CardGrid from "../Pages/cardGrid";
import AIServicesSection from "../Pages/4section";
import ReactBenefitsSection from "../Pages/4section";
import IntegratedStickyScroll from "../Pages/processPage";
import PartnershipsGrid from "../Pages/partner";
import CrystalPartnershipsGrid from "../Pages/partner";
import CTASection from "../Pages/cTa";
import IndustryInsights from "../Pages/industryInsights";
import CombinedTechNav from "../Pages/technologies";
import LatestInsights from "../Pages/latestInsights";
import FAQSection from "../Pages/faqSection";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-1">
      <main className="px-6 py-40 max-w-6xl mx-auto text-center mt-6">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          ReactJS Development Company: Build Modern, High-Performance Web
          Applications
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Elevate your user experience with our expert ReactJS development
          solutions.
        </p>

        <p className="text-gray-400 mb-12 max-w-4xl mx-auto">
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
          <button className="px-8 py-3  bg-orange-500 rounded-md hover:bg-orange-600 transition-colors text-black font-bold duration-300">
            Contact sales
          </button>
        </div>
      </main>
      <div>
        <GitHubActionsClone />
      </div>
      <div>
        <CardGrid />
      </div>
      <div>
        <ReactBenefitsSection />
      </div>
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <IntegratedStickyScroll />
      </div>
      <div>
        <CrystalPartnershipsGrid />
      </div>
      <div className="p-10 bg-[#111827]">
        <CTASection />
      </div>
      <div className="bg-gradient-to-b from-[#111827] to-black">
        <IndustryInsights />
      </div>
      <div>
        <CombinedTechNav />
      </div>
      <div>
        <LatestInsights />
      </div>
      <div className="-m-1"><FAQSection/></div>
    </div>
  );
}

export default Home;

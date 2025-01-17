import React, { useState } from "react";
import {
  Code,
  Users,
  Rocket,
  MessageSquare,
  Target,
  DollarSign,
  BarChart,
  Clock,
} from "lucide-react";

const GlassCard = ({ icon: Icon, title, description, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl backdrop-blur-lg transition-all duration-500 
      ${isHovered ? "transform scale-105 shadow-2xl" : "shadow-lg"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 opacity-25 ${gradient}`} />
      <div className="relative p-6 bg-gray-800 h-full backdrop-blur-md border border-gray-800">
        <div
          className={`flex items-center mb-6 transition-all duration-300 ${
            isHovered ? "transform scale-110" : ""
          }`}
        >
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-300 mb-3 transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        <div
          className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-2xl`}
        />
      </div>
    </div>
  );
};

const CrystalPartnershipsGrid = () => {
  const benefits = [
    {
      icon: Code,
      title: "Experienced ReactJS Developers",
      description:
        " Our team comprises highly skilled and experienced ReactJS developers with a proven track record of delivering successful projects. We stay up-to-date with the latest ReactJS trends and best practices.",
      gradient: "from-blue-600/80 to-indigo-500/80",
    },
    {
      icon: Rocket,
      title: "Agile Development Methodology",
      description:
        "We embrace agile principles to ensure flexibility, transparency, and continuous improvement throughout development. This allows us to adapt to changing requirements and deliver value iteratively.",
      gradient: "from-purple-600/80 to-pink-500/80",
    },
    {
      icon: BarChart,
      title: "Focus on Quality and Performance",
      description:
        "We are committed to delivering high-quality, performant applications that meet your business needs and exceed user expectations. We prioritize code quality, performance optimization, and user experience.",
      gradient: "from-emerald-600/80 to-teal-500/80",
    },
    {
      icon: Users,
      title: "Dedicated Project Management",
      description:
        "Each project is assigned a dedicated project manager as your single point of contact. They ensure clear communication, manage timelines and budgets, and keep you informed of progress throughout the development lifecycle.  ",
      gradient: "from-orange-600/80 to-red-500/80",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "We believe in open and honest communication. To ensure you're always in the loop, we provide regular updates, progress reports, and opportunities for feedback.",
      gradient: "from-pink-600/80 to-rose-500/80",
    },
    {
      icon: Target,
      title: "Client-Centric Approach",
      description:
        "We prioritize building long-term partnerships with our clients. We take the time to understand your business goals and work collaboratively to achieve them.",
      gradient: "from-cyan-600/80 to-blue-500/80",
    },
    {
      icon: DollarSign,
      title: "Competitive & Flexible Pricing",
      description:
        "We offer competitive pricing and flexible engagement models to suit your budget and project requirements.",
      gradient: "from-violet-600/80 to-purple-500/80",
    },
    {
      icon: Clock,
      title: "Post-Launch Support & Maintenance",
      description:
        "Our commitment extends beyond launch with comprehensive support and maintenance packages to ensure your application remains secure, and stable, and performs optimally.",
      gradient: "from-amber-600/80 to-orange-500/80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl" />
          <h2 className="relative text-5xl font-bold text-white mb-6">
            Why Partner with Us?
          </h2>
          <p className="relative text-gray-400 text-2xl max-w-3xl mx-auto">
            Experience excellence in React development with our proven expertise
            and commitment to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:z-10"
            >
              <GlassCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrystalPartnershipsGrid;

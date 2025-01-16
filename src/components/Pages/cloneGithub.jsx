import React from "react";
import {
  Code2,
  Workflow,
  GitBranch,
  Binary,
  Upload,
  Shield,
} from "lucide-react";

const GitHubActionsClone = () => {
  const content = {
    heading: {
      main: "The Power of ReactJS ",
      sub: " Elevate your user experience with our expert ReactJS development solutions.",
    },
    cards: [
      {
        title: "Component-Based Architecture",
        description:
          "Reusable components accelerate development, simplify maintenance, and ensure consistency across your application.",
        icon: Code2,
      },
      {
        title: "Virtual DOM for Enhanced Performance",
        description:
          " React's virtual DOM minimizes direct manipulation of the actual DOM, resulting in faster rendering and improved performance.",
        icon: Workflow,
      },
      {
        title: "Large and Active Community",
        description:
          "Benefit from a vast ecosystem of libraries, tools, and resources, ensuring readily available support and solutions.",
        icon: GitBranch,
      },
      {
        title: "SEO-Friendly",
        description:
          "ReactJS supports server-side rendering, which improves search engine optimization and visibility.",
        icon: Binary,
      },
      {
        title: "Cross-Platform Development with React Native",
        description:
          "Build native mobile apps for iOS and Android from a single codebase, saving time and resources.",
        icon: Upload,
      },
      {
        title: "Security Features",
        description:
          "Automatically scan your code for vulnerabilities and enforce security policies across your development lifecycle.",
        icon: Shield,
      },
    ],
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#0c121d] to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{content.heading.main}</h1>
          <p className="text-xl text-gray-400 mb-8">{content.heading.sub}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="h-[280px] bg-[#1c2128] rounded-xl p-6 hover:bg-[#22272e] transition-colors duration-200 group flex flex-col"
              >
                <div className="mb-5">
                  <IconComponent
                    className="w-8 h-8 text-orange-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-[#848d97] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitHubActionsClone;

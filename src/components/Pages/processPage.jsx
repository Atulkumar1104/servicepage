import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const jordanCards = [
  {
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your business objectives, target audience, and project scope. We conduct in-depth consultations to gather requirements, discuss potential challenges, and define success metrics. This ensures we're aligned from the outset.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
        <img
          src="https://i.pinimg.com/736x/a9/eb/d6/a9ebd69a50a24b81d17777d2c0696a88.jpg"
          className="h-full w-full object-cover"
          alt="Platform features"
        />
      </div>
    ),
  },
  {
    title: "Planning & Design",
    description:
      " Based on the gathered requirements, we create detailed project plans, wireframes, and mockups. This phase focuses on defining the application's architecture, user interface, and user experience. We present these designs to you for feedback and approval before moving to development.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        <img
          src="https://i.pinimg.com/736x/01/53/f2/0153f26a7879185be32573c89f1ee2ae.jpg"
          className="h-full w-full object-cover"
          alt="Version control"
        />
      </div>
    ),
  },
  {
    title: "Development & Testing",
    description:
      " Our expert ReactJS developers bring your vision to life using clean, maintainable code. We follow coding best practices and conduct rigorous testing throughout the development process, including unit testing, integration testing, and user acceptance testing (UAT).",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/cb/10/0d/cb100d282b579ebb5f1ffd7d8feaa2f3.jpg"
          className="h-full w-full object-cover"
          alt="Real-time changes"
        />
      </div>
    ),
  },
  {
    title: "Deployment & Launch",
    description:
      " We deploy your application to a secure and scalable environment, ensuring a smooth and seamless launch. We also provide post-launch support to address any issues that may arise.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/1e/71/f4/1e71f471016112f1a7f04bed6ce60add.jpg"
          className="h-full w-full object-cover"
          alt="Real-time changes"
        />
      </div>
    ),
  },
  {
    title: "Maintenance & Support",
    description:
      "  Our commitment extends beyond launch. We offer ongoing maintenance and support packages to ensure your application remains secure, and stable, and performs optimally. This includes bug fixes, security updates, performance optimization, and ongoing technical support.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/ea/7b/3b/ea7b3b8d3481a971f75ae7abc778dd26.jpg"
          className="h-full w-full object-cover"
          alt="Real-time changes"
        />
      </div>
    ),
  },
];

const regularCards = {
  "Cloud & DevSecOps": [
    {
      title: "Cloud Infrastructure",
      description: "AWS, Azure, GCP infrastructure setup and management",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/72/d9/d3/72d9d31add943a4c0ccf832b266d791b.jpg"
            className="h-64 w-full object-cover"
            alt="Cloud infrastructure"
          />
        </div>
      ),
    },
    {
      title: "DevOps Automation",
      description: "CI/CD pipelines and automation solutions",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
          <img
            src="https://i.pinimg.com/736x/00/ed/27/00ed275e09bb6108ecd375ac12f4f028.jpg"
            className="h-64 w-full object-cover"
            alt="DevOps automation"
          />
        </div>
      ),
    },
  ],
};

export const IntegratedStickyScroll = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const content = jordanCards;
  const sections = Object.entries(regularCards).flatMap(([category, cards]) =>
    cards.map((card, index) => ({
      title: card.title,
      description: card.description,
      content: card.content,
      alignLeft: index % 2 === 0,
    }))
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardLength = content.length;
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto mb-12 text-center p-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Streamlined Development Process makes us as best React JS
          development company
        </h2>
        <p className="text-white/80 text-lg">
          We believe in transparency and collaboration throughout the
          development lifecycle. Our proven agile methodology ensures efficient
          project management, clear communication, and on-time delivery. Here's
          a closer look at our process:
        </p>
      </div>

      <div className="max-w-full mx-auto px-16">
        <div className="-mt-20 rounded-xl p-5">
          <section className="relative min-h-screen">
            <motion.div
              ref={ref}
              className="h-screen overflow-y-auto scrollbar-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <div className="w-full sticky top-0 h-screen flex items-center justify-center">
                <div className="hidden md:flex absolute left-0 top-1/2 -mt-20 -translate-y-1/2 flex-col gap-4 z-50">
                  {content.map((_, index) => (
                    <motion.div
                      key={`tab-${index}`}
                      className="flex items-center gap-5 cursor-pointer group"
                      onClick={() => {
                        const element = ref.current;
                        const scrollHeight = element.scrollHeight;
                        const segmentHeight = scrollHeight / content.length;
                        element.scrollTo({
                          top: segmentHeight * index,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <motion.div
                        className={`h-2 rounded-full transition-all ${
                          activeCard === index
                            ? "w-12 bg-orange-400"
                            : "w-6 bg-white/30 group-hover:bg-orange-400/50"
                        }`}
                      />
                      <motion.span
                        className={`text-sm transition-opacity ${
                          activeCard === index
                            ? "opacity-100 text-orange-400"
                            : "opacity-0 group-hover:opacity-70 text-white/70"
                        }`}
                      >
                        {`0${index + 1}`}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 -mt-48 gap-8 w-full">
                  <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
                    {content.map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="p-4 md:p-8 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: activeCard === index ? 1 : 0,
                          y: activeCard === index ? 0 : 20,
                        }}
                        transition={{ duration: 0.5 }}
                        style={{
                          display: activeCard === index ? "block" : "none",
                        }}
                      >
                        <h2 className="text-2xl md:text-3xl ml-20 text-white font-semibold mb-6">
                          {item.title}
                        </h2>
                        <p className="text-base md:text-lg ml-20 text-gray-300">
                          {item.description}
                        </p>
                        <div className="mt-8">
                          <button className="px-6 py-3 bg-transparent ml-20 border border-orange-400 text-white rounded-full hover:bg-orange-400/10 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="col-span-1 md:col-span-6 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-h-96 rounded-xl overflow-hidden">
                      {content.map((item, index) => (
                        <motion.div
                          key={`image-${index}`}
                          className="absolute inset-0 w-full h-full"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{
                            opacity: activeCard === index ? 1 : 0,
                            scale: activeCard === index ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.content}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {content.map((_, index) => (
                <div key={index} className="h-screen" />
              ))}
            </motion.div>
          </section>

          <section className="relative">
            <div className="-space-y-3 -mt-36">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-1 items-center ${
                      section.alignLeft ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`${
                        section.alignLeft ? "lg:pr-8" : "lg:pl-8 lg:order-last"
                      }`}
                    >
                      <div className="bg-[#06080e] backdrop-blur-xl rounded-2xl p-6 shadow-2xl ring-1 ring-white/10 transform hover:scale-105 transition-transform duration-300">
                        {section.content}
                      </div>
                    </div>
                    <div className={section.alignLeft ? "lg:pl-8" : "lg:pr-8"}>
                      <div className="relative">
                        <h3 className="text-3xl font-semibold -mt-8 ml-6 text-white mb-6">
                          {section.title}
                        </h3>
                        <p className="text-lg text-gray-400 ml-6 leading-relaxed">
                          {section.description}
                        </p>
                        <div className="mt-8">
                          <button className="px-6 py-3 bg-transparent border border-orange-400 ml-6 text-white rounded-full relative group overflow-hidden hover:bg-orange-400/10 transition-colors duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntegratedStickyScroll;

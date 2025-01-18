import { CardSpotlight } from "./card-spotlight";
import { Monitor, Truck, Heart } from "lucide-react";

export function CardSpotlightDemo() {
  const industries = [
    {
      title: "Entertainment",
      icon: Monitor,
      services: [
        "Video Streaming Solutions",
        "Storyboarding and Collaboration Solutions",
        "Live Event Ticketing Platforms",
        "ML Solution for Large Data",
        "VFX Solutions",
      ],
    },
    {
      title: "Logistics",
      icon: Truck,
      services: [
        "Delivery Management",
        "Shipping Logistics Management",
        "Fleet Management Software",
        "Inventory Management Software",
        "Telematics Software Development",
      ],
    },
    {
      title: "Healthcare",
      icon: Heart,
      services: [
        "Telemedicine Solution",
        "Electronic Health Records (EHR)",
        "Practice Management Systems",
        "Clinical Software Solutions",
        "Medical Device Integrations Solutions",
      ],
    },
    {
      title: "Healthcare",
      icon: Heart,
      services: [
        "Telemedicine Solution",
        "Electronic Health Records (EHR)",
        "Practice Management Systems",
        "Clinical Software Solutions",
        "Medical Device Integrations Solutions",
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl  mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-[42px] font-bold text-white mb-4">
          Industries We Serve
        </h2>
        <p className="text-white text-[18px] max-w-4xl mx-auto">
          MindInventory as a leading app development company with a focus on
          AI/ML advancements, serves businesses across various industries with
          cutting-edge digital solutions, improving their business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {industries.map((industry, index) => (
          <CardSpotlight key={index} className="min-h-96 w-72 ">
            <div className="flex flex-col gap-4  relative z-20">
              <div className="rounded-full bg-white/10 p-3 w-14 h-14 flex items-center justify-center">
                <industry.icon className="w-7 h-7 text-white" />
              </div>

              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-white">
                  {industry.title}
                </h2>
                <svg
                  className="w-5 h-5 text-white/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              <ul className="space-y-3">
                {industry.services.map((service, idx) => (
                  <ServiceItem key={idx} title={service} />
                ))}
              </ul>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

const ServiceItem = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-orange-400/80 mt-1 flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
      <p className="text-white/80 text-sm">{title}</p>
    </li>
  );
};

export default CardSpotlightDemo;

import React from "react";
import {
  Code,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200/50",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200/50",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200/50",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200/50",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Advanced analytics and business intelligence solutions to drive data-driven decisions.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200/50",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description:
        "Intelligent automation and ML solutions to streamline processes and enhance capabilities.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200/50",
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation strategies to modernize your business operations.",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200/50",
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description:
        "Streamlined development workflows and automated deployment pipelines for faster delivery.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200/50",
    },
  ];

  return (
    <section
      id="services"
      style={{ backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity, 1))" }}
      className="relative py-20 overflow-hidden border-b border-gray-200/50"
    >
      {/* Enhanced gradient background */}
      <div
        className="absolute inset-0 "
        style={{ backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity, 1))" }}
      ></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-300 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to accelerate
            your digital transformation and drive sustainable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // Alternate direction for every card: even = left, odd = right
            const direction = index % 2 === 0 ? "left" : "right";
            const ref = useScrollAnimation(direction);
            // Add a delay based on index for staggered animation
            const delay = `${index * 120}ms`;
            return (
              <div
                key={index}
                ref={ref}
                style={{ transitionDelay: delay }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border ${service.borderColor} hover:border-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-3 slide-anim-${direction}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="relative text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .slide-anim-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .slide-anim-right {
          opacity: 0;
          transform: translateX(80px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .animate-in-view {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform Modernization",
      category: "Retail Technology",
      description:
        "Complete digital transformation of a legacy e-commerce system, resulting in 300% increase in online sales.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "AWS", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      description:
        "HIPAA-compliant patient management system serving 50+ healthcare facilities across the region.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&h=400&fit=crop",
      tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Financial Analytics Platform",
      category: "FinTech",
      description:
        "Real-time financial data analytics platform processing millions of transactions daily.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&h=400&fit=crop",
      tags: ["Angular", "Java", "Kafka", "Elasticsearch"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "IoT Manufacturing Solution",
      category: "Manufacturing",
      description:
        "Smart factory solution with predictive maintenance, reducing downtime by 40%.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=400&fit=crop",
      tags: ["React", "Python", "IoT", "Machine Learning"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
   <section
      id="portfolio"
      className="relative pt-20 pb-16 overflow-hidden border-b border-gray-200/50"
      style={{ backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity, 1))" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-purple-500 "></div>
      {/* Unified dark gradient background */}
      <div className="absolute inset-0"></div>
      {/* Optionally, add a subtle overlay for depth */}
      <div className="absolute inset-0"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-300 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects that have transformed businesses and
            delivered exceptional results across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span
                    className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                    <ExternalLink size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-purple-700 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="group/btn flex items-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:from-purple-600 hover:to-pink-600 font-bold transition-all duration-300">
                  View Case Study
                  <ArrowRight
                    size={18}
                    className="ml-2 text-purple-600 group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import { Users, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with deep industry expertise",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Successful delivery of 500+ projects worldwide",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Focused on delivering measurable business outcomes",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge solutions using latest technologies",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
   <section
      id="home"
      className="relative pt-20 pb-16 overflow-hidden border-b border-gray-200/50"
      style={{ backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity, 1))" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      {/* Unified dark gradient background */}
      <div className="absolute inset-0"></div>
      {/* Optionally, add a subtle overlay for depth */}
      <div className="absolute inset-0"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-6">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Our Company
              </span>
            </div>

            <h2 className="text-5xl font-bold text-gray-300 mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                TreeInova{" "}
              </span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are a leading technology consulting firm dedicated to helping
                businesses navigate the complex digital landscape. With over a
                decade of experience, we've partnered with organizations across
                various industries to deliver innovative solutions that drive
                growth and efficiency.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to bridge the gap between technology and business
                objectives, ensuring that every solution we deliver creates
                tangible value and competitive advantage for our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-300 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-2">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

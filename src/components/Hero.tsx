import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 overflow-hidden border-b border-gray-200/50"
      style={{ backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity, 1))" }}
    >
      {/* Unified dark gradient background */}
      <div className="absolute inset-0"></div>
      {/* Optionally, add a subtle overlay for depth */}
      <div className="absolute inset-0"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium bg-clip-text text-transparent">
                Leading Digital Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-300 leading-tight mb-6">
              Transform Your
              <span className="block bg-clip-text">Digital Future</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
              We deliver cutting-edge technology solutions that drive
              innovation, enhance efficiency, and accelerate your business
              growth in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                Get Started Today
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-2">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&fit=crop"
                alt="Technology workspace"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

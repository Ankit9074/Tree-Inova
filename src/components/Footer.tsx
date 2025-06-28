import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src="/image/logo.png"
                alt="TreeInova Logo"
                className="h-10 w-10 mr-3 rounded-full shadow-md object-cover"
              />
              <div className="text-3xl font-bold">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ color: "#4CAF50" }}
                >
                  Tree
                </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{ color: "#2196F3" }}
                >
                  Inova
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Transforming businesses through innovative technology solutions.
              We partner with organizations to deliver cutting-edge digital
              experiences that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-transparent"
              >
                <Facebook
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-transparent"
              >
                <Twitter
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-transparent"
              >
                <Linkedin
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="#"
                className="group w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-transparent"
              >
                <Instagram
                  size={20}
                  className="group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={14} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  TreeInova.care@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={14} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  +91 99938 07442
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  62 , sanvid kanadia road indore mp, 452018
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center">
              © 2024 TreeInova . All rights reserved. Built with
              <Heart size={16} className="mx-1 text-red-500" />
              for innovation.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

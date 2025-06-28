import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919755607446";
    const text = `Name: ${firstName} ${lastName}%0ASubject: ${subject}%0AMessage: ${message}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Enhanced gradient background */}
      <div
        className="absolute inset-0 "
        style={{ backgroundColor: "rgb(17 24 39 / var(--tw-bg-opacity, 1))" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-800/30 to-purple-800/30"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-80 h-80  rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-400">
              Let's Start a Conversation
            </span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how we can help you
            achieve your digital transformation goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Email</div>
                  <div className="text-gray-300">TreeInova.care@gmail.com</div>
                </div>
              </div>

              <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Phone</div>
                  <div className="text-gray-300">+91 97556 07446</div>
                </div>
              </div>

              <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Office</div>
                  <div className="text-gray-300">
                    123 Innovation Drive, Tech City, TC 12345
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">
              Send us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20 focus:outline-none transition-all duration-300"
                    placeholder="John"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20 focus:outline-none transition-all duration-300"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-3 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20 focus:outline-none transition-all duration-300"
                  placeholder="Project Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-3 font-medium">
                  Messages
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20 focus:outline-none resize-none transition-all duration-300"
                  placeholder="Tell us about your project..."
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center font-bold"
              >
                Send Message
                <Send
                  className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </button>
              <a
                href="https://wa.me/919755607446"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 group w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Go to WhatsApp
                <svg
                  className="ml-3"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.69.97.99-3.59-.25-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

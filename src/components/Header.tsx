import logo from './2.jpg';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about your digital marketing services.");
    window.open(`https://wa.me/918974595376?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/80 shadow-xl border-b border-white/20 z-50">
      {/* Liquid Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-l from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-2 left-1/2 w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Animated liquid wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg className="relative block w-full h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="url(#headerGradient)" opacity="0.3">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0;-100 0;0 0" dur="15s" repeatCount="indefinite"/>
          </path>
          <defs>
            <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative backdrop-blur-sm bg-white/10 rounded-lg p-1 border border-white/20">
              <img 
                src={logo}
                alt="Canvas Logo"
                className="h-12 w-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium group ${
                  location.pathname === item.href
                    ? 'text-white'
                    : 'text-gray-700 hover:text-white'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Active/Hover Background */}
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                    : 'bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/80 group-hover:to-purple-400/80 group-hover:shadow-md'
                }`}></div>
                
                {/* Liquid bubble effect */}
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator */}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={openWhatsApp}
              className="hidden md:flex items-center space-x-2 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 px-4 py-2 rounded-lg group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2 text-white">
                  <div className="p-1 bg-white/20 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <MessageCircle size={16} />
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </div>
              </div>
              {/* Floating bubbles effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300/60 rounded-full animate-ping"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 p-2 rounded-lg group-hover:scale-105 transition-all duration-300">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2">
            <div className="backdrop-blur-lg bg-white/90 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Liquid background for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              
              <div className="relative z-10 px-4 py-4 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                      location.pathname === item.href
                        ? 'text-white'
                        : 'text-gray-700 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                        : 'bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/80 group-hover:to-purple-400/80'
                    }`}></div>
                    
                    <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10 flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'bg-cyan-300'
                          : 'bg-gray-400 group-hover:bg-cyan-300'
                      }`}></span>
                      {item.name}
                    </span>
                  </Link>
                ))}
                
                <button
                  onClick={openWhatsApp}
                  className="w-full mt-4 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl group-hover:scale-[1.02] transition-all duration-300">
                    <div className="p-1 bg-white/20 rounded-full group-hover:rotate-12 transition-transform duration-300">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium">WhatsApp</span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300/60 rounded-full animate-ping"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
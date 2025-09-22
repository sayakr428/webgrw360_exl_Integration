import logo from './2.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Liquid Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Liquid Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="url(#gradient1)">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0;-100 0;0 0" dur="10s" repeatCount="indefinite"/>
          </path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="url(#gradient2)">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0;100 0;0 0" dur="8s" repeatCount="indefinite"/>
          </path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="url(#gradient3)">
            <animateTransform attributeName="transform" attributeType="XML" type="translate" values="0 0;-50 0;0 0" dur="12s" repeatCount="indefinite"/>
          </path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                <img 
                  src={logo}
                  alt="WebGrow360 Logo"
                  className="relative h-12 w-auto object-contain rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering Indian businesses with cutting-edge digital marketing solutions. 
                Based in Agartala, Tripura, we help businesses across Northeast India and 
                beyond achieve remarkable online growth.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm">Agartala, Tripura (North), India</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm">+91 8974595376 (WhatsApp)</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm">Webgroww360@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300 group hover:text-white transition-colors duration-300">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm">9 AM - 7 PM IST, Monday-Saturday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/seo" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Social Media Marketing
                </Link>
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                Local SEO
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                E-commerce Solutions
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                Digital Consultation
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent mt-12 pt-8">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">WebGrow360</span>. All rights reserved. | WebGrow360.online
              </p>
              <p className="text-gray-400 text-sm text-center md:text-right">
                Proudly serving businesses across India from <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Agartala, Tripura</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
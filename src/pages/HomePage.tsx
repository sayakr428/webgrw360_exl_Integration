import React, { useState, useRef, useEffect } from 'react';
import { Search, Globe, Share2, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Palette, Video } from 'lucide-react';

// Enhanced Liquid Background Component with more dynamic effects
const LiquidBackground = ({ children, intensity = 1, variant = 'default' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    canvas.width = width;
    canvas.height = height;

    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Enhanced liquid blobs with more variety
      const blobCount = variant === 'hero' ? 5 : 3;
      for (let i = 0; i < blobCount; i++) {
        const gradient = ctx.createRadialGradient(
          width * (0.1 + i * 0.25) + Math.sin(time * 0.008 + i * 1.5) * 80, 
          height * (0.2 + i * 0.25) + Math.cos(time * 0.012 + i * 2) * 60, 
          5,
          width * (0.1 + i * 0.25) + Math.sin(time * 0.005 + i) * 40, 
          height * (0.2 + i * 0.25) + Math.cos(time * 0.008 + i) * 30, 
          120 + i * 60
        );
        
        const hue = (time * 0.4 + i * 100) % 360;
        const saturation = variant === 'hero' ? 80 : 70;
        const lightness = variant === 'hero' ? 65 : 60;
        
        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${0.15 * intensity})`);
        gradient.addColorStop(0.4, `hsla(${hue + 80}, ${saturation + 10}%, ${lightness + 10}%, ${0.08 * intensity})`);
        gradient.addColorStop(1, `hsla(${hue + 160}, ${saturation - 10}%, ${lightness - 10}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
      
      time++;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, variant]);

  return (
    <div className="relative overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Enhanced Service Card with liquid morphing effects
const EnhancedServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 12, y: y * -12 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleCardClick = () => {
    window.location.href = service.link;
  };

  const IconComponent = service.icon;
  const transformStyle = `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(0)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-700 border border-gray-200/50 cursor-pointer aspect-square hover:scale-105 active:scale-95"
      style={{
        transform: transformStyle
      }}
    >
      {/* Animated liquid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1000`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 200}ms`,
              animation: isHovered ? 'float 3s ease-in-out infinite' : 'none'
            }}
          />
        ))}
      </div>

      {/* Background image with enhanced effects */}
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30 group-hover:opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white/80 group-hover:from-white/60 group-hover:via-white/65 group-hover:to-white/70 transition-all duration-700"></div>
      </div>
      
      {/* Content with liquid morphing */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-gray-800">
        <div className="flex flex-col items-center text-center">
          <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg backdrop-blur-sm overflow-hidden`}>
            {/* Liquid glow effect inside icon */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl group-hover:animate-pulse"></div>
            <IconComponent className="relative z-10 h-10 w-10 text-white drop-shadow-lg" />
            {/* Ripple effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-30 animate-ping transition-opacity duration-300`}></div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 text-center">
            {service.title}
          </h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed text-center flex-grow group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
        </div>
      </div>
      
      {/* Enhanced liquid ripple overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/15 group-hover:via-purple-400/15 group-hover:to-cyan-400/15 transition-all duration-1000" />
      
      {/* Morphing border effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-500"></div>
    </div>
  );
};

const HomePage = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Boost your visibility on Google with our expert SEO strategies tailored for Indian businesses.',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/seo'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites that convert visitors into customers, built for the Indian market.',
      color: 'from-blue-600 to-blue-700',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/web-development'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand on Facebook, Instagram, and LinkedIn.',
      color: 'from-blue-700 to-blue-800',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/social-media'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Professional graphic design services for logos, branding, and marketing materials.',
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/graphic-design'
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Engaging video content for social media, websites, and marketing campaigns.',
      color: 'from-blue-600 to-blue-800',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/services/video-creation'
    },
  ];

  const whyChooseUs = [
    'Deep Local Expertise: We know the Northeast Indian market inside out, giving your business the edge it needs to thrive locally and nationally.',
    'Proven Digital Success: With over an year of experience, we have delivered real results for 10+ Indian businesses.',
    'Trusted and Transparent: Our GST-compliant billing and processes ensure complete trust and transparency.',
    'Always There for You: 24/7 WhatsApp support during IST hours means your questions get answered anytime.',
    'Affordable Solutions: Tailored pricing designed especially for Indian MSMEs, making growth accessible for all.'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Electronics, Guwahati',
      rating: 5,
      text: 'WebGrow360 helped us increase our online sales by 300% within 6 months. Their understanding of the Northeast Indian market is exceptional.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGtk99bZiPHNg/profile-displayphoto-scale_200_200/B56ZlrFfgwIAAY-/0/1758438226829?e=1762387200&v=beta&t=FQ_svu5Z2tVUBQzn4x6ccpoVqKLyltYUrQY9SrScdRI'
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Textiles, Silchar',
      rating: 5,
      text: 'The SEO services provided by WebGrow360 got us ranking #1 for textiles in Assam. Our business inquiries doubled!',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQERH4vQyWuVAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649850661679?e=1762387200&v=beta&t=zD_JaOsvtw2pLsnB8svV2CZH6reh7_GgFC8WDE4zaXo'
    },
    {
      name: 'Ankit Das',
      business: 'Das Consulting, Agartala',
      rating: 5,
      text: 'Professional, reliable, and results-driven. They understand the local business culture and deliver exactly what they promise.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEZvy_R9EY63g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681819573926?e=1762387200&v=beta&t=s4-vo8Ttj5t9zPGhHqO1w0liW9mA_hpp9B_02EqXH_M'
    }
  ];

  const createStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
      );
    }
    return stars;
  };

  return (
    <div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        @keyframes liquidPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .liquid-morph {
          animation: liquidPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section with Enhanced Liquid Effects */}
      <LiquidBackground intensity={1.2} variant="hero">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-cyan-900 py-24 text-white overflow-hidden">
          {/* Enhanced floating orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse liquid-morph"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse liquid-morph" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse liquid-morph" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Digital Marketing Background" 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-800/80 to-cyan-900/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-lg rounded-full p-6 group hover:scale-110 transition-all duration-500 border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <TrendingUp className="relative z-10 h-16 w-16 text-cyan-300 group-hover:rotate-12 transition-transform duration-500" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white drop-shadow-lg">Want to scale your</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse drop-shadow-lg">Indian business?</span>
                <br />
              </h1>
              
              <p className="text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto opacity-90">
                We provide advanced digital marketing services across social media, websites, web development, SEO, email marketing, event marketing, and PPC to help Indian businesses grow online effectively.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/918974595376?text=Hi! I want a free digital marketing consultation for my business. Please share more details."
                  className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-cyan-600 hover:to-blue-700 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-500 transform hover:scale-110 flex items-center space-x-3 shadow-2xl overflow-hidden"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Free Consultation</span>
                  <ArrowRight className="relative z-10 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                
                <button
                  onClick={() => window.location.href = '/portfolio'}
                  className="relative group border-2 border-cyan-300 text-cyan-300 px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-300 hover:text-cyan-900 hover:shadow-[0_0_30px_rgba(134,239,172,0.6)] transition-all duration-500 backdrop-blur-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">View Our Work</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Services Section with Enhanced Liquid Cards */}
      <LiquidBackground intensity={0.6}>
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-l from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 drop-shadow-sm">
                What we Offer?
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed specifically for Indian businesses 
                looking to dominate their local and national markets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <EnhancedServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Why Choose Us Section with Liquid Glass Effects */}
      <LiquidBackground intensity={0.8}>
        <section className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="mb-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Team collaboration" 
                    className="relative w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-white/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-8 leading-tight">
                  Why People Choose WebGrow360?
                </h2>
                
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  At WebGrow360, we understand the unique challenges and opportunities in the Indian digital landscape. As a trusted digital marketing agency in Agartala and Tripura, we combine global best practices with local market insights to deliver measurable results. From SEO in Agartala and Local SEO services for businesses in Tripura, to social media marketing and PPC campaigns across India, our strategies are designed to help your business stand out online. Whether you are looking for affordable digital marketing services in Agartala or a full-service SEO company in India, our expert team ensures sustainable growth and long-term success.
                </p>
                
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 backdrop-blur-lg bg-white/70 p-5 rounded-2xl hover:bg-white/80 hover:scale-105 transition-all duration-500 shadow-xl border border-white/50 group">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <a
                    href="https://wa.me/918974595376?text=Hi! I want to know more about your digital marketing services. Please share your portfolio and pricing."
                    className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-500 transform hover:scale-110 inline-block overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Your Growth Journey</span>
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Users, number: '10+', text: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
                  { icon: Award, number: '1+', text: 'Years Experience', color: 'from-cyan-500 to-blue-500' },
                  { icon: TrendingUp, number: '250%', text: 'Avg. ROI Increase', color: 'from-purple-500 to-blue-500' },
                  { icon: Globe, number: '24/7', text: 'WhatsApp Support', color: 'from-blue-500 to-purple-500' },
                  { icon: Award, number: 'Agile', text: 'Trustworthy', color: 'from-cyan-500 to-purple-500' },
                  { icon: Globe, number: 'Cheap', text: 'Effective', color: 'from-blue-500 to-cyan-500' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className={`relative bg-gradient-to-br ${stat.color} p-8 rounded-3xl shadow-2xl text-center text-white transform hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer group overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                      <IconComponent className="relative z-10 h-10 w-10 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
                      <div className="relative z-10 text-4xl font-bold mb-3">{stat.number}</div>
                      <div className="relative z-10 text-blue-100 font-medium">{stat.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Enhanced Testimonials with Liquid Glass */}
      <LiquidBackground intensity={1.0}>
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                What our existing people are saying?
              </h2>
              <p className="text-2xl text-blue-100 opacity-90">
                Real results from real businesses across Northeast India and beyond
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative backdrop-blur-2xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 group overflow-hidden">
                  {/* Enhanced liquid ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/30 group-hover:via-purple-400/30 group-hover:to-cyan-400/30 transition-all duration-1000 rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-3 border-cyan-300 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-400/50 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                      </div>
                      <div className="ml-6 flex">
                        {createStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-white/95 mb-8 italic text-lg leading-relaxed">{testimonial.text}</p>
                    <div>
                      <div className="font-bold text-white text-xl">{testimonial.name}</div>
                      <div className="text-blue-200 text-lg">{testimonial.business}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Enhanced Success Stories */}
      <LiquidBackground intensity={0.5}>
        <section className="py-24 bg-gradient-to-b from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-l from-cyan-200/15 to-blue-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Our Success Stories
              </h2>
              <p className="text-2xl text-gray-600">
                Visual proof of our digital marketing success across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { img: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'E-commerce Growth', desc: '300% sales increase for online stores' },
                { img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Local SEO', desc: 'Top rankings for local businesses' },
                { img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Social Media', desc: '10K+ followers gained monthly' },
                { img: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Web Development', desc: 'Mobile-first responsive websites' }
              ].map((story, index) => (
                <div key={index} className="relative backdrop-blur-lg bg-white/80 p-8 rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 group border border-white/50 overflow-hidden">
                  {/* Liquid morphing background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-cyan-400/20 transition-all duration-1000 rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src={story.img}
                        alt={story.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{story.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LiquidBackground>

      {/* Enhanced CTA Section with Liquid Morphing */}
      <LiquidBackground intensity={1.2} variant="hero">
        <section className="relative py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-800 text-white overflow-hidden">
          {/* Enhanced floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-pulse liquid-morph"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse liquid-morph" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-tr from-blue-300/15 to-cyan-300/15 rounded-full blur-2xl animate-pulse liquid-morph" style={{ animationDelay: '6s' }}></div>
          </div>

          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Digital Growth" 
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/85 to-cyan-800/90"></div>
          </div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
              Ready to upscale your online store?
            </h2>
            <p className="text-2xl mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
              Join 10+ successful Indian businesses who trusted WebGrow360 to boost their 
              online presence and increase their revenue. Get your free consultation today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/918974595376?text=Hi! I want to get started with digital marketing for my business. Please send me your service details and pricing."
                className="relative group bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-110 transition-all duration-500 transform shadow-2xl overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                <span className="relative z-10">WhatsApp Now - It's Free!</span>
              </a>
              
              <button
                onClick={() => window.location.href = '/contact'}
                className="relative group border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 backdrop-blur-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Schedule a Call</span>
              </button>
            </div>
          </div>
        </section>
      </LiquidBackground>
    </div>
  );
};

export default HomePage;
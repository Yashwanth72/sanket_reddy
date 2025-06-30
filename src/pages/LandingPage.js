"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Button from "../components/ui/Button"
import { GalaxyBackground } from "../components/ui/Particles";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Parallax } from 'react-parallax'

const passionItems = [
  {
    title: "Fire Ant Studios",
    description: "Innovative architectural solutions that blend nature with modern living",
    link: "https://fireantstudios.in/",
    bgColor: "bg-gradient-to-br from-amber-800 to-amber-600",
    icon: "🖥️"
  },
  {
    title: "Photography",
    description: "Creative design studio specializing in sustainable spaces",
    link: "/photography",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-600",
    icon: "📷"
  }
]

const professionItems = [
  {
    title: "Firefly Spaces",
    description: "Innovative architectural solutions that blend nature with modern living",
    link: "/firefly-spaces",
    bgColor: "bg-gradient-to-br from-amber-800 to-amber-600"
  },
  {
    title: "Firefly Studios",
    description: "Creative design studio specializing in sustainable spaces",
    link: "/firefly-studios",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-600"
  },
  {
    title: "True North Realty",
    description: "Premium real estate services with a conservation focus",
    link: "/true-north",
    bgColor: "bg-gradient-to-br from-blue-800 to-blue-600"
  }
]

const purposeItems = [
  {
    title: "TNR Trust Fund",
    description: "Supporting wildlife conservation and community initiatives",
    link: "https://obaps.in/tnr",
    bgColor: "bg-gradient-to-br from-blue-800 to-blue-600"
  }
]

export default function LandingPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredPassionIndex, setHoveredPassionIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isScrolling = useRef(false);
  const sectionRefs = useRef([]);
  
  // Total number of sections (including footer)
  const totalSections = 5;

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth scrolling effect
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;
      
      // Prevent default scrolling behavior
      e.preventDefault();
      
      isScrolling.current = true;

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection]);

  // Scroll to current section
  useEffect(() => {
    sectionRefs.current[currentSection]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'nearest'
    });
  }, [currentSection]);

  const scrollToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
  };

  const handleHoverStart = (section) => {
    if (!isMobile) {
      setHoveredSection(section);
    }
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setHoveredSection(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          overflow: hidden;
        }
        .section {
          height: 100vh;
          width: 100%;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        .section.active {
          opacity: 1;
          transform: translateY(0);
        }
        .footer-section {
          height: 100vh;
          width: 100%;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }
        .footer-section.active {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .hero-portrait {
            height: 50vh;
          }
          .hero-content {
            height: 50vh;
          }
          .passion-title, .profession-title, .purpose-title {
            font-size: 3rem !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative w-full h-screen overflow-hidden"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className={`section ${currentSection === 0 ? 'active' : ''}`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full w-full flex flex-col md:flex-row">
            {/* Left Side - Portrait Image with Split Effect */}
            <div className="w-full md:w-1/2 h-full relative overflow-hidden hero-portrait">
              {/* Base Image (always visible) */}
              <motion.img
                src={require('../assests/images/about.jpg')}
                alt="Sanket Reddy Portrait"
                className={`w-full h-full object-cover absolute transition-all duration-300 ${hoveredSection ? 'blur-sm opacity-30' : 'opacity-100'}`}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: hoveredSection ? 0.3 : 1,
                  filter: hoveredSection ? 'blur(4px)' : 'blur(0px)',
                  transition: { duration: 0.3 }
                }}
              />

              {/* Top Part - Passion */}
              <motion.div
                className="absolute w-full h-full overflow-hidden"
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                animate={{
                  clipPath: hoveredSection === 'passion' ? 'inset(0 0 65.6% 0)' : 'inset(0 0 100% 0)',
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                <img
                  src={require('../assests/images/about.jpg')}
                  alt="Sanket Reddy Portrait Top"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Middle Part - Profession */}
              <motion.div
                className="absolute w-full h-full overflow-hidden"
                initial={{ clipPath: 'inset(34.4% 0 31.6% 0)' }}
                animate={{
                  clipPath: hoveredSection === 'profession' ? 'inset(34.4% 0 31.6% 0)' : 'inset(100% 0 0 0)',
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                <img
                  src={require('../assests/images/about.jpg')}
                  alt="Sanket Reddy Portrait Middle"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Bottom Part - Purpose */}
              <motion.div
                className="absolute w-full h-full overflow-hidden"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{
                  clipPath: hoveredSection === 'purpose' ? 'inset(68.4% 0 0 0)' : 'inset(100% 0 0 0)',
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                <img
                  src={require('../assests/images/about.jpg')}
                  alt="Sanket Reddy Portrait Bottom"
                  className="w-full h-full object-cover object-bottom"
                />
              </motion.div>

              {/* Divider Lines (only when hovering) */}
              {hoveredSection && (
                <>
                  <motion.div
                    className="absolute left-0 right-0 bg-white h-px z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      top: '34.4%',
                      transition: { delay: 0.2 }
                    }}
                  />
                  <motion.div
                    className="absolute left-0 right-0 bg-white h-px z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      top: '68.4%',
                      transition: { delay: 0.2 }
                    }}
                  />
                </>
              )}
            </div>

            {/* Right Side - Three Sections */}
            <div className="w-full md:w-1/2 h-full flex flex-col hero-content">
              {/* Passion Section */}
              <motion.div 
                className="flex-1 relative group cursor-pointer"
                onClick={() => scrollToSection(1)}
                onMouseEnter={() => handleHoverStart('passion')}
                onMouseLeave={handleHoverEnd}
                onTouchStart={() => handleHoverStart('passion')}
                onTouchEnd={handleHoverEnd}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 to-amber-700/50" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8 text-center">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-4 text-white passion-title"
                    style={{paddingTop:'10px'}}
                  >
                    Passion
                  </motion.h2>
                  <motion.p 
                    className="text-lg md:text-xl text-white mb-6"
                  >
                    My creative pursuits and artistic endeavors
                  </motion.p>
                </div>
              </motion.div>

              {/* Profession Section */}
              <motion.div 
                className="flex-1 relative group cursor-pointer"
                onClick={() => scrollToSection(2)}
                onMouseEnter={() => handleHoverStart('profession')}
                onMouseLeave={handleHoverEnd}
                onTouchStart={() => handleHoverStart('profession')}
                onTouchEnd={handleHoverEnd}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-700/50" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8 text-center">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-4 text-white profession-title"
                    style={{paddingTop:'10px'}}
                  >
                    Profession
                  </motion.h2>
                  <motion.p 
                    className="text-lg md:text-xl text-white mb-6"
                  >
                    My professional work and business ventures
                  </motion.p>
                </div>
              </motion.div>

              {/* Purpose Section */}
              <motion.div 
                className="flex-1 relative group cursor-pointer"
                onClick={() => scrollToSection(3)}
                onMouseEnter={() => handleHoverStart('purpose')}
                onMouseLeave={handleHoverEnd}
                onTouchStart={() => handleHoverStart('purpose')}
                onTouchEnd={handleHoverEnd}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-700/50" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8 text-center">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-4 text-white purpose-title"
                    style={{paddingTop:'10px'}}
                  >
                    Purpose
                  </motion.h2>
                  <motion.p 
                    className="text-lg md:text-xl text-white mb-6"
                  >
                    My mission and conservation efforts
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section 
        className="w-full relative py-0"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className={`section ${currentSection === 1 ? 'active' : ''}`}>
          <Parallax 
            strength={500} 
            style={{ height: '100vh', backgroundColor:'#18181b'}}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center mt-16 md:mt-20">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-white" style={{marginTop:'100px'}}
              >
                Passion
              </motion.h1>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch px-4 w-full max-w-6xl">
                {passionItems.map((item, index) => {
                  // Determine the animation state based on current section and hover state
                  const isHovered = hoveredPassionIndex === index;
                  const isFirstItem = index === 0;
                  
                  let targetAnimate = {};

                  // Base state when section is active
                  if (currentSection === 1) {
                    // Default state for others when no item is explicitly hovered, or when another item is hovered
                    targetAnimate = {
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1,
                      y: 0,
                      boxShadow: 'none',
                      borderColor: 'transparent'
                    };

                    // State for the first item when no item is explicitly hovered
                    if (isFirstItem && hoveredPassionIndex === null) {
                       targetAnimate = {
                          opacity: 1,
                          x: 0,
                          rotateY: 0,
                          scale: 1,
                          y: isMobile ? 0 : -15,
                          boxShadow: isMobile ? "none" : "0 20px 50px -5px rgba(245, 158, 11, 0.3)",
                          borderColor: isMobile ? "transparent" : "rgba(245, 158, 11, 0.5)"
                       };
                    }

                    // Hovered state for the currently hovered item
                    if (isHovered) {
                       targetAnimate = {
                          opacity: 1,
                          x: 0,
                          rotateY: 0,
                          scale: 1,
                          y: isMobile ? 0 : -15,
                          boxShadow: isMobile ? "none" : "0 20px 50px -5px rgba(245, 158, 11, 0.3)",
                          borderColor: isMobile ? "transparent" : "rgba(245, 158, 11, 0.5)"
                       };
                    }
                  }

                  return (
                    <motion.div
                      key={item.title}
                      className={`flex-1 min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden ${item.bgColor} p-6 md:p-8 flex flex-col relative border-2 border-transparent`}
                      initial={{ opacity: 0, x: -100, rotateY: -90, scale: 0.9 }}
                      animate={targetAnimate}
                      transition={{ 
                        duration: 0.8, 
                        delay: currentSection === 1 ? index * 0.2 : 0, // Apply staggered delay only when section becomes active
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      onMouseEnter={() => setHoveredPassionIndex(index)}
                      onMouseLeave={() => setHoveredPassionIndex(null)}
                    >
                      <motion.div 
                        className="text-4xl md:text-6xl mb-4 md:mb-6 relative z-10"
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      <motion.h2 
                        className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        {item.title}
                      </motion.h2>
                      
                      <motion.p 
                        className="text-base md:text-lg mb-6 text-white/80 flex-grow relative z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div
                        className="mt-auto relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        whileHover={{ 
                          scale: isMobile ? 1 : 1.05,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: { duration: 0.1 }
                        }}
                      >
                        <Button 
                          asChild
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                          size={isMobile ? "sm" : "default"}
                        >
                          <Link to={item.link}>
                            <span>Visit Website</span>
                            <ExternalLink className="ml-2 h-4 w-4 inline-block" />
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Profession Section */}
      <section 
        className="w-full relative py-0 min-h-screen overflow-hidden"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className={`section ${currentSection === 2 ? 'active' : ''}`}>
          <div className="absolute inset-0 z-0 bg-zinc-900">
            {/* <GalaxyBackground /> */}
          </div>
          
          <div className="absolute inset-0 bg-black/40 z-1" />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center py-12 md:py-0">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-white pt-12 md:pt-20"
            >
              Profession
            </motion.h1>
            
            <div className="space-y-12 md:space-y-24 px-4">
              {professionItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div
                    className={`w-full md:w-1/2 h-48 md:h-64 lg:h-96 rounded-xl overflow-hidden ${item.bgColor} flex items-center justify-center`}
                    whileHover={{ scale: isMobile ? 1 : 1.03 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {/* Optional: Add an icon or image here */}
                  </motion.div>

                  <div className="w-full md:w-1/2">
                    <motion.h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-amber-400"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild
                        variant="outline" 
                        className="bg-transparent text-white border-white hover:bg-white/10"
                        size={isMobile ? "sm" : "default"}
                      >
                        <Link to={item.link}>
                          Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section 
        className="w-full relative py-0"
        ref={(el) => (sectionRefs.current[3] = el)}
      >
        <div className={`section ${currentSection === 3 ? 'active' : ''}`}>
          <Parallax 
            strength={500} 
            style={{ height: '100vh', backgroundColor:'#ffffff'}}
          >
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Animated floating particles in background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-amber-400/30 rounded-full"
                  style={{
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: Math.random() * 15 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center py-12 md:py-0">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-black pt-12 md:pt-20"
            >
              Purpose
            </motion.h1>
              
              <motion.div 
                className="p-6 md:p-8 lg:p-12 rounded-xl bg-black/70 backdrop-blur-sm border border-gray-700 max-w-3xl w-full relative overflow-hidden mx-4"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  boxShadow: isMobile ? "none" : "0 20px 50px 60px rgba(245, 23, 11, 0.3)",
                  borderColor: isMobile ? "rgba(255,255,255,0.5)" : "rgba(245, 158, 11, 0.5)"
                }}
              >
                {/* Animated border effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: isMobile ? 0 : 1,
                    borderColor: "rgba(245, 158, 11, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.h2 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center text-amber-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {purposeItems[0].title}
                </motion.h2>
                
                <motion.p 
                  className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-300 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {purposeItems[0].description}
                </motion.p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild
                      className="bg-amber-600 hover:bg-amber-700 text-white relative overflow-hidden"
                      size={isMobile ? "sm" : "default"}
                    >
                      <Link to={purposeItems[0].link}>
                        {/* Button hover effect */}
                        <motion.span 
                          className="absolute inset-0 bg-amber-500 opacity-0"
                          whileHover={{ opacity: isMobile ? 0 : 0.2, scale: 1.5 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center">
                          Learn More 
                          <motion.span
                            animate={{
                              x: [0, 5, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </motion.span>
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.05,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild
                      variant="outline" 
                      className="bg-transparent text-white border-white hover:bg-white/10 relative overflow-hidden"
                      size={isMobile ? "sm" : "default"}
                    >
                      <Link to="https://obaps.in/tnr">
                        {/* Button hover effect */}
                        <motion.span 
                          className="absolute inset-0 bg-white opacity-0"
                          whileHover={{ opacity: isMobile ? 0 : 0.1, scale: 1.5 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center">
                          Donate Now 
                          <motion.span
                            animate={{
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </motion.span>
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Footer Section */}
      <div 
        className="w-full"
        ref={(el) => (sectionRefs.current[4] = el)}
        style={{paddingTop: isMobile ? '100px' : '200px'}}
      >
        <div className={`footer-section ${currentSection === 4 ? 'active' : ''}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
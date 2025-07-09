"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Button from "../components/ui/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Parallax } from 'react-parallax'

const passionItems = [
  {
    title: "Fire Ant Studios",
    description: "Innovative architectural solutions that blend nature with modern living",
    link: "https://fireantstudios.in/",
    bgColor: "bg-gradient-to-br from-amber-800 to-amber-600",
    
    logo: require("../assests/images/logos/FireAnt_Studios_Black.png")
  },
  {
    title: "Sanket Reddy's ViewFinder",
    description: "Creative design studio specializing in sustainable spaces",
    link: "/gallery",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-600",
    logo: require("../assests/images/logos/sanket_Viewfinder.png") // Using empty image for photography since no specific logo
  }
]

const professionItems = [
  {
    title: "Firefly Spaces",
    description: "Innovative architectural solutions that blend nature with modern living",
    link: "/firefly-spaces",
    bgColor: "bg-gradient-to-br from-amber-800 to-amber-600",
    logo: require("../assests/images/logos/Firefly_Spaces_White.png")
  },
  {
    title: "Firefly Studios",
    description: "Creative design studio specializing in sustainable spaces",
    link: "/firefly-studios",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-600",
    logo: require("../assests/images/logos/Firefly_Studios_White.png")
  },
  {
    title: "True North Realty",
    description: "Premium real estate services with a conservation focus",
    link: "/true-north",
    bgColor: "bg-gradient-to-br from-blue-800 to-blue-600",
    logo: require("../assests/images/logos/True_North_Reality_White.png")
  },
  {
    title: "Benki Hospitality ",
    description: "Premium real estate services with a conservation focus",
    link: "/true-north",
    bgColor: "bg-gradient-to-br from-blue-800 to-blue-600",
    logo: require("../assests/images/logos/Benki.png")
  }
]

const purposeItems = [
  {
    title: "The Next Root Foundation",
    description: "Supporting wildlife conservation and community initiatives",
    link: "https://obaps.in/tnr",
    bgColor: "bg-gradient-to-br from-blue-800 to-blue-600",
    logo: require("../assests/images/logos/The_Next_Root_Logo.png") // Using empty image for TNR Trust since no specific logo
  }
]

export default function LandingPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredPassionItem, setHoveredPassionItem] = useState(0); // 0 for Fire Ant Studios (default hover), 1 for Photography
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

  // Smooth scrolling effect (desktop only)
  useEffect(() => {
    if (isMobile) return; // Disable on mobile
    const handleWheel = (e) => {
      if (isScrolling.current) return;
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
  }, [currentSection, isMobile]);

  // Scroll to current section (desktop only)
  useEffect(() => {
    if (isMobile) return;
    sectionRefs.current[currentSection]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'nearest'
    });
  }, [currentSection, isMobile]);

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
          scroll-padding-top: 80px;
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
          html, body {
            overflow-x: hidden !important;
            width: 100vw !important;
            max-width: 100vw !important;
          }
          .section, .section.active, .footer-section, .footer-section.active {
            opacity: 1 !important;
            transform: none !important;
            height: auto !important;
            min-height: unset !important;
          }
          /* HERO SECTION MOBILE LAYOUT */
          .hero-mobile-grid {
            display: flex !important;
            flex-direction: row !important;
            width: 100vw !important;
            height: 100vh !important;
            min-height: 320px;
            box-sizing: border-box !important;
          }
          .hero-mobile-image {
            width: 50vw !important;
            height: 100% !important;
            position: relative !important;
            box-sizing: border-box !important;
          }
          .hero-mobile-blocks {
            width: 50vw !important;
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            box-sizing: border-box !important;
          }
          .hero-mobile-block {
            flex: 1 1 0 !important;
            min-height: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.5rem !important;
            box-sizing: border-box !important;
          }
          /* Passion section: responsive grid for mobile */
          .passion-mobile-cards {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            width: 100% !important;
          }
          @media (min-width: 768px) {
            .passion-mobile-cards {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          .passion-title, .profession-title, .purpose-title, h1, h2 {
            font-size: 2rem !important;
            line-height: 2.2rem !important;
          }
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section 
        className={isMobile ? "hero-mobile-grid" : "relative w-full h-screen overflow-hidden"}
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className={`section ${currentSection === 0 || isMobile ? 'active' : ''}`}>
          <div className={isMobile ? undefined : "absolute inset-0 bg-black/20"} />
          {isMobile ? (
            <div className="hero-mobile-image" style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
              <img
                src={require('../assests/images/about.jpg')}
                alt="Sanket Reddy Portrait"
                style={{ width: '100vw', height: '100vh', objectFit: 'cover', display: 'block', position: 'relative', margin: 0, padding: 0 }}
              />
              {/* Passion (eye area) */}
              <div style={{
                position: 'absolute',
                top: '18%',
                left: '55%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 2
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Passion</div>
                <div style={{ color: '#fff', opacity: 0.8, fontSize: '0.95rem', fontWeight: 400, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>My creative pursuits and artistic endeavors</div>
              </div>
              {/* Profession (mouth area) */}
              <div style={{
                position: 'absolute',
                top: '60%',
                left: '60%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 2
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Profession</div>
                <div style={{ color: '#fff', opacity: 0.8, fontSize: '0.95rem', fontWeight: 400, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>My professional work and business ventures</div>
              </div>
              {/* Purpose (heart area) */}
              <div style={{
                position: 'absolute',
                top: '75%',
                left: '30%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 2
              }}>
                <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Purpose</div>
                <div style={{ color: '#fff', opacity: 0.8, fontSize: '0.95rem', fontWeight: 400, textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>My mission and conservation efforts</div>
              </div>
            </div>
          ) : (
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
              <div className="w-full md:w-1/2 h-full flex flex-col hero-content" style={isMobile ? { height: 'auto', minHeight: 'unset' } : {}}>
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
                  whileHover={{ 
                    backgroundColor: isMobile ? 'transparent' : 'rgba(180, 83, 9, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 to-amber-700/50" />
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8 text-center">
                    <motion.h2 
                      className="text-4xl md:text-6xl font-bold mb-4 text-amber-300 group-hover:text-amber-100 transition-colors passion-title"
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      style={{paddingTop:'10px'}}
                    >
                      Passion
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl text-white/80 mb-6 group-hover:text-white transition-colors"
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
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
                  whileHover={{ 
                    backgroundColor: isMobile ? 'transparent' : 'rgba(56, 101, 56, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-700/50" />
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8 text-center">
                    <motion.h2 
                      className="text-4xl md:text-6xl font-bold mb-4 text-gray-300 group-hover:text-gray-100 transition-colors profession-title"
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      style={{paddingTop:'10px'}}
                    >
                      Profession
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl text-white/80 mb-6 group-hover:text-white transition-colors"
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
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
                  whileHover={{ 
                    backgroundColor: isMobile ? 'transparent' : 'rgba(30, 64, 175, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-700/50" />
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 md:p-8 text-center">
                    <motion.h2 
                      className="text-4xl md:text-6xl font-bold mb-4 text-blue-300 group-hover:text-blue-100 transition-colors purpose-title"
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      style={{paddingTop:'10px'}}
                    >
                      Purpose
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl text-white/80 mb-6 group-hover:text-white transition-colors"
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
                    >
                      My mission and conservation efforts
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Passion Section */}
      <section 
        className="w-full relative py-0"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className={`section ${currentSection === 1 || isMobile ? 'active' : ''}`}>
          <Parallax 
            strength={500} 
            style={{ height: '100vh', backgroundColor:'#ffffff'}}
          >
            <div className="absolute inset-0 bg-gray-100/40" />
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center bg-gray-100/50 rounded-lg pt-16 md:pt-24">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-black pt-20 md:pt-32"
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Passion
              </motion.h1>
              
              <div className={isMobile ? "passion-mobile-cards" : "flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch px-4 pt-8 md:pt-16"}>
                {passionItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={`flex-1 min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden ${item.bgColor} p-6 md:p-8 flex flex-col justify-center items-center relative`}
                    initial={{ opacity: 0, x: -100, rotateY: -90, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    animate={{ 
                      y: hoveredPassionItem === index ? (isMobile ? 0 : -15) : 0,
                      boxShadow: hoveredPassionItem === index ? (isMobile ? "none" : "0 20px 50px -5px rgba(245, 158, 11, 0.3)") : "none",
                      borderColor: hoveredPassionItem === index ? (isMobile ? "transparent" : "rgba(245, 158, 11, 0.5)") : "transparent"
                    }}
                    onHoverStart={() => setHoveredPassionItem(index)}
                    onHoverEnd={() => setHoveredPassionItem(0)} // Always return to Fire Ant Studios hover state
                  >
                    <motion.div 
                      className="w-15 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      {item.icon ? (
                        <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{item.icon}</span>
                      ) : (
                        <img 
                          src={item.logo} 
                          alt={`${item.title} logo`}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </motion.div>
                    
                    <motion.h2 
                      className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-amber-500 relative z-10 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {item.title}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-base md:text-lg mb-6 text-black flex-grow relative z-10 text-justify text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {item.description}
                    </motion.p>
                    
                    <motion.div
                      className="mt-auto relative z-10 text-center"
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
                        className="bg-transparent text-black border-black hover:bg-black/10"
                        size={isMobile ? "sm" : "default"}
                      >
                        <Link to={item.link}>
                          <motion.span
                            animate={{
                              x: [0, 2, 0, -2, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            {item.title === "Photography" ? "Visit Insite" : "Visit Website"}
                          </motion.span>
                          <ExternalLink className="ml-2 h-4 w-4 inline-block" />
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Profession Section */}
      <section 
        className="w-full relative py-0 min-h-screen overflow-hidden pt-20 md:pt-32"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <div className={`section ${currentSection === 2 || isMobile ? 'active' : ''}`}>
          {/* Animated/Parallax Background */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="w-full h-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ filter: 'blur(2px)' }}
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start items-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-center text-white pt-2 md:pt-4"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}
            >
              Profession
            </motion.h1>
            <div className="w-full bg-gray-900/90 rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center items-stretch px-4 pt-8 md:pt-16">
              {professionItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={
                     `flex-1 min-h-[500px] md:min-h-[650px] min-w-[360px] max-w-xl rounded-xl overflow-hidden p-12 md:p-20 pt-8 md:pt-12 flex flex-col justify-center items-center relative bg-white/10 border border-white/10 shadow-2xl m-2 transition-all duration-500 ` +
                     `hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:border-amber-400/40`
                  }
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2, type: "spring", stiffness: 120 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{
                    scale: isMobile ? 1 : 1.04,
                    boxShadow: isMobile ? "none" : "0 8px 32px 0 rgba(245, 158, 11, 0.25)",
                    borderColor: isMobile ? "rgba(255,255,255,0.1)" : "rgba(251,191,36,0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glassmorphism Layer */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl z-0" style={{ borderRadius: 'inherit' }} />
                  {/* Glow border on hover */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      boxShadow: '0 0 40px 8px rgba(251,191,36,0.12)',
                      border: '2px solid rgba(251,191,36,0.18)'
                    }}
                  />
                  {/* Logo/Icon */}
                  <div className="relative w-16 h-16 mb-4 flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20 pt-6 md:pt-10">
                    <img 
                      src={item.logo} 
                      alt={`${item.title} logo`}
                      className="w-16 h-12 object-contain"
                    />
                  </div>
                  {/* Title */}
                  <motion.h2
                    className="relative z-10 text-2xl md:text-3xl font-bold mb-2 text-amber-400 tracking-wider text-center drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
                  >
                    {item.title}
                  </motion.h2>
                  {/* Description (reveals on hover) */}
                  <motion.p
                    className="relative z-10 text-base md:text-lg mb-4 text-white/80 text-center transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>
                  {/* CTA Button (reveals on hover) */}
                  <motion.div
                    className="relative z-10 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      asChild
                      variant="outline" 
                      className="bg-white/10 text-white border-white/30 hover:bg-amber-400/10 hover:text-amber-400 hover:border-amber-400/60 transition-all duration-300 shadow-md backdrop-blur-md px-6 py-2 text-lg font-semibold tracking-wide"
                      size={isMobile ? "sm" : "default"}
                    >
                      <Link to={item.link}>
                        <motion.span
                          animate={{ x: [0, 4, 0, -4, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                        >
                          Visit Website
                        </motion.span>
                        <ExternalLink className="ml-2 h-4 w-4 inline-block" />
                      </Link>
                    </Button>
                  </motion.div>
                  <div className="w-full h-full flex flex-col justify-center items-center p-8 md:p-10">
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
        <div className={`section ${currentSection === 3 || isMobile ? 'active' : ''}`}>
          <Parallax 
            strength={500} 
            style={{ height: '100vh', backgroundColor:'#ffffff'}}
          >
            <div className="absolute inset-0 bg-black/60" />
            

            
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center py-12 md:py-0">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center text-black pt-12 md:pt-20"
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Purpose
              </motion.h1>
              
              <motion.div 
                className="p-6 md:p-8 lg:p-12 rounded-xl bg-black/70 backdrop-blur-sm border border-gray-700 max-w-3xl w-full relative overflow-hidden mx-4 pt-20 md:pt-32"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Logo */}
                <motion.div 
                  className="w-16 h-12 md:w-16 md:h-16 mx-auto mb-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {purposeItems[0].icon ? (
                    <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{purposeItems[0].icon}</span>
                  ) : (
                    <img 
                      src={purposeItems[0].logo} 
                      alt={`${purposeItems[0].title} logo`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </motion.div>
                
                {/* Removed animated border effect */}
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
                      <Link to="/donate">
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
        className="w-full flex justify-center items-center"
        ref={(el) => (sectionRefs.current[4] = el)}
        style={{ margin: 0, padding: 0, minHeight: 0, background: '#18181b' }}
      >
        <div className={`footer-section ${currentSection === 4 || isMobile ? 'active' : ''}`} style={{ margin: 0, padding: 0, paddingTop:250,minHeight: 0, background: 'transparent', width: '100%' }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

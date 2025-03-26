import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Star, ChevronDown } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import BuzzAssistant from "./BuzzAssistant";


const SolarSystemPortfolio = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [currentSection, setCurrentSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = {
    Home: {
      title: "Welcome to My Universe",
      content: "Full-Stack Developer & Space Enthusiast",
    },
    About: {
      title: "Greetings, Traveler! I'm Om",
      content: "Your guide through the cosmic realm of technology and innovation. As a Full-Stack Developer and Blockchain Enthusiast, I've been exploring the galaxies of code, crafting solutions that aim to take technology to infinity and beyond.Currently navigating my B.Tech journey in Computer Science and Engineering at MITS, Gwalior, I've mastered skills in the MERN stack, blockchain integration, and cloud platforms like AWS and Firebase. My mission is to bridge creativity and technology while solving challenges that spark curiosity."
    },
    Missions: {
      title: "Missions",
      items: [
        {
          name: "OpenD - NFT Marketplace",
          description: "NFT marketplace with features like minting, viewing, buying, and selling NFTs. Integrated with DSurv tokens for purchases through idlfactory.",
          linkedInPost: "https://www.linkedin.com/posts/om-bhayde-66a643253_blockchain-nfts-mernstack-activity-7228621828108296192-qF6v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6Qk_IBavu7Kz4fsLor-DcA3GdwFPdI4Cg",
          techStack: "MERN Stack, Motoko, Blockchain, DSurv"
        },
        {
          name: "VartaLaap - Canva Chat App",
          description: "Real-time chat application for Canva that enables teams to create rooms, share room keys, and discuss projects seamlessly within the platform.",
          linkedInPost: "https://www.linkedin.com/posts/tanmay-sawankar-57a945223_canvaapp-realtimecollaboration-productivity-ugcPost-7230851527005900800-_JAC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6Qk_IBavu7Kz4fsLor-DcA3GdwFPdI4Cg",
          techStack: "React, TypeScript, Socket.IO, Canva SDK",
          demoLink: "https://lnkd.in/d2GPiMCb",
          repoLink: "https://lnkd.in/dRR5UKrT",
          galleryLink: "https://lnkd.in/dDpSqbrx"
        },
        {
          name: "Black Hole - Data Analytics Tool",
          description: "Data processing engine that transforms and analyzes information at scale. Uses machine learning to derive insights from complex datasets.",
          linkedInPost: "https://www.linkedin.com/posts/om-bhayde-66a643253_blockchain-crypto-webdevelopment-activity-7224011700901994496-OUJ7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6Qk_IBavu7Kz4fsLor-DcA3GdwFPdI4Cg",
          techStack: "MERN Stack, Motoko, Blockchain"
        }
      ]
    },
    "Cosmic Power": {
      title: "Cosmic Powers",
      items: [
        "React/Next.js",
        "Node.js",
        "Python",
        "AWS"
      ]
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a section is selected
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

<>
      {/* Front Meteor */}
      <div className="meteor-container meteor-front fixed top-0 left-0 pointer-events-none z-50">
        <img 
          src="/images/met.gif" 
          alt="Front Meteor" 
          className="meteor-animation meteor-front-animation w-24 h-24 object-contain"
        />
      </div>

      {/* Background Meteor 1 - Left */}
      <div className="meteor-container meteor-bg-left fixed top-0 left-0 pointer-events-none z-10">
        <img 
          src="/images/met.gif" 
          alt="Background Meteor Left" 
          className="meteor-animation meteor-bg-left-animation w-16 h-16 object-contain"
        />
      </div>

      {/* Background Meteor 2 - Right */}
      <div className="meteor-container meteor-bg-right fixed top-0 left-0 pointer-events-none z-10">
        <img 
          src="/images/met.gif" 
          alt="Background Meteor Right" 
          className="meteor-animation meteor-bg-right-animation w-16 h-16 object-contain"
        />
      </div>
    </>
      {/* Animated stars background */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star-container absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`
            }}
          >
            <div 
              className="star"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.6})`,
                boxShadow: `0 0 ${Math.random() * 4 + 1}px rgba(255, 255, 255, 0.8)`,
                borderRadius: '50%',
                animation: `
                  twinkle ${Math.random() * 3 + 2}s infinite alternate-reverse,
                  pulse ${Math.random() * 2 + 1}s infinite alternate
                `
              }}
            />
          </div>
        ))}
      </div>
      <BuzzAssistant currentSection={currentSection} />
      
      <div className="angry-image-container">
        <img
          src="/images/angry.png"
          alt="Angry Character"
          className="angry-image"
        />
      </div>
      
      <div className="angry3-image-container">
        <img
          src="/images/angry3.png"
          alt="Angry Character 3"
          className="angry-image"
        />
      </div>
     
      {/* Nebula effect */}
      <div className="fixed inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="nebula"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              background: `radial-gradient(circle at center, 
                rgba(${Math.random() * 50 + 30}, ${Math.random() * 50 + 30}, ${Math.random() * 100 + 155}, 0.1) 0%,
                transparent 70%)`,
              animation: `nebula-float ${Math.random() * 20 + 30}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
{/* Navigation */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Logo for all devices */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-black rounded-lg overflow-hidden">
                <img 
                  src="/images/as1.gif"
                  alt="Portfolio Universe GIF"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl md:text-3xl font-bold text-blue-400">
                Om's Universe
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu} 
                className="text-white focus:outline-none"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex space-x-6">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`transition-all duration-300 hover:text-blue-400 relative text-xl ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-md">
              <div className="flex flex-col items-center py-4 space-y-4">
                {Object.keys(sections).map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionChange(section)}
                    className={`transition-all duration-300 hover:text-blue-400 text-xl ${
                      activeSection === section ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>




      {/* Main content */}
      <div className="h-screen pt-16 md:pt-0 flex flex-col">
        <div className="flex-1 container mx-auto px-4 md:px-6 flex items-center justify-center">
          <div className="relative w-full flex flex-col items-center">
            
          {/* Solar system */}
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 md:w-96 h-64 md:h-96">
                {/* Sun */}
                <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" 
                    style={{
                        boxShadow: '0 0 60px #ff6b01, 0 0 100px #ff6b01'
                    }}
                />
                </div>

                {/* Orbits and planets */}
                {[...Array(8)].map((_, i) => {
                const planetNames = [
                    "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
                ];

                return (
                    <div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                        width: `${(i + 2) * 60}px`, // Adjust orbit size
                        height: `${(i + 2) * 60}px`, 
                        transform: 'translate(-50%, -50%)',
                        animation: `orbit ${15 + i * 4}s linear infinite`, // Different speeds for each planet's orbit
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    >
                    <div
                        className="absolute planet-glow"
                        style={{
                        width: `${i * 2 + 10}px`, // Adjust planet size
                        height: `${i * 2 + 10}px`,
                        top: '0%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: [
                            'gray',      // Mercury
                            'yellow',    // Venus
                            'blue',      // Earth
                            'red',       // Mars
                            'brown',     // Jupiter
                            'yellow',    // Saturn
                            'cyan',      // Uranus
                            'blue',      // Neptune
                        ][i],
                        borderRadius: '50%',
                        boxShadow: `0 0 20px ${['gray', 'yellow', 'blue', 'red', 'brown', 'yellow', 'cyan', 'blue'][i]}`,
                        animation: `planet ${15 + i * 4}s linear infinite`,
                        zIndex: 10, // Ensure planets are on top
                        }}
                    />

                    {/* Planet Names */}
                    <div
                        className="absolute text-xs text-white font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100"
                        style={{
                        top: '120%',   // Position the name below the planet
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animation: `orbit ${15 + i * 4}s linear infinite`, // Planet names move with the planets
                        zIndex: 20,    // Ensure names are above planets
                        }}
                    >
                        {planetNames[i]}
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
            <div className="fixed right-[-80px] top-[500px] spinning-boulder" 
  style={{ width: '350px', height: '350px' }}>
              <img
                src="/images/boulder.svg"
                alt="Spinning Boulder"
                className="w-full h-full animate-spin-slow"
              />
            </div>

            





          {/* Content sections - Removed blur effect */}
          <div className="text-center z-10 space-y-4 bg-transparent/40 p-4 rounded-lg border border-black/5 relative overflow-hidden">
          <h1
    className={`text-4xl font-bold leading-tight -mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 neon-effect ${
      activeSection === "About" || activeSection === "Missions" || activeSection === "Cosmic Power" ? "text-center" : "text-left"
    } `}
  >
    {sections[activeSection].title}
  </h1>

  {activeSection === 'Home' ? (
    <>
      <p className="text-xl text-gray-300 animate-fade-in typewriter">
        I'm a{' '}
        <span
          className="typewriter-text"
          data-text="Full-Stack Developer..., Software Developer Enthusiast..., Space Enthusiast..."
        ></span>
      </p>
      <TypewriterEffect />
    </>
  ) : activeSection === 'About' ? (
    
    <div className="flex flex-col md:flex-row items-center relative justify-center w-full max-w-7xl mx-auto">
  <img
    src="/images/om21.png"
    alt="Om"
    className="floating-image floating"
  />
  <div className="w-full md:w-4/5 lg:w-5/6 xl:w-11/12 md:pl-64 mt-48 md:mt-0">
    <div 
      className="h-60 md:h-auto overflow-y-scroll md:overflow-visible pr-4 cosmic-scrollbar" 
    >
      <div className="cosmic-text-container"> 
        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-300 leading-relaxed text-justify px-4 md:px-6 cosmic-text">
          {sections[activeSection].content}
        </p>
        
        {/* Invisible spacer to ensure scrolling */}
        <div className="h-40 invisible">Spacer content</div>
      </div>
    </div>
  </div>
</div>
  ) : activeSection === 'Missions' ? (
    <div 
                  className="space-mission-control relative animate-fade-in py-4" 
                  style={{
                    height: "auto", 
                    maxHeight: "480px", 
                    overflowY: "hidden"
                  }}
                >
      {/* Space Warp Background Effect */}
      <div className="absolute inset-0 space-warp-bg">
        <div className="warp-stars"></div>
        {/* Animated nebula clouds */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="nebula-cloud"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(ellipse at center, 
                rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255 + 100)}, 0.15),
                rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255 + 100)}, 0.05) 70%)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.4,
              animation: `nebula-float ${Math.random() * 40 + 80}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Scanline effect */}
      <div className="scanline"></div>
      
      <div className="mission-header mb-4 relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="tech-circle w-32 h-32 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
          <div className="tech-circle w-36 h-36 border border-purple-500/10 rounded-full animate-reverse-spin"></div>
        </div>
        
        <h3 className="cosmic-transmission text-center text-xl relative z-10">
          <div className="digital-glitch">COSMIC MISSIONS DATABASE</div>
          <span className="transmission-prefix text-xs">// CLASSIFIED INFORMATION //</span>
          <div className="cosmic-coordinates text-xs flex justify-center gap-4 text-blue-300 opacity-80 mt-1">
            <span>SECTOR: DELTA-9</span>
            <span>ACCESS LEVEL: ALPHA</span>
            <span className="blink">STATUS: ACTIVE</span>
          </div>
        </h3>
        
        {/* Tech UI Decorations */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
          <div className="flex justify-between px-8">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Mission projects grid layout */}
      <div className="mission-grid max-w-5xl mx-auto px-2 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-2">
          <div className="grid-lines"></div>
        </div>
        
        {/* Custom scrolling container with styled scrollbar */}
        <div className="custom-scrollbar overflow-y-auto pr-1" style={{maxHeight: "340px"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2">
            {sections[activeSection].items.map((item, idx) => {
              // For Missions section, items are now objects
              const projectName = item.name;
              const projectDesc = item.description;
              const linkedInUrl = item.linkedInPost;
              const techStack = item.techStack;
              
              return (
                <div key={idx} className="mission-pod group relative">
                  {/* Targeting reticle animation on hover */}
                  <div className="absolute -inset-2 targeting-reticle opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="reticle-h"></div>
                    <div className="reticle-v"></div>
                    <div className="reticle-corner reticle-tl"></div>
                    <div className="reticle-corner reticle-tr"></div>
                    <div className="reticle-corner reticle-bl"></div>
                    <div className="reticle-corner reticle-br"></div>
                  </div>
                  
                  {/* Hover effect spaceship */}
                  <div className="mission-craft absolute -top-6 -right-6 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <img src="/images/ufo.gif" alt="Mission craft" className="w-full h-full" />
                  </div>
                  
                  <div className="mission-capsule relative bg-black/40 backdrop-blur-md border border-blue-500/20 p-3 rounded-lg hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] h-full group-hover:border-blue-400/50 transform perspective-900 group-hover:rotate-y-3 group-hover:rotate-x-2">
                    {/* Holographic flickering effect overlay */}
                    <div className="absolute inset-0 hologram-flicker rounded-lg overflow-hidden opacity-30"></div>
                    
                    {/* Interactive particle stars in background */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      <div className="interactive-stars-bg"></div>
                    </div>
                    
                    {/* Mission status indicator with pulse effect */}
                    <div className="mission-status-indicator absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 shadow-glow-green z-20">
                      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50"></div>
                    </div>
                    
                    <div className="mission-status flex items-center text-xs text-green-400 font-mono mb-1 border-b border-blue-500/30 pb-1">
                      <div className="terminal-prefix mr-1 text-xs">$_</div>
                      ID: <span className="ml-1 text-blue-300 font-bold text-xs">CSMK-{(idx+1).toString().padStart(3, '0')}</span>
                      <span className="ml-auto blink text-yellow-400 text-xs">ACTIVE</span>
                    </div>
                    
                    <div className="mission-title-container mb-1 relative">
                      <h3 className="text-blue-300 text-sm font-bold glitch-subtle">{projectName}</h3>
                      <div className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    </div>
                    
                    <p className="text-xs text-gray-300 mt-1 mb-2 terminal-text">{projectDesc}</p>
                    
                    {/* Tech Stack */}
                    <div className="tech-stack-tag mt-1 mb-2">
                      <div className="text-xs text-blue-200/70 font-mono">TECH: {techStack}</div>
                    </div>
                    
                    {/* Fancy metrics display */}
                    <div className="mission-metrics grid grid-cols-2 gap-1 mb-2">
                      <div className="metric-card bg-blue-900/20 border border-blue-500/30 rounded p-1">
                        <div className="text-xs text-blue-300/70">STABILITY</div>
                        <div className="flex">
                          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded" style={{width: `${Math.random() * 30 + 70}%`}}></div>
                        </div>
                      </div>
                      <div className="metric-card bg-blue-900/20 border border-blue-500/30 rounded p-1">
                        <div className="text-xs text-blue-300/70">SIGNAL</div>
                        <div className="flex">
                          <div className="h-1 bg-gradient-to-r from-green-500 to-green-300 rounded" style={{width: `${Math.random() * 20 + 80}%`}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mission-coordinates text-xs text-blue-200/80 font-mono mb-2 flex gap-2">
                      <div className="coordinate">
                        <span className="text-gray-500">LAT:</span> {(Math.random()*180-90).toFixed(2)}°
                      </div>
                      <div className="coordinate">
                        <span className="text-gray-500">LONG:</span> {(Math.random()*360-180).toFixed(2)}°
                      </div>
                    </div>
                    
                    <a 
                      href={linkedInUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transmission-button flex items-center justify-between bg-gradient-to-r from-blue-900/60 to-indigo-900/60 hover:from-blue-800/60 hover:to-indigo-800/60 text-white px-2 py-1 rounded text-xs transition-all border border-blue-500/30 group-hover:border-blue-400/50"
                    >
                      <span className="flex items-center">
                        <Linkedin className="h-3 w-3 mr-1" />
                        <span>ACCESS DETAILS</span>
                      </span>
                      <span className="text-xs text-blue-300">[LINKED-IN]</span>
                    </a>
                    
                    {/* Tech decoration elements */}
                    <div className="absolute bottom-1 right-1 w-6 h-6 border-b border-r border-blue-500/20 rounded-br-lg"></div>
                    <div className="absolute top-1 left-1 w-6 h-6 border-t border-l border-blue-500/20 rounded-tl-lg"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : activeSection === 'Cosmic Power' ? (
    <div className="cosmic-powers-section relative animate-fade-in py-4" style={{height: "480px"}}>
      {/* Enhanced Space Warp Background with cosmic anomalies */}
      <div className="absolute inset-0 space-warp-bg">
        <div className="warp-stars"></div>
        <div className="cosmic-energy-field"></div>
        
        {/* Animated planet elements */}
        <div className="distant-planet" style={{
          top: '15%',
          right: '8%',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(49,38,114,1) 0%, rgba(72,54,153,0.8) 50%, rgba(37,22,97,0) 100%)',
          boxShadow: '0 0 20px rgba(116,79,255,0.4)',
          borderRadius: '50%',
          animation: 'float 30s infinite alternate ease-in-out'
        }}></div>
        
        <div className="cosmic-wormhole" style={{
          left: '10%',
          bottom: '10%',
          width: '80px',
          height: '20px',
          background: 'radial-gradient(ellipse, rgba(156,69,255,0.2) 0%, rgba(46,21,79,0) 70%)',
          transform: 'rotate(45deg)',
          filter: 'blur(5px)',
          animation: 'pulse 8s infinite alternate ease-in-out'
        }}></div>
        
        {/* Enhanced nebula clouds with more vibrant colors */}
        {[...Array(7)].map((_, i) => (
          <div 
            key={i}
            className="nebula-cloud"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `radial-gradient(ellipse at center, 
                rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255 + 100)}, 0.2),
                rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255 + 100)}, 0.05) 70%)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.5,
              filter: 'blur(8px)',
              animation: `nebula-float ${Math.random() * 40 + 80}s linear infinite, nebula-pulse ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
            }}
          />
        ))}
        
        {/* Cosmic dust particles */}
        <div className="cosmic-dust"></div>
      </div>
      
      {/* Enhanced scanline effect with color variation */}
      <div className="scanline"></div>
      <div className="scanline scanline-blue" style={{animationDelay: '1.5s'}}></div>
      
      {/* Power grid overlay */}
      <div className="power-grid-overlay absolute inset-0 pointer-events-none">
        <div className="grid-lines"></div>
      </div>
      
      {/* Power system display with energy indicators */}
      <div className="power-system-status absolute top-2 right-2 z-10 hidden md:flex items-center gap-2">
        <div className="power-indicator pulse-slow">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-glow-blue"></div>
        </div>
        <div className="text-xs text-blue-300 font-mono">CORE SYSTEMS ONLINE</div>
      </div>
      
      <div className="cosmic-content h-full flex flex-col">
        {/* Languages Section with enhanced UI - more compact */}
        <div className="mb-3 relative">
          <div className="cosmic-section-header mb-3 relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="tech-circle w-24 h-24 border border-blue-500/20 rounded-full animate-spin-slow"></div>
              <div className="tech-circle w-28 h-28 border border-purple-500/10 rounded-full animate-reverse-spin"></div>
            </div>
            
            <h3 className="cosmic-transmission text-center text-lg relative z-10">
              <div className="digital-glitch">NEURAL LANGUAGE INTERFACES</div>
              <span className="transmission-prefix text-xs">// QUANTUM CODE SYNTHESIZERS //</span>
            </h3>
          </div>
          
          <div className="languages-grid flex justify-center gap-3 flex-wrap mt-2">
            {/* C++ with enhanced effects */}
            <div className="language-pod group relative">
              <div className="absolute -inset-1 targeting-reticle opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="reticle-h"></div>
                <div className="reticle-v"></div>
                <div className="reticle-corner reticle-tl"></div>
                <div className="reticle-corner reticle-tr"></div>
                <div className="reticle-corner reticle-bl"></div>
                <div className="reticle-corner reticle-br"></div>
              </div>
              
              {/* Orbital rings - smaller */}
              <div className="orbital-ring absolute -inset-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
              </div>
              
              <div className="language-capsule relative bg-gradient-to-br from-black/80 to-blue-950/30 backdrop-blur-md border border-blue-500/20 p-3 rounded-lg hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] h-full group-hover:border-blue-400/50 transform perspective-900 group-hover:rotate-y-3 group-hover:rotate-x-2">
                {/* Enhanced holographic effect */}
                <div className="absolute inset-0 hologram-flicker rounded-lg overflow-hidden opacity-40"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-lg overflow-hidden"></div>
                
                {/* Code symbols floating in background */}
                <div className="code-symbols absolute inset-0 overflow-hidden opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="symbol"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.3,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        fontSize: `${Math.random() * 8 + 6}px`,
                        color: 'rgba(59, 130, 246, 0.7)',
                        animation: `float-symbol ${Math.random() * 4 + 3}s infinite ease-in-out alternate, fade-pulse ${Math.random() * 2 + 2}s infinite alternate`
                      }}
                    >
                      {['{}', '<>', '[]', '||', '//', '++', '--', '**'][Math.floor(Math.random() * 8)]}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="lang-icon text-2xl font-bold text-blue-400 mb-1 relative group-hover:text-blue-300 transition-colors duration-300">
                    C++
                    <div className="absolute inset-0 blur-lg bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="proficiency-level bg-gradient-to-r from-blue-500/30 to-purple-500/30 px-2 py-0.5 rounded-full text-xs text-blue-200 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                    Proficient
                  </div>
                  
                  <div className="proficiency-meter mt-2 w-full bg-blue-900/30 h-1.5 rounded-full overflow-hidden border border-blue-500/20">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-4/5 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 power-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Python with enhanced effects */}
            <div className="language-pod group relative">
              <div className="absolute -inset-1 targeting-reticle opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="reticle-h"></div>
                <div className="reticle-v"></div>
                <div className="reticle-corner reticle-tl"></div>
                <div className="reticle-corner reticle-tr"></div>
                <div className="reticle-corner reticle-bl"></div>
                <div className="reticle-corner reticle-br"></div>
              </div>
              
              {/* Orbital rings */}
              <div className="orbital-ring absolute -inset-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="ring ring-1" style={{borderColor: 'rgba(16, 185, 129, 0.2)'}}></div>
                <div className="ring ring-2" style={{borderColor: 'rgba(16, 185, 129, 0.1)'}}></div>
              </div>
              
              <div className="language-capsule relative bg-gradient-to-br from-black/80 to-green-950/30 backdrop-blur-md border border-green-500/20 p-3 rounded-lg hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] h-full group-hover:border-green-400/50 transform perspective-900 group-hover:rotate-y-3 group-hover:rotate-x-2">
                {/* Enhanced holographic effect */}
                <div className="absolute inset-0 hologram-flicker rounded-lg overflow-hidden opacity-40" style={{filter: 'hue-rotate(120deg)'}}></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-lg overflow-hidden"></div>
                
                {/* Code symbols floating in background */}
                <div className="code-symbols absolute inset-0 overflow-hidden opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="symbol"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.3,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        fontSize: `${Math.random() * 8 + 6}px`,
                        color: 'rgba(16, 185, 129, 0.7)',
                        animation: `float-symbol ${Math.random() * 4 + 3}s infinite ease-in-out alternate, fade-pulse ${Math.random() * 2 + 2}s infinite alternate`
                      }}
                    >
                      {['def', 'import', '()', '==>', '"""', ':', '%.', '**'][Math.floor(Math.random() * 8)]}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="lang-icon text-2xl font-bold text-green-400 mb-1 relative group-hover:text-green-300 transition-colors duration-300">
                    Python
                    <div className="absolute inset-0 blur-lg bg-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="proficiency-level bg-gradient-to-r from-green-500/30 to-emerald-500/30 px-2 py-0.5 rounded-full text-xs text-green-200 border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                    Advanced
                  </div>
                  
                  <div className="proficiency-meter mt-2 w-full bg-green-900/30 h-1.5 rounded-full overflow-hidden border border-green-500/20">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-11/12 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 power-pulse" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0) 0%, rgba(16,185,129,.5) 50%, rgba(16,185,129,0) 100%)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* JavaScript with enhanced effects */}
            <div className="language-pod group relative">
              <div className="absolute -inset-1 targeting-reticle opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="reticle-h"></div>
                <div className="reticle-v"></div>
                <div className="reticle-corner reticle-tl"></div>
                <div className="reticle-corner reticle-tr"></div>
                <div className="reticle-corner reticle-bl"></div>
                <div className="reticle-corner reticle-br"></div>
              </div>
              
              {/* Orbital rings */}
              <div className="orbital-ring absolute -inset-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="ring ring-1" style={{borderColor: 'rgba(234, 179, 8, 0.2)'}}></div>
                <div className="ring ring-2" style={{borderColor: 'rgba(234, 179, 8, 0.1)'}}></div>
              </div>
              
              <div className="language-capsule relative bg-gradient-to-br from-black/80 to-amber-950/30 backdrop-blur-md border border-yellow-500/20 p-3 rounded-lg hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] h-full group-hover:border-yellow-400/50 transform perspective-900 group-hover:rotate-y-3 group-hover:rotate-x-2">
                {/* Enhanced holographic effect */}
                <div className="absolute inset-0 hologram-flicker rounded-lg overflow-hidden opacity-40" style={{filter: 'hue-rotate(60deg)'}}></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-lg overflow-hidden"></div>
                
                {/* Code symbols floating in background */}
                <div className="code-symbols absolute inset-0 overflow-hidden opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="symbol"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.3,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        fontSize: `${Math.random() * 8 + 6}px`,
                        color: 'rgba(234, 179, 8, 0.7)',
                        animation: `float-symbol ${Math.random() * 4 + 3}s infinite ease-in-out alternate, fade-pulse ${Math.random() * 2 + 2}s infinite alternate`
                      }}
                    >
                      {['{}', '=>', '()=>', '===', '&&', '||', '<>', '?:'][Math.floor(Math.random() * 8)]}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="lang-icon text-2xl font-bold text-yellow-400 mb-1 relative group-hover:text-yellow-300 transition-colors duration-300">
                    JavaScript
                    <div className="absolute inset-0 blur-lg bg-yellow-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="proficiency-level bg-gradient-to-r from-yellow-500/30 to-amber-500/30 px-2 py-0.5 rounded-full text-xs text-yellow-200 border border-yellow-500/30 group-hover:border-yellow-400/50 transition-all duration-300">
                    Proficient
                  </div>
                  
                  <div className="proficiency-meter mt-2 w-full bg-yellow-900/30 h-1.5 rounded-full overflow-hidden border border-yellow-500/20">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 w-4/5 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 power-pulse" style={{background: 'linear-gradient(90deg, rgba(234,179,8,0) 0%, rgba(234,179,8,.5) 50%, rgba(234,179,8,0) 100%)'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section with enhanced UI - more compact */}
        <div className="mt-3 relative">
          <div className="cosmic-section-header mb-3 relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="tech-circle w-24 h-24 border border-purple-500/20 rounded-full animate-reverse-spin"></div>
              <div className="tech-circle w-28 h-28 border border-blue-500/10 rounded-full animate-spin-slow"></div>
              
              {/* Energy core */}
              <div className="energy-core absolute w-14 h-14 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-md animate-pulse"></div>
            </div>
            
            <h3 className="cosmic-transmission text-center text-lg relative z-10">
              <div className="digital-glitch">GALACTIC TECH MATRIX</div>
              <span className="transmission-prefix text-xs">// KNOWLEDGE ARSENAL //</span>
            </h3>
          </div>
          
          {/* Hexagonal grid layout for skills - more compact */}
          <div className="skills-grid max-w-4xl mx-auto">
            <div className="skills-cluster relative">
              {/* Background constellation effect */}
              <div className="constellation-bg absolute inset-0 opacity-20 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="constellation-point absolute w-1 h-1 bg-blue-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      boxShadow: '0 0 2px #3b82f6',
                    }}
                  ></div>
                ))}
                
                {/* Constellation lines - fewer */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="20%" y1="30%" x2="40%" y2="40%" stroke="#3b82f620" strokeWidth="1" />
                  <line x1="40%" y1="40%" x2="60%" y2="30%" stroke="#3b82f620" strokeWidth="1" />
                  <line x1="60%" y1="30%" x2="80%" y2="50%" stroke="#3b82f620" strokeWidth="1" />
                </svg>
              </div>
            
              <div className="skills-hexgrid flex flex-wrap justify-center gap-2 px-2">
                {[
                  'AWS', 'Blockchain', 'Canva', 'CSS', 'GitHub',
                  'Firebase', 'HTML', 'JavaScript', 'Kali',
                  'Linux', 'NoSQL', 'PostgreSQL', 'Python',
                  'React', 'TypeScript', 'Ubuntu', 'VS Code',
                  'Node.js', 'Socket.IO', 'Kali Linux'
                ].map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="skill-badge relative group"
                  >
                    {/* Tech scanning effect on hover */}
                    <div className="tech-scanner absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                      <div className="scanner-line"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md skill-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="hex-skill relative bg-gradient-to-br from-black/80 to-blue-950/20 backdrop-blur-md border border-blue-500/30 px-2 py-1 rounded-md text-[10px] text-blue-300 group-hover:text-blue-200 group-hover:border-blue-400/70 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <div className="skill-highlight absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-md"></div>
                      
                      {/* Tech-specific colorization based on skill category */}
                      <span className={`
                        ${skill.includes('Linux') || skill.includes('Ubuntu') || skill.includes('Kali') ? 'text-green-300 group-hover:text-green-200' : ''}
                        ${skill.includes('React') || skill.includes('Node') || skill.includes('JavaScript') || skill.includes('TypeScript') ? 'text-blue-300 group-hover:text-blue-200' : ''}
                        ${skill.includes('Python') ? 'text-green-300 group-hover:text-green-200' : ''}
                        ${skill.includes('AWS') || skill.includes('Firebase') ? 'text-yellow-300 group-hover:text-yellow-200' : ''}
                        ${skill.includes('Blockchain') ? 'text-purple-300 group-hover:text-purple-200' : ''}
                      `}>
                        {skill}
                      </span>
                      
                      {/* Subtle pulse indicator */}
                      <div className="absolute -right-1 -top-1 w-1 h-1 rounded-full bg-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-50"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Cosmic energy footer - simplified */}
        <div className="cosmic-footer mt-4 flex justify-center">
          <div className="energy-signature w-24 h-4 relative">
            <div className="energy-wave absolute inset-0">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <path d="M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                <path d="M0,10 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
              </svg>
            </div>
            <div className="text-blue-400 text-[10px] text-center opacity-70 absolute inset-0 flex items-center justify-center font-mono tracking-widest">QUANTUM</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-4 animate-fade-in">
      {sections[activeSection].items.map((item, index) => (
        <div
          key={index}
          className="bg-black/60 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 border border-white/5 hover:border-blue-500/30 text-gray-300"
        >
          {/* For non-Missions sections, items are still strings */}
          {typeof item === 'string' ? item : item.name}
        </div>
      ))}
    </div>
  )}
</div>



          

          {/* Social links */}
          <div className="absolute -bottom-64 flex space-x-6">
              <Github className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors transform hover:scale-110" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors transform hover:scale-110" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors transform hover:scale-110" />
            </div>

          <ChevronDown className="absolute -bottom-56 w-8 h-8 animate-bounce text-gray-400" />
        </div>
      </div>
    </div>
      {/* Styles remain the same */}
      <style jsx>{`
      /* Space Mission Control Styles */
        
      /* Enhanced Space Mission Styles */
/* Custom scrollbar styling */

/* Cosmic Power animations and styles */
/* Floating Image Styles */
.cosmic-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .cosmic-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  .cosmic-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #3490dc, #6366f1, #9f7aea);
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(102, 126, 234, 0.6);
  }
  
  .cosmic-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #3490dc, #6366f1, #9f7aea);
    box-shadow: 0 0 12px rgba(102, 126, 234, 0.8);
  }
  
  /* Firefox */
  .cosmic-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #6366f1 rgba(0, 0, 0, 0.2);
  }
  
  /* Cosmic text animation */
  .cosmic-text-container {
    position: relative;
    overflow: hidden;
  }
  
  .cosmic-text {
    animation: fadeInUp 1s ease-out forwards;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0.9) 0%, 
      rgba(156,163,255,0.9) 50%, 
      rgba(255,255,255,0.9) 100%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(156, 163, 255, 0.3);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Subtle shimmer effect */
  .cosmic-text {
    animation: fadeInUp 1s ease-out forwards, shimmer 8s infinite;
  }
  
  @keyframes shimmer {
    0% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive Image Sizing */
.floating-image {
  width: 12rem;     /* 192px - base mobile size */
  height: 12rem;
  position: absolute;
  left: 8rem;
  top: 0.1rem;
}

/* Small Screens */
@media (min-width: 640px) {
  .floating-image {
    width: 12rem;   /* 224px */
    height: 12rem;
    left: 12rem;
    top: -0.1rem;
  }
}

/* Medium Screens */
@media (min-width: 768px) {
  .floating-image {
    width: 13rem;   /* 256px */
    height: 13rem;
    left: -1rem;
    top: 5rem;
  }
}

/* Large Screens */
@media (min-width: 1024px) {
  .floating-image {
    width: 14rem;   /* 288px */
    height: 14rem;
    left: 1rem;
    top: -2.5rem;
  }
}

/* Additional Hover Effect */
.floating-image:hover {
  animation-play-state: paused;
  transform: scale(1.05);
  transition: transform 0.3s ease;
}



/* Responsive Adjustments for Spinning Boulder */
@media screen and (max-width: 1600px) {
  .spinning-boulder {
    width: 300px !important;
    height: 300px !important;
    right: -70px !important;
    top: 520px !important;
  }
}

@media screen and (max-width: 1400px) {
  .spinning-boulder {
    width: 290px !important;
    height: 290px !important;
    right: -60px !important;
    top: 550px !important;
  }
}

@media screen and (max-width: 1200px) {
  .spinning-boulder {
    width: 290px !important;
    height: 290px !important;
    right: -70px !important;
    top: 520px !important;
  }
}

@media screen and (max-width: 992px) {
  .spinning-boulder {
    width: 270px !important;
    height: 270px !important;
    right: -70px !important;
    top: 550px !important;
  }
}

@media screen and (max-width: 768px) {
  .spinning-boulder {
    width: 250px !important;
    height: 250px !important;
    right: -60px !important;
    top: 580px !important;
  }
}

@media screen and (max-width: 576px) {
  .spinning-boulder {
    width: 200px !important;
    height: 200px !important;
    right: -30px !important;
    top: 620px !important;
  }
}

@media screen and (max-width: 480px) {
  .spinning-boulder {
    width: 100px !important;
    height: 100px !important;
    right: -15px !important;
    top: 150px !important;
  }
}

@media screen and (max-width: 375px) {
  .spinning-boulder {
    width: 80px !important;
    height: 80px !important;
    right: -10px !important;
    top: 100px !important;
  }
}
@media screen and (max-width: 320px) {
  .spinning-boulder {
    width: 80px !important;
    height: 800px !important;
    right: -5px !important;
    top: 100px !important;
  }
}
@media screen and (max-width: 280px) {
  .spinning-boulder {
    width: 80px !important;
    height: 800px !important;
    right: -5px !important;
    top: 100px !important;
  }
}
@keyframes radar-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes scanner-move {
  0% { transform: translateY(-100%); opacity: 0.7; }
  100% { transform: translateY(100%); opacity: 0; }
}

@keyframes power-pulse {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes float-symbol {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-5px) rotate(5deg); }
}

@keyframes fade-pulse {
  0% { opacity: 0.3; }
  100% { opacity: 0.8; }
}

@keyframes pulse-slow {
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.5; transform: scale(1); }
}

@keyframes nebula-pulse {
  0% { opacity: 0.4; filter: saturate(100%); }
  100% { opacity: 0.6; filter: saturate(150%); }
}

.animate-spin-veryslow {
  animation: spin 15s linear infinite;
}

.cosmic-dust {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at center, transparent 0%, transparent 80%, rgba(59, 130, 246, 0.05) 100%);
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M40.8,-68.3C54.1,-62.2,67.1,-53.3,76.7,-40.4C86.2,-27.5,92.4,-10.6,88.5,3.9C84.7,18.4,70.9,30.4,59.1,42.5C47.3,54.5,37.6,66.6,24.9,73.3C12.3,80,-3.3,81.4,-19.3,78.5C-35.3,75.6,-51.6,68.3,-60.3,55.9C-68.9,43.5,-69.8,25.9,-73,8.1C-76.1,-9.7,-81.6,-27.8,-75.9,-39.5C-70.3,-51.2,-53.4,-56.5,-38.5,-61.9C-23.5,-67.3,-10.5,-72.9,2.6,-77C15.7,-81.1,31.4,-83.9,40.8,-68.3Z' transform='translate(100 100) scale(1.1)' /%3E%3C/svg%3E");
  opacity: 0.2;
}

.cosmic-energy-field {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.07) 0%, transparent 70%),
    radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.07) 0%, transparent 70%);
}

.scanner-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 15px;
  background: linear-gradient(to bottom, 
    rgba(59, 130, 246, 0) 0%,
    rgba(59, 130, 246, 0.2) 50%,
    rgba(59, 130, 246, 0) 100%);
  animation: scanner-move 2s ease-in-out infinite;
}

.power-pulse {
  animation: power-pulse 2s infinite linear;
}

/* Orbital rings */
.orbital-ring .ring {
  position: absolute;
  border: 1px dashed rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  animation: radar-spin 20s linear infinite;
}

.orbital-ring .ring-1 {
  inset: 5%;
  animation-duration: 15s;
}

.orbital-ring .ring-2 {
  inset: 15%;
  animation-duration: 25s;
  animation-direction: reverse;
}

.tech-scanner {
  z-index: 1;
  overflow: hidden;
  border-radius: 0.375rem;
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 8px 8px;
}

/* Skill badge glow effect */
.skill-glow {
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}

/* Scanline effect with color variation */
.scanline-blue {
  background: linear-gradient(to bottom,
    transparent 0%,
    rgba(59, 130, 246, 0.15) 10%,
    rgba(59, 130, 246, 0.3) 50%,
    rgba(59, 130, 246, 0.15) 90%,
    transparent 100%);
}

/* Hex grid base for skills */
.hex-skill::before {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5));
  border-radius: 0.375rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hex-skill:hover::before {
  opacity: 0.3;
}

/* Energy wave animation */
.energy-wave svg path {
  animation: wave-flow 3s ease-in-out infinite alternate;
}

@keyframes wave-flow {
  0% { d: "M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,10"; }
  50% { d: "M0,10 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10"; }
  100% { d: "M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,10"; }
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 100, 255, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 100, 255, 0.5);
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 100, 255, 0.3) rgba(0, 0, 0, 0.2);
}
/* Base effects */
.space-warp-bg {
  background: radial-gradient(ellipse at center, rgba(15, 15, 35, 0.5) 0%, rgba(5, 5, 20, 0.5) 100%);
}

.warp-stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.4;
  animation: subtletwinkle 3s ease-in-out infinite alternate;
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(30, 100, 200, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 100, 200, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.scanline {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, 
    transparent 50%,
    rgba(30, 100, 200, 0.1) 50%
  );
  background-size: 100% 4px;
  z-index: 10;
  pointer-events: none;
  opacity: 0.15;
}

/* Terminal and Tech UI effects */
.terminal-prefix {
  color: #64ffda;
  font-weight: bold;
  animation: blink 1s infinite step-end;
}

.terminal-text {
  font-family: monospace;
  letter-spacing: 0.5px;
  line-height: 1.5;
}

.tech-circle {
  opacity: 0.5;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-reverse-spin {
  animation: reverse-spin 30s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes reverse-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}

/* Targeting reticle for hover effect */
.targeting-reticle {
  position: absolute;
  width: 100%;
  height: 100%;
}

.reticle-h, .reticle-v {
  position: absolute;
  background: rgba(0, 200, 255, 0.5);
}

.reticle-h {
  height: 1px;
  width: 100%;
  top: 50%;
  left: 0;
}

.reticle-v {
  width: 1px;
  height: 100%;
  left: 50%;
  top: 0;
}

.reticle-corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid rgba(0, 200, 255, 0.7);
}

.reticle-tl {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.reticle-tr {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.reticle-bl {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.reticle-br {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

/* Holographic effects */
.hologram-flicker {
  background: linear-gradient(135deg, rgba(0, 200, 255, 0.05) 0%, transparent 100%);
  animation: hologram-flicker 3s infinite;
}

.shadow-glow-green {
  box-shadow: 0 0 8px 2px rgba(72, 255, 128, 0.6);
}

.perspective-900 {
  perspective: 900px;
}

.rotate-y-3 {
  transform: rotateY(3deg);
}

.rotate-x-2 {
  transform: rotateX(2deg);
}

/* Interactive star background in cards */
.interactive-stars-bg {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(1px 1px at 25px 25px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 50px 50px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 75px 75px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 100px 100px, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
  background-size: 100px 100px;
  animation: space-stars-move 60s linear infinite;
}

/* Animated digital glitch text effect */
.digital-glitch {
  font-family: monospace;
  color: #64ffda;
  font-weight: bold;
  position: relative;
  letter-spacing: 3px;
}

.digital-glitch::before, .digital-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
}

.digital-glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00ff;
  animation: digital-glitch-1 2s infinite linear alternate-reverse;
  clip: rect(44px, 450px, 56px, 0);
}

.digital-glitch::after {
  left: -2px;
  text-shadow: -1px 0 #00ffff;
  animation: digital-glitch-2 3s infinite linear alternate-reverse;
  clip: rect(44px, 450px, 56px, 0);
}

.glitch-subtle {
  position: relative;
  display: inline-block;
}

.glitch-subtle::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  animation: glitch-subtle-anim 3s infinite;
}

@keyframes nebula-float {
  from { transform: translate(0, 0) rotate(0deg); }
  to { transform: translate(-30px, -20px) rotate(20deg); }
}

@keyframes subtletwinkle {
  0% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

@keyframes hologram-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 0.3; }
  20%, 24%, 55% { opacity: 0.1; }
}

@keyframes digital-glitch-1 {
  0% { clip: rect(20px, 9999px, 15px, 0); }
  10% { clip: rect(85px, 9999px, 59px, 0); }
  20% { clip: rect(32px, 9999px, 15px, 0); }
  30% { clip: rect(53px, 9999px, 3px, 0); }
  40% { clip: rect(26px, 9999px, 67px, 0); }
  50% { clip: rect(75px, 9999px, 87px, 0); }
  60% { clip: rect(64px, 9999px, 34px, 0); }
  70% { clip: rect(27px, 9999px, 40px, 0); }
  80% { clip: rect(39px, 9999px, 16px, 0); }
  90% { clip: rect(57px, 9999px, 41px, 0); }
  100% { clip: rect(29px, 9999px, 70px, 0); }
}

@keyframes digital-glitch-2 {
  0% { clip: rect(34px, 9999px, 33px, 0); }
  10% { clip: rect(29px, 9999px, 90px, 0); }
  20% { clip: rect(55px, 9999px, 29px, 0); }
  30% { clip: rect(67px, 9999px, 53px, 0); }
  40% { clip: rect(10px, 9999px, 84px, 0); }
  50% { clip: rect(75px, 9999px, 93px, 0); }
  60% { clip: rect(36px, 9999px, 25px, 0); }
  70% { clip: rect(66px, 9999px, 8px, 0); }
  80% { clip: rect(6px, 9999px, 13px, 0); }
  90% { clip: rect(8px, 9999px, 66px, 0); }
  100% { clip: rect(13px, 9999px, 91px, 0); }
}

@keyframes space-stars-move {
  from { background-position: 0 0; }
  to { background-position: 100px 100px; }
}

@keyframes glitch-subtle-anim {
  0% { transform: none; opacity: 0.25; }
  7% { transform: translate(1px, 1px); opacity: 0.5; }
  10% { transform: none; opacity: 0.25; }
  27% { transform: none; opacity: 0.25; }
  30% { transform: translate(-1px, -1px); opacity: 0.5; }
  35% { transform: none; opacity: 0.25; }
  52% { transform: none; opacity: 0.25; }
  55% { transform: translate(1px, 1px); opacity: 0.5; }
  60% { transform: none; opacity: 0.25; }
  85% { transform: none; opacity: 0.25; }
  90% { transform: translate(-1px, 1px); opacity: 0.5; }
  100% { transform: none; opacity: 0.25; }
}
.mission-orbits-container {
  perspective: 1000px;
}

.stars-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(white 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.2;
}

.radar-background {
  opacity: 0.15;
}

.radar-sweep {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  border: 1px solid rgba(0, 200, 255, 0.2);
  transform: translate(-50%, -50%);
}

.radar-sweep::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 200, 255, 0.8), transparent);
  transform-origin: bottom center;
  animation: radar-sweep 5s infinite linear;
}

.radar-grid {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, transparent 30%, rgba(0, 100, 200, 0.1) 30%, transparent 31%, transparent 50%, rgba(0, 100, 200, 0.1) 50%, transparent 51%),
              conic-gradient(transparent 0deg, rgba(0, 100, 200, 0.1) 1deg, transparent 2deg, transparent 89deg, rgba(0, 100, 200, 0.1) 90deg, transparent 91deg, transparent 179deg, rgba(0, 100, 200, 0.1) 180deg, transparent 181deg, transparent 269deg, rgba(0, 100, 200, 0.1) 270deg, transparent 271deg);
  background-size: 100% 100%;
  transform: translate(-50%, -50%);
}

.cosmic-transmission {
  font-family: monospace;
  color: #5df5ff;
  letter-spacing: 1px;
}

.transmission-prefix {
  display: block;
  font-size: 0.7em;
  color: #ff5d9e;
  margin-bottom: 0.5em;
  animation: blink 2s infinite;
}

.blink {
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes radar-sweep {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.mission-pod {
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.mission-pod:hover {
  z-index: 50;
}

.mission-craft {
  filter: drop-shadow(0 0 10px rgba(0, 200, 255, 0.7));
  animation: float 3s ease-in-out infinite;
}

.pulse-circle {
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
      .buzz-image-container {
        position: absolute;
        bottom: 1rem; /* Adjust the bottom offset as needed */
        left: 1rem;   /* Adjust the left offset as needed */
        width: 9rem;  /* Size of the buzz image */
        height: 11rem; /* Size of the buzz image */
        z-index: 10000; /* High z-index to bring it to the front */
      }

      .buzz-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: transform 0.3s ease-in-out;
      }


        /* Common Floating animation */
      /* Original keyframe for floating across the screen */
@keyframes floatAcrossScreen {
  0% {
    top: 20%;
    left: 0%;
    transform: rotate(0deg);
  }
  25% {
    top: 10%;
    left: 40%;
    transform: rotate(45deg);
  }
  50% {
    top: 40%;
    left: 70%;
    transform: rotate(90deg);
  }
  75% {
    top: 60%;
    left: 90%;
    transform: rotate(135deg);
  }
  100% {
    top: 20%;
    left: 100%;
    transform: rotate(180deg);
  }
}

/* angry.png image - separate CSS */
.angry-image-container {
  position: absolute;
  top: 25%;  /* Initial position for angry.png */
  left: 25%;  /* Initial position for angry.png */
  width: 3rem; /* Size for angry.png */
  height: 3rem; /* Size for angry.png */
  z-index: 20;
  animation: floatAcrossScreen 30s linear infinite; /* Slightly faster float animation */
}

.angry-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* angry3.png image - separate CSS with different initial position */
.angry3-image-container {
  position: absolute;
  top: 110%;  /* Starts from just below the screen */
  left: 50%;  /* Different initial position for angry3.png */
  width: 3rem; /* Size for angry3.png */
  height: 3rem; /* Size for angry3.png */
  z-index: 15;
  animation: floatAcrossScreen 30s linear infinite; /* Slightly faster float animation */
}

.angry3-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Add this to your CSS file */
@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, 30px) rotate(120deg);
  }
  66% {
    transform: translate(-30px, 15px) rotate(240deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
}

/* Apply slightly faster animation to the second image */
.angry3-image-container {
  animation: float 25s linear infinite; /* Slightly faster float animation */
}

        
        @keyframes nebula-float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
          }
          100% {
            transform: scale(1.2);
          }
        }

        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes planet {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-width {
          animation: width 0.3s ease-out forwards;
        }
          
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes width {
          from { width: 0; }
          to { width: 100%; }
        }

        .star-container {
          will-change: transform;
          z-index: 1;
        }

        .nebula {
          position: absolute;
          pointer-events: none;
          opacity: 0.3;
          mix-blend-mode: screen;
        }
        .typewriter {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          position: relative;
        }

        .typewriter-text {
          color: #6ae3ff; /* Pinkish glow */
          padding-left: 10px;
          border-right: solid #6ae3ff 3px;
          animation: cursor-blink 1s steps(2, start) infinite;
        }

        @keyframes cursor-blink {
          50% {
            border-color: transparent;
          }
        }

        @keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.floating {
  animation: floating 2s ease-in-out infinite;
}
/* Base Meteor Container */
.meteor-container {
  opacity: 0;
  z-index: 1;
}

.meteor-animation {
  transform: rotate(-10deg);
}

/* Front Meteor Animation */
.meteor-front {
  animation: meteor-front-travel 8s infinite;
}

.meteor-front-animation {
  transform: rotate(-10deg);
}

@keyframes meteor-front-travel {
  0% {
    opacity: 0;
    transform: translate(-100px, -100px) rotate(15deg);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(calc(100vw + 100px), calc(100vh + 100px)) rotate(15deg);
  }
}

/* Background Meteor Left Animation */
.meteor-bg-left {
  animation: meteor-bg-left-travel 10s infinite 2s;
}

.meteor-bg-left-animation {
  transform: rotate(-20deg);
}

@keyframes meteor-bg-left-travel {
  0% {
    opacity: 0;
    transform: translate(-50px, -50px) rotate(30deg);
  }
  10% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translate(calc(100vw + 50px), calc(100vh + 50px)) rotate(30deg);
  }
}

/* Background Meteor Right Animation */
.meteor-bg-right {
  animation: meteor-bg-right-travel 12s infinite 4s;
}

.meteor-bg-right-animation {
  transform: rotate(-5deg);
}

@keyframes meteor-bg-right-travel {
  0% {
    opacity: 0;
    transform: translate(-75px, -75px) rotate(10deg);
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translate(calc(100vw + 75px), calc(100vh + 75px)) rotate(10deg);
  }
}

      `}</style>
    </div>
  );
};

export default SolarSystemPortfolio;
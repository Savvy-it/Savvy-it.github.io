
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  image: string;
}

const Layout: React.FC<LayoutProps> = ({ children, image }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen bg-unio-dark text-white selection:bg-unio-cyan selection:text-black">
      
      {/* Global Header */}
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto"
        >
          <NavLink to="/">
            <Logo />
          </NavLink>
        </motion.div>
        
        <div className="p-8 sm:p-12 pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-2 items-end group h-10 justify-center"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 5, width: 32 } : { rotate: 0, y: 0, width: 32 }}
              className="h-[2px] bg-white block transition-all duration-300"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -5, width: 32 } : { rotate: 0, y: 0, width: 24 }}
              className="h-[2px] bg-white block transition-all duration-300"
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-unio-dark/95 backdrop-blur-xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `text-4xl sm:text-7xl font-oswald font-bold uppercase tracking-tighter transition-all hover:text-unio-cyan ${
                        isActive ? 'text-unio-pink' : 'text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Side */}
        <main className="w-full lg:w-1/2 min-h-screen pt-32 sm:pt-48 pb-12 px-8 sm:px-16 lg:px-24 flex flex-col justify-center relative z-10 bg-unio-dark">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Right Visual Side (Image Slider) */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 overflow-hidden bg-unio-navy">
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src={image} 
                alt="Visual contextual asset" 
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-unio-dark/80 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Layout;

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Code,
  ChevronDown,
  Home,
  User,
  Wrench,
  FolderOpen,
  FileText,
  DollarSign,
  Mail
} from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = '' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsWorkDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', id: 'home', icon: Home },
    { href: '/about', label: 'About', id: 'about', icon: User },
    { href: '/portfolio', label: 'Portfolio', id: 'portfolio', icon: FolderOpen },
    { href: '/work', label: 'Work', id: 'work', icon: Wrench },
    { href: '/pricing', label: 'Pricing', id: 'pricing', icon: DollarSign },
    { href: '/contact', label: 'Contact', id: 'contact', icon: Mail },
  ];

  // Separate links for different screen sizes
  const desktopLinks = navLinks;
  const tabletLinks = navLinks.filter(link => ['home', 'about', 'portfolio', 'work'].includes(link.id));
  const mobileLinks = navLinks;

  const workDropdownItems = [
    { href: '/tools', label: 'Tools', id: 'tools', icon: Wrench },
    { href: '/resume', label: 'Resume', id: 'resume', icon: FileText },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0D1B2A]/95 backdrop-blur-md shadow-2xl border-b border-[#415A77]/20' 
            : 'bg-[#0D1B2A]/85 backdrop-blur-sm shadow-lg border-b border-[#415A77]/10'
        } ${className}`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo/Brand */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Code className="w-8 h-8 text-[#E09F3E]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-lg" />
              </div>
              <motion.h1 
                className="text-xl lg:text-2xl font-bold text-[#E0E1DD] tracking-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                CodeX<span className="text-[#E09F3E]">Arman</span>
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {desktopLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {link.id === 'work' ? (
                    // Work Dropdown
                    <div className="relative">
                      <motion.button
                                              className={`flex items-center space-x-1 px-2 py-2 text-[#E0E1DD] font-medium transition-all duration-200 hover:text-[#E09F3E] hover:-translate-y-0.5 ${
                        activeLink === 'tools' || activeLink === 'resume' ? 'text-[#E09F3E] font-semibold' : ''
                      }`}
                        onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="relative">
                          <link.icon className="w-4 h-4" />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                        </div>
                        <span>Work</span>
                        <motion.div
                          animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                        {(activeLink === 'tools' || activeLink === 'resume') && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E09F3E] to-[#E09F3E]/80 rounded-full"
                            layoutId="activeLink"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isWorkDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-48 bg-[#1B263B]/95 backdrop-blur-md border border-[#415A77] rounded-lg shadow-2xl z-50"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="py-2">
                              {workDropdownItems.map((item, index) => (
                                <motion.a
                                  key={item.id}
                                  href={item.href}
                                  className={`flex items-center space-x-2 px-4 py-2 text-[#E0E1DD] hover:text-[#E09F3E] hover:bg-[#415A77]/20 transition-colors ${
                                    activeLink === item.id ? 'text-[#E09F3E] bg-[#E09F3E]/15 font-semibold border-l-4 border-[#E09F3E] shadow-lg' : ''
                                  }`}
                                  onClick={() => {
                                    setActiveLink(item.id);
                                    setIsWorkDropdownOpen(false);
                                  }}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.1 }}
                                >
                                  <div className="relative">
                                    <item.icon className="w-4 h-4" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                                  </div>
                                  <span>{item.label}</span>
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Link
                    <a
                      href={link.href}
                      className={`relative flex items-center space-x-2 px-2 py-2 text-[#E0E1DD] font-medium transition-all duration-200 hover:text-[#E09F3E] hover:-translate-y-0.5 ${
                        activeLink === link.id ? 'text-[#E09F3E] font-semibold' : ''
                      }`}
                      onClick={() => setActiveLink(link.id)}
                    >
                      <div className="relative">
                        <link.icon className="w-4 h-4" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                      </div>
                      <span>{link.label}</span>
                      {activeLink === link.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E09F3E] to-[#E09F3E]/80 rounded-full"
                          layoutId="activeLink"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E09F3E] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              {tabletLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {link.id === 'work' ? (
                    // Work Dropdown for Tablet
                    <div className="relative">
                      <motion.button
                        className={`flex items-center space-x-1 px-1.5 py-2 text-[#E0E1DD] font-medium transition-all duration-200 hover:text-[#E09F3E] hover:-translate-y-0.5 ${
                          activeLink === 'tools' || activeLink === 'resume' ? 'text-[#E09F3E] font-semibold' : ''
                        }`}
                        onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="relative">
                          <link.icon className="w-4 h-4" />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                        </div>
                        <span>Work</span>
                        <motion.div
                          animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                        {(activeLink === 'tools' || activeLink === 'resume') && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E09F3E] to-[#E09F3E]/80 rounded-full"
                            layoutId="activeLink"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isWorkDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-40 bg-[#1B263B]/95 backdrop-blur-md border border-[#415A77] rounded-lg shadow-2xl z-50"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="py-2">
                              {workDropdownItems.map((item, index) => (
                                <motion.a
                                  key={item.id}
                                  href={item.href}
                                  className={`flex items-center space-x-2 px-3 py-2 text-[#E0E1DD] hover:text-[#E09F3E] hover:bg-[#415A77]/20 transition-colors ${
                                    activeLink === item.id ? 'text-[#E09F3E] bg-[#E09F3E]/15 font-semibold border-l-4 border-[#E09F3E] shadow-lg' : ''
                                  }`}
                                  onClick={() => {
                                    setActiveLink(item.id);
                                    setIsWorkDropdownOpen(false);
                                  }}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.1 }}
                                >
                                  <div className="relative">
                                    <item.icon className="w-4 h-4" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                                  </div>
                                  <span>{item.label}</span>
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Link for Tablet
                    <a
                      href={link.href}
                      className={`relative flex items-center space-x-2 px-1.5 py-2 text-[#E0E1DD] font-medium transition-all duration-200 hover:text-[#E09F3E] hover:-translate-y-0.5 ${
                        activeLink === link.id ? 'text-[#E09F3E] font-semibold' : ''
                      }`}
                      onClick={() => setActiveLink(link.id)}
                    >
                      <div className="relative">
                        <link.icon className="w-4 h-4" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                      </div>
                      <span>{link.label}</span>
                      {activeLink === link.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E09F3E] to-[#E09F3E]/80 rounded-full"
                          layoutId="activeLink"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E09F3E] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-[#E0E1DD] hover:text-[#E09F3E] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0D1B2A]/98 backdrop-blur-lg z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-16 left-0 right-0 bg-[#1B263B]/95 backdrop-blur-md border-t border-[#415A77] shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {mobileLinks.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {link.id === 'work' ? (
                        // Mobile Work Dropdown
                        <div className="space-y-2">
                          <motion.button
                            className={`w-full text-left px-4 py-3 text-[#E0E1DD] font-medium rounded-lg transition-colors ${
                              activeLink === 'tools' || activeLink === 'resume'
                                ? 'bg-[#E09F3E]/15 text-[#E09F3E] font-semibold border-l-4 border-[#E09F3E] shadow-lg' 
                                : 'hover:bg-[#415A77]/20'
                            }`}
                            onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="relative">
                                  <link.icon className="w-4 h-4" />
                                  <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                                </div>
                                <span>Work</span>
                              </div>
                              <motion.div
                                animate={{ rotate: isWorkDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </div>
                          </motion.button>
                          
                          {/* Mobile Dropdown Items */}
                          <AnimatePresence>
                            {isWorkDropdownOpen && (
                              <motion.div
                                className="ml-4 space-y-1"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {workDropdownItems.map((item, subIndex) => (
                                  <motion.a
                                    key={item.id}
                                    href={item.href}
                                    className={`flex items-center space-x-2 px-4 py-2 text-[#E0E1DD] font-medium rounded-lg transition-colors ${
                                      activeLink === item.id 
                                        ? 'bg-[#E09F3E]/15 text-[#E09F3E] font-semibold border-l-4 border-[#E09F3E] shadow-lg' 
                                        : 'hover:bg-[#415A77]/20'
                                    }`}
                                    onClick={() => {
                                      setActiveLink(item.id);
                                      setIsMobileMenuOpen(false);
                                      setIsWorkDropdownOpen(false);
                                    }}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: subIndex * 0.1 }}
                                  >
                                    <div className="relative">
                                      <item.icon className="w-4 h-4" />
                                      <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                                    </div>
                                    <span>{item.label}</span>
                                  </motion.a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Regular Mobile Link
                        <motion.a
                          href={link.href}
                          className={`flex items-center space-x-2 px-4 py-3 text-[#E0E1DD] font-medium rounded-lg transition-colors ${
                            activeLink === link.id 
                              ? 'bg-[#E09F3E]/15 text-[#E09F3E] font-semibold border-l-4 border-[#E09F3E] shadow-lg' 
                              : 'hover:bg-[#415A77]/20'
                          }`}
                          onClick={() => {
                            setActiveLink(link.id);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <div className="relative">
                            <link.icon className="w-4 h-4" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E09F3E]/20 to-transparent rounded-sm" />
                          </div>
                          <span>{link.label}</span>
                        </motion.a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
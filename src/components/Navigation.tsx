'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-black/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0 flex items-center space-x-2">
            {/* Logo Icon */}
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Outer hexagon */}
                <path d="M20 2L36.5 11V29L20 38L3.5 29V11L20 2Z" className="fill-gradient-start" fill="url(#logoGradient)" />
                {/* Inner code brackets */}
                <path d="M14 15L9 20L14 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 15L31 20L26 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Center dot/spark */}
                <circle cx="20" cy="20" r="2" fill="white" />
                <defs>
                  <linearGradient id="logoGradient" x1="3.5" y1="2" x2="36.5" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="0.5" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Logo Text */}
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Code</span>
              <span className={`${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>Invent</span>
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'} px-3 py-2 text-sm font-medium transition-colors`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'} px-3 py-2 text-sm font-medium transition-colors`}
              >
                Services
              </button>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'} px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1`}
                >
                  <span>Products</span>
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Products Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a 
                      href="https://foniqai.codeinvent.dev" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-100"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="font-medium text-gray-900 font-mono">AI Voice Receptionist</div>
                      <div className="text-xs text-gray-500 mt-1">Intelligent voice AI for your business</div>
                    </a>
                    {/* <a 
                      href="#jewelry-billing" 
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-100"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="font-medium text-gray-900 font-mono">Jewellery Shop Billing</div>
                      <div className="text-xs text-gray-500 mt-1">Complete billing management system</div>
                    </a>
                    <a 
                      href="#fleet-management" 
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="font-medium text-gray-900 font-mono">Fleet Management</div>
                      <div className="text-xs text-gray-500 mt-1">Advanced vehicle tracking & management</div>
                    </a> */}
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => handleNavClick('about')} 
                className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'} px-3 py-2 text-sm font-medium transition-colors`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'} px-3 py-2 text-sm font-medium transition-colors`}
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'} p-2 transition-colors`}
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg">
              <button 
                onClick={() => handleNavClick('home')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Services
              </button>
              
              {/* Products Section in Mobile */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Products
                </div>
                <a 
                  href="https://foniqai.codeinvent.dev" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-900 font-mono">AI Voice Receptionist</div>
                  <div className="text-xs text-gray-500 mt-1">Intelligent voice AI for your business</div>
                </a>
                {/* <a 
                  href="#jewelry-billing" 
                  className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-900 font-mono">Jewellery Shop Billing</div>
                  <div className="text-xs text-gray-500 mt-1">Complete billing management system</div>
                </a>
                <a 
                  href="#fleet-management" 
                  className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium text-gray-900 font-mono">Fleet Management</div>
                  <div className="text-xs text-gray-500 mt-1">Advanced vehicle tracking & management</div>
                </a> */}
              </div>
              
              <button 
                onClick={() => handleNavClick('about')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

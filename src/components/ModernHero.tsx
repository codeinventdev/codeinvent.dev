'use client';

import { useState, useEffect } from 'react';
import { SparklesIcon, PlayIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface ModernHeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ModernHero({ scrollToSection }: ModernHeroProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingWords = [
    { text: "Web Applications", color: "from-blue-600 to-cyan-500" },
    { text: "Mobile Apps", color: "from-purple-600 to-pink-500" },
    { text: "AI Solutions", color: "from-green-600 to-emerald-500" },
    { text: "Custom Software", color: "from-indigo-600 to-purple-500" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/40 to-pink-600/40 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Additional accent orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full blur-2xl animate-float animation-delay-3000"></div>
        
        {/* Grid pattern with better opacity */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <SparklesIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Trusted by 50+ Companies Worldwide</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                Premium Software Development for
              </span>
              <br />
              <span className={`bg-gradient-to-r ${rotatingWords[currentWord].color} bg-clip-text text-transparent transition-all duration-500 drop-shadow-lg whitespace-nowrap`}>
                {rotatingWords[currentWord].text}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-2xl">
              Transform your business with cutting-edge technology solutions. We build scalable, secure, and innovative applications that drive growth.
            </p>

            {/* Terminal Slogan */}
            <div className="mb-8 p-4 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg font-mono text-left max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs">terminal</span>
              </div>
              <div className="text-green-400 text-lg md:text-xl font-bold tracking-wider">
                <span className="text-green-500">&gt;</span>
                <span className="ml-2 terminal-cursor" data-text="INVENT_CODE.INNOVATE_FUTURE">
                  INVENT_CODE.INNOVATE_FUTURE
                </span>
              </div>
              <div className="text-gray-500 text-sm mt-1 font-mono">
                {/* Where innovation meets execution */}
                {'//'} Where innovation meets execution
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              {["Lightning Fast", "24/7 Support", "Scalable"].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span className="text-white/90 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="group flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View Our Work</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
                { value: "5+", label: "Years" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Card with enhanced styling */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105">
                {/* Code Editor with better styling */}
                <div className="bg-gray-900/70 rounded-xl p-6 mb-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-300 transition-colors"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-300 transition-colors"></div>
                    </div>

                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded w-3/4 animate-pulse shadow-sm"></div>
                    <div className="h-3 bg-gray-600/80 rounded w-1/2"></div>
                    <div className="h-3 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded w-2/3 animate-pulse animation-delay-1000 shadow-sm"></div>
                    <div className="h-3 bg-gray-600/80 rounded w-1/3"></div>
                    <div className="h-3 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded w-5/6 animate-pulse animation-delay-2000 shadow-sm"></div>
                  </div>
                </div>

                {/* Enhanced Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/20 border border-green-500/40 rounded-xl p-4 text-center hover:bg-green-500/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                    <div className="text-green-300 text-sm font-medium">Uptime</div>
                    <div className="w-full bg-green-900/30 rounded-full h-1 mt-2">
                      <div className="bg-green-400 h-1 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/40 rounded-xl p-4 text-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-blue-400 mb-1">2.5s</div>
                    <div className="text-blue-300 text-sm font-medium">Load Time</div>
                    <div className="w-full bg-blue-900/30 rounded-full h-1 mt-2">
                      <div className="bg-blue-400 h-1 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce hover:animate-pulse">
                🚀 Live
              </div>
              
              {/* Additional floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                ✨ Active
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400/30 rounded-full blur-sm animate-float"></div>
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-blue-400/30 rounded-full blur-sm animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

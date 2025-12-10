'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function CaseStudies() {
  const selectedCase = 0;

  const caseStudies = [
    {
      title: "AI Voice Receptionist",
      client: "FoniqAI",
      category: "AI & Voice Technology",
      image: "",
      challenge: "Businesses needed an intelligent, always-available receptionist solution that could handle calls 24/7, reduce wait times, and provide consistent customer service without human limitations.",
      solution: "We developed FoniqAI, an advanced AI-powered voice receptionist that uses natural language processing to understand caller intent, route calls intelligently, schedule appointments, and provide instant responses to common inquiries.",
      results: [
        "24/7 call handling with zero wait times",
        "85% reduction in missed calls",
        "60% cost savings vs traditional receptionists",
        "98% caller satisfaction rate"
      ],
      technologies: ["AI/ML", "NLP", "Voice Recognition", "Real-time Streaming", "Node.js", "WebRTC"],
      duration: "6 months"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we&apos;ve helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Case Study Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                {/* AI Voice Stream Animation */}
                <div className="w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center" role="img" aria-label="AI Voice Receptionist Voice Stream Animation">
                  
                  {/* Animated Grid Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>
                  
                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`particle-${i}`}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    ></div>
                  ))}
                  
                  {/* Main Voice Visualization */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Outer Rotating Ring */}
                    <div className="absolute w-52 h-52 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    </div>
                    
                    {/* Middle Pulsing Ring */}
                    <div className="absolute w-40 h-40 rounded-full border-2 border-indigo-400/30 animate-pulse"></div>
                    <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Sound Wave Circles */}
                    <div className="absolute w-28 h-28 rounded-full border border-cyan-400/40 animate-ping" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute w-24 h-24 rounded-full border border-purple-400/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                    
                    {/* Voice Waveform Bars - Left Side */}
                    <div className="absolute left-1/2 -translate-x-32 flex items-center space-x-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`left-${i}`}
                          className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-indigo-400"
                          style={{
                            height: `${12 + Math.sin(i * 1.2) * 20 + 15}px`,
                            animation: 'waveform 1.2s ease-in-out infinite',
                            animationDelay: `${i * 0.15}s`,
                            opacity: 0.6 + (i * 0.06)
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Voice Waveform Bars - Right Side */}
                    <div className="absolute left-1/2 translate-x-16 flex items-center space-x-1">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`right-${i}`}
                          className="w-1 rounded-full bg-gradient-to-t from-purple-500 to-pink-400"
                          style={{
                            height: `${12 + Math.sin((5 - i) * 1.2) * 20 + 15}px`,
                            animation: 'waveform 1.2s ease-in-out infinite',
                            animationDelay: `${(5 - i) * 0.15}s`,
                            opacity: 0.6 + ((5 - i) * 0.06)
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Center AI Core */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/40">
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900 to-indigo-950"></div>
                        <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center animate-pulse">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="flex items-center space-x-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      <span className="font-medium">Active</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs px-3 py-1.5 rounded-full flex items-center space-x-1.5">
                      <svg className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                      </svg>
                      <span className="font-medium">AI Powered</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-indigo-600/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-white shadow-lg shadow-indigo-500/30">
                      {caseStudies[selectedCase].category}
                    </span>
                    <div className="flex items-center space-x-1 text-white/60 text-xs">
                      <div className="flex space-x-0.5">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-1 bg-cyan-400 rounded-full animate-pulse" style={{ height: `${8 + i * 3}px`, animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                      </div>
                      <span className="ml-2">Processing voice...</span>
                    </div>
                  </div>
                </div>
                
                {/* CSS Keyframes */}
                <style jsx>{`
                  @keyframes waveform {
                    0%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(1.8); }
                  }
                  @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
                    50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
                  }
                `}</style>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caseStudies[selectedCase].title}
                  </h3>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                    <span>View Project</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-600 mb-6">{caseStudies[selectedCase].challenge}</p>

                    <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                    <p className="text-gray-600">{caseStudies[selectedCase].solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                    <ul className="space-y-2 mb-6">
                      {caseStudies[selectedCase].results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                        <p className="text-gray-600">{caseStudies[selectedCase].duration}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Technologies</h5>
                        <div className="flex flex-wrap gap-1">
                          {caseStudies[selectedCase].technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                          {caseStudies[selectedCase].technologies.length > 3 && (
                            <span className="text-gray-500 text-xs">
                              +{caseStudies[selectedCase].technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

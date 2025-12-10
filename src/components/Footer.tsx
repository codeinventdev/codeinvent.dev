'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo Icon */}
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M20 2L36.5 11V29L20 38L3.5 29V11L20 2Z" fill="url(#footerLogoGradient)" />
                  <path d="M14 15L9 20L14 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26 15L31 20L26 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="20" r="2" fill="white" />
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="3.5" y1="2" x2="36.5" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60A5FA" />
                      <stop offset="0.5" stopColor="#A78BFA" />
                      <stop offset="1" stopColor="#F472B6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Code</span>
                <span className="text-white">Invent</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Best in class software development services for web and mobile apps. Transform your ideas into powerful digital solutions.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Custom Software
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Phone: +91 7020615995</p>
              <p className="text-gray-300">Email: dev@codeinvent.dev</p>
            </div>
          </div>
        </div>
        
        {/* Terminal Slogan in Footer */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex justify-center mb-6">
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-md px-4 py-3 font-mono">
              <div className="text-green-400 text-sm md:text-base font-bold tracking-wider">
                <span className="text-green-500">&gt;</span>
                <span className="ml-2">INVENT_CODE.INNOVATE_FUTURE</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              &copy; 2024 CodeInvent. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

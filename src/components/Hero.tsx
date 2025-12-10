'use client';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best in Class{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We provide exceptional web and mobile app development services that transform your ideas into powerful digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>
          
          {/* Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded w-32 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded w-28 animate-pulse delay-75"></div>
                    <div className="h-4 bg-gray-300 rounded w-20"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded w-36 animate-pulse delay-150"></div>
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

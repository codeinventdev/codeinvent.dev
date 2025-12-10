'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function About() {
  const features = [
    'Expert Development Team',
    'Cutting-Edge Technologies',
    'On-Time Delivery',
    '24/7 Support'
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CodeInvent?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At CodeInvent, we specialize in delivering enterprise-grade software solutions that drive business growth. Our team of expert developers combines deep technical expertise with industry best practices to build scalable, secure, and high-performance applications. From startups to Fortune 500 companies, we transform complex business challenges into elegant digital solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

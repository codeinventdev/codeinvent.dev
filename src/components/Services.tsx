'use client';

import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies. From simple landing pages to complex enterprise solutions.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless performance across all devices.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: CpuChipIcon,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning. From chatbots to predictive analytics and computer vision applications.',
      features: ['AI Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions']
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence. SEO optimization, content marketing, and performance analytics.',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics & Reporting', 'Social Media Marketing']
    },
    {
      icon: CodeBracketIcon,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs. From automation tools to complex enterprise systems.',
      features: ['Custom Solutions', 'Scalable Architecture', 'Integration Ready', 'Ongoing Support']
    },
    {
      icon: CogIcon,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation. RPA, workflow optimization, and AI-powered business intelligence.',
      features: ['Process Automation', 'Workflow Optimization', 'Business Intelligence', 'Data Analytics']
    }
  ];

  // Service Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "CodeInvent"
        },
        "serviceType": service.title,
        "areaServed": "Worldwide"
      }
    }))
  };

  return (
    <section id="services" className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-blue-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Technologies',
      description: 'Modern, responsive user interfaces that deliver exceptional user experiences',
      technologies: [
        { name: 'React', logo: '⚛️', description: 'Component-based UI library' },
        { name: 'Next.js', logo: '▲', description: 'Full-stack React framework' },
        { name: 'Vue.js', logo: '💚', description: 'Progressive JavaScript framework' },
        { name: 'TypeScript', logo: '📘', description: 'Typed JavaScript at scale' },
        { name: 'Tailwind CSS', logo: '🎨', description: 'Utility-first CSS framework' },
        { name: 'Three.js', logo: '🎯', description: '3D graphics and animations' }
      ]
    },
    backend: {
      title: 'Backend Technologies',
      description: 'Robust, scalable server-side solutions that power your applications',
      technologies: [
        { name: 'Node.js', logo: '🟢', description: 'JavaScript runtime environment' },
        { name: 'Python', logo: '🐍', description: 'Versatile programming language' },
        { name: 'Java', logo: '☕', description: 'Enterprise-grade development' },
        { name: 'GraphQL', logo: '🔗', description: 'Query language for APIs' },
        { name: 'PostgreSQL', logo: '🐘', description: 'Advanced relational database' },
        { name: 'MongoDB', logo: '🍃', description: 'NoSQL document database' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile applications for iOS and Android',
      technologies: [
        { name: 'React Native', logo: '📱', description: 'Cross-platform mobile apps' },
        { name: 'Flutter', logo: '🦋', description: 'Google\'s UI toolkit' },
        { name: 'Swift', logo: '🍎', description: 'Native iOS development' },
        { name: 'Kotlin', logo: '🤖', description: 'Modern Android development' },
        { name: 'Expo', logo: '🚀', description: 'React Native platform' },
        { name: 'Firebase', logo: '🔥', description: 'Backend-as-a-Service' }
      ]
    },
    aiml: {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning technologies',
      technologies: [
        { name: 'TensorFlow', logo: '🧠', description: 'Machine learning framework' },
        { name: 'PyTorch', logo: '🔥', description: 'Deep learning platform' },
        { name: 'OpenAI API', logo: '🤖', description: 'GPT and AI models' },
        { name: 'Hugging Face', logo: '🤗', description: 'NLP model hub' },
        { name: 'Scikit-learn', logo: '📊', description: 'ML library for Python' },
        { name: 'Computer Vision', logo: '👁️', description: 'Image processing & analysis' }
      ]
    },
    seomarketing: {
      title: 'SEO & Marketing',
      description: 'Digital marketing and search engine optimization tools',
      technologies: [
        { name: 'Google Analytics', logo: '📈', description: 'Web analytics platform' },
        { name: 'SEMrush', logo: '🔍', description: 'SEO & marketing toolkit' },
        { name: 'Google Ads', logo: '📢', description: 'Pay-per-click advertising' },
        { name: 'Mailchimp', logo: '📧', description: 'Email marketing platform' },
        { name: 'Hotjar', logo: '🎯', description: 'User behavior analytics' },
        { name: 'Ahrefs', logo: '🔗', description: 'SEO analysis tool' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and deployment solutions',
      technologies: [
        { name: 'AWS', logo: '☁️', description: 'Amazon Web Services' },
        { name: 'Docker', logo: '🐳', description: 'Containerization platform' },
        { name: 'Kubernetes', logo: '⚓', description: 'Container orchestration' },
        { name: 'Vercel', logo: '▲', description: 'Frontend deployment platform' },
        { name: 'GitHub Actions', logo: '🔄', description: 'CI/CD automation' },
        { name: 'Terraform', logo: '🏗️', description: 'Infrastructure as code' }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              {techCategories[activeCategory as keyof typeof techCategories].title}
            </h3>
            <p className="text-gray-300">
              {techCategories[activeCategory as keyof typeof techCategories].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories[activeCategory as keyof typeof techCategories].technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{tech.logo}</span>
                  <h4 className="text-xl font-semibold">{tech.name}</h4>
                </div>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              70+
            </div>
            <p className="text-gray-300">Technologies Mastered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              6
            </div>
            <p className="text-gray-300">Service Categories</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              AI
            </div>
            <p className="text-gray-300">Powered Solutions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

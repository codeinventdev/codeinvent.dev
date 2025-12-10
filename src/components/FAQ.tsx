'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of projects does CodeInvent specialize in?",
      answer: "We specialize in web development, mobile app development, and custom software solutions. Our expertise includes e-commerce platforms, healthcare applications, fintech solutions, enterprise software, and AI-powered applications. We work with startups, SMEs, and large enterprises across various industries."
    },
    {
      question: "What is your development process and timeline?",
      answer: "Our development process follows agile methodology with these phases: 1) Discovery & Planning (1-2 weeks), 2) Design & Prototyping (2-3 weeks), 3) Development & Testing (4-12 weeks depending on complexity), 4) Deployment & Launch (1 week), 5) Ongoing Support & Maintenance. We provide regular updates and maintain transparent communication throughout."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and technical support. We provide different maintenance packages: Basic (bug fixes & security), Standard (includes minor updates), and Premium (includes new features and priority support)."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with cutting-edge technologies including: Frontend - React, Next.js, Vue.js, Angular; Backend - Node.js, Python, Java, .NET; Mobile - React Native, Flutter, iOS, Android; Databases - PostgreSQL, MongoDB, MySQL; Cloud - AWS, Azure, Google Cloud; AI/ML - TensorFlow, PyTorch, OpenAI APIs."
    },
    {
      question: "How do you ensure project security and data protection?",
      answer: "Security is our top priority. We implement industry-standard security practices including secure coding standards, regular security audits, encrypted data transmission, secure hosting environments, GDPR compliance, and regular backups. For healthcare and fintech projects, we ensure HIPAA and PCI DSS compliance respectively."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models: 1) Fixed Price - for well-defined projects with clear scope, 2) Time & Materials - for projects with evolving requirements, 3) Dedicated Team - for long-term partnerships, 4) Retainer - for ongoing support and maintenance. We provide detailed estimates after understanding your requirements."
    },
    {
      question: "Can you work with our existing team or systems?",
      answer: "Absolutely! We excel at integrating with existing teams and systems. We can work as an extension of your team, integrate with your current tech stack, migrate from legacy systems, and provide knowledge transfer. We're experienced in collaborating with in-house teams and other vendors."
    },
    {
      question: "Do you provide UI/UX design services?",
      answer: "Yes, we have a dedicated design team that provides comprehensive UI/UX services including user research, wireframing, prototyping, visual design, and usability testing. We follow design thinking principles and ensure all our applications are user-centered, accessible, and provide excellent user experience across all devices."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services, process, and approach.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

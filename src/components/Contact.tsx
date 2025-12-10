'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      info: '+91 7020615995'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      info: 'dev@codeinvent.dev'
    },
    {
      icon: ClockIcon,
      title: 'Response Time',
      info: 'Within 24 hours'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-500 text-gray-900"
              />
            </div>
            
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-500 text-gray-900"
              >
                <option value="">Select Service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile App Development</option>
                <option value="custom-software">Custom Software</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 resize-none placeholder-gray-500 text-gray-900"
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
                <p className="text-green-800 font-medium text-center">
                  ✅ Message sent successfully! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                <p className="text-red-800 font-medium text-center">
                  ❌ Failed to send message. Please try again or contact us directly at dev@codeinvent.dev
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

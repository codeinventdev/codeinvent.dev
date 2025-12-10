'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "CodeInvent transformed our business with their exceptional web development services. The team delivered beyond our expectations, creating a platform that increased our user engagement by 300%."
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The mobile app developed by CodeInvent revolutionized our customer experience. Their attention to detail and technical expertise is unmatched. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with CodeInvent was a game-changer. They delivered our complex healthcare platform on time and within budget. Their ongoing support has been exceptional."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeInvent",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": testimonial.text
    }))
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </blockquote>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

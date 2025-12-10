'use client';

import Navigation from '../components/Navigation';
import ModernHero from '../components/ModernHero';
import Services from '../components/Services';
import About from '../components/About';
import TechStack from '../components/TechStack';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Homepage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <header role="banner">
        <Navigation scrollToSection={scrollToSection} />
      </header>
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section id="hero" aria-label="Welcome and introduction">
          <ModernHero scrollToSection={scrollToSection} />
        </section>
        
        {/* Services Section */}
        <section id="services" aria-label="Our services">
          <Services />
        </section>
        
        {/* Technology Stack Section */}
        <section id="tech-stack" aria-label="Technology stack and tools">
          <TechStack />
        </section>
        
        {/* Case Studies Section */}
        <section id="case-studies" aria-label="Client success stories">
          <CaseStudies />
        </section>
        
        {/* About Section */}
        <section id="about" aria-label="About CodeInvent">
          <About />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" aria-label="Client testimonials">
          <Testimonials />
        </section>
        
        {/* FAQ Section */}
        <section id="faq" aria-label="Frequently asked questions">
          <FAQ />
        </section>
        
        {/* Contact Section */}
        <section id="contact" aria-label="Contact information and form">
          <Contact />
        </section>
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
      
      {/* Performance and SEO optimizations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "CodeInvent - Premium Web & Mobile App Development Services",
            "description": "Transform your business with expert web development, mobile app development, AI solutions, and digital marketing services from CodeInvent.",
            "url": "https://codeinvent.dev",
            "mainEntity": {
              "@type": "Organization",
              "name": "CodeInvent",
              "url": "https://codeinvent.dev",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7020615995",
                "email": "dev@codeinvent.dev",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://codeinvent.dev"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import "./animations.css";
import "./seo-optimizations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CodeInvent - Premium Web & Mobile App Development Services | AI Solutions",
  description: "CodeInvent delivers cutting-edge web development, mobile app development, AI solutions, and digital marketing services. Transform your business with our expert software development team. Contact us today!",
  keywords: [
    // Core Services
    "web development services",
    "mobile app development company",
    "custom software development",
    "enterprise software solutions",
    
    // Technology Stack
    "React development services",
    "Next.js web development",
    "Node.js backend development",
    "React Native app development",
    "Flutter mobile apps",
    
    // Industry Specific
    "healthcare app development",
    "HIPAA compliant software",
    "fintech application development",
    "e-commerce platform development",
    "SaaS application development",
    
    // AI & Advanced
    "AI solutions provider",
    "machine learning development",
    "AI automation services",
    "chatbot development",
    "predictive analytics",
    
    // Location Based
    "software development company India",
    "web development agency",
    "mobile app developers",
    
    // Service Types
    "full stack development",
    "API development services",
    "cloud migration services",
    "DevOps consulting",
    "UI/UX design services",
    "digital transformation",
    
    // Business Value
    "scalable web applications",
    "secure mobile apps",
    "business automation",
    "digital marketing services",
    "SEO optimization",
    
    // Brand
    "CodeInvent",
    "codeinvent.dev"
  ],
  authors: [{ name: "CodeInvent Development Team" }],
  creator: "CodeInvent",
  publisher: "CodeInvent",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeinvent.dev",
    title: "CodeInvent - Premium Web & Mobile App Development Services",
    description: "Transform your business with CodeInvent's expert web development, mobile app development, AI solutions, and digital marketing services. Get a free consultation today!",
    siteName: "CodeInvent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeInvent - Web & Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeInvent - Premium Web & Mobile App Development Services",
    description: "Expert web development, mobile apps, AI solutions & digital marketing. Transform your business with CodeInvent's cutting-edge technology solutions.",
    images: ["/twitter-image.jpg"],
    creator: "@codeinvent",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codeinvent.dev"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CodeInvent",
    "alternateName": "CodeInvent Software Development",
    "url": "https://codeinvent.dev",
    "logo": "https://codeinvent.dev/logo.png",
    "description": "Premium web development, mobile app development, AI solutions, and digital marketing services. We deliver cutting-edge software solutions for businesses worldwide.",
    "email": "dev@codeinvent.dev",
    "telephone": "+91 7020615995",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "sameAs": [
      "https://linkedin.com/company/codeinvent",
      "https://twitter.com/codeinvent",
      "https://github.com/codeinvent"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "5"
    },
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "AI Solutions",
      "Digital Marketing",
      "SEO Services",
      "Custom Software Development",
      "Cloud Services",
      "DevOps Consulting"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Worldwide"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Flutter",
      "AI Solutions",
      "Machine Learning",
      "Cloud Computing",
      "DevOps",
      "UI/UX Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CodeInvent Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web applications using React, Next.js, and modern technologies. Responsive, fast, and SEO-optimized websites.",
            "provider": {
              "@type": "Organization",
              "name": "CodeInvent"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
            "provider": {
              "@type": "Organization",
              "name": "CodeInvent"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions",
            "description": "Machine learning, automation, and artificial intelligence solutions including chatbots, predictive analytics, and computer vision.",
            "provider": {
              "@type": "Organization",
              "name": "CodeInvent"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions for enterprise needs including CRM, ERP, and business automation systems.",
            "provider": {
              "@type": "Organization",
              "name": "CodeInvent"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing & SEO",
            "description": "Comprehensive digital marketing strategies, SEO optimization, and content marketing services.",
            "provider": {
              "@type": "Organization",
              "name": "CodeInvent"
            }
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "CodeInvent",
              "url": "https://codeinvent.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://codeinvent.dev/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <meta name="google-adsense-account" content="ca-pub-5792191153972402" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CodeInvent" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

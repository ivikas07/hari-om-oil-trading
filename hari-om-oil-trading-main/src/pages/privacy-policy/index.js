import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Hari Om Oil Trading",
    "description": "Privacy policy for industrial lubricants and polymer trading company. Learn how we handle your data.",
    "url": "http://www.hariomoiltrading.com/privacy-policy"
  };

  return (
    <div>
      <Head>
        <title>Privacy Policy - Hari Om Oil Trading</title>
        <meta
          name="description"
          content="Privacy policy for engine oil, grease, and polymer trading company. Learn how we handle your industrial data."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="py-20 px-5 text-white bg-[var(--color-primary)]">
      
        <div className="container-max section-padding text-center">
        
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-[var(--color-white)]">
            Protecting your industrial and business information
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="py-16 px-5 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-gray-700 text-right">Last updated: May 2025</p>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Introduction</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to Hari Om Oil Trading, your trusted partner for engine oils, greases, and polymer products. 
                We value your business privacy and are committed to protecting your commercial and industrial information. 
                This Privacy Policy explains how we handle data when you engage with us for lubricant and polymer trading services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Information We Collect</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                In our industrial trading operations, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li><strong>Business Information:</strong> Company name, contact person, business address, tax identification numbers, and payment details</li>
                <li><strong>Product Requirements:</strong> Technical specifications for engine oils, greases, and polymers you inquire about</li>
                <li><strong>Transactional Data:</strong> Order history, delivery details, and commercial correspondence</li>
                <li><strong>Technical Usage:</strong> IP address, browser type, and pages visited on our industrial portal</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">How We Use Your Information</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Process orders for lubricants and polymer products</li>
                <li>Provide technical support for industrial applications</li>
                <li>Manage commercial relationships with B2B clients</li>
                <li>Develop specialized product formulations</li>
                <li>Comply with industry regulations and standards</li>
                <li>Improve our industrial trading platform</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Data Sharing Practices</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We may share necessary information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mt-2">
                <li>Certified logistics partners for product delivery</li>
                <li>Payment processing services for commercial transactions</li>
                <li>Technical laboratories for product testing and certification</li>
                <li>Regulatory authorities as required by industrial compliance</li>
              </ul>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                We never sell your business information to marketing agencies.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Industrial Data Security</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We implement enterprise-grade security measures including:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mt-2">
                <li>Encrypted commercial transactions</li>
                <li>Secure document storage for technical specifications</li>
                <li>Restricted access to sensitive industrial data</li>
                <li>Regular security audits of our trading systems</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Your Business Rights</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                As our commercial partner, you can:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 mt-2">
                <li>Request access to your commercial records</li>
                <li>Update company information and contacts</li>
                <li>Obtain order history documentation</li>
                <li>Manage communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Contact Our Compliance Team</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                For industrial data protection inquiries:
              </p>
              <address className="not-italic text-gray-700 text-lg leading-relaxed">
                Hari Om Oil Trading<br />
                Data Protection Officer<br />
                Email: <a href='mailto:hariomoiltrading@gmail.com' className="text-[var(--color-primary)] hover:underline">hariomoiltrading@gmail.com</a><br />
                Phone: +91 90166 37062
              </address>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                We may update this policy to reflect changes in industrial trading regulations. 
                Major changes will be communicated to our business partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
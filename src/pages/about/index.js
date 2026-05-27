// src/pages/about/index.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Award,
  Users,
  Truck,
  Factory,
  Shield,
  Clock,
  Heart,
  Handshake,
  Leaf,
  Target,
  BarChart2,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We operate with honesty and ethical practices at every level of business.",
      color: "from-[#1a365d] to-[#2d3748]",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "We build long-term relationships with clients and suppliers based on mutual trust.",
      color: "from-[#1a365d] to-[#2d3748]",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We support environmentally conscious operations and responsible sourcing.",
      color: "from-[#1a365d] to-[#2d3748]",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver only quality products that perform as promised.",
      color: "from-[#1a365d] to-[#2d3748]",
    },
    {
      icon: BarChart2,
      title: "Innovation",
      description:
        "We adapt to changing market needs with practical solutions.",
      color: "from-[#1a365d] to-[#2d3748]",
    },
    {
      icon: Globe,
      title: "Customer Focus",
      description:
        "We prioritize customer needs and provide tailored recommendations.",
      color: "from-[#1a365d] to-[#2d3748]",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Products" },
    { value: "2000+", label: "Happy Clients" },
    { value: "Pan-India", label: "Delivery Network" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fafc] to-white">
      <Head>
        <title>About Us | Hari Om Oil Trading</title>
        <meta
          name="description"
          content="Discover Hari Om Oil Trading - trusted traders of lubricants, greases, polymers, and dyes in Modasa, Gujarat since 2009. Quality products, reliable service."
        />
        <meta
          name="keywords"
          content="lubricant traders, grease suppliers, OCP polymer granules, viscosity index improvers, dye suppliers Gujarat, Modasa oil traders"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hariomoiltrading.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hari Om Oil Tradings",
              url: "http://www.hariomoiltrading.com/",
              logo: "http://www.hariomoiltrading.com/logo.png",
              description:
                "Hari Om Oil Trading is a reliable trader and supplier of automotive lubricants, industrial lubricants, greases, viscosity index improvers, OCP polymers (granules), and specialty dyes in Modasa, Gujarat.",
              foundingDate: "2009",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 90166 37062",
                contactType: "Customer Support",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Modasa",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              sameAs: ["https://www.instagram.com/hariomoiltrading"],
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="relative py-24 text-white overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2d3748]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/70 to-black/70 z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff914d] rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a365d] rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-[#ff914d]">Journey</span> of Excellence
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-[#cbd5e0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted Traders & Suppliers of Lubricants, Polymers & Dyes in
            Modasa, Gujarat
          </motion.p>
        </div>
      </div>

      {/* Company Story */}
      <div className="  py-5 bg-white">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-[#ff914d] to-[#e67a3e] text-white px-6 py-2 rounded-full mb-6">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
                Building Trust Since{" "}
                <span className="text-[#ff914d]">2009</span>
              </h2>
              <p className="text-[#2d3748] text-lg mb-6 leading-relaxed">
                Established in 2009, Hari Om Oil Trading has grown from a local
                supplier to a reliable trading partner across India. Based in
                Modasa, Gujarat, we deal in a broad range of products including
                automotive & industrial lubricants, greases, OCP polymer
                granules, viscosity index improvers, and specialty dyes.
              </p>
              <p className="text-[#2d3748] text-lg mb-6 leading-relaxed">
                As dedicated traders, we work closely with reputable
                manufacturers to ensure timely availability and competitive
                pricing for our customers. Our clients include lubricant
                manufacturers, service centers, retailers, and bulk buyers.
              </p>
              <p className="text-[#2d3748] text-lg leading-relaxed">
                Visit our shop located in Bandhan Arcade, Modasa, for
                personalized service and a wide selection of performance-focused
                products.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dnwhvplae/image/upload/v1751401993/abot_page_ssdefx.png"
                  alt="Inside view of Hari Om Oil Trading shop at Bandhan Arcade, Modasa"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className=" py-5  bg-[var(--color-white)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-[#cbd5e0] leading-relaxed">
                To be India&#39;s most trusted trader and distributor in the
                lubricant and chemical supply sector, known for integrity,
                efficiency, and product quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#ff914d] to-[#e67a3e] text-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#ffe8d6] leading-relaxed">
                To reliably supply high-performance lubricants, polymers, and
                dyes while maintaining excellent customer service and long-term
                client relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-10 bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#cbd5e0]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-[#ff914d] to-[#e67a3e] text-white px-6 py-2 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              The Hari Om Oil Trading Advantage
            </h2>
            <p className="text-[#2d3748] max-w-2xl mx-auto">
              Here&#39;s what makes us a preferred partner for businesses across
              India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <motion.div
              className="text-center p-8 bg-gradient-to-b from-white to-[#f7fafc] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#f7fafc] to-[#edf2f7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-[#ff914d]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">
                Genuine Products
              </h3>
              <p className="text-[#2d3748]">
                We source directly from reputable manufacturers to ensure
                product authenticity and quality.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gradient-to-b from-white to-[#f7fafc] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#f7fafc] to-[#edf2f7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-[#ff914d]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">
                Timely Dispatch
              </h3>
              <p className="text-[#2d3748]">
                Orders are dispatched quickly with efficient logistics, ensuring
                minimal delays for our clients.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gradient-to-b from-white to-[#f7fafc] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#f7fafc] to-[#edf2f7] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#ff914d]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a365d]">
                Personalized Service
              </h3>
              <p className="text-[#2d3748]">
                Our team provides tailored product guidance to meet your
                industry-specific needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="py-20 bg-[var(--color-white)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white px-6 py-2 rounded-full mb-4">
              Our Infrastructure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
              Designed for Excellence
            </h2>
            <p className="text-[#2d3748] max-w-2xl mx-auto">
              Centrally located retail shop with sufficient stock to serve
              urgent and bulk requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 py-3">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Factory className="h-12 w-12 text-[#ff914d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">
                Always In Stock
              </h3>
              <p className="text-[#2d3748]">
                We maintain inventory of high-demand lubricant and additive
                products.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Award className="h-12 w-12 text-[#ff914d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">
                Premium Brands
              </h3>
              <p className="text-[#2d3748]">
                Partnered with reputable manufacturers for assured quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Truck className="h-12 w-12 text-[#ff914d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">
                Quick Dispatch
              </h3>
              <p className="text-[#2d3748]">
                Orders shipped within 1–2 working days.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Users className="h-12 w-12 text-[#ff914d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#1a365d]">
                Experienced Team
              </h3>
              <p className="text-[#2d3748]">
                Run by professionals with strong domain knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-[#ff914d] to-[#e67a3e] text-white px-6 py-2 rounded-full mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Foundation of Our Success
            </h2>
            <p className="text-[#cbd5e0] max-w-2xl mx-auto">
              Our commitment to ethical and customer-centric practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`bg-gradient-to-r ${value.color} text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-[#cbd5e0]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white text-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#FF914D]/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-8 shadow-md">
              <Handshake className="w-12 h-12 text-[#FF914D]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>

            <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust us for their
              industrial needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#FF914D] text-white font-bold rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Contact Our Team
              </Link>

              <Link
                href="/products"
                className="px-8 py-4 border-2 border-[#FF914D] text-[#FF914D] font-bold rounded-lg  hover:scale-100 transition-transform duration-300"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

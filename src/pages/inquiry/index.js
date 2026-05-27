// src/pages/inquiry/index.js
import React, { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Send, Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HOME_PRODUCTS } from "@/data/products";
import { ENGINE_OILS } from "@/data/engineOil";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO, EMAILJS_CONFIG, getWhatsappURL, getMailtoURL } from "@/config/contact";

const Inquiry = () => {
  const allProducts = [...HOME_PRODUCTS, ...ENGINE_OILS].map(
    (product, index) => ({
      ...product,
      id: product.code || `product-${index}`,
    })
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.inquiryTemplate,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )
      .then(() => {
        toast.success("Thank you! We will contact you shortly.");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Inquiry submission error:", error);
        toast.error("Failed to send inquiry. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  const whatsappURL = getWhatsappURL();

  const mailToURL = getMailtoURL();

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Us",
      text: "Send us an email and we’ll respond within 24 hours",
      href: mailToURL,
      linkText: CONTACT_INFO.email,
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "Speak directly with our sales team",
      href: `tel:${CONTACT_INFO.phone}`,
      linkText: CONTACT_INFO.phone,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      text: "Quick responses via WhatsApp",
      href: whatsappURL,
      linkText: "Chat on WhatsApp",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Request a Quote | Hari Om Oil Tradings - Engine Oils, Greases &
          Polymers
        </title>
        <meta
          name="description"
          content="Request a competitive quote from Hari Om Oil Tradings, trusted Indian trader of engine oils, industrial greases, and polymer products. Fast response and nationwide service."
        />
        <meta
          name="keywords"
          content="request quote, oil quote, engine oil supplier, grease trader, polymer trader, industrial lubricants India, Hari Om Oil Tradings"
        />
        <meta name="author" content="Hari Om Oil Tradings" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Request a Quote | Hari Om Oil Tradings"
        />
        <meta
          property="og:description"
          content="Contact Hari Om Oil Tradings to get pricing and supply details for premium engine oils, greases, and polymers. Serving industries across India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.hariomoiltradings.com/inquiry"
        />
        <meta property="og:site_name" content="Hari Om Oil Tradings" />
      </Head>

      <Navbar />

      <div className="relative py-28 text-white overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2d3748]">
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
            Request a <span className="text-[#ff914d]">Custom Quote</span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in touch with us for customized solutions and competitive
            pricing
          </motion.p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="py-10 bg-gradient-to-b from-[#f7fafc] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-accent)] transition-colors"
              >
                Back to Home
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-3">
              {/* Form Section */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-[#ff914d] to-[#e67300] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2d3748] mb-2">
                    Get a Quote
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form and our team will contact you shortly
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
                      Thank You for Your Inquiry!
                    </h3>
                    <p className="text-gray-600 mb-8">
                      We&#39;ve received your message and will contact you
                      within 24 hours. In the meantime, feel free to explore our
                      products.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link
                        href="/products"
                        className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-medium hover:shadow-lg transition-all text-center"
                      >
                        Browse Products
                      </Link>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:outline-none  text-[var(--color-text)]  "
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#2d3748] mb-2"
                          >
                            Email Address *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter your email"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)] "
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-[#2d3748] mb-2"
                          >
                            Phone Number *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              placeholder="Enter your phone number"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="product"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Product Interested In
                        </label>
                        <div className="relative">
                          <select
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)] appearance-none bg-white"
                          >
                            <option value="">Select a product</option>
                            {allProducts.map((product) => (
                              <option key={product.id} value={product.name}>
                                {product.name}
                              </option>
                            ))}
                            <option value="other">
                              Other (Specify in message)
                            </option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[var(--color-text)] mb-2"
                        >
                          Your Requirements *
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            required
                            placeholder="Please describe your requirements, quantity needed, and any specific details..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-xl"
                      style={{
                        background: isSubmitting
                          ? "#e67300"
                          : "linear-gradient(to right, #ff914d, #e67300)",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info Section */}
              <motion.div
                className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white rounded-2xl p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Why Submit an Inquiry?
                  </h2>
                  <p className="text-blue-100 mb-6">
                    Our team of experts will provide personalized solutions
                    tailored to your specific industrial requirements.
                  </p>

                  <ul className="space-y-4">
                    {[
                      "Custom pricing for bulk orders",
                      "Technical specifications and product details",
                      "Compatibility recommendations",
                      "Delivery timeline and logistics",
                      "Samples for testing and validation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-[#ff914d] rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-blue-800 pt-8">
                  <h3 className="text-xl font-bold mb-6">
                    What Happens After Submission?
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Confirmation",
                        desc: "You'll receive an email confirmation immediately",
                      },
                      {
                        step: "2",
                        title: "Review",
                        desc: "Our team reviews your requirements",
                      },
                      {
                        step: "3",
                        title: "Contact",
                        desc: "We'll contact you within 24 hours",
                      },
                      {
                        step: "4",
                        title: "Solution",
                        desc: "Personalized solution and quote",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex">
                        <div className="bg-[#1a365d] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            {item.title}
                          </h4>
                          <p className="text-blue-200">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-20 bg-gradient-to-b from-white to-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Prefer to contact us directly? Here are other ways to get in
                touch
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-3">
            {contactOptions.map((option, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-[#ffefe5] to-[#ffd9c2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <option.icon className="h-8 w-8 text-[#ff914d]" />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#2d3748] mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-center mb-5">{option.text}</p>
                <a
                  href={option.href}
                  className="block text-center font-medium text-[#ff914d] hover:text-[#e67300] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.linkText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inquiry;

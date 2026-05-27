// src/pages/contact/index.js
import React, { useState, useRef } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronRight,
  MessageCircle,
  User,
  Captions,
} from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { CONTACT_INFO, EMAILJS_CONFIG, getWhatsappURL, getMailtoURL } from "@/config/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [activeTab, setActiveTab] = useState("form");
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.contactTemplate,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Contact form submission error:", error);
        toast.error("Failed to send message!");
      })
      .finally(() => setIsSending(false));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      content:
        "Shop No- 60 First Floor, Bandhan Arcade, Meghraj Road, Modasa-383315, India",
      action: "Get Directions",
      url: "https://www.google.com/maps?q=Bandhan+Arcade,+Modasa+383315+India",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: `Support: ${CONTACT_INFO.phone}`,
      action: "Call Now",
      url: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      title: "Email Addresses",
      content: `Sales: ${CONTACT_INFO.email}`,
      action: "Send Email",
      url: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content:
        "Monday-Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
      action: "Schedule Visit",
      url: "/inquiry",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fafc] to-white">
      <Head>
        <title>Contact Us | Hari Om Oil Trading</title>
        <meta
          name="description"
          content="Get in touch with Hari Om Oil Trading for support, inquiries, and business contact information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hariomoiltrading.com/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hari Om Oil Tradings",
              image: "http://www.hariomoiltrading.com/logo.png",
              telephone: "+91 90166 37062",
              email: CONTACT_INFO.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop No- 60 First Floor, Bandhan Arcade, Meghraj Road",
                addressLocality: "Modasa",
                postalCode: "383315",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              url: "https://www.hariomoiltrading.com/contact",
              sameAs: [
                "https://www.instagram.com/hariomoiltrading",
              ],
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section - Updated colors */}
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
            Let&#39;s <span className="text-[#ff914d]">Connect</span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in touch with our team for any questions, support, or business
            inquiries
          </motion.p>
        </div>
      </div>

      {/* Contact Tabs */}
      <div className="py-5 bg-[var(--color-white)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab("form")}
                className={`px-6 py-3 font-medium text-lg relative ${
                  activeTab === "form"
                    ? "text-[#ff914d]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Send Message
                {activeTab === "form" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff914d] rounded-t"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`px-6 py-3 font-medium text-lg relative ${
                  activeTab === "info"
                    ? "text-[#ff914d]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Contact Information
                {activeTab === "info" && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff914d] rounded-t"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-5  bg-[var(--color-white)] ">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {activeTab === "form" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-3">
                {/* Contact Form */}
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
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form and our team will contact you shortly
                    </p>
                  </div>

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
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
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
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter your email"
                              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-[#2d3748] mb-2"
                          >
                            Phone Number
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-[#2d3748] mb-2"
                          >
                            Subject
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Captions className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Enter subject"
                              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Message *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                            <MessageCircle className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
                            placeholder="Enter your message..."
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-xl"
                      style={{
                        background: isSending
                          ? "#e67300"
                          : "linear-gradient(to right, #ff914d, #e67300)",
                        cursor: isSending ? "not-allowed" : "pointer",
                      }}
                      disabled={isSending}
                    >
                      {isSending ? (
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white rounded-2xl p-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      How to Reach Us
                    </h2>

                    <div className="space-y-6">
                      {contactInfo.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-2">
                              {item.title}
                            </h3>
                            <p className="text-blue-100 whitespace-pre-line mb-3">
                              {item.content}
                            </p>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#ff914d] hover:text-[#ffaa6d] transition-colors"
                            >
                              {item.action}
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="border-t border-[#1a365d] pt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Our Response Time
                    </h3>
                    <p className="text-blue-200 mb-6">
                      We pride ourselves on quick response times. Here&#39;s
                      what you can expect:
                    </p>

                    <div className="space-y-4">
                      <div className="flex">
                        <div className="bg-[#1a365d] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Email Inquiries
                          </h4>
                          <p className="text-blue-200">
                            Response within 24 hours
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-[#1a365d] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            Phone Calls
                          </h4>
                          <p className="text-blue-200">
                            Answered during business hours
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-[#1a365d] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            WhatsApp Messages
                          </h4>
                          <p className="text-blue-200">Replied within 1 hour</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </motion.div>
              </div>
            ) : (
              <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-5">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-[#ffefe5] to-[#ffd9c2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <item.icon className="h-8 w-8 text-[#ff914d]" />
                      </div>
                      <h3 className="text-xl font-semibold text-center text-[#2d3748] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-center mb-5 whitespace-pre-line">
                        {item.content}
                      </p>
                      <a
                        href={item.url}
                        target={
                          item.url.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block text-center font-medium text-[#ff914d] hover:text-[#e67300] transition-colors"
                      >
                        {item.action}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-20 bg-gradient-to-b from-white to-[#f7fafc] p-5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-[#ff914d] to-[#e67300] text-white px-6 py-2 rounded-full mb-4">
                Visit Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
                Our Location in Modasa
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our trading office located at Bandhan Arcade, Modasa.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 ">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-96 lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3659.8418995225893!2d73.30225!3d23.466166699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI3JzU4LjIiTiA3M8KwMTgnMDguMSJF!5e0!3m2!1sen!2sin!4v1751198810931!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hari Om Oil Tradings"
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
                  Getting Here
                </h3>
                <p className="text-gray-600 mb-6">
                  Our facility is conveniently located in the heart of Modasa at
                  Bandhan Arcade on Meghraj Road. We&#39;re easily accessible
                  from all parts of the city.
                </p>

                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2d3748]">Address</h4>
                      <p className="text-gray-600">
                        Shop No-60, First Floor, Bandhan Arcade, Meghraj Road,
                        Modasa-383315, India
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2d3748]">Parking</h4>
                      <p className="text-gray-600">
                        Ample parking space available in front of the building
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2d3748]">
                        Appointments
                      </h4>
                      <p className="text-gray-600">
                        Please call ahead to schedule a facility tour
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shop+No-60,+First+Floor,+Bandhan+Arcade,+Meghraj+Road,+Modasa-383315,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 w-full text-center py-3 bg-gradient-to-r from-[#ff914d] to-[#e67300] text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-5 bg-white">
        <div className="max-w-4xl mx-auto text-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FAQ />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

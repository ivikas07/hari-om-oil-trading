import React, { useState, useRef } from "react";
import { Send, CheckCircle, X } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { EMAILJS_CONFIG } from "@/config/contact";

const InquryForm = ({ onClose, productName, category }) => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName || "",
    category: category || "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          category: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Inquiry form submission error:", error);
        toast.error("Failed to send inquiry. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto relative">
      {onClose && (
        <button
          className="absolute top-0 right-0 z-10 bg-gray-100 rounded-full p-2 shadow hover:bg-gray-200 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      )}

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
        <div className="text-center py-10">
          <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
            Thank You for Your Inquiry!
          </h3>
          <p className="text-gray-600 mb-8">
            We've received your message and will contact you within 24 hours. In
            the meantime, feel free to explore our products.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="on"
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
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#2d3748] mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2d3748] mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
              />
            </div>

            <div>
              <label
                htmlFor="product"
                className="block text-sm font-medium text-[#2d3748] mb-2"
              >
                Product
              </label>
              <input
                type="text"
                id="product"
                name="product"
                autoComplete="off"
                value={formData.product}
                onChange={handleChange}
                placeholder="Enter product (if any)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-[#2d3748] mb-2"
              >
                Select Category
              </label>
              <select
                id="category"
                name="category"
                autoComplete="off"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)] appearance-none bg-white"
              >
                <option value="">--- Select Category ---</option>
                <option value="Polymer">Polymer</option>
                <option value="Engine Oil">Engine Oil</option>
                <option value="Grease">Grease</option>
                <option value="Viscosity Index Improver">
                  Viscosity Index Improver
                </option>
                <option value="Perfume Additive">Perfume Additive</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Write Requirement or brief...
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                maxLength={1000}
                placeholder="Please describe your requirements, quantity needed, and any specific details..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[var(--color-text)]"
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.message.length}/1000
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all shadow-lg hover:shadow-xl text-base"
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
                  className="animate-spin h-5 w-5 text-white"
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
                <Send className="h-5 w-5" />
                Send Inquiry — Fast Response &lt;10 min
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

InquryForm.propTypes = {
  onClose: PropTypes.func,
  productName: PropTypes.string,
  category: PropTypes.string,
};

InquryForm.defaultProps = {
  onClose: null,
  productName: "",
  category: "",
};

export default InquryForm;

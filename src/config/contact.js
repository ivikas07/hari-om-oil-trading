// src/config/contact.js
// Centralized contact information configuration

export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_PHONE || '+91 90166 37062',
  phonePlain: process.env.NEXT_PUBLIC_PHONE_CLEAN || '9016637062',
  email: process.env.NEXT_PUBLIC_EMAIL || 'hariomoiltrading@gmail.com',
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '919016637062',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hariomoiltrading.in',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Hari Om Oil Tradings',
};

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  inquiryTemplate: process.env.NEXT_PUBLIC_EMAILJS_INQUIRY_TEMPLATE,
  contactTemplate: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE,
};

export const getWhatsappURL = (message = '') => {
  const defaultMessage = `Hello Hari Om Oil Trading,

I would like to inquire about your products and services.

Please get back to me at your earliest convenience.

Thank you!`;
  
  return `https://wa.me/${CONTACT_INFO.whatsappPhone}?text=${encodeURIComponent(
    message || defaultMessage
  )}`;
};

export const getMailtoURL = (subject = '', body = '') => {
  const defaultSubject = 'Product Inquiry – Hari Om Oil Trading';
  const defaultBody = `Hello Hari Om Oil Trading,

I am interested in learning more about your products and services.  
Please provide details regarding product availability, pricing, and delivery options.

Thank you,`;

  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    subject || defaultSubject
  )}&body=${encodeURIComponent(body || defaultBody)}`;
};

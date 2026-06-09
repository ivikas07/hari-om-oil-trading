import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ENGINE_OILS } from "@/data/engineOil";
import { HOME_PRODUCTS } from "@/data/products";
const Sitemap = () => {
  const [activeTab, setActiveTab] = useState("pages");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Sitemap - Hari Om Oil Trading",
    description:
      "Quick links to the main sections of Hari Om Oil Trading website.",
    url: "https://www.hariomoiltrading.in/sitemap",
    about: [
      {
        "@type": "WebPage",
        name: "Home",
        url: "https://www.hariomoiltrading.in/",
      },
      {
        "@type": "WebPage",
        name: "About Us",
        url: "https://www.hariomoiltrading.in/about",
      },
      {
        "@type": "WebPage",
        name: "Products",
        url: "https://www.hariomoiltrading.in/products",
      },
      {
        "@type": "WebPage",
        name: "Inquiry",
        url: "https://www.hariomoiltrading.in/inquiry",
      },
      {
        "@type": "WebPage",
        name: "Contact",
        url: "https://www.hariomoiltrading.in/contact",
      },
      {
        "@type": "WebPage",
        name: "Privacy Policy",
        url: "https://www.hariomoiltrading.in/privacy-policy",
      },
      {
        "@type": "WebPage",
        name: "Terms & Conditions",
        url: "https://www.hariomoiltrading.in/terms-and-conditions",
      },
      {
        "@type": "WebPage",
        name: "Sitemap",
        url: "https://www.hariomoiltrading.in/sitemap",
      },
    ],
  };

  const siteLinks = [
    {
      title: "Home",
      path: "/",
      description:
        "Landing page with company overview and featured industrial products",
    },
    {
      title: "About Us",
      path: "/about",
      description:
        "Discover our journey, core values, and trading expertise in lubricants and polymers",
    },
    {
      title: "Products",
      path: "/products",
      description:
        "Browse our industrial lubricants, engine oils, additives, and specialty polymers",
    },
    {
      title: "Inquiry",
      path: "/inquiry",
      description:
        "Send an inquiry or request a custom quote for bulk supply and trading",
    },
    {
      title: "Contact",
      path: "/contact",
      description:
        "Connect with our team for business inquiries, partnerships, or support",
    },
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
      description:
        "Understand how we handle your personal and business information",
    },
    {
      title: "Terms & Conditions",
      path: "/terms-and-conditions",
      description: "Review our website usage policies and trading terms",
    },
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Hari Om Oil Trading</title>
        <meta
          name="description"
          content="Quick links to the main sections of Hari Om Oil Trading website."
        />
        <meta
          name="keywords"
          content="Sitemap, Hari Om Oil Trading, Website Links"
        />
        <meta name="author" content="Hari Om Oil Trading" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div>
        <Navbar />

        {/* Hero Section */}
        <div className="py-20 text-white bg-[var(--color-primary)]">
          <div className="container-max section-padding text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-[var(--color-white)]">
              Quick navigation to all sections of our website
            </p>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="bg-[var(--color-white)] py-8">
          <div className="container-max section-padding text-center">
            <div className="inline-flex gap-4 justify-center">
              <button
                className={`px-6 py-2 rounded-full font-semibold border-2 cursor-pointer ${
                  activeTab === "pages"
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                    : "bg-white text-[var(--color-primary)] border-[var(--color-primary)]"
                }`}
                onClick={() => setActiveTab("pages")}
              >
                Quick Links
              </button>
              <button
                className={`px-6 py-2 rounded-full font-semibold border-2 cursor-pointer ${
                  activeTab === "products"
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                    : "bg-white text-[var(--color-primary)] border-[var(--color-primary)]"
                }`}
                onClick={() => setActiveTab("products")}
              >
                Products
              </button>
            </div>
          </div>
        </div>

        {/* Sitemap Content */}
        <div className="py-20 bg-[var(--color-white)]">
          <div className="container-max section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {activeTab === "pages"
                ? siteLinks.map((link, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Link href={link.path} className="block p-6 h-full">
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">
                          {link.title}
                        </h3>
                        <p className="text-gray-700">{link.description}</p>
                      </Link>
                    </div>
                  ))
                : HOME_PRODUCTS.concat(ENGINE_OILS)
                    .filter((p) => p.endpoint)
                    .map((product, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Link
                          href={`/product/${product.endpoint}`}
                          className="block p-6 h-full"
                        >
                          <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">
                            {product.name}
                          </h3>
                          <p className="text-gray-700">
                            {product.category || "Product"}
                          </p>
                        </Link>
                      </div>
                    ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;

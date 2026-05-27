// src/pages/products/index.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HOME_PRODUCTS } from "@/data/products";
import { ENGINE_OILS } from "@/data/engineOil";
import { generateDefaultFeatures } from "../product/[productId]";
import InquryForm from "@/components/InquryForm";

const Products = () => {
  const router = useRouter();
  const { category } = router.query;
  const [isOpen, setIsOpen] = useState(false);

  // Combine All products
  const AllProducts = [...HOME_PRODUCTS, ...ENGINE_OILS].map(
    (product, index) => ({
      ...product,
      id: product.endpoint || `product-${index}`,
      features: product.features || [],
    })
  );

  // Get unique categories for dropdown (filter out undefined)
  const categories = [
    "All",
    ...Array.from(new Set(AllProducts.map((p) => p.category).filter(Boolean))),
  ];

  const [activeFilter, setActiveFilter] = useState("a");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [formData, setFormData] = useState({ productName: "", category: "" });

  const handlePopup = (productName, category) => {
    setFormData({ productName: productName, category: category });
    setIsOpen(true);
  };

  // Set filter from query param
  useEffect(() => {
    if (category && categories.includes(category)) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }
    // eslint-disable-next-line
  }, [category, categories.join(",")]);

  // Get the current product/category name for heading
  const productName = activeFilter === "All" ? "Lubricants" : activeFilter;

  // Filter products by category and search
  const filteredProducts = AllProducts.filter((product) => {
    const matchesFilter =
      activeFilter === "All" ? true : product.category === activeFilter;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Structured data for SEO
  const structuredProductData = AllProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image || product.images?.[0],
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand || "Hari Om Oil Tradings",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `http://www.hariomoiltrading.com/product/${product.id}`,
      priceCurrency: "INR",
      price: product.price?.replace(/[^\d.]/g, "") || "0.00",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "http://www.hariomoiltrading.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "http://www.hariomoiltrading.com/products",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Premium Products | Hari Om Oil Tradings</title>
        <meta
          name="description"
          content="Discover high-quality engine oils, greases, and polymer additives from Hari Om Oil Tradings. We are trusted industrial traders in India."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hariomoiltrading.com/products"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Our Premium Products | Hari Om Oil Tradings"
        />
        <meta
          property="og:description"
          content="Discover high-quality engine oils, greases, and polymer additives from Hari Om Oil Tradings. We are trusted industrial traders in India."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.hariomoiltrading.com/products"
        />
        <meta
          property="og:image"
          content="https://www.hariomoiltrading.com/about.png"
        />
        <meta property="og:site_name" content="Hari Om Oil Tradings" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Premium Products | Hari Om Oil Tradings"
        />
        <meta
          name="twitter:description"
          content="Explore premium engine oils, industrial greases, and polymer additives from trusted Indian traders Hari Om Oil Tradings."
        />
        <meta
          name="twitter:image"
          content="https://www.hariomoiltrading.com/about.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredProductData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>
      <Navbar />
      <div
        className="relative py-24 text-white bg-[var(--color-primary)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/70 to-black/70 z-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff914d] rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a365d] rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight transition-All duration-500">
            Premium Industrial{" "}
            <span className="  text-[var(--color-accent)] transition-colors duration-500">
              {productName}
            </span>{" "}
            &amp; Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 transition-All duration-500">
            {activeFilter !== "All"
              ? `Explore details and features of our ${productName}.`
              : "Discover our range of high-performance oils, greases, and additives engineered for peak efficiency and durability."}
          </p>
        </div>
      </div>
      <div className="py-8 px-8 bg-[var(--color-white)]">
        <div className="container mx-auto px-4">
          {/* Mobile Only: Top Bar */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center px-3 py-2 bg-[var(--color-primary)] text-white rounded-md text-sm font-medium"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
            <div className="text-[var(--color-text)] font-semibold text-sm">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Desktop Filter */}
            <div className="hidden md:flex items-center space-x-4 w-full md:w-auto order-2 md:order-1">
              <label
                htmlFor="categoryFilter"
                className="sr-only  text-[var(--color-text)] "
              >
                Filter by product
              </label>
              <select
                id="categoryFilter"
                value={activeFilter}
                onChange={(e) => {
                  setActiveFilter(e.target.value);
                  if (e.target.value === "All") {
                    router.replace({ pathname: "/products" }, undefined, {
                      shAllow: true,
                    });
                  } else {
                    router.replace(
                      {
                        pathname: "/products",
                        query: { category: e.target.value },
                      },
                      undefined,
                      { shAllow: true }
                    );
                  }
                }}
                className="px-4 py-2 border border-gray-800 rounded-md text-sm text-[var(--color-text)] focus:outline-none"
              >
                {categories.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar - Full width on mobile, centered on desktop */}
            <div className="w-full md:w-1/2 lg:w-2/5 order-1 md:order-2 mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-800 rounded-md text-sm text-[var(--color-text)] shadow-sm hover:shadow-md  outline-none  transition-shadow duration-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Product Count - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block text-[var(--color-text)] font-semibold text-lg text-center md:text-right order-3">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)]">
                    Filter Products
                  </h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <svg
                      className="w-6 h-6 text-[var(--color-text)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-All ${
                        activeFilter === category
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-gray-50 text-[var(--color-text)] hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        setActiveFilter(category);
                        setIsFilterOpen(false);
                        if (category === "All") {
                          router.replace({ pathname: "/products" }, undefined, {
                            shAllow: true,
                          });
                        } else {
                          router.replace(
                            { pathname: "/products", query: { category } },
                            undefined,
                            { shAllow: true }
                          );
                        }
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Products Grid - Updated colors */}
      <div className="py-16   bg-[var(--color-white)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
            {filteredProducts.map((product, index) => (
              <div
                key={product.endpoint || `engine-oil-${index}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-All duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-52 bg-gray-100 flex items-center justify-center">
                  {product?.image || product.images?.[0] ? (
                    <Image
                      src={product.image || product.images?.[0]}
                      alt={product.name || "Product image"}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-gray-400">No image available</div>
                  )}
                  <div className="absolute top-4 right-4 bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-lg font-bold text-[var(--color-primary)] mb-2 transition-colors min-h-[56px]">
                      {product.name}
                    </h2>
                    <p className="text-[var(--color-text)] text-sm line-clamp-2 mb-3 min-h-[56px]">
                      {product.description || "No description available."}
                    </p>
                  </div>

                  {/* Features & Price */}
                  <div className="mt-auto">
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-700 border-b pb-1">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {generateDefaultFeatures(product).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                            </div>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="min-h-[48px] mb-4">
                      {product.price && product.price !== "N/A" ? (
                        <div className="text-lg font-bold text-[var(--color-primary)]">
                          {product.price}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">
                          Price not available
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href={`/product/${
                          product.endpoint || `engine-oil-${index}`
                        }`}
                        className="w-full py-2 text-[var(--color-primary)] border border-[var(--color-primary)] rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm text-center"
                      >
                        View Details
                      </Link>
                      <button
                        className="w-full cursor-pointer py-2 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-colors text-sm text-center"
                        onClick={() => {
                          handlePopup(product.name, product.category);
                        }}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-full overflow-auto">
                <InquryForm
                  productName={formData.productName}
                  category={formData.category}
                  onClose={() => {
                    setFormData({ productName: "", category: "" });
                    setIsOpen(false);
                  }}
                />
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-[#2d3748] mb-2">
                No products found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We couldn&apos;t find any products in this category. Try
                selecting a different filter.
              </p>
              <button
                className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                onClick={() => {
                  setActiveFilter("All");
                  router.replace({ pathname: "/products" }, undefined, {
                    shAllow: true,
                  });
                }}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Custom Solutions - Updated colors */}
      <div className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block  bg-[var(--color-white)] px-6 py-2 rounded-full mb-6">
              <span className="text-[#ff914d] font-medium">
                Tailored Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need <span className="text-[#ff914d]">Custom</span> Lubricant
              Solutions?
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We specialize in creating bespoke lubricant formulations tailored
              to your specific industrial requirements and operating conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inquiry"
                className="px-8 py-4 rounded-lg text-lg font-medium transition-All 
                  bg-gradient-to-r from-[#ff914d] to-[#e67300] text-white shadow-lg
                  hover:from-[#e67300] hover:to-[#cc6600] hover:shadow-xl hover:scale-105"
              >
                Request Custom Quote
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg text-lg font-medium transition-All 
                  bg-white/10 backdrop-blur-sm border border-white/20 text-white
                  hover:bg-white/20 hover:scale-105"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Trust Indicators - Updated colors */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center py-12 bg-white">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
                Trusted by Our Growing Network
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#1E335C] text-orange-400 font-bold text-xl rounded-full flex items-center justify-center shadow-md">
                    50+
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-gray-700">
                    Industrial Clients
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#1E335C] text-orange-400 font-bold text-xl rounded-full flex items-center justify-center shadow-md">
                    120+
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-gray-700">
                    Product Types
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#1E335C] text-orange-400 font-bold text-xl rounded-full flex items-center justify-center shadow-md">
                    15+
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-gray-700">
                    Reliable Vendors
                  </p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#1E335C] text-orange-400 font-bold text-xl rounded-full flex items-center justify-center shadow-md">
                    30+
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-gray-700">
                    Cities Served
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 sm:p-8 bg-[var(--color-primary)] rounded-2xl border border-blue-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Icon Box */}
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                    {/* Replace with oil drum, grease tube or plastic icon if available */}
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h2l.4 2M7 10l1 6h8l1-4h-7m0 0H5.4m5.2 0L13 4h4l1 4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-[var(--color-white)] mb-2">
                    Wide Range of Industrial Oils
                  </h3>
                  <p className="text-[var(--color-white)] leading-relaxed text-sm sm:text-base">
                    We trade and supply premium-grade automotive, hydraulic, and
                    industrial oils from top manufacturers. Our portfolio
                    includes engine oils, gear oils, polymers and grease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

// src/pages/index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

// Hero carousel images
const carouselItems = [
  {
    id: 1,
    title: "Industrial Lubricants Supplier",
    description: "Reliable trading partner for high-performance lubricants across India",
    image: "/img1.png",
    cta: "Explore Products",
  },
  {
    id: 2,
    title: "Engine Oils & Greases",
    description: "Supplying premium engine oils and greases with nationwide delivery",
    image: "/img2.png",
    cta: "View Oils",
  },
  {
    id: 3,
    title: "Specialty Polymers & Additives",
    description: "Boost performance with our range of quality industrial polymers",
    image: "/img3.png",
    cta: "Learn More",
  },
];


// Product showcase items
const products = [
  {
    id: 1,
    name: "Polymer",
    description: "Performance-enhancing additives for oils",
    image:
      "https://res.cloudinary.com/dnwhvplae/image/upload/v1751205252/polymer_logo_ooubnq.jpg",
  },
  {
    id: 2,
    name: "Engine Oil",
    description: "Premium quality engine oils for all vehicles",
    image:
      "https://res.cloudinary.com/dnwhvplae/image/upload/v1751205233/Engine_oils_logo_e4avn3.jpg",
  },
  {
    id: 3,
    name: "Grease",
    description: "Specialty greases for industrial applications",
    image:
      "https://res.cloudinary.com/dnwhvplae/image/upload/v1751205252/Grease_Logo_htnvmm.webp",
  },
  {
    id: 4,
    name: "Viscosity Index Improver",
    description: "High-performance additives for stable lubricant viscosity",
    image: "/products/viscosity-index-improver-category.webp",
  },
  {
    id: 5,
    name: "Perfume Additive",
    description: "Oil-soluble fragrances designed for lubricant formulations",
    image: "/products/perfume-additive-category.webp",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === carouselItems.length - 1 ? 0 : prev + 1
        );
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? carouselItems.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <link rel="canonical" href="https://www.hariomoiltrading.in/" />
        <title>
          Hariomoil Trading | Trusted Trader of Engine Oils, Greases &
          Industrial Polymers Across India
        </title>
        <meta
          name="description"
          content="Hari Om Oil Trading is a leading trader and supplier of industrial lubricants and engine oils. We deliver high-quality products with reliable pan-India service, trusted by industries across the country."
        />
        <meta
          name="keywords"
          content="industrial lubricants, engine oils, greases, additive polymers, packaging materials, oil supplier, Gujarat lubricant company"
        />

        <meta name="author" content="Hariomoil Trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Hariomoil Trading | Your Lubricant Trading Partner"
        />
        <meta
          property="og:description"
          content="Trusted Indian supplier of industrial lubricants, engine oils, greases, and packaging materials. Quality products delivered across India."
        />
        <meta
          property="og:image"
          content="https://www.hariomoiltrading.in/about.png"
        />
        <meta property="og:url" content="https://www.hariomoiltrading.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hariomoil Trading | Trusted Trader of Engine Oils, Greases & Industrial Polymers Across India"
        />
        <meta
          name="twitter:description"
          content="Hari Om Oil Trading is a leading trader and supplier of industrial lubricants and engine oils. We deliver high-quality products with reliable pan-India service, trusted by industries across the country."
        />
        <meta
          name="twitter:image"
          content="https://www.hariomoiltrading.in/about.png"
        />
        <meta name="twitter:site" content="@imkuldeep2804" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hariomoil Trading",
              alternateName: ["Hari Om Oil Trading", "Hari Om Oil Tradings"],
              url: "https://www.hariomoiltrading.in/",
              logo: "https://www.hariomoiltrading.in/logo.png",
              description:
                "Hari Om Oil Trading is a leading trader and supplier of industrial lubricants and engine oils. We deliver high-quality products with reliable pan-India service, trusted by industries across the country.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 90166 37062",
                contactType: "Customer Support",
              },
              sameAs: [
                "https://www.instagram.com/hariomoiltrading",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Modasa",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/70 z-10"></div>

        {/* Carousel */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <Image
            src={carouselItems[currentSlide].image}
            alt={carouselItems[currentSlide].title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className={`transition-all duration-1000 ${
              isAnimating ? "scale-110" : "scale-100"
            }`}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center min-h-[80vh] container mx-auto px-2 sm:px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
              {carouselItems[currentSlide].title}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl animate-fadeIn delay-100">
              {carouselItems[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
              <Link
                href="/products"
                className="px-8 py-4 bg-gradient-to-r from-[#FF914D] to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                {carouselItems[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {carouselItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-12 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base opacity-80">
                Years Experience
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Products</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold mb-2">2000+</div>
              <div className="text-sm md:text-base opacity-80">
                Happy Clients
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                Pan-India
              </div>
              <div className="text-sm md:text-base opacity-80">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-16 px-3 md:px-10 bg-white">
        <div className="container mx-auto px-0">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-gradient-to-r from-[#FF914D] to-orange-500 text-white px-6 py-2 rounded-full mb-4 text-sm tracking-wide uppercase">
              Categories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Product Categories
            </h2>
            <p className="text-gray-600">
             Browse our wide range of industrial products including lubricants, additives, and specialty polymers — tailored to meet the diverse needs of industries across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 p-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="ui-card group overflow-hidden rounded-2xl border border-transparent bg-white shadow-xl"
              >
                {/* Image block */}
                <div className="bg-blue-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={300}
                    priority
                  />
                </div>

                {/* Text content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: product.name },
                    }}
                    className="ui-button inline-flex items-center rounded-md px-2 py-1 font-medium text-[#FF914D] transition-colors hover:bg-orange-50 hover:text-orange-600"
                  >
                    View Category
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-10 px-10 bg-[var(--color-white)]">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dnwhvplae/image/upload/v1751477749/logo_nokiyo.png"
                  alt="Manufacturing facility"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0  to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-gradient-to-r from-[#FF914D] to-orange-500 text-white px-6 py-2 rounded-full mb-6">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted Industrial Solutions Provider
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Hari Om Oil Trading is a reliable trader and supplier of
                automotive lubricants, industrial lubricants, greases, viscosity
                index improvers, OCP polymers (granules), and specialty dyes in
                Modasa, Gujarat.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience, we&#39;ve built a reputation
                for quality products, competitive pricing, and exceptional
                customer service. Our commitment to excellence has made us the
                preferred choice for industries across Gujarat and beyond.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#FF914D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      All products meet international quality standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#FF914D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Timely Delivery</h3>
                    <p className="text-gray-600">
                      Pan-India distribution network with reliable logistics
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#FF914D] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">Expert Support</h3>
                    <p className="text-gray-600">
                      Technical guidance from industry experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and discover how our
              premium products can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-3">
              <Link
                href="/inquiry"
                className="px-8 py-4 bg-gradient-to-r from-[#FF914D] to-orange-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 hover:scale-105 transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-10 bg-white">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

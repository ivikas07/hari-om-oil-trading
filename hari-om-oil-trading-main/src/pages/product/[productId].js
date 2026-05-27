// src/pages/product/[productId].js
import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
  Download,
  Package,
  Award,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HOME_PRODUCTS } from "@/data/products";
import { ENGINE_OILS } from "@/data/engineOil";
import InquryForm from "@/components/InquryForm";

export const generateDefaultFeatures = (product) => {
  const features = [];
  if (product.specs) features.push(`Specification: ${product.specs}`);
  if (product.usageApplication)
    features.push(`Usage: ${product.usageApplication}`);
  if (product.viscosity) features.push(`Viscosity: ${product.viscosity}`);
  return features;
};

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProducts = [...HOME_PRODUCTS, ...ENGINE_OILS].map(
    (product, index) => ({
      ...product,
      id: product.endpoint || `product-${index}`,
      features: product.features || generateDefaultFeatures(product),
    })
  );

  const product = allProducts.find((p) => p.id === productId);
  const recentProducts = allProducts
    .filter((p) => p.id !== productId)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center py-20 max-w-2xl mx-auto px-4">
          <div className="bg-gray-100 w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-6">
            <Package className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The product you&#39;re looking for is no longer available or may
            have been moved.
          </p>
          <Link
            href="/products"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition-all inline-flex items-center"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images ? product.images : [product.image];
  const hasMultipleImages = images.length > 1;

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleDownloadBrochure = () => {
    if (product.brochure) {
      window.open(product.brochure, "_blank");
    } else {
      // Fallback if brochure not available
      alert("Brochure not available for this product");
    }
  };

  const generateWhatsAppMessage = () => {
    const message = `I'm interested in the following product:\n\n*${product.name}*\n\n`;
    const productUrl = `https://www.hariomoiltrading.com/product/${product.id}`;

    return encodeURIComponent(
      `${message}Product Details:\n${
        product.description?.substring(0, 200) || ""
      }\n\n` +
        `View full details: ${productUrl}\n\n` +
        `I'd like to know more about:\n- Pricing\n- Specifications\n- Delivery options`
    );
  };

  const generateEmailBody = () => {
    const productUrl = `https://www.hariomoiltrading.com/product/${product.id}`;
    return encodeURIComponent(
      `I'm interested in the following product:\n\n` +
        `Product Name: ${product.name}\n\n` +
        `Product Details:\n${product.description || ""}\n\n` +
        `I would like information on:\n- Pricing and discounts\n- Technical specifications\n- Minimum order quantity\n- Delivery timeline\n\n` +
        `Please send me more details about this product.\n\n` +
        `Product Link: ${productUrl}`
    );
  };

  const metaTitle = `${product.name} | Hari Om Oil Tradings`;
  const metaDescription =
    product.description?.slice(0, 150) ||
    "High quality industrial and automotive products.";

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: images[0],
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand || "Hari Om Oil Tradings",
    },
    offers: {
      "@type": "Offer",
      url: `http://www.hariomoiltrading.com/product/${product.id}`,
      priceCurrency: "INR",
      price: product.price?.replace(/[^\d]/g, "") || "0.00",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={images[0]} />
        <meta
          property="og:url"
          content={`https://www.hariomoiltrading.com/product/${product.id}`}
        />
        <meta property="og:type" content="product" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={images[0]} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
        <div className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link
                href="/products"
                className="hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-blue-600 font-medium">{product.name}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Gallery */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden bg-gray-100 h-80 flex items-center justify-center">
              {images[currentImage] ? (
                <Image
                  src={images[currentImage]}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              ) : (
                <div className="text-gray-400">No image available</div>
              )}
            </div>

            {hasMultipleImages && (
              <div className="mt-3 flex space-x-2 overflow-x-auto py-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImage
                        ? "border-blue-500 scale-105"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={70}
                      height={70}
                      className="w-16 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="py-2 bg-gray-50 p-5 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Contact Our Sales Team
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`mailto:hariomoiltrading@gmail.com?subject=Inquiry about ${encodeURIComponent(
                          product.name
                        )}&body=${generateEmailBody()}`}
                        className="flex-1 min-w-[150px] px-4 py-2.5 bg-[var(--color-primary)] border border-gray-300 rounded-lg text-white  transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4 text-white  " />
                        <span>Email Us</span>
                      </a>
                      <a
                        href={`https://wa.me/919016637062?text=${generateWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[150px] px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:+919016637062"
                        className="flex-1 min-w-[150px] px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>

            {/* <div className="mt-6">
              <button
                onClick={handleDownloadBrochure}
                className="w-full cursor-pointer px-6 py-3  bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div> */}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>

            {product.category && (
              <p className="text-gray-600 mb-5">
                Category:{" "}
                <span className="font-medium ">{product.category}</span>
              </p>
            )}

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <div className="mb-5">
                {product.price && product.price !== "N/A" && (
                  <div className="text-2xl font-bold  text-[var(--color-primary)]">
                    {product.price}
                  </div>
                )}
              </div>

              <div className="mb-5">
                <p className="text-gray-800 font-medium mb-2">Quantity:</p>
                <div className="flex items-center w-40">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center  bg-[var(--color-primary)] text-white rounded-l-lg hover:bg-blue-700 transition-colors"
                  >
                    -
                  </button>
                  <div className="w-20 h-10 flex items-center  text-[var(--color-text)] justify-center bg-white border-y border-gray-200 font-medium">
                    {quantity}
                  </div>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center  bg-[var(--color-primary)] text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 min-w-[150px] px-6 py-3 rounded-lg font-medium transition-all bg-[var(--color-primary)] text-white flex items-center justify-center"
                >
                  Add to Quote
                </button>

                <Link
                  href="/inquiry"
                  className="flex-1 min-w-[150px] px-6 py-3 bg-white border  text-[var(--color-primary)] rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Quick Inquiry
                </Link>
              </div>
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
                  <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-full overflow-auto">
                    <InquryForm
                      productName={product.name}
                      category={product.category}
                      onClose={() => setIsModalOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200 mb-5">
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`py-3 px-1 font-medium relative cursor-pointer ${
                    activeTab === "description"
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Description
                  {activeTab === "description" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`py-3 px-1 font-medium relative ${
                    activeTab === "specs"
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Specifications
                  {activeTab === "specs" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t"></div>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-8">
              {activeTab === "description" && (
                <div>
                  {product.description && product.description !== "N/A" && (
                    <p className="text-gray-700 mb-5 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  {product.features && product.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map(
                          (feature, i) =>
                            feature !== "N/A" && (
                              <li key={i} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  )}

                  
                </div>
              )}

              {activeTab === "specs" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-3 text-left text-gray-800 font-semibold">
                          Specification
                        </th>
                        <th className="py-2 px-3 text-left text-gray-800 font-semibold">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product).map(([key, val]) => {
                        if (
                          [
                            "image",
                            "images",
                            "features",
                            "description",
                            "name",
                            "id",
                            "category",
                            "price",
                            "brochure",
                          ].includes(key) ||
                          typeof val === "object" ||
                          val === "N/A" ||
                          val === undefined
                        )
                          return null;
                        return (
                          <tr key={key} className="border-b border-gray-200">
                            <td className="py-2 px-3 font-medium text-gray-800 capitalize">
                              {key.replace(/_/g, " ")}
                            </td>
                            <td className="py-2 px-3 text-gray-700">{val}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {recentProducts.length > 0 && (
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Related Products
              </h2>
              <Link
                href="/products"
                className="text-[var(--color-text)] hover:text-blue-800 font-medium flex items-center text-sm"
              >
                View All Products <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
              {recentProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="relative h-40 bg-gray-100 flex items-center justify-center">
                    {product.image || product.images?.[0] ? (
                      <Image
                        src={product.image || product.images?.[0]}
                        alt={product.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-contain p-3"
                      />
                    ) : (
                      <div className="text-gray-400">No image available</div>
                    )}
                    {product.category && (
                      <div className="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-1 rounded">
                        {product.category}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold  text-[var(--color-primary)] mb-1.5  transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                    {product.price && product.price !== "N/A" && (
                      <div className="font-bold  text-[var(--color-primary)] mb-3">
                        {product.price}
                      </div>
                    )}
                    <Link
                      href={`/product/${product.id}`}
                      className="w-full py-1.5 bg-white border border-[var(--color-primary)]  text-[var(--color-primary)] rounded text-sm font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-12  bg-[var(--color-white)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className=" bg-[var(--color-primary)] rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4  text-[var(--color-text)]">
            Ready to Place Your Order?
          </h2>
          <p className=" mb-6 max-w-2xl mx-auto text-[var(--color-text)]">
            Contact our sales team for bulk pricing, custom solutions, and
            expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inquiry"
              className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition-all"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[var(--color-primary)] border-white/30 text-white font-bold rounded-lg hover:bg-[var(--color-text)] transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;

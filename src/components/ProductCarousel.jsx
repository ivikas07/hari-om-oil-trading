import { useEffect, useState } from "react";
import Image from "next/image";
import { HOME_PRODUCTS } from "../data/products";

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HOME_PRODUCTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const product = HOME_PRODUCTS[activeIndex];

  return (
    <div className="w-full bg-[var(--color-white)] py-14 px-4 md:px-8 border-t border-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="h-[450px] md:h-[500px] bg-[var(--color-secondary)] rounded-3xl shadow-md flex items-center justify-center p-4 relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="text-left space-y-4 text-[var(--color-text)]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] leading-tight">
            {product.name}
          </h2>

          <p className="text-base md:text-lg text-[var(--color-gray)]">
            {product.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base">
            <p><strong>Code:</strong> {product.code}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Model/Grade:</strong> {product.modelGrade}</p>
            <p><strong>Appearance:</strong> {product.appearance}</p>
            <p><strong>Form:</strong> {product.form}</p>
            <p><strong>Viscosity:</strong> {product.viscosity}</p>
            <p><strong>Packaging Type:</strong> {product.packagingType}</p>
            <p><strong>Packaging Size:</strong> {product.packagingSize}</p>
            <p><strong>Application:</strong> {product.usageApplication}</p>
          </div>

          <div className="text-xl font-semibold text-[var(--color-black)] pt-2">
            ₹ {product.pricePerKg} / {product.unit}
          </div>

          <a
            href="#inquiry"
            className="inline-block mt-4 bg-[var(--color-accent)] hover:brightness-110 text-[var(--color-white)] font-medium px-6 py-3 rounded-lg transition"
          >
            Get Best Quote
          </a>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="mt-10 flex justify-center gap-3">
        {HOME_PRODUCTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[var(--color-accent)] scale-110"
                : "bg-[var(--color-secondary)] border border-[var(--color-primary)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { HOME_PRODUCTS } from "@/data/products";
import { ENGINE_OILS } from "@/data/engineOil";

const Footer = () => {
  const allProducts = [...HOME_PRODUCTS, ...ENGINE_OILS].map(
    (product, index) => ({
      ...product,
      id: product.endpoint || `product-${index}`,
    })
  );
  return (
    <footer
      className=" text-white "
      style={{ background: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold tracking-wide">
                Hari Om Oil Tradings
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Hari Om Oil Trading is a reliable trader and supplier of
              automotive lubricants, industrial lubricants, greases, viscosity
              index improvers, OCP polymers (granules), and specialty dyes in
              Modasa, Gujarat. Visit our shop in Bandhan Arcade for quality
              products at competitive prices.
            </p>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FF914D]" />
                <span>hariomoiltrading@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FF914D]" />
                <span>+91 90166 37062</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FF914D]" />
                <span> Modasa, India </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About",
                "Products",
                "Contact",
                "Privacy Policy",
                "Terms & Conditions",
                "Sitemap",
              ].map((name, i) => {
                const href =
                  name === "Home"
                    ? "/"
                    : `/${name
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/&/g, "and")}`;
                return (
                  <li key={i}>
                    <Link
                      href={href}
                      className="text-gray-300 hover:text-white hover:underline transition"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {allProducts.slice(0, 7).map((product) => {
                const slug = product.endpoint;
                return (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.endpoint}`}
                      className="hover:text-white transition"
                    >
                      {product.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2025{" "}
            <span className="text-white font-medium">Hari Om Oil Tradings</span>
            . All rights reserved. | Built by{" "}
            <Link
              href={"https://flownware.vercel.app/"}
              className="text-accent font-semibold"
            >
              {" "}
              FlownWare
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

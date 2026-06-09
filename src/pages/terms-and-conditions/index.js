import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions - Hari Om Oil Trading",
    description:
      "Terms and conditions for industrial lubricants and polymer trading services.",
    url: "https://www.hariomoiltrading.in/terms-and-conditions",
  };

  return (
    <>
      <Head>
        <title>Terms and Conditions - Hari Om Oil Trading</title>
        <meta
          name="description"
          content="Commercial terms for engine oil, grease, and polymer trading services"
        />
        <meta
          name="keywords"
          content="industrial lubricants terms, polymer trading conditions, grease supplier agreement"
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-[var(--color-white)]">
              Commercial terms for industrial lubricant and polymer trading
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="py-16 bg-[var(--color-white)] ">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto shadow-lg">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                <p className="text-gray-700 text-right mb-6">
                  Last updated: June 2025
                </p>

                <div className="space-y-10">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Commercial Introduction
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms govern all transactions and commercial
                      engagements with Hari Om Oil Trading, a trader of
                      industrial engine oils, greases, and polymer products. By
                      placing orders or using our services, you agree to these
                      binding commercial terms.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Product Specifications
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Technical Accuracy:</strong> Product
                      specifications are subject to change based on manufacturer
                      updates. We reserve the right to substitute products with
                      equivalent technical specifications when necessary.
                      <br />
                      <br />
                      <strong>Industrial Use:</strong> All products are sold for
                      industrial/commercial applications only. Buyers assume all
                      responsibility for product suitability in specific
                      industrial processes.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Ordering & Transactions
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Pricing:</strong> All prices are in INR and
                      exclusive of GST. Prices subject to change without notice
                      until order confirmation.
                      <br />
                      <br />
                      <strong>Payment Terms:</strong> Net 30 days from invoice
                      date unless otherwise agreed in writing. Late payments
                      incur 1.5% monthly interest.
                      <br />
                      <br />
                      <strong>Order Acceptance:</strong> All orders are subject
                      to product availability and written confirmation.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Delivery & Risk Transfer
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Shipping:</strong> FOB origin unless otherwise
                      specified. Buyer bears all shipping risks and costs.
                      <br />
                      <br />
                      <strong>Lead Times:</strong> Estimated delivery times are
                      not guaranteed. Force majeure events affecting lubricant
                      or polymer supply may cause delays.
                      <br />
                      <br />
                      <strong>Inspection:</strong> Claims for damaged shipments
                      must be made within 48 hours of receipt.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Warranty & Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Product Warranty:</strong> Limited to
                      manufacturer&#39;s specifications. No warranties for
                      fitness of purpose.
                      <br />
                      <br />
                      <strong>Limitation:</strong> Our maximum liability shall
                      not exceed the purchase price of the products in question.
                      We are not liable for consequential industrial damages.
                      <br />
                      <br />
                      <strong>Technical Guidance:</strong> Product
                      recommendations are advisory only. Buyers must verify
                      suitability for specific machinery or industrial
                      processes.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Intellectual Property
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      All technical data sheets, product formulations, and
                      industrial specifications remain our exclusive property.
                      Unauthorized commercial use of our product information for
                      competing purposes is prohibited.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Compliance & Regulations
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Buyer is responsible for compliance with:
                      <br />
                      - Industrial safety regulations (Factory Act)
                      <br />
                      - Hazardous materials handling protocols
                      <br />
                      - Environmental regulations for lubricant disposal
                      <br />- Applicable GST and commercial tax laws
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Dispute Resolution
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      All commercial disputes shall be resolved through
                      arbitration in Jaipur, Rajasthan under the Arbitration and
                      Conciliation Act. English shall be the language of
                      proceedings.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">
                      Contact Commercial Department
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      For order-related inquiries and commercial agreements:
                    </p>
                    <address className="not-italic text-gray-700 leading-relaxed">
                      Hari Om Oil Trading
                      <br />
                      Attn: Commercial Manager
                      <br />
                      Email:{" "}
                      <a
                        href={"mailto:hariomoiltrading@gmail.com"}
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        hariomoiltrading@gmail.com
                      </a>
                      <br />
                      Phone: +91 90166 37062
                      <br />
                      Hours: Mon-Sat 9:00 AM - 6:00 PM IST
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;

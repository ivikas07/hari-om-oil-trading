import { useState } from "react";
import Head from "next/head";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
const faqs = [
  {
    question: "Do you supply grease and oil in bulk quantities?",
    answer:
      "Yes, we specialize in bulk trading of industrial grease and engine oils, with efficient logistics ensuring nationwide delivery.",
  },
  {
    question: "Can you assist with selecting polymers for lubricant production?",
    answer:
      "Absolutely. We offer expert guidance on choosing suitable polymers like EPDM and OCP for your specific lubricant formulations.",
  },
  {
    question: "Are your products suitable for both commercial and automotive applications?",
    answer:
      "Yes, our lubricants, greases, and polymers are tested for performance in both industrial machinery and automotive engines.",
  },
  {
    question: "Where are you based?",
    answer:
      "Our trading operations are headquartered in Modasa, Gujarat, with a robust supply chain serving clients across India.",
  },
  {
    question: "How can I request a quote or place an inquiry?",
    answer:
      "You can submit your inquiry through our dedicated Inquiry page or click the 'Get Quote' button on any product page.",
  },
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <section className="bg-white py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primary)] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-[var(--color-primary)] rounded-xl overflow-hidden shadow-md transition duration-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className={`w-full flex justify-between items-center text-left px-6 py-5 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                    }`}
                  >
                    <span className="text-lg md:text-xl font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-white" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`px-6 text-[var(--color-primary)] text-sm md:text-base leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                    style={{ transitionProperty: "max-height, opacity, padding" }}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

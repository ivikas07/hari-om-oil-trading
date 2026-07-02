import "@/styles/globals.css";
import Head from "next/head";
import ErrorBoundary from "@/components/ErrorBoundary";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_INFO } from "@/config/contact";

export default function App({ Component, pageProps }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${CONTACT_INFO.siteUrl}/#business`,
    name: CONTACT_INFO.siteName,
    url: CONTACT_INFO.siteUrl,
    logo: `${CONTACT_INFO.siteUrl}/logo.png`,
    image: `${CONTACT_INFO.siteUrl}/about.png`,
    description:
      "Trader and supplier of engine oils, industrial lubricants, greases, viscosity index improvers, and polymer additives in Modasa, Gujarat, serving customers across India.",
    foundingDate: "2009",
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 60, First Floor, Bandhan Arcade, Meghraj Road",
      addressLocality: "Modasa",
      addressRegion: "Gujarat",
      postalCode: "383315",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.46617,
      longitude: 73.30225,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: ["https://www.instagram.com/hariomoiltrading"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_INFO.phone,
        contactType: "Customer Support",
        email: CONTACT_INFO.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="shortcut icon" href="/favicon-96x96.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/web-app-manifest-512x512.png"
        />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          key="schema-org"
        />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <WhatsAppButton />
    </>
  );
}

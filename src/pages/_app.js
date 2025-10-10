import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hari Om Oil Trading",
    url: "https://www.hariomoiltrading.com",
    logo: "https://www.hariomoiltrading.com/logo.png",
    sameAs: [
      "https://www.facebook.com/hariomoiltrading",
      "https://www.instagram.com/hariomoiltrading",

      "https://www.twitter.com/hariomoiltrading",
      "https://www.linkedin.com/company/hariomoiltrading",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 90166 37062",
        contactType: "Customer Support",
        email: "hariomoiltrading@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  return (
    <>
      <Head>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
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
        </Head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          key="schema-org"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// pages/sitemap.xml.js

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://www.hariomoiltrading.com';

  // Static page links
  const staticLinks = [
    '',
    '/about',
    '/products',
    '/inquiry',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/sitemap',
  ];

  // Dynamic products from your data
  const { ENGINE_OILS } = await import('@/data/engineOil');
  const { HOME_PRODUCTS } = await import('@/data/products');
  const productLinks = HOME_PRODUCTS.concat(ENGINE_OILS)
    .filter((p) => p.endpoint)
    .map((p) => `/product/${p.endpoint}`);

  const allUrls = staticLinks.concat(productLinks);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((url) => {
    return `
  <url>
    <loc>${baseUrl}${url}</loc>
  </url>`;
  })
  .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SitemapXml() {
  return null;
}

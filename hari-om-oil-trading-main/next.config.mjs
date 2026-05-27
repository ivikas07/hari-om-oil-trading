/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com', 'images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/terms-&-conditions',
        destination: '/terms-and-conditions',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|svg|gif)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

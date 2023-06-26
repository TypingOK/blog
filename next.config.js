/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.discordapp.com",
      "search.pstatic.net",
      "dummyimage.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;

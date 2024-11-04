/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio'], // Add your allowed domains here
      },
      experimental: {
        appDir: true,
      },
};

export default nextConfig;

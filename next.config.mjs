/** @type {import('next').NextConfig} */

const localHostname = 'local-mealfulness.s3.eu-central-1.amazonaws.com';
const prodHostname = 'prod-mealfulness.s3.eu-central-1.amazonaws.com';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: localHostname,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: prodHostname,
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;

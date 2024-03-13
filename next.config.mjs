/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: process.env.NEXT_CONFIG_HOSTNAME,
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  experimental: {
    // Tree-shakes barrel-file imports (e.g. lucide-react icons) so only the
    // specific icons used end up in the client bundle.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;

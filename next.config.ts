import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  trailingSlash: true,  // Add trailing slashes to all URLs
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

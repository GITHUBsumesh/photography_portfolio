import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['s3-alpha-sig.figma.com','s3-us-west-2.amazonaws.com'],// Add this line
  },
};

export default nextConfig;

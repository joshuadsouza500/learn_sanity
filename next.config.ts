import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", //reduces build size
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;

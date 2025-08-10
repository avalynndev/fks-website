import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "thefks.in", port: "", pathname: "/**", protocol: "https" },
    ],
  },
};

export default nextConfig;

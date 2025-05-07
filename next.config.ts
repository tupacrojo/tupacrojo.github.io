import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "connect.facebook.net",
      port: "",
    }]
  },
};

export default nextConfig;

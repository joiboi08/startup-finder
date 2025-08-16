import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    dangerouslyAllowSVG: true,   // will remove later, added only for placeholder
    remotePatterns: [{
      protocol: "https",
      hostname: "*"
    }]
  }
};

export default nextConfig;

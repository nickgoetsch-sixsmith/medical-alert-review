import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.medicalalertreview.com" }],
        destination: "https://medicalalertreview.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

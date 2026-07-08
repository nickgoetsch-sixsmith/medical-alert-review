import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first; the optimizer negotiates by Accept header.
    formats: ["image/avif", "image/webp"],
  },
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

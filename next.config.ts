import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cie",
  assetPrefix: "/cie/",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

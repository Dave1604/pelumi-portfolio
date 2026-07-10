import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  experimental: {
    optimizePackageImports: ["motion", "@react-three/drei", "@react-three/fiber"],
  },
};

export default config;

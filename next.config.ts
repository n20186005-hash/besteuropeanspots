import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  experimental: {
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

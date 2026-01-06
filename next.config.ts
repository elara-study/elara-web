import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Set Turbopack root to the project directory to fix module resolution
  // This prevents Next.js from using the parent directory (C:\Users\Tarek Ahmed) as the root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

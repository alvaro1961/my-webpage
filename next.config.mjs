/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-webpage",
  assetPrefix: "/my-webpage/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
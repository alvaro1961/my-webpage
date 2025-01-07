/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-webpage",
  assetPrefix: "/my-webpage/",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;
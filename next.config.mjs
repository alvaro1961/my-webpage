/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-webpage", // must match your repository name exactly
  assetPrefix: "/my-webpage/", // add this line
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
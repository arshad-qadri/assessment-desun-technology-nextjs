/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.birdsville.net.au",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "png.pngtree.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  
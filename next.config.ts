// Next.js config file - this tells Next.js how to build the site

// Setting output to export means it will create static HTML files instead of a server
const nextConfig = {
  output: "export",
  // Images need to be unoptimized for static export to work
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

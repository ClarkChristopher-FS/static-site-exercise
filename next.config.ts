// Next.js configuration
// This sets up the app to export as static HTML files for GitHub Pages

const nextConfig = {
  output: "export", // This tells Next.js to generate static files
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

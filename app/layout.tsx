// This is the root layout component
// It wraps all pages in the app and sets up the basic HTML structure

// Metadata for the page - shows up in browser tab and search results
export const metadata = {
  title: "Static Site Exercise",
  description: "A simple static site built with Next.js",
};

// This function wraps all pages with the HTML structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

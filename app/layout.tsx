// This layout wraps all my pages and sets up the basic HTML structure

// The metadata shows up in the browser tab title and search results
export const metadata = {
  title: "Static Site Exercise",
  description: "A simple static site built with Next.js",
};

// This function wraps all pages with the HTML and body tags
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

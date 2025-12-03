// This is my main page component where all the homepage stuff goes

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      {/* Header with my name at the top */}
      <header>
        <h1>Christopher Clark</h1>
        <p>Static Site Exercise - Assignment 1.6</p>
      </header>

      {/* Main content section */}
      <main style={{ marginTop: "40px" }}>
        <h2>Welcome to My Static Site</h2>
        <p>This is a simple static website built with Next.js.</p>
        <p>I created this as part of my web development course.</p>
      </main>

      {/* Footer at the bottom */}
      <footer
        style={{
          marginTop: "60px",
          paddingTop: "20px",
          borderTop: "1px solid #ccc",
        }}
      >
        <p>Built with Next.js and deployed to GitHub Pages</p>
      </footer>
    </div>
  );
}

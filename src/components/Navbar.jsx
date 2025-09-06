export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="logo">GameVerse</a>

        {/* Links */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/games">Games</a>
          <a href="/reviews">Reviews</a>
          <a href="/news">News</a>
        </div>

        {/* Search bar */}
        <div className="search">
          <input type="text" placeholder="Search games..." />
        </div>
      </div>
    </nav>
  );
}

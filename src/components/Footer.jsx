// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} GameHub. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </div>
    </footer>
  );
}

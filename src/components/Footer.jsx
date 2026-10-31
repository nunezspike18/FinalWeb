export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="brand">
          <span className="brand-mark">PP</span>
          <span>PIKE-PIKE</span>
        </div>
        <p>
          © {new Date().getFullYear()} Pike-Pike. Built with React, CSS &amp;
          JavaScript.
        </p>
        <div className="socials">
          <a href="#" aria-label="GitHub">
            GH
          </a>
          <a href="#" aria-label="Facebook">
            FB
          </a>
          <a href="#" aria-label="Instagram">
            IG
          </a>
        </div>
      </div>
    </footer>
  );
}

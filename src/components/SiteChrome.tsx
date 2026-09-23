import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const MESSENGER = 'https://m.me/akyannyan.astrology';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="brand-link" aria-label="Akyannyan home">
          <span className="brand-mark" aria-hidden>
            ✦
          </span>
          <span className="brand-word">
            Akyannyan
            <small>အကြံဉာဏ်</small>
          </span>
        </Link>

        <ul className="nav-links">
          <li className="nav-hide-sm">
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy">Privacy</NavLink>
          </li>
          <li>
            <a className="nav-cta" href={MESSENGER} target="_blank" rel="noreferrer">
              Messenger
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand">Akyannyan</p>
          <p className="my">ဗေဒင်နှင့် ကံကြမ္မာ လမ်းညွှန် — privacy-first mobile guidance.</p>
          <p style={{ marginTop: '0.65rem' }}>© {year} Akyannyan</p>
        </div>
        <nav aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <a href={MESSENGER} target="_blank" rel="noreferrer">
            Messenger
          </a>
          <a href="mailto:akyannyan8@gmail.com">akyannyan8@gmail.com</a>
        </nav>
      </div>
    </footer>
  );
}

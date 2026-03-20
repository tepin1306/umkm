import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visitDropdown, setVisitDropdown] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setVisitDropdown(false);
  }, [location]);

  const navClass = `navbar ${scrolled || !isHome ? 'navbar--scrolled' : ''}`;

  return (
    <nav className={navClass} id="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Dodol Pasar Bengkel Logo" className="navbar__logo-img" />
          <span>DODOL PASAR BENGKEL</span>
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <li>
            <Link
              to="/produk"
              className={`navbar__link ${location.pathname === '/produk' ? 'navbar__link--active' : ''}`}
            >
              PRODUK
            </Link>
          </li>
          <li className="navbar__dropdown">
            <button
              className={`navbar__link navbar__link-btn ${['/varian/original', '/varian/pandan', '/varian/durian'].includes(location.pathname) ? 'navbar__link--active' : ''}`}
              onClick={() => setVisitDropdown(!visitDropdown)}
            >
              VARIAN <span className={`navbar__arrow ${visitDropdown ? 'navbar__arrow--open' : ''}`}>▾</span>
            </button>
            {visitDropdown && (
              <ul className="navbar__dropdown-menu">
                <li><Link to="/varian/original">Original</Link></li>
                <li><Link to="/varian/pandan">Pandan</Link></li>
                <li><Link to="/varian/durian">Durian</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/tentang-kami"
              className={`navbar__link ${location.pathname === '/tentang-kami' ? 'navbar__link--active' : ''}`}
            >
              TENTANG KAMI
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              className={`navbar__link ${location.pathname === '/kontak' ? 'navbar__link--active' : ''}`}
            >
              KONTAK
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

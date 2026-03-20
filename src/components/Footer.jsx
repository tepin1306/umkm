import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container container">
                <div className="footer__brand">
                    <Link to="/" className="footer__logo">DODOL BENGKEL</Link>
                </div>

                <nav className="footer__nav">
                    <Link to="/tentang-kami" className="footer__link">Tentang Kami</Link>
                    <Link to="/varian/original" className="footer__link">Varian</Link>
                    <Link to="/produk" className="footer__link">Produk</Link>
                    <Link to="/kontak" className="footer__link">Kontak</Link>
                </nav>

                <div className="footer__contact">
                    <p className="footer__email">halo@dodolbengkel.com</p>
                    <p className="footer__phone">+62 812 3456 7890</p>
                    <div className="footer__socials">
                        <a href="https://twitter.com/dodolbengkel" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer__social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com/dodolpasarbengkel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/dodolpasarbengkel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

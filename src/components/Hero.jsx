import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.scrollY;
                heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="hero">
            <div className="hero__bg" ref={heroRef}>
                <img src="/images/hero-bg.png" alt="Bali rice terraces" />
            </div>
            <div className="hero__overlay"></div>
            <div className="hero__content">
                <p className="hero__subtitle">OLEH-OLEH KHAS SUMATERA UTARA</p>
                <h1 className="hero__title">DODOL PASAR BENGKEL</h1>
                <p className="hero__description">
                    Mencari oleh-oleh legit dan manis dari Sumatera Utara? Anda harus mencoba Dodol Pasar Bengkel. Kami menyajikan cita rasa tradisional yang tak terlupakan dengan resep warisan leluhur.
                </p>
                <Link to="/produk" className="hero__cta" id="hero-cta">JELAJAHI LEBIH LANJUT</Link>
            </div>
        </section>
    );
}

export default Hero;

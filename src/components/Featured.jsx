import { useEffect, useRef } from 'react';
import './Featured.css';

function Featured() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-left, .fade-in-right').forEach(el => {
                            el.classList.add('visible');
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="featured" id="featured" ref={sectionRef}>
            <div className="featured__container">
                <div className="featured__content fade-in-left">
                    <h2 className="featured__title section-title">DIBUAT DENGAN CINTA<br />SECARA TRADISIONAL</h2>
                    <p className="featured__text">
                        Kami memulai usaha ini dari kuali kecil di dapur keluarga. Seiring berjalannya waktu, dedikasi kami terhadap kualitas dan rasa autentik membawa Dodol Pasar Bengkel dikenal luas. Setiap potongan dodol yang kami sajikan masih menggunakan resep rahasia yang sama sejak puluhan tahun lalu, diaduk berjam-jam secara tradisional untuk mendapatkan tekstur sempurna yang tak tergantikan.
                    </p>
                    <a href="#contact" className="featured__cta">CERITA KAMI</a>
                </div>
                <div className="featured__image fade-in-right">
                    <img src="/images/featured-waterfall.png" alt="Bali waterfall adventure" loading="lazy" />
                </div>
            </div>
        </section>
    );
}

export default Featured;

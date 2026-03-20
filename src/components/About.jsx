import { useEffect, useRef } from 'react';
import './About.css';

function About() {
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
        <section className="about" id="about" ref={sectionRef}>
            <div className="about__container">
                <div className="about__image fade-in-left">
                    <img src="/images/about-temple.png" alt="Balinese temple" loading="lazy" />
                </div>
                <div className="about__content fade-in-right">
                    <h2 className="about__title section-title">TRADISI RASA SEJAK LAMA</h2>
                    <p className="about__text">
                        Bukan kebetulan jika Pasar Bengkel, Perbaungan, dikenal sebagai pusat oleh-oleh dodol terbaik di Sumatera Utara. Tradisi pembuatan yang otentik, menggunakan kuali besar dan bahan-bahan pilihan, menjadikan dodol kami pilihan utama wisatawan.
                    </p>
                    <p className="about__text">
                        Kami mempertahankan resep asli turun-temurun, memastikan setiap gigitan memberikan perpaduan rasa manis dan tekstur kenyal yang pas. Dari proses pengadukan hingga pengemasan, semuanya dilakukan dengan penuh dedikasi.
                    </p>
                    <a href="#contact" className="about__cta">PELAJARI LEBIH LANJUT</a>
                </div>
            </div>
        </section>
    );
}

export default About;

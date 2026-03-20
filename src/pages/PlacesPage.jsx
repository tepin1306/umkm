import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './VisitPages.css';

const places = [
    {
        title: 'AROMA PANDAN ALAMI',
        subtitle: 'Harum dan Menggugah Selera',
        image: '/images/about-temple.png',
        description: 'Kami menggunakan ekstrak daun pandan suji asli berpadu dengan ketan, menghasilkan aroma wangi yang khas dan menggugah selera seketika bungkusnya dibuka.',
        highlights: ['Daun Pandan Asli', 'Warna Alami', 'Aroma Khas', 'Tanpa Esens Buatan'],
    },
    {
        title: 'PERPADUAN SEMPURNA',
        subtitle: 'Manis yang Pas',
        image: '/images/gallery-culture.png',
        description: 'Keseimbangan rasa manis dari gula aren asli dengan kesegaran aroma pandan menciptakan harmoni rasa yang ringan, tidak bikin eneg, dan selalu bikin ketagihan.',
        highlights: ['Manis Seimbang', 'Gurih Santan', 'Tidak Eneg', 'Lembut di Mulut'],
    },
    {
        title: 'TEMAN NGETEH',
        subtitle: 'Sajian Santai Sore',
        image: '/images/featured-waterfall.png',
        description: 'Rasa unik dodol pandan ini sangat cocok disajikan bersama secangkir teh tawar hangat atau kopi hitam di sore hari bersama keluarga tercinta.',
        highlights: ['Teman Minum Teh', 'Camilan Sore', 'Kumpul Keluarga', 'Menyehatkan'],
    },
    {
        title: 'WARNA HIJAU CANTIK',
        subtitle: 'Penampilan Menggoda',
        image: '/images/gallery-resort.png',
        description: 'Warna hijau cantiknya murni berasal dari daun pandan dan suji, membuatnya tidak hanya lezat di lidah, namun juga indah dipandang mata.',
        highlights: ['Hijau Alami Pandan Suji', 'Estetik', 'Tanpa Pewarna Kimia', 'Segar'],
    },
];

function PlacesPage() {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in').forEach(el => {
                            el.classList.add('visible');
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );
        itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="visit-page">
            <section className="visit-page__hero" style={{ backgroundImage: 'url(/images/hero-bg.png)' }}>
                <div className="visit-page__hero-overlay"></div>
                <div className="visit-page__hero-content">
                    <h1 className="visit-page__hero-title section-title">DODOL PANDAN</h1>
                    <p className="visit-page__hero-subtitle">Perpaduan manisnya tradisi dengan harumnya daun pandan alami</p>
                </div>
            </section>

            <section className="visit-page__content">
                <div className="container">
                    {places.map((place, index) => (
                        <div
                            key={index}
                            className={`places-page__item ${index % 2 === 1 ? 'places-page__item--reverse' : ''}`}
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <div className={`places-page__image ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                                <img src={place.image} alt={place.title} loading="lazy" />
                            </div>
                            <div className={`places-page__info ${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'}`}>
                                <span className="places-page__subtitle">{place.subtitle}</span>
                                <h2 className="places-page__title section-title">{place.title}</h2>
                                <p className="places-page__description">{place.description}</p>
                                <ul className="places-page__highlights">
                                    {place.highlights.map((h, i) => (
                                        <li key={i}>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/kontak" className="places-page__cta">PESAN VARIAN INI</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="visit-page__cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">PENASARAN RASANYA?</h2>
                    <p>Pesan sekarang dan nikmati keharuman pandan alami dari Dodol Bengkel</p>
                    <Link to="/produk" className="visit-page__cta-btn">LIHAT DAFTAR HARGA</Link>
                </div>
            </section>
        </div>
    );
}

export default PlacesPage;

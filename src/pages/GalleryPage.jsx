import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './VisitPages.css';

const galleryItems = [
    { src: '/images/gallery-temple.png', title: 'Tekstur Kenyal', location: 'Kekenyalan yang pas dan tidak lengket di gigi' },
    { src: '/images/gallery-culture.png', title: 'Gula Aren Asli', location: 'Manis alami dari gula aren pilihan kualitas terbaik' },
    { src: '/images/gallery-resort.png', title: 'Santan Kelapa Segar', location: 'Gurihnya santan segar yang dimasak perlahan' },
    { src: '/images/about-temple.png', title: 'Aroma Khas', location: 'Wangi karamel yang menggugah selera' },
    { src: '/images/featured-waterfall.png', title: 'Tanpa Pengawet', location: 'Aman dikonsumsi untuk semua kalangan usia' },
    { src: '/images/social-swing.png', title: 'Kemasan Tradisional', location: 'Dibungkus daun atau kertas ramah lingkungan' },
    { src: '/images/social-monkey.png', title: 'Oleh-oleh Klasik', location: 'Pilihan utama wisatawan sejak tahun 1980-an' },
    { src: '/images/social-waterfall.png', title: 'Potongan Pas', location: 'Ukuran yang pas untuk dinikmati kapan saja' },
    { src: '/images/hero-bg.png', title: 'Resep Warisan', location: 'Cita rasa otentik yang tidak pernah berubah' },
];

function GalleryPage() {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="visit-page">
            <section className="visit-page__hero">
                <div className="visit-page__hero-overlay"></div>
                <div className="visit-page__hero-content">
                    <h1 className="visit-page__hero-title section-title">DODOL ORIGINAL</h1>
                    <p className="visit-page__hero-subtitle">Resep asli warisan leluhur, manis dan gurihnya tak lekang oleh waktu</p>
                </div>
            </section>

            <section className="visit-page__content">
                <div className="container">
                    <div className="gallery-page__grid">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className="gallery-page__item fade-in"
                                ref={(el) => (itemsRef.current[index] = el)}
                                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
                            >
                                <img src={item.src} alt={item.title} loading="lazy" />
                                <div className="gallery-page__item-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="visit-page__cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">INGIN PESAN SEKARANG?</h2>
                    <p>Hubungi kami melalui WhatsApp untuk pemesanan cepat</p>
                    <Link to="/kontak" className="visit-page__cta-btn">PESAN SEKARANG</Link>
                </div>
            </section>
        </div>
    );
}

export default GalleryPage;

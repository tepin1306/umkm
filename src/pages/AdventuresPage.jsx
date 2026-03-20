import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './VisitPages.css';

const adventures = [
    {
        title: 'Raja Buah Medan',
        image: '/images/hero-bg.png',
        difficulty: 'Premium',
        duration: 'Kekayaan Rasa',
        description: 'Paduan luar biasa antara dodol tradisional yang kenyal dengan daging buah durian Medan asli yang terkenal legit dan tebal. Favorit para pecinta durian.',
    },
    {
        title: 'Durian Asli',
        image: '/images/featured-waterfall.png',
        difficulty: 'Otentik',
        duration: 'Aroma Kuat',
        description: 'Kami menggunakan durian segar pilihan, bukan perasa buatan. Menghasilkan aroma durian yang khas dan rasa daging buah yang lumer di mulut saat digigit.',
    },
    {
        title: 'Oleh-Oleh Mewah',
        image: '/images/social-swing.png',
        difficulty: 'Eksklusif',
        duration: 'Hadiah Spesial',
        description: 'Varian paling dicari sebagai buah tangan eksklusif untuk kolega dan sanak famili. Memberikan kesan mewah dan rasa yang tak terlupakan dari Tanah Deli.',
    },
    {
        title: 'Manis Gurih Khas',
        image: '/images/gallery-temple.png',
        difficulty: 'Lezat',
        duration: 'Nikmat',
        description: 'Manisnya durian menyatu sempurna dengan gurihnya santan kelapa kental, menghasilkan tekstur dan cita rasa yang kaya di setiap gigitan.',
    },
    {
        title: 'Sensasi Lumer',
        image: '/images/social-waterfall.png',
        difficulty: 'Lembut',
        duration: 'Kenyal',
        description: 'Proses pemasakan yang ekstra hati-hati membuat tekstur dodol ini sangat lembut di lidah layaknya menikmati tempoyak manis atau selai durian yang dikenyalkan.',
    },
    {
        title: 'Kemasan Rapi',
        image: '/images/about-temple.png',
        difficulty: 'Higienis',
        duration: 'Praktis',
        description: 'Dikemas dengan vakum dan kotak yang rapi sehingga aroma durian tidak menyengat ke luar dan kualitasnya tetap terjaga selama perjalanan hingga ke tempat Anda.',
    },
];

function AdventuresPage() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="visit-page">
            <section className="visit-page__hero">
                <div className="visit-page__hero-overlay"></div>
                <div className="visit-page__hero-content">
                    <h1 className="visit-page__hero-title section-title">DODOL DURIAN</h1>
                    <p className="visit-page__hero-subtitle">Kemewahan rasa raja buah dari Medan dalam sebungkus dodol</p>
                </div>
            </section>

            <section className="visit-page__content">
                <div className="container">
                    <div className="adventures-page__grid">
                        {adventures.map((adventure, index) => (
                            <div
                                key={index}
                                className="adventures-page__card fade-in"
                                ref={(el) => (cardsRef.current[index] = el)}
                                style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
                            >
                                <div className="adventures-page__card-image">
                                    <img src={adventure.image} alt={adventure.title} loading="lazy" />
                                    <div className="adventures-page__card-overlay">
                                        <span className="adventures-page__difficulty">{adventure.difficulty}</span>
                                    </div>
                                </div>
                                <div className="adventures-page__card-body">
                                    <div className="adventures-page__meta">
                                        <span>🌟 {adventure.duration}</span>
                                    </div>
                                    <h3 className="adventures-page__card-title">{adventure.title}</h3>
                                    <p className="adventures-page__card-desc">{adventure.description}</p>
                                    <Link to="/kontak" className="adventures-page__card-cta">PESAN VARIAN INI</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="visit-page__cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">PECINTA DURIAN?</h2>
                    <p>Jangan lewatkan sensasi lezatnya dodol durian khas Medan, pesan sekarang.</p>
                    <Link to="/kontak" className="visit-page__cta-btn">HUBUNGI KAMI</Link>
                </div>
            </section>
        </div>
    );
}

export default AdventuresPage;

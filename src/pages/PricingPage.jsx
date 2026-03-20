import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PricingPage.css';

const pricingPlans = [
    {
        name: 'DODOL ORIGINAL',
        price: 'Rp 40.000',
        duration: 'per kotak / 500gr',
        description: 'Varian klasik yang selalu menjadi favorit. Rasa manis dari gula aren pilihan dengan tekstur kenyal sempurna.',
        features: [
            'Rasa gula aren asli',
            'Tekstur kenyal pas',
            'Tanpa pengawet',
            'Tahan hingga 1 bulan',
            'Kemasan tradisional daun upeh',
            'Cocok untuk santai',
            'Manis pas tidak eneg',
        ],
        highlight: false,
    },
    {
        name: 'DODOL PANDAN',
        price: 'Rp 45.000',
        duration: 'per kotak / 500gr',
        description: 'Varian dengan aroma pandan wangi yang menggugah selera, memadukan tradisi dengan sentuhan kesegaran.',
        features: [
            'Aroma daun pandan asli',
            'Rasa gurih dan manis',
            'Warna hijau alami',
            'Favorit keluarga',
            'Tahan hingga 1 bulan',
            'Tanpa pewarna buatan',
            'Kemasan higienis',
        ],
        highlight: true,
    },
    {
        name: 'DODOL DURIAN',
        price: 'Rp 60.000',
        duration: 'per kotak / 500gr',
        description: 'Perpaduan mewah dodol tradisional dengan durian asli Medan yang legit dan harum. Wajib dicoba!',
        features: [
            'Rasa durian Medan asli',
            'Aroma kuat dan khas',
            'Premium quality',
            'Sangat legit',
            'Tahan hingga 3 minggu',
            'Cocok untuk oleh-oleh',
            'Kemasan modern',
        ],
        highlight: false,
    },
];

const faqs = [
    {
        question: 'Apakah dodol ini tahan lama?',
        answer: 'Dodol kami tahan hingga 1 bulan di suhu ruangan untuk varian Original dan Pandan, dan 3 minggu untuk varian Durian. Simpan di tempat sejuk dan terhindar dari sinar matahari langsung.',
    },
    {
        question: 'Apakah menggunakan bahan pengawet?',
        answer: 'Tidak sama sekali. Dodol kami diolah secara tradisional selama berjam-jam yang membuatnya awet secara alami.',
    },
    {
        question: 'Apakah bisa dikirim ke luar kota?',
        answer: 'Tentu bisa! Kemasan kami sangat aman untuk pengiriman jarak jauh ke seluruh Indonesia.',
    },
    {
        question: 'Ada minimal order?',
        answer: 'Tidak ada minimal order. Namun untuk pembelian dalam jumlah besar, kami sarankan untuk memesan H-3 agar stok varian lengkap.',
    },
];

function PricingPage() {
    const cardsRef = useRef([]);
    const faqsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        [...cardsRef.current, ...faqsRef.current].forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="pricing-page">
            {/* Hero Banner */}
            <section className="pricing-page__hero">
                <div className="pricing-page__hero-overlay"></div>
                <div className="pricing-page__hero-content">
                    <h1 className="pricing-page__hero-title section-title">PILIHAN VARIAN</h1>
                    <p className="pricing-page__hero-subtitle">
                        Temukan rasa favorit Anda dari koleksi dodol Pasar Bengkel kami
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pricing-page__cards">
                <div className="pricing-page__container container">
                    <div className="pricing-page__grid">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`pricing-page__card fade-in ${plan.highlight ? 'pricing-page__card--highlight' : ''}`}
                                ref={(el) => (cardsRef.current[index] = el)}
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                {plan.highlight && <span className="pricing-page__badge">PALING DIMINATI</span>}
                                <h3 className="pricing-page__plan-name">{plan.name}</h3>
                                <div className="pricing-page__price">{plan.price}</div>
                                <p className="pricing-page__duration">{plan.duration}</p>
                                <p className="pricing-page__description">{plan.description}</p>
                                <ul className="pricing-page__features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="pricing-page__feature">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/kontak" className="pricing-page__cta">
                                    PESAN SEKARANG
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="pricing-page__included">
                <div className="container">
                    <h2 className="pricing-page__section-title section-title">KEUNGGULAN DODOL KAMI</h2>
                    <div className="pricing-page__perks">
                        <div className="pricing-page__perk fade-in" ref={(el) => (cardsRef.current[3] = el)}>
                            <div className="pricing-page__perk-icon">🍯</div>
                            <h4>Bahan Alami</h4>
                            <p>Diproses dengan gula aren asli dan santan kelapa sawit segar</p>
                        </div>
                        <div className="pricing-page__perk fade-in" ref={(el) => (cardsRef.current[4] = el)} style={{ transitionDelay: '0.15s' }}>
                            <div className="pricing-page__perk-icon">🔥</div>
                            <h4>Proses Tradisional</h4>
                            <p>Diaduk tangan selama berjam-jam menggunakan kuali besar di atas kayu bakar</p>
                        </div>
                        <div className="pricing-page__perk fade-in" ref={(el) => (cardsRef.current[5] = el)} style={{ transitionDelay: '0.3s' }}>
                            <div className="pricing-page__perk-icon">🌱</div>
                            <h4>Tanpa Pengawet</h4>
                            <p>Masa simpan yang panjang didapat dari proses pematangan sempurna secara alami</p>
                        </div>
                        <div className="pricing-page__perk fade-in" ref={(el) => (cardsRef.current[6] = el)} style={{ transitionDelay: '0.45s' }}>
                            <div className="pricing-page__perk-icon">📦</div>
                            <h4>Kemasan Aman</h4>
                            <p>Dikemas secara higienis agar aman sampai tujuan pengiriman ke luar kota</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="pricing-page__faq">
                <div className="container">
                    <h2 className="pricing-page__section-title section-title">PERTANYAAN UMUM</h2>
                    <div className="pricing-page__faq-list">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="pricing-page__faq-item fade-in"
                                ref={(el) => (faqsRef.current[index] = el)}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <summary className="pricing-page__faq-question">{faq.question}</summary>
                                <p className="pricing-page__faq-answer">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pricing-page__cta-section">
                <div className="container">
                    <h2 className="section-title">SIAP UNTUK MEMESAN?</h2>
                    <p>Hubungi WhatsApp kami untuk pemesanan cepat dan mudah.</p>
                    <Link to="/kontak" className="pricing-page__cta-btn">HUBUNGI KAMI</Link>
                </div>
            </section>
        </div>
    );
}

export default PricingPage;

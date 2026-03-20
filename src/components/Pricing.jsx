import { useEffect, useRef } from 'react';
import './Pricing.css';

const pricingPlans = [
    {
        name: 'DODOL ORIGINAL',
        price: 'Rp 40.000',
        duration: 'per kotak / 500gr',
        features: [
            'Rasa gula aren asli',
            'Tekstur kenyal pas',
            'Tanpa pengawet',
            'Tahan hingga 1 bulan',
            'Kemasan tradisional',
        ],
        highlight: false,
    },
    {
        name: 'DODOL PANDAN',
        price: 'Rp 45.000',
        duration: 'per kotak / 500gr',
        features: [
            'Aroma pandan wangi',
            'Rasa gurih dan manis',
            'Warna hijau alami',
            'Favorit keluarga',
            'Kemasan higienis',
        ],
        highlight: true,
    },
    {
        name: 'DODOL DURIAN',
        price: 'Rp 60.000',
        duration: 'per kotak / 500gr',
        features: [
            'Rasa durian Medan',
            'Aroma kuat dan khas',
            'Premium quality',
            'Sangat legit',
            'Cocok untuk oleh-oleh',
        ],
        highlight: false,
    },
];

function Pricing() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="pricing" id="pricing">
            <div className="pricing__container container">
                <h2 className="pricing__title section-title">VARIAN DODOL KAMI</h2>
                <p className="pricing__subtitle">
                    Pilih rasa favorit Anda dari koleksi dodol tradisional terbaik kami
                </p>
                <div className="pricing__grid">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing__card fade-in ${plan.highlight ? 'pricing__card--highlight' : ''}`}
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            {plan.highlight && <span className="pricing__badge">MOST POPULAR</span>}
                            <h3 className="pricing__plan-name">{plan.name}</h3>
                            <div className="pricing__price">{plan.price}</div>
                            <p className="pricing__duration">{plan.duration}</p>
                            <ul className="pricing__features">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="pricing__feature">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="pricing__cta">
                                PESAN SEKARANG
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;

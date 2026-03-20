import { useEffect, useRef } from 'react';
import './SocialFeed.css';

const socialImages = [
    { src: '/images/social-swing.png', alt: 'Bali swing adventure' },
    { src: '/images/social-monkey.png', alt: 'Balinese monkey' },
    { src: '/images/social-waterfall.png', alt: 'Bali waterfall' },
];

function SocialFeed() {
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
        <section className="social" id="social">
            <div className="social__container container">
                <div className="social__grid">
                    {socialImages.map((img, index) => (
                        <div
                            key={index}
                            className="social__item fade-in"
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="social__item-overlay">
                                <svg className="social__instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social__handle" id="social-handle">
                    @DODOLBENGKEL
                </a>
            </div>
        </section>
    );
}

export default SocialFeed;

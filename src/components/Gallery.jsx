import { useEffect, useRef } from 'react';
import './Gallery.css';

const galleryItems = [
    {
        image: '/images/gallery-temple.png',
        title: 'PROSES TRADISIONAL',
        link: '#',
    },
    {
        image: '/images/gallery-culture.png',
        title: 'KEDAI KAMI',
        link: '#',
    },
    {
        image: '/images/gallery-resort.png',
        title: 'BERBAGAI VARIAN',
        link: '#',
    },
];

function Gallery() {
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
        <section className="gallery" id="gallery">
            <div className="gallery__container container">
                <h2 className="gallery__title section-title">PENGALAMAN RASA</h2>
                <div className="gallery__grid">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="gallery__card fade-in"
                            ref={(el) => (cardsRef.current[index] = el)}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="gallery__card-image">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="gallery__card-overlay"></div>
                            </div>
                            <a href={item.link} className="gallery__card-btn">
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

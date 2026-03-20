import { useEffect, useRef } from 'react';
import './Testimonials.css';

function Testimonials() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials__container container fade-in" ref={sectionRef}>
                <h2 className="testimonials__title section-title">APA KATA MEREKA</h2>
                <blockquote className="testimonials__quote">
                    <p>
                        Setiap lewat jalan lintas Sumatera pasti wajib mampir ke Pasar Bengkel buat beli dodolnya! Rasanya otentik, manisnya pas dan tidak bikin eneg. Teksturnya kenyal sempurna. Terbaik!
                    </p>
                </blockquote>
                <cite className="testimonials__author">– Budi Susanto</cite>
            </div>
        </section>
    );
}

export default Testimonials;

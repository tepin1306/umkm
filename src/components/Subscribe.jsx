import { useState, useEffect, useRef } from 'react';
import './Subscribe.css';

function Subscribe() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
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
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            const waNumber = "6282361119915";
            const waMessage = `Halo Dodol Pasar Bengkel, saya ingin berlangganan info promo. Alamat email saya: ${email}`;
            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="subscribe" id="subscribe" ref={sectionRef}>
            <div className="subscribe__container container">
                <div className="subscribe__text fade-in-left">
                    <h2 className="subscribe__title section-title">BERLANGGANAN</h2>
                    <p className="subscribe__description">
                        Daftarkan email Anda untuk menjadi yang pertama mengetahui promo spesial, diskon, dan ketersediaan varian terbaru kami.
                    </p>
                </div>
                <form className="subscribe__form fade-in-right" onSubmit={handleSubmit} id="subscribe-form">
                    <label className="subscribe__label" htmlFor="email-input">Alamat Email</label>
                    <input
                        type="email"
                        id="email-input"
                        className="subscribe__input"
                        placeholder="Alamat email Anda"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="subscribe__btn" id="subscribe-btn">
                        {submitted ? '✓ MENGALIHKAN...' : 'KIRIM'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Subscribe;

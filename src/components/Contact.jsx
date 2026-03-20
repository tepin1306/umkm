import { useState, useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const phoneNumber = "6282361119915";
    const waMessage = `Halo Dodol Pasar Bengkel,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nSubjek: ${formData.subject}\nPesan: ${formData.message}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const handleWhatsAppClick = (e) => {
        // Prevent default only if required fields are missing
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            e.preventDefault();
            alert("Mohon isi semua form (Nama, Email, Subjek, Pesan) terlebih dahulu.");
            return;
        }

        // Show success message and clear form after link is clicked
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }, 500);
    };

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="contact__container container">
                <div className="contact__info fade-in-left">
                    <h2 className="contact__title section-title">HUBUNGI KAMI</h2>
                    <p className="contact__description">
                        Ingin memesan atau bertanya seputar Dodol Pasar Bengkel? Kami siap melayani Anda.
                        Kirimkan pesan melalui form di bawah ini dan kami akan menanggapi via WhatsApp.
                    </p>

                    <div className="contact__details">
                        <div className="contact__detail-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <h4>Alamat</h4>
                                <p>Pasar Bengkel, Perbaungan, Serdang Bedagai</p>
                            </div>
                        </div>

                        <div className="contact__detail-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <div>
                                <h4>Email</h4>
                                <p>info@dodolpasarbengkel.com</p>
                            </div>
                        </div>

                        <div className="contact__detail-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <div>
                                <h4>WhatsApp</h4>
                                <p><a href="https://wa.me/6282361119915" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+62 82361119915</a></p>
                            </div>
                        </div>

                        <div className="contact__detail-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <div>
                                <h4>Jam Operasional</h4>
                                <p>Senin – Minggu: 08:00 – 21:00 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact__form fade-in-right" id="contact-form">
                    {submitted && (
                        <div className="contact__success">
                            ✓ Mengalihkan ke WhatsApp...
                        </div>
                    )}
                    <div className="contact__form-row">
                        <div className="contact__form-group">
                            <label htmlFor="contact-name">Nama</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                placeholder="Nama Anda"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                placeholder="Email Anda"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="contact-subject">Subjek</label>
                        <input
                            type="text"
                            id="contact-subject"
                            name="subject"
                            placeholder="Ada yang bisa kami bantu?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="contact-message">Pesan</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            placeholder="Tulis pesan atau pesanan Anda..."
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__submit"
                        id="contact-submit"
                        onClick={handleWhatsAppClick}
                        style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                    >
                        KIRIM VIA WHATSAPP
                    </a>
                </form>
            </div>
        </section>
    );
}

export default Contact;

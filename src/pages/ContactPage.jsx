import { useState, useEffect, useRef } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        package: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
                            el.classList.add('visible');
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );
        sectionsRef.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "6282361119915";
        const waMessage = `Halo Dodol Pasar Bengkel,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. WhatsApp: ${formData.phone || '-'}\nVarian Diminati: ${formData.package || '-'}\nSubjek: ${formData.subject}\nPesan: ${formData.message}`;
        const encodedMessage = encodeURIComponent(waMessage);
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(waUrl, '_blank');

        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', package: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-page__hero">
                <div className="contact-page__hero-overlay"></div>
                <div className="contact-page__hero-content">
                    <h1 className="contact-page__hero-title section-title">HUBUNGI KAMI</h1>
                    <p className="contact-page__hero-subtitle">Kami senang mendengar dari Anda. Silakan hubungi kami untuk pertanyaan atau pesanan.</p>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="contact-page__main" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="contact-page__container container">
                    <div className="contact-page__info fade-in-left">
                        <h2 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--color-olive)', marginBottom: '24px' }}>
                            SAPA KAMI
                        </h2>
                        <p className="contact-page__intro">
                            Apakah Anda memiliki pertanyaan tentang varian rasa, pesanan khusus pernikahan/grosir,
                            atau ingin menjadi reseller? Hubungi kami dan tim kami akan merespons sesegera mungkin.
                        </p>

                        <div className="contact-page__details">
                            <div className="contact-page__detail">
                                <div className="contact-page__detail-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Toko Kami</h4>
                                    <p>Jl. Lintas Sumatera No. 12<br />Pasar Bengkel, Perbaungan, Sergai</p>
                                </div>
                            </div>

                            <div className="contact-page__detail">
                                <div className="contact-page__detail-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Email Kami</h4>
                                    <p>halo@dodolbengkel.com<br />pesanan@dodolbengkel.com</p>
                                </div>
                            </div>

                            <div className="contact-page__detail">
                                <div className="contact-page__detail-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Telepon / WhatsApp</h4>
                                    <p>+62 812 3456 7890<br />+62 821 9876 5432</p>
                                </div>
                            </div>

                            <div className="contact-page__detail">
                                <div className="contact-page__detail-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Jam Operasional</h4>
                                    <p>Setiap Hari: 07:00 – 22:00 WIB</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="contact-page__socials">
                            <h4>Ikuti Kami</h4>
                            <div className="contact-page__social-links">
                                <a href="https://instagram.com/dodolpasarbengkel" target="_blank" rel="noopener noreferrer" className="contact-page__social-link" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                                    </svg>
                                </a>
                                <a href="https://facebook.com/dodolpasarbengkel" target="_blank" rel="noopener noreferrer" className="contact-page__social-link" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/dodolbengkel" target="_blank" rel="noopener noreferrer" className="contact-page__social-link" aria-label="Twitter">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="contact-page__form fade-in-right" onSubmit={handleSubmit} id="contact-page-form">
                        {submitted && (
                            <div className="contact-page__success">
                                ✓ Mengalihkan ke WhatsApp...
                            </div>
                        )}
                        <div className="contact-page__form-row">
                            <div className="contact-page__form-group">
                                <label htmlFor="cp-name">Nama Lengkap *</label>
                                <input type="text" id="cp-name" name="name" placeholder="Nama lengkap Anda" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="contact-page__form-group">
                                <label htmlFor="cp-email">Alamat Email *</label>
                                <input type="email" id="cp-email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="contact-page__form-row">
                            <div className="contact-page__form-group">
                                <label htmlFor="cp-phone">Nomor WhatsApp</label>
                                <input type="tel" id="cp-phone" name="phone" placeholder="+62 xxx xxxx xxxx" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="contact-page__form-group">
                                <label htmlFor="cp-package">Varian yang Diminati</label>
                                <select id="cp-package" name="package" value={formData.package} onChange={handleChange}>
                                    <option value="">Pilih varian...</option>
                                    <option value="original">Dodol Original</option>
                                    <option value="pandan">Dodol Pandan</option>
                                    <option value="durian">Dodol Durian</option>
                                    <option value="custom">Grosir / Event</option>
                                </select>
                            </div>
                        </div>
                        <div className="contact-page__form-group">
                            <label htmlFor="cp-subject">Subjek *</label>
                            <input type="text" id="cp-subject" name="subject" placeholder="Ada yang bisa kami bantu?" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className="contact-page__form-group">
                            <label htmlFor="cp-message">Pesan *</label>
                            <textarea id="cp-message" name="message" rows="6" placeholder="Tuliskan pesanan Anda, jumlah pesanan, atau tanggal pengiriman..." value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="contact-page__submit" id="contact-page-submit">
                            KIRIM PESAN
                        </button>
                    </form>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="contact-page__map" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="contact-page__map-frame">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.298282361131!2d98.9839498!3d3.5599818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313a213e4b3e6d%3A0x6b1edbb2fd33230a!2sPasar%20Bengkel%2C%20Perbaungan%2C%20Serdang%20Bedagai%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dodol Pasar Bengkel location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const values = [
    {
        icon: '🌿',
        title: 'Bahan Alami',
        description: 'Kami menggunakan bahan-bahan segar dari petani lokal, seperti gula aren murni dan santan kelapa pilihan untuk menjaga cita rasa otentik.',
    },
    {
        icon: '🤝',
        title: 'Pelestarian Tradisi',
        description: 'Mendukung komunitas lokal Pasar Bengkel dengan mempertahankan cara memasak tradisional menggunakan kuali besar dan kayu bakar.',
    },
    {
        icon: '💎',
        title: 'Kualitas Premium',
        description: 'Setiap proses pembuatan diawasi ketat untuk memastikan tekstur kenyal sempurna dan kebersihan produk terjamin.',
    },
];

const team = [
    { name: 'Hj. Salmah', role: 'Pendiri & Resep Asli', bio: 'Memulai usaha dodol sejak tahun 1980-an di dapur kecilnya. Resep rahasianya menjadi kunci kelezatan Dodol Pasar Bengkel hingga kini.' },
    { name: 'Budi Santoso', role: 'Penerus Generasi Kedua', bio: 'Membawa inovasi kemasan dan varian rasa baru tanpa mengubah teknik pembuatan tradisional yang diajarkan ibunya.' },
    { name: 'Siti Aminah', role: 'Kepala Produksi', bio: 'Berpengalaman 20 tahun dalam mengukur suhu kuali dan waktu pengadukan yang pas untuk hasil dodol yang sempurna.' },
    { name: 'Rina Melati', role: 'Layanan Pelanggan', bio: 'Memastikan setiap pesanan, baik untuk perorangan maupun grosir, sampai ke tangan pelanggan dengan aman dan cepat.' },
];

function AboutPage() {
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

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-page__hero">
                <div className="about-page__hero-overlay"></div>
                <div className="about-page__hero-content">
                    <h1 className="about-page__hero-title section-title">TENTANG KAMI</h1>
                    <p className="about-page__hero-subtitle">Kisah, dedikasi, dan tradisi lokal kami</p>
                </div>
            </section>

            {/* Story */}
            <section className="about-page__story" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="container">
                    <div className="about-page__story-grid">
                        <div className="about-page__story-image fade-in-left">
                            <img src="/images/featured-waterfall.png" alt="Proses pembuatan dodol" loading="lazy" />
                        </div>
                        <div className="about-page__story-content fade-in-right">
                            <h2 className="section-title">KISAH KAMI</h2>
                            <p>
                                Berawal dari sebuah kompor kecil dan satu kuali tua di kawasan Pasar Bengkel, Perbaungan, usaha ini tumbuh dari kecintaan akan makanan tradisional. Dodol bukan hanya sekadar makanan manis, melainkan simbol kebersamaan karena pembuatannya membutuhkan tenaga banyak orang untuk mengaduk tanpa henti.
                            </p>
                            <p>
                                Seiring berjalannya waktu, kawasan Pasar Bengkel dikenal sebagai pusat oleh-oleh dodol terbesar di Sumatera Utara. Kami bangga menjadi bagian dari sejarah dan identitas tersebut, dengan terus menjaga warisan resep leluhur yang tak lekang oleh waktu.
                            </p>
                            <p>
                                Hingga saat ini, kami telah menyajikan puluhan ribu kotak dodol kepada wisatawan lokal maupun mancanegara yang melintas. Dari kuali ke kotak kemasan, kami menyertakan cinta dan sejarah panjang Sumatera Utara.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-page__values" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="container">
                    <h2 className="about-page__section-title section-title">NILAI YANG KAMI PEGANG</h2>
                    <div className="about-page__values-grid">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="about-page__value-card fade-in"
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                <div className="about-page__value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="about-page__stats" ref={(el) => (sectionsRef.current[2] = el)}>
                <div className="container">
                    <div className="about-page__stats-grid">
                        <div className="about-page__stat fade-in">
                            <span className="about-page__stat-number">50,000+</span>
                            <span className="about-page__stat-label">Pelanggan Puas</span>
                        </div>
                        <div className="about-page__stat fade-in" style={{ transitionDelay: '0.1s' }}>
                            <span className="about-page__stat-number">4</span>
                            <span className="about-page__stat-label">Varian Rasa Premium</span>
                        </div>
                        <div className="about-page__stat fade-in" style={{ transitionDelay: '0.2s' }}>
                            <span className="about-page__stat-number">40</span>
                            <span className="about-page__stat-label">Tahun Pengalaman</span>
                        </div>
                        <div className="about-page__stat fade-in" style={{ transitionDelay: '0.3s' }}>
                            <span className="about-page__stat-number">100%</span>
                            <span className="about-page__stat-label">Bahan Alami Pilihan</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="about-page__team" ref={(el) => (sectionsRef.current[3] = el)}>
                <div className="container">
                    <h2 className="about-page__section-title section-title">TIM KAMI</h2>
                    <div className="about-page__team-grid">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="about-page__team-card fade-in"
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className="about-page__team-avatar">
                                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                </div>
                                <h3 className="about-page__team-name">{member.name}</h3>
                                <span className="about-page__team-role">{member.role}</span>
                                <p className="about-page__team-bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-page__cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">INGIN MENCOBA?</h2>
                    <p>Pesan sekarang dan rasakan manisnya tradisi dari Pasar Bengkel</p>
                    <Link to="/kontak" className="about-page__cta-btn">HUBUNGI KAMI</Link>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;

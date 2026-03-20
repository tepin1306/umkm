import Hero from '../components/Hero';
import QRCodeSection from '../components/QRCodeSection';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import SocialFeed from '../components/SocialFeed';
import Subscribe from '../components/Subscribe';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <Hero />
            <QRCodeSection />
            <Gallery />
            <About />
            <Featured />
            <Testimonials />
            <SocialFeed />
            <Subscribe />
        </div>
    );
}

export default HomePage;

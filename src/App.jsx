import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import PlacesPage from './pages/PlacesPage';
import AdventuresPage from './pages/AdventuresPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="produk" element={<PricingPage />} />
          <Route path="varian/original" element={<GalleryPage />} />
          <Route path="varian/pandan" element={<PlacesPage />} />
          <Route path="varian/durian" element={<AdventuresPage />} />
          <Route path="tentang-kami" element={<AboutPage />} />
          <Route path="kontak" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

// Pages
import HomePage from './pages/HomePage';
import ServiceDetail from './pages/services/ServiceDetail';
import DoctorDetail from './pages/doctors/DoctorDetail';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white selection:bg-medical-pink selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          {/* Catch all to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default App;

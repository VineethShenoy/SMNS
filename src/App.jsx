import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/style.css';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Loading Screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Setup AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

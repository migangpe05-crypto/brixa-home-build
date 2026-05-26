/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import QuoteModal from './components/QuoteModal';

// Pages
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contactanos from './pages/Contactanos';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageTransition><Inicio /></PageTransition>} />
        <Route path="/nosotros" element={<PageTransition><Nosotros /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><Servicios /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contactanos /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen cursor-none overflow-x-hidden flex flex-col">
        <CustomCursor />
        <Navbar onQuoteClick={() => setIsQuoteOpen(true)} />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

        {/* Cinematic Background Backdrop */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(166,15,31,0.08),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute inset-0 bg-dark/20" />
        </div>
      </div>
    </Router>
  );
}



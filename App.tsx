
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Transformation from './components/Transformation';
import WhyDifferent from './components/WhyDifferent';
import ContentModules from './components/ContentModules';
import SocialProof from './components/SocialProof';
import Specialist from './components/Specialist';
import Comparison from './components/Comparison';
import Assistant from './components/Assistant';
import Scarcity from './components/Scarcity';
import FinalOffer from './components/FinalOffer';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';
import MobileStickyCTA from './components/MobileStickyCTA';

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Sticky Bar */}
      <div className="sticky-bar shadow-md">
          🔴 AO VIVO | 11 de Janeiro às 20h00 | <span className="underline">VAGAS LIMITADAS</span>
      </div>

      <Hero />
      <PainPoints />
      <Transformation />
      <WhyDifferent />
      <ContentModules />
      <SocialProof />
      <Specialist />
      <Comparison />
      <Assistant />
      <Scarcity />
      <FinalOffer />
      <GuaranteeSection />
      <Footer />
      
      {showExitPopup && <ExitPopup onClose={() => setShowExitPopup(false)} />}
      
      {/* Sticky Bottom Mobile CTA */}
      <MobileStickyCTA />
    </main>
  );
};

export default App;


import React from 'react';
import Hero from './components/Hero';
import EmotionalBlock from './components/EmotionalBlock';
import LearningSection from './components/LearningSection';
import PrivacyBox from './components/PrivacyBox';
import Assistant from './components/Assistant';
import GuaranteeSection from './components/GuaranteeSection';
import OfferBox from './components/OfferBox';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <EmotionalBlock />
      <PrivacyBox />
      <LearningSection />
      <Assistant />
      <OfferBox />
      <GuaranteeSection />
      <Footer />
    </main>
  );
};

export default App;

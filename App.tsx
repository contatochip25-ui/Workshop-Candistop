
import React from 'react';
import Hero from './components/Hero';
import EmotionalBlock from './components/EmotionalBlock';
import LearningSection from './components/LearningSection';
import Assistant from './components/Assistant';
import OfferBox from './components/OfferBox';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <EmotionalBlock />
      <LearningSection />
      <Assistant />
      <OfferBox />
      <Footer />
    </main>
  );
};

export default App;

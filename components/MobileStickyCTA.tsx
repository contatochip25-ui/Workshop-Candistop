
import React, { useEffect, useState } from 'react';

const MobileStickyCTA: React.FC = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
    };

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      // Verifica se algum elemento rastreado está visível
      const isAnyCTAVisible = entries.some(entry => entry.isIntersecting);
      // O Sticky deve aparecer APENAS se nenhum CTA estiver visível
      setShouldShow(!isAnyCTAVisible);
    };

    const observer = new IntersectionObserver(handleVisibility, observerOptions);

    // Observa a seção Hero (para não aparecer na primeira seção)
    const hero = document.getElementById('hero-section');
    if (hero) observer.observe(hero);

    // Observa todos os botões CTA da página
    const ctaButtons = document.querySelectorAll('.main-cta-btn');
    ctaButtons.forEach(btn => observer.observe(btn));

    return () => observer.disconnect();
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-pink-100 p-3 z-40 md:hidden flex items-center justify-between px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] animate-fade-in">
       <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Vagas Limitadas</span>
          <span className="text-sm font-black text-dark-grey">Workshop R$ 8,99</span>
       </div>
       <a href="#checkout" className="bg-elegant-red text-white text-[11px] font-black px-6 py-2.5 rounded-full uppercase tracking-wider">
          Inscrever-se
       </a>
    </div>
  );
};

export default MobileStickyCTA;

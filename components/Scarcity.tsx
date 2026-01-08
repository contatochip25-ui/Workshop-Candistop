
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Scarcity: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Define o alvo como 23:59:59 do dia atual
      const target = new Date();
      target.setHours(23, 59, 59, 999);
      
      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        return { h: 0, m: 0, s: 0 };
      }
      
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      
      return { h, m, s };
    };

    // Inicializa
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-soft-pink/30 border-y border-pink-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-black mb-8 text-elegant-red serif uppercase">⚠️ ATENÇÃO: Vagas Limitadas e Inscrições Abertas</h2>
        
        <div className="max-w-md mx-auto mb-10">
          <ProgressBar 
            label="342 de 500 vagas reservadas" 
            percentage="68% preenchido" 
            fillWidth="68%" 
          />
        </div>

        <div className="bg-elegant-red text-white p-6 md:p-8 rounded-3xl inline-block shadow-2xl pulse">
          <p className="font-black text-lg md:text-xl mb-4 uppercase tracking-widest">🔥 ÚLTIMAS HORAS</p>
          <p className="text-sm md:text-base mb-6 opacity-90">O valor simbólico de R$ 8,99 é válido apenas até hoje às 23h59 para garantir sua vaga.</p>
          <div className="flex justify-center gap-6 font-black serif text-3xl md:text-5xl">
            <div className="w-16 md:w-24">{String(timeLeft.h).padStart(2, '0')}<span className="block text-[10px] uppercase mt-1 font-bold text-white/90">Horas</span></div>
            <div>:</div>
            <div className="w-16 md:w-24">{String(timeLeft.m).padStart(2, '0')}<span className="block text-[10px] uppercase mt-1 font-bold text-white/90">Min</span></div>
            <div>:</div>
            <div className="w-16 md:w-24">{String(timeLeft.s).padStart(2, '0')}<span className="block text-[10px] uppercase mt-1 font-bold text-white/90">Seg</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;

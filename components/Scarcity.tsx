
import React, { useState, useEffect } from 'react';

const Scarcity: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-soft-pink/30 border-y border-pink-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-black mb-8 text-elegant-red serif uppercase">⚠️ ATENÇÃO: Vagas Limitadas e Inscrições Abertas</h2>
        
        <div className="max-w-md mx-auto mb-10">
          <div className="flex justify-between font-black text-xs md:text-sm mb-2 uppercase tracking-tighter">
            <span>342 de 500 vagas reservadas</span>
            <span className="text-elegant-red">68% Preenchido</span>
          </div>
          <div className="w-full h-4 bg-white rounded-full overflow-hidden border border-pink-200">
            <div className="h-full bg-elegant-red w-[68%] transition-all duration-1000"></div>
          </div>
        </div>

        <div className="bg-elegant-red text-white p-6 md:p-8 rounded-3xl inline-block shadow-2xl pulse">
          <p className="font-black text-lg md:text-xl mb-4 uppercase tracking-widest">🔥 ÚLTIMAS HORAS</p>
          <p className="text-sm md:text-base mb-6 opacity-90">O valor simbólico de R$ 8,00 é válido apenas até hoje às 23h59 para garantir sua vaga.</p>
          <div className="flex justify-center gap-6 font-black serif text-3xl md:text-5xl">
            <div>{String(timeLeft.h).padStart(2, '0')}<span className="block text-[10px] uppercase mt-1 font-bold text-white/90">Horas</span></div>
            <div>:</div>
            <div>{String(timeLeft.m).padStart(2, '0')}<span className="block text-[10px] uppercase mt-1 font-bold text-white/90">Min</span></div>
            <div>:</div>
            <div>{String(timeLeft.s).padStart(2, '0')}<span className="block text-[10px] uppercase mt-1 font-bold text-white/90">Seg</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;

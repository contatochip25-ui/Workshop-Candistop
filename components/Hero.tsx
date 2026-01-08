
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-01-11T20:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="bg-soft-pink pt-12 pb-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-white text-elegant-red border-2 border-elegant-red px-4 py-1 rounded-full font-bold text-xs md:text-sm mb-8 animate-pulse">
          🔴 AO VIVO | 11 de Janeiro às 20h00 | Vagas Limitadas
        </div>
        
        <h1 className="text-3xl md:text-6xl font-black text-dark-grey leading-tight mb-6 serif uppercase">
          CHEGA DE SOFRER EM SILÊNCIO:<br/>
          <span className="text-elegant-red italic">Elimine DEFINITIVAMENTE</span><br/>
          Corrimento, Coceira e Mau Cheiro em 7 Dias
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Descubra o método validado por especialistas que já libertou mais de 12.000 mulheres - sem remédios caros, sem consultas intermináveis, sem vergonha.
        </p>

        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-pink-100 mb-10 inline-block">
          <p className="text-elegant-red font-bold text-sm md:text-base">✨ Com Dra. Sarah Mendes, Especialista em Saúde Íntima Feminina há 9 anos</p>
        </div>

        <div className="max-w-md mx-auto mb-8 px-4">
            <a href="#checkout" className="main-cta-btn pulse block w-full bg-elegant-red hover:bg-red-700 text-white font-black py-5 rounded-xl shadow-xl transition-all text-lg md:text-xl uppercase tracking-wider">
              QUERO GARANTIR MINHA VAGA POR R$ 8,99
            </a>
            <ProgressBar 
              label="342 de 500 vagas reservadas" 
              percentage="68% preenchido" 
              fillWidth="68%" 
            />
            <p className="mt-4 text-xs md:text-sm font-bold text-gray-600 uppercase flex items-center justify-center gap-2">
                Encontro 100% Online e Ao Vivo via Zoom
            </p>
        </div>

        <div className="flex justify-center gap-4 mb-10 text-elegant-red">
          <div className="text-center">
            <span className="block text-2xl font-black serif">{timeLeft.days}</span>
            <span className="text-[10px] uppercase font-bold text-gray-600">Dias</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black serif">{timeLeft.hours}</span>
            <span className="text-[10px] uppercase font-bold text-gray-600">Horas</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-black serif">{timeLeft.minutes}</span>
            <span className="text-[10px] uppercase font-bold text-gray-600">Minutos</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm text-gray-700 font-bold opacity-80">
          <span>🔒 Ambiente 100% Seguro e Anônimo</span>
          <span>✓ Certificado de Conclusão</span>
          <span>💯 Garantia de Satisfação</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

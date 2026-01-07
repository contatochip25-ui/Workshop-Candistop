
import React, { useEffect, useState } from 'react';

interface ExitPopupProps {
  onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-grey/90 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-[30px] w-full max-w-md p-10 shadow-2xl relative text-center border-4 border-elegant-red">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-elegant-red"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <span className="text-elegant-red text-6xl mb-6 block">⚠️</span>
        <h2 className="text-3xl font-black mb-4 serif">ESPERE! Não vá embora ainda...</h2>
        <p className="text-gray-600 font-medium mb-8">
          Antes de sair, garanta sua <span className="text-elegant-red font-black">condição exclusiva de acesso</span>:
        </p>

        <div className="bg-soft-pink p-6 rounded-2xl border-2 border-dashed border-elegant-red mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Sua decisão inteligente começa aqui:</p>
          <p className="text-3xl font-black text-elegant-red tracking-widest serif">LIBERDADE</p>
          <p className="mt-4 font-black text-dark-grey text-xl">SUA VAGA POR APENAS R$ 8,00</p>
        </div>

        <p className="text-xs font-bold text-gray-400 uppercase mb-6">Disponível por apenas: {formatTime(timeLeft)}</p>

        <a 
          href="https://pay.kiwify.com.br/rscdSJd" 
          className="block w-full bg-elegant-red hover:bg-red-700 text-white font-black py-5 rounded-xl shadow-lg transition-all text-lg uppercase"
        >
          GARANTIR MINHA VAGA AGORA
        </a>
      </div>
    </div>
  );
};

export default ExitPopup;

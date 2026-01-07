
import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 bg-soft-pink/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <svg className="w-24 h-24 text-elegant-red mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black mb-8 serif">Nossa Garantia Incondicional</h2>
        
        <div className="max-w-2xl mx-auto text-gray-700 leading-relaxed space-y-6 text-base md:text-lg font-medium italic">
          <p>
            "Você está 100% protegida pela nossa Garantia Blindada de 7 Dias. 
            Participe do encontro, aplique o método, e se por QUALQUER motivo você não ficar completamente satisfeita, basta enviar um único email e devolvemos 100% do seu investimento."
          </p>
          <p className="font-black text-dark-grey not-italic">Sem perguntas. Sem burocracia. Sem letras miúdas.</p>
          <p className="text-elegant-red font-black uppercase text-sm tracking-widest">O risco é TODO nosso.</p>
        </div>

        <a href="#checkout" className="mt-12 inline-block font-black text-elegant-red underline text-lg uppercase tracking-wider hover:text-red-800 transition-colors">
          Quero garantir minha vaga sem riscos →
        </a>
      </div>
    </section>
  );
};

export default GuaranteeSection;

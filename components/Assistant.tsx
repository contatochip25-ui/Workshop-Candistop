
import React, { useState } from 'react';

const Assistant: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const faqs = [
    { id: 1, q: "Como funciona o encontro ao vivo?", r: "É um encontro online via Zoom, 100% ao vivo. Você receberá o link por email e WhatsApp 1 hora antes. Participe de qualquer lugar!" },
    { id: 2, q: "E se eu não puder assistir ao vivo?", r: "A gravação ficará disponível por 7 dias exclusivamente para inscritas. Você não perde nada se tiver um imprevisto." },
    { id: 3, q: "Minha participação é anônima?", r: "SIM! Você não precisa abrir câmera nem microfone. As perguntas são feitas via chat de forma 100% privativa." },
    { id: 4, q: "Por que tão barato? É confiável?", r: "Sim! O valor é simbólico porque queremos impactar o máximo de mulheres. É uma missão de democratizar a saúde íntima." },
    { id: 5, q: "Vou precisar comprar produtos caros?", r: "NÃO! O método usa produtos acessíveis e naturais que você encontra em qualquer farmácia ou mercado comum." },
    { id: 6, q: "Funciona para qualquer idade?", r: "Sim! Validado com mulheres de 18 a 65 anos. Os princípios biológicos são universais para o equilíbrio íntimo." },
    { id: 7, q: "Tenho garantia?", r: "SIM! Garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas. Risco ZERO." },
    { id: 8, q: "O que acontece depois que eu pagar?", r: "Você recebe IMEDIATAMENTE os materiais preparatórios, acesso ao grupo VIP e instruções completas no seu e-mail." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 serif">Dúvidas Frequentes</h2>
        <p className="text-center text-gray-500 mb-12 font-bold uppercase tracking-widest text-xs">Leia antes de garantir sua vaga</p>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className={`w-full text-left py-5 flex justify-between items-center transition-all ${activeId === faq.id ? 'text-elegant-red' : 'text-dark-grey'}`}
              >
                <span className="font-bold text-sm md:text-lg pr-4">{faq.q}</span>
                <span className={`text-2xl transform transition-transform ${activeId === faq.id ? 'rotate-45' : ''}`}>+</span>
              </button>
              {activeId === faq.id && (
                <div className="pb-6 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 italic pl-4 border-l-2 border-elegant-red">{faq.r}</p>
                  <a href="#checkout" className="text-xs font-black uppercase tracking-widest text-elegant-red underline">Garantir minha vaga agora por R$ 8,99 →</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assistant;

import React from 'react';

const LearningSection: React.FC = () => {
  const features = [
    { 
      title: "A Causa Real do Problema", 
      text: "O que ninguém explica nas consultas e faz os tratamentos de farmácia falharem repetidamente — e como quebrar esse ciclo pela raiz, sem depender de pomadas." 
    },
    { 
      title: "Alívio Imediato das Coceiras", 
      text: "O protocolo seguro para acalmar a região íntima, eliminar o desconforto e voltar a se sentir normal, sem agredir o corpo com químicos." 
    },
    { 
      title: "Controle Total do Corrimento e do Mau Cheiro", 
      text: "A estratégia que interrompe a multiplicação do fungo, elimina o mau cheiro e devolve a segurança no dia a dia, mesmo após tentativas frustradas." 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[500px] mx-auto px-6">
        <h2 className="text-[1.8rem] font-bold text-center mb-[30px] serif text-[#1A1A1A]">
          O que você vai dominar neste encontro:
        </h2>
        
        <div className="space-y-8">
          {features.map((feature, idx) => (
            <div key={idx} className="border-l-[3px] border-[#C46A7A] pl-5 py-1">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 serif">{feature.title}</h3>
              <p className="text-[#2B2B2B] text-[0.95rem] leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center pt-10 border-t border-gray-100">
          <p className="text-sm font-bold text-[#C46A7A] uppercase tracking-widest mb-2">
            Formato Exclusivo
          </p>
          <p className="text-lg text-[#333333]">
            Online via Zoom • Ambiente Fechado e Seguro
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;

import React from 'react';

const Transformation: React.FC = () => {
  const items = [
    { icon: "🌸", text: "Sentir-se completamente limpa, fresca e confiante 24h por dia" },
    { icon: "💃", text: "Usar qualquer roupa sem preocupação ou desconforto" },
    { icon: "💑", text: "Ter intimidade com segurança total e sem vergonha" },
    { icon: "🎯", text: "Economizar milhares de reais que gastaria em tratamentos ineficazes" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 serif leading-tight">Imagine Acordar Amanhã e Finalmente...</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <span className="text-5xl mb-4">{item.icon}</span>
              <p className="text-gray-800 font-bold text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <p className="text-2xl md:text-3xl font-black text-dark-grey serif italic">
                "Isso NÃO é um sonho. É o que acontece quando você entende a CAUSA RAIZ do problema e age da forma correta."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;


import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    "Gastar centenas de reais em consultas que não resolvem de verdade?",
    "Sentir aquele desconforto constante que ninguém vê, mas você SENTE o tempo todo?",
    "Ter vergonha de ter intimidade com seu parceiro por causa do odor?",
    "Passar por farmácias comprando pomadas que só mascaram o problema?",
    "Acordar no meio da noite com coceira insuportável?",
    "Cancelar compromissos porque 'não está em condições'?",
    "Viver com medo de que alguém perceba o cheiro?",
    "Sentir que seu corpo está fora de controle e você não sabe mais o que fazer?"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 serif">Você Está Cansada de...</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-pink-50 hover:border-pink-200 transition-colors">
              <span className="text-elegant-red text-2xl font-bold flex-shrink-0">✗</span>
              <p className="text-gray-700 font-medium text-sm md:text-base">{p}</p>
            </div>
          ))}
        </div>

        <div className="bg-soft-pink p-8 rounded-3xl text-center border-2 border-dashed border-elegant-red/30">
          <p className="text-elegant-red font-black text-xl md:text-2xl leading-tight">
            Se você respondeu SIM para 2 ou mais itens acima, este encontro foi feito especialmente para VOCÊ. E você merece uma solução definitiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

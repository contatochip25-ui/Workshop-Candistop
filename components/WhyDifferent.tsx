
import React from 'react';

const WhyDifferent: React.FC = () => {
  const cards = [
    { icon: "👩‍⚕️", title: "Com Quem Entende de VERDADE", text: "Dra. Sarah é especialista com mais de 9 anos ajudando mulheres a reconquistarem sua saúde íntima. Não é teoria: é experiência real." },
    { icon: "🔬", title: "Método Validado", text: "Não são receitas da internet. É um protocolo completo baseado em ciência, que ataca a causa raiz - não apenas os sintomas." },
    { icon: "💰", title: "Acesso Democratizado", text: "Acreditamos que esse conhecimento deve ser acessível a todas. Por isso, o investimento é de apenas R$ 8,99, permitindo que você tome essa decisão de forma imediata e segura." },
    { icon: "🎥", title: "Ao Vivo e Interativo", text: "Não é curso gravado. É um encontro AO VIVO via Zoom onde você pode fazer perguntas anônimas e receber orientações reais." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 serif leading-tight">O Que Torna Este Encontro Único e Transformador</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-soft-pink/30 p-8 rounded-3xl border border-pink-100 flex flex-col h-full">
              <span className="text-4xl mb-4">{card.icon}</span>
              <h3 className="font-black text-lg text-dark-grey mb-3 leading-tight serif">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;

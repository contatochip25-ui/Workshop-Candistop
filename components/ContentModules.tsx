
import React from 'react';

const ContentModules: React.FC = () => {
  const modules = [
    { title: "A Verdade Que Seu Médico Não Te Contou", content: ["Por que os tratamentos convencionais só mascaram o problema", "A causa raiz oculta do corrimento recorrente", "Os 3 erros fatais que 95% das mulheres cometem"] },
    { title: "O Protocolo de Eliminação Definitiva", content: ["Passo a passo exato para interromper o ciclo vicioso", "O que fazer nas primeiras 24h para resultados imediatos", "Alimentos que curam vs. alimentos que inflamam"] },
    { title: "Higiene Íntima Sem Segredos", content: ["Os produtos que você DEVE evitar", "A rotina de 5 minutos que previne 90% das recorrências", "Produtos naturais e acessíveis que funcionam"] },
    { title: "Equilíbrio Hormonal e pH Vaginal", content: ["Como seu ciclo influencia e o que fazer em cada fase", "Técnicas simples para reequilibrar o pH naturalmente", "Sinais de alerta da flora íntima"] },
    { title: "Relacionamento Íntimo Sem Tabus", content: ["Como retomar a confiança e o prazer", "Conversas importantes com seu parceiro", "Práticas saudáveis para prevenir recontaminação"] },
    { title: "Casos Reais e Resultados Comprovados", content: ["Histórias de mulheres que eliminaram o problema", "Erros que elas cometeram para você não repetir", "O que funcionou mais rápido"] },
    { title: "Seu Plano de Ação Personalizado", content: ["Checklist completo para aplicar imediatamente", "Rotina matinal e noturna otimizada", "Como monitorar sua evolução"] }
  ];

  const bonuses = [
    { name: "🎁 E-book: 'Guia Completo de Saúde Íntima'", val: "R$ 97,00" },
    { name: "🎁 Grupo VIP no WhatsApp (30 dias)", val: "R$ 147,00" },
    { name: "🎁 Lista de produtos aprovados", val: "R$ 47,00" },
    { name: "🎁 Gravação do encontro por 7 dias", val: "R$ 97,00" }
  ];

  return (
    <section className="py-20 bg-white text-dark-grey">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 serif text-dark-grey">O Que Você Vai Descobrir</h2>
          <p className="text-elegant-red font-bold uppercase tracking-wider text-sm">Em apenas 90 minutos, você terá todo o conhecimento para eliminar o problema de vez</p>
        </div>

        <div className="space-y-6 mb-20">
          {modules.map((m, i) => (
            <div key={i} className="bg-[#FAF7F5] p-6 rounded-2xl border border-pink-100">
              <h3 className="text-xl font-bold mb-4 text-elegant-red flex items-center gap-3 serif">
                <span className="bg-elegant-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-black">{i+1}</span>
                {m.title}
              </h3>
              <ul className="grid md:grid-cols-1 gap-2">
                {m.content.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 bg-elegant-red rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white text-dark-grey p-8 rounded-3xl relative overflow-hidden border-2 border-pink-100 shadow-sm">
          <div className="absolute top-0 right-0 bg-elegant-red text-white font-black px-6 py-2 rounded-bl-2xl text-[10px] md:text-xs uppercase">Grátis para Inscritas</div>
          <h3 className="text-2xl font-black mb-6 serif text-dark-grey">BÔNUS EXCLUSIVOS:</h3>
          <div className="space-y-4 mb-8">
            {bonuses.map((b, i) => (
              <div key={i} className="flex justify-between border-b border-pink-100 pb-2">
                <span className="font-bold text-sm md:text-base text-gray-800">{b.name}</span>
                <span className="text-elegant-red font-black line-through opacity-60">{b.val}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-black text-elegant-red text-xl uppercase tracking-tighter">VALOR TOTAL DOS BÔNUS: R$ 388,00</p>
        </div>
      </div>
    </section>
  );
};

export default ContentModules;

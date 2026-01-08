
import React from 'react';

const Comparison: React.FC = () => {
  const rows = [
    ["Acesso ao Conhecimento", "Limitado e Rápido", "Protocolo Completo"],
    ["Tempo de espera", "15-30 dias", "Imediato"],
    ["Duração", "15-20 minutos", "90 minutos"],
    ["Abordagem", "Apenas sintomas", "Causa raiz"],
    ["Acompanhamento", "Nenhum incluído", "Grupo VIP incluso"],
    ["Material de apoio", "Geralmente nenhum", "E-book + guias"],
    ["Vergonha", "Exposição presencial", "100% Anônimo"],
    ["Horário", "Comercial restrito", "Noturno (20h)"]
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12 serif leading-tight">Compare Você Mesma: Consulta Tradicional vs. Nosso Encontro</h2>
        
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark-grey text-white uppercase text-[10px] md:text-xs tracking-widest font-black">
                <th className="p-4 md:p-6">Aspecto</th>
                <th className="p-4 md:p-6 opacity-60">Consulta Tradicional</th>
                <th className="p-4 md:p-6 text-elegant-red bg-pink-50">Nosso Encontro</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="p-4 md:p-6 font-bold text-gray-500">{row[0]}</td>
                  <td className="p-4 md:p-6 text-gray-600 italic">{row[1]}</td>
                  <td className="p-4 md:p-6 font-black text-dark-grey bg-pink-50/30">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
            <p className="text-xl md:text-2xl font-black text-elegant-red italic serif">
                "Por apenas R$ 8,99, você acessa mais informação e suporte do que em métodos convencionais. Faz sentido para você?"
            </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

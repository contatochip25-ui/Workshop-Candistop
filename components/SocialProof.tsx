
import React from 'react';

const SocialProof: React.FC = () => {
  const testimonials = [
    { name: "Maria S.", info: "32 anos, São Paulo", text: "Depois de 3 anos sofrendo, finalmente descobri o que estava fazendo errado. Em 5 dias o corrimento sumiu e nunca mais voltou! Não acredito que a solução era tão simples." },
    { name: "Ana Paula R.", info: "28 anos, Rio de Janeiro", text: "Gastei mais de R$ 2.000 em consultas e remédios. Nada funcionava. O método resolveu em menos de uma semana. Estou livre, confiante e feliz!" },
    { name: "Juliana M.", info: "35 anos, Belo Horizonte", text: "Tinha vergonha até de ir à academia. Hoje estou completamente curada e me sinto uma mulher nova. Vale cada centavo (foram só 8 reais!)" },
    { name: "Fernanda L.", info: "40 anos, Curitiba", text: "Meu relacionamento estava em crise por causa disso. Agora estou livre do odor e da coceira. Minha autoestima voltou e meu casamento melhorou muito!" },
    { name: "Carla T.", info: "26 anos, Brasília", text: "Pensei que teria que conviver com isso pra sempre. Estava errada! O encontro mudou minha vida literalmente. Simples, prático e definitivo." },
    { name: "Beatriz K.", info: "31 anos, Porto Alegre", text: "Se você está na dúvida, NÃO FIQUE! É a melhor decisão que tomei esse ano. Finalmente estou livre desse pesadelo." }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 serif leading-tight">Mais de 12.000 Mulheres Já Transformaram Suas Vidas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4 text-xs">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
              <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6">"{t.text}"</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-elegant-red font-black text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark-grey text-sm">{t.name}</p>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{t.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

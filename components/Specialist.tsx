
import React from 'react';

const Specialist: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-soft-pink -z-10 rounded-3xl"></div>
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/agendamentos/main/public/images/larissa01.png" 
                alt="Dra. Sarah Mendes" 
                className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5]"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6 serif">Quem é a Dra. Sarah Mendes</h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Dra. Sarah Mendes é especialista em Saúde Íntima Feminina, com mais de 9 anos de experiência ajudando mulheres a se libertarem de desconfortos íntimos recorrentes e retomarem segurança e bem-estar no próprio corpo.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Seu trabalho já impactou milhares de mulheres que buscavam soluções reais para problemas íntimos persistentes, por meio de métodos práticos, acessíveis e sem tabu.
            </p>
            
            <div className="space-y-3 mb-10 text-gray-800 font-medium">
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Mais de 12.000 mulheres ajudadas</p>
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Criadora do Método Equilíbrio Íntimo</p>
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Palestrante internacional em saúde íntima feminina</p>
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Defensora de uma saúde íntima sem medo ou vergonha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;

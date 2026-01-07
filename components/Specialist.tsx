
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
            <h2 className="text-3xl md:text-5xl font-black mb-6 serif">Quem É a Dra. Sarah Mendes</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Dra. Sarah Mendes é especialista em Saúde Íntima Feminina com mais de 9 anos de experiência clínica. Formada pela USP, com especializações em Ginecologia Natural e Fitoterapia Aplicada.
            </p>
            
            <div className="space-y-3 mb-10 text-gray-800 font-medium">
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Mais de 12.000 mulheres atendidas</p>
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Criadora do Método Equilíbrio Íntimo</p>
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Palestrante Internacional</p>
              <p className="flex items-center gap-3"><span className="text-elegant-red">✓</span> Defensora da saúde íntima sem tabus</p>
            </div>

            <div className="bg-soft-pink p-6 rounded-2xl italic text-elegant-red font-bold text-xl serif leading-tight">
                "Minha missão é devolver a confiança e qualidade de vida para mulheres que sofrem em silêncio. Nenhuma mulher deveria se sentir envergonhada de seu próprio corpo."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;

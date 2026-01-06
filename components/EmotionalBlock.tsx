import React from 'react';

const EmotionalBlock: React.FC = () => {
  const painPoints = [
    { text: "A insegurança de sair de casa com medo do <b>mau cheiro íntimo</b>." },
    { text: "O incômodo constante do <b>corrimento</b> que drena sua energia." },
    { text: "As <b>coceiras íntimas</b> que causam vergonha de explicar para o parceiro." }
  ];

  return (
    <section className="py-8 bg-[#FAF7F5]">
      <div className="max-w-[500px] mx-auto px-6">
        <div className="bg-[#F1E7E4] rounded-[20px] p-[35px] md:p-[25px] border border-[#E8DAD6]">
          <h2 className="text-[1.7rem] font-bold mb-[25px] serif text-[#1A1A1A]">
            Você não está sozinha...
          </h2>
          <ul className="space-y-[18px] list-none">
            {painPoints.map((point, index) => (
              <li key={index} className="flex gap-[12px] font-medium text-[#2B2B2B] text-[1rem] leading-relaxed">
                <span className="text-[#C46A7A] font-black text-lg leading-none">✕</span>
                <span dangerouslySetInnerHTML={{ __html: point.text }} />
              </li>
            ))}
          </ul>
          <p className="font-extrabold text-[#1A1A1A] text-center block mt-[15px] text-base">
            Este workshop é o primeiro passo para entender o que está acontecendo com seu corpo e sair do ciclo de insegurança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionalBlock;
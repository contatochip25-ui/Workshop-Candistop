import React from 'react';
import InfoBox from './InfoBox';
import ProgressBar from './ProgressBar';

const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-[10px] md:pt-16 md:pb-8 text-center px-6">
      <div className="max-w-[500px] mx-auto">
        <h1 className="text-[32px] md:text-5xl font-black text-[#1A1A1A] mb-[15px] leading-[1.2] md:leading-[1.1] serif">
          O <span className="text-[#C46A7A] italic">Método</span> para interromper o ciclo do <span className="text-[#C46A7A] italic">corrimento</span>, do <span className="text-[#C46A7A] italic">mau cheiro</span> e das <span className="text-[#C46A7A] italic">coceiras</span>.
        </h1>
        
        <InfoBox />

        <div className="cta-container mt-5">
          <a 
            href="#checkout" 
            className="block w-full px-8 py-5 bg-[#C46A7A] hover:bg-[#A85765] text-white font-extrabold rounded-[10px] shadow-[0_8px_25px_rgba(196,106,122,0.4)] transition-all transform hover:scale-[1.01] text-center text-[1.1rem]"
          >
            RESERVAR MINHA VAGA (R$ 8,99)
          </a>
          
          <ProgressBar 
            label="Inscrições Confirmadas" 
            percentage="94%" 
            fillWidth="94%" 
          />
          
          <div className="secure-tag mt-[15px] inline-flex items-center gap-[5px] bg-[#E1D6D3] px-[15px] py-2 rounded-[5px] font-bold text-[0.8rem] text-[#1A1A1A]">
            🔒 Ambiente 100% Anônimo e Sigiloso
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
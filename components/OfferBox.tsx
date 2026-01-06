import React from 'react';
import ProgressBar from './ProgressBar';

const OfferBox: React.FC = () => {
  return (
    <section className="py-12" id="checkout">
      <div className="max-w-[500px] mx-auto px-6">
        <div className="bg-white rounded-[20px] p-10 md:p-12 text-center border-[2.5px] border-[#C46A7A] shadow-sm">
          <p className="text-[#1A1A1A] font-extrabold uppercase text-[0.9rem] mb-2 tracking-[1px]">
            Oferta de Lançamento
          </p>
          
          <div className="text-[#C46A7A] leading-none my-2.5">
            <span className="text-[4.5rem] font-black serif">R$ 8,99</span>
          </div>
          
          <p className="text-[#2B2B2B] mb-[25px] font-bold text-base">
            Data: 09/01 às 20h00 | Ao vivo & Online
          </p>

          <div className="cta-container mt-0">
            <a 
              href="#" 
              className="block w-full px-8 py-5 bg-[#C46A7A] hover:bg-[#A85765] text-white font-extrabold rounded-[10px] shadow-[0_8px_25px_rgba(196,106,122,0.4)] transition-all transform hover:scale-[1.01] text-center text-[1.1rem]"
            >
              GARANTIR MEU ACESSO AGORA
            </a>
            
            <ProgressBar 
              label="Vagas Restantes no Lote Simbólico" 
              percentage="Últimas 6 vagas" 
              fillWidth="94%" 
            />
          </div>
          
          <p className="mt-[15px] text-[0.8rem] text-[#777]">
            Pagamento Seguro • Acesso imediato via e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferBox;
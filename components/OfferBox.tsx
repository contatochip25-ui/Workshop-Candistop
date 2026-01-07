
import React from 'react';
import ProgressBar from './ProgressBar';

const OfferBox: React.FC = () => {
  return (
    <section className="py-12" id="checkout">
      <div className="max-w-[500px] mx-auto px-6">
        <div className="bg-white rounded-[20px] p-10 md:p-12 text-center border-[2.5px] border-[#C46A7A] shadow-sm">
          <p className="text-[#1A1A1A] font-extrabold uppercase text-[0.9rem] mb-2 tracking-[1px]">
            Inscrição Workshop
          </p>
          
          <div className="text-[#C46A7A] leading-none my-2.5">
            <span className="text-[4.5rem] font-black serif">R$ 8,00</span>
          </div>
          
          <p className="text-[#2B2B2B] mb-[25px] font-bold text-base">
            Data: 11/01 às 20h00 | Ao vivo & Online
          </p>

          <div className="cta-container mt-0">
            <a 
              href="https://pay.kiwify.com.br/rscdSJd" 
              className="main-cta-btn block w-full px-8 py-5 bg-[#C46A7A] hover:bg-[#A85765] text-white font-extrabold rounded-[10px] shadow-[0_8px_25px_rgba(196,106,122,0.4)] transition-all transform hover:scale-[1.01] text-center text-[1.1rem]"
            >
              GARANTIR MEU ACESSO AGORA
            </a>

            <div className="mt-4 py-2 px-4 bg-[#F8F4FF] rounded-lg border border-[#DCD0F0] inline-block">
              <p className="text-[#7C5CA5] text-[0.75rem] font-black uppercase tracking-wider flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                Privacidade Total: Câmera e Microfone Travados
              </p>
            </div>
            
            <ProgressBar 
              label="Vagas Restantes" 
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

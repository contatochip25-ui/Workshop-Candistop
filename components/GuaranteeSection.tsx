
import React, { useState } from 'react';

const GuaranteeSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = 'https://pay.kiwify.com.br/rscdSJd';
  };

  return (
    <section className="py-16 bg-[#FDFBF9] border-y border-[#E8DAD6] overflow-hidden">
      <div className="max-w-[500px] mx-auto px-6 text-center animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <svg className="w-20 h-20 text-[#C46A7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div className="absolute -top-1 -right-1 bg-[#C46A7A] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
              100% Seguro
            </div>
          </div>
        </div>

        <h2 className="text-[1.6rem] md:text-[1.8rem] font-bold text-[#C46A7A] mb-4 serif leading-tight uppercase">
          GARANTIA TOTAL DE REEMBOLSO – SEM RISCO PARA VOCÊ
        </h2>

        <p className="text-[#1A1A1A] font-bold text-lg mb-6 leading-snug">
          Participe do workshop e, se por qualquer motivo você não se sentir satisfeita, devolvemos 100% do valor pago. Você tem até 2 dias após o workshop para solicitar o reembolso.
        </p>

        <p className="text-[#2B2B2B] text-[0.95rem] leading-relaxed mb-8">
          Queremos que você aprenda e cuide da sua saúde íntima sem medo ou frustração. Nossa prioridade é que você saia do workshop se sentindo segura, confiante e com estratégias práticas que realmente funcionam. Se não for o que você esperava, seu investimento volta para você imediatamente.
        </p>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-[#C46A7A] font-bold text-sm underline hover:text-[#A85765] transition-colors"
        >
          Saiba mais sobre a garantia
        </button>

        {/* Modal da Política de Reembolso */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl relative border border-[#E8DAD6]">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 serif">Política de Garantia</h3>
              <div className="text-left space-y-4 text-[#2B2B2B] text-sm leading-relaxed">
                <p>Nossa garantia de satisfação é incondicional. Entendemos a importância do conteúdo e queremos que você se sinta totalmente à vontade.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Prazo:</strong> Você pode solicitar o estorno até 48 horas (2 dias) após a realização do workshop ao vivo.</li>
                  <li><strong>Processo:</strong> Basta enviar um e-mail para nosso suporte ou entrar em contato via Kiwify.</li>
                  <li><strong>Sem Perguntas:</strong> O reembolso é processado integralmente, sem taxas administrativas ou justificativas obrigatórias.</li>
                </ul>
                <p className="font-bold text-[#C46A7A]">Sua confiança é nosso maior ativo.</p>
              </div>
              
              <button 
                onClick={handleRedirect}
                className="mt-8 w-full py-3 bg-[#C46A7A] text-white font-bold rounded-lg hover:bg-[#A85765] transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuaranteeSection;

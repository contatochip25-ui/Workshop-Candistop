
import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  cta?: string;
}

const Assistant: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Preciso aparecer na câmera?",
      answer: "Absolutamente não! Sua participação é 100% anônima e invisível. Câmera e microfones são bloqueados por padrão para que você assista e aprenda em total privacidade.",
      cta: "Quero participar com total sigilo"
    },
    {
      id: 2,
      question: "O que exatamente vou aprender?",
      answer: "Você vai descobrir a causa real da recorrência e o protocolo prático para interromper o ciclo de corrimento e coceira sem depender apenas de pomadas. É um plano de ação direto para sua liberdade.",
      cta: "Ver conteúdo completo no workshop"
    },
    {
      id: 3,
      question: "E se eu não puder assistir ao vivo?",
      answer: "Sem problemas! Você terá acesso à gravação por 7 dias para assistir no seu tempo. Se quiser guardar o conteúdo para sempre, oferecemos a opção de Acesso Vitalício no checkout.",
      cta: "Garantir meu acesso (mesmo sem ver ao vivo)"
    },
    {
      id: 4,
      question: "Por que custa apenas R$ 8,99?",
      answer: "Este é um valor simbólico de lançamento para garantir que nenhuma mulher fique de fora por questões financeiras. É o nosso compromisso sério com a educação em saúde feminina.",
      cta: "Aproveitar o preço de lançamento"
    },
    {
      id: 5,
      question: "Serve para corrimento que sempre volta?",
      answer: "Sim! O método foca justamente em interromper a recorrência, tratando a raiz biológica do problema para que os sintomas parem de voltar e você recupere sua segurança.",
      cta: "Interromper o ciclo agora"
    },
    {
      id: 6,
      question: "Tenho alguma garantia de satisfação?",
      answer: "Com certeza! Você tem 7 dias de garantia incondicional. Se sentir que o conteúdo não é para você, devolvemos 100% do seu investimento sem fazer perguntas.",
      cta: "Reservar vaga com risco zero"
    },
    {
      id: 7,
      question: "Como funciona o Acesso Vitalício?",
      answer: "Por apenas R$ 47,00 extras no checkout, você garante a gravação e materiais do workshop para sempre em sua área de membros. Ideal para consultar sempre que precisar de alívio!",
      cta: "Garantir vaga + Vitalício"
    }
  ];

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleCTA = () => {
    window.location.href = 'https://pay.kiwify.com.br/rscdSJd';
  };

  return (
    <section className="py-16 bg-[#F3ECE9]">
      <div className="max-w-[500px] mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-[#E8DAD6] overflow-hidden">
          {/* Header */}
          <div className="bg-[#C46A7A] p-6 text-white text-center">
            <h3 className="text-xl font-bold serif mb-1">Dúvidas Frequentes</h3>
            <p className="text-sm opacity-90">Clique na sua dúvida para uma resposta rápida da nossa assistente.</p>
          </div>
          
          {/* FAQ List */}
          <div className="p-4 bg-gray-50/50 space-y-3">
            {faqData.map((item) => (
              <div key={item.id} className="border border-[#E8DAD6] rounded-xl overflow-hidden bg-white shadow-sm transition-all">
                <button
                  onClick={() => handleToggle(item.id)}
                  className={`w-full text-left px-5 py-4 flex justify-between items-center transition-colors hover:bg-pink-50/30 ${
                    activeId === item.id ? 'bg-pink-50/50' : ''
                  }`}
                  style={{ minHeight: '48px' }}
                >
                  <span className={`text-[15px] font-bold ${activeId === item.id ? 'text-[#C46A7A]' : 'text-[#1A1A1A]'}`}>
                    {item.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-[#C46A7A] transform transition-transform ${activeId === item.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeId === item.id && (
                  <div className="px-5 py-4 bg-white border-t border-[#F1E7E4] animate-fade-in">
                    <p className="text-[#4A4A4A] text-[14px] leading-relaxed mb-4">
                      {item.answer}
                    </p>
                    <button 
                      onClick={handleCTA}
                      className="w-full py-3 bg-[#C46A7A] text-white font-black text-[13px] rounded-lg uppercase tracking-wider hover:bg-[#A85765] transition-all shadow-md active:scale-95"
                    >
                      {item.cta}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border-t border-[#E8DAD6] text-center">
            <p className="text-[13px] text-[#7C5CA5] font-bold italic mb-3">
              "Ainda tem alguma dúvida específica?"
            </p>
            <p className="text-[12px] text-gray-500 leading-tight">
              Aproveite que o risco é zero com nossa garantia total. <br/>
              <b>Vagas limitadas no lote de R$ 8,99.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;

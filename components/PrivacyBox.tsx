
import React from 'react';

const PrivacyBox: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8F4FF] border-y border-[#E8DAD6]">
      <div className="max-w-[500px] mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm border border-[#DCD0F0]">
            <svg className="w-8 h-8 text-[#7C5CA5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
            </svg>
          </div>
          <h2 className="text-[1.5rem] font-bold text-[#4A3B63] serif leading-tight">
            Sua Identidade Blindada:<br/>Você Invisível, Sua Liberdade em Foco
          </h2>
        </div>

        <div className="space-y-4">
          {/* BLOCO 1: SEGURANÇA TÉCNICA */}
          <div className="bg-white/60 p-5 rounded-xl border border-[#E8DAD6] flex items-start gap-4">
            <div className="text-[#7C5CA5] mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A] text-sm leading-tight">Câmera e Microfone Bloqueados por Padrão</p>
              <p className="text-[#4A4A4A] text-xs leading-relaxed mt-1">As configurações do Zoom são travadas na entrada. Ninguém — nem a palestrante, nem outras alunas — pode ver seu rosto ou ouvir sua voz sem sua permissão.</p>
            </div>
          </div>

          {/* BLOCO 2: ANONIMATO SOCIAL */}
          <div className="bg-white/60 p-5 rounded-xl border border-[#E8DAD6] flex items-start gap-4">
            <div className="text-[#7C5CA5] mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.53 4.47a1 1 0 10-1.414 1.414 3.99 3.99 0 005.888 0 1 1 0 10-1.414-1.414 1.99 1.99 0 01-2.96 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A] text-sm leading-tight">Participação 100% Anônima</p>
              <p className="text-[#4A4A4A] text-xs leading-relaxed mt-1">Sua presença é sigilosa e seu nome não aparece para as outras participantes. Você é uma espectadora protegida em um ambiente de absoluto respeito.</p>
            </div>
          </div>

          {/* BLOCO 3: LIBERDADE DE INTERAÇÃO */}
          <div className="bg-white/60 p-5 rounded-xl border border-[#E8DAD6] flex items-start gap-4">
            <div className="text-[#7C5CA5] mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.59.233.918.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A] text-sm leading-tight">Liberdade de Interação (Se você quiser)</p>
              <p className="text-[#4A4A4A] text-xs leading-relaxed mt-1">O anonimato é garantido, mas a sua voz é bem-vinda. Se no decorrer do encontro você se sentir confortável para tirar dúvidas via chat, você tem total controle para isso. É opcional, no seu tempo e do seu jeito.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[#5A4B73] font-medium text-sm italic leading-relaxed">
          "Você não precisa falar. Você não precisa aparecer. Mas terá liberdade total de interagir se — e somente se — desejar. No seu tempo, com segurança absoluta."
        </p>
      </div>
    </section>
  );
};

export default PrivacyBox;
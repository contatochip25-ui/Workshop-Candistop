
import React from 'react';
import ProgressBar from './ProgressBar';

const FinalOffer: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="checkout">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[40px] p-8 md:p-16 border-4 border-elegant-red shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-elegant-red text-white px-8 py-2 font-black text-xs uppercase -rotate-0 rounded-bl-3xl">Lote 01</div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 serif">Sua Última Chance de Garantir Sua Transformação</h2>
          
          <div className="bg-gray-50 p-8 rounded-3xl mb-10 text-left">
            <p className="font-black text-elegant-red uppercase text-sm mb-6 tracking-widest">O QUE VOCÊ ESTÁ RECEBENDO:</p>
            <ul className="space-y-3 mb-10 text-gray-700 font-bold text-sm md:text-base">
              <li>✅ Encontro ao vivo de 90 minutos (Valor: R$ 197,00)</li>
              <li>✅ E-book "Guia Completo de Saúde Íntima" (Valor: R$ 97,00)</li>
              <li>✅ Grupo VIP por 30 dias (Valor: R$ 147,00)</li>
              <li>✅ Lista de Produtos Aprovados (Valor: R$ 47,00)</li>
              <li>✅ Gravação do encontro por 7 dias (Valor: R$ 97,00)</li>
              <li>✅ Certificado Digital de Participação (Valor: R$ 27,00)</li>
              <li>✅ Suporte direto para dúvidas (Valor: R$ 97,00)</li>
            </ul>
            <div className="border-t-2 border-dashed border-gray-200 pt-6 flex justify-between items-center">
              <span className="text-gray-500 font-bold uppercase text-xs">VALOR TOTAL: <span className="line-through">R$ 709,00</span></span>
              <div className="text-right">
                <span className="block text-xs uppercase font-bold text-gray-500">Inscrição promocional:</span>
                <span className="text-5xl md:text-7xl font-black text-elegant-red serif">R$ 8,99</span>
              </div>
            </div>
          </div>

          <p className="mb-4 font-bold text-gray-600">Ou em até 12x de R$ 0,95 no cartão</p>
          <p className="mb-8 text-elegant-red font-black text-lg">💡 Pagamento via PIX: Confirmação Imediata e Segura</p>

          <div className="cta-container">
            <a href="https://pay.kiwify.com.br/rscdSJd" className="main-cta-btn pulse block w-full bg-elegant-red hover:bg-red-700 text-white font-black py-6 rounded-2xl shadow-xl transition-all text-xl md:text-3xl uppercase tracking-wider mb-6">
              SIM! QUERO GARANTIR MINHA VAGA POR R$ 8,99
            </a>
            
            <div className="mt-2 mb-8">
              <ProgressBar 
                label="342 de 500 vagas reservadas" 
                percentage="68% preenchido" 
                fillWidth="68%" 
              />
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <img src="https://logodownload.org/wp-content/uploads/2014/10/cartao-visa-logo-0.png" alt="Cards" className="h-6 opacity-30 grayscale" />
              <div className="flex justify-center gap-6 text-[10px] md:text-xs text-gray-600 font-bold uppercase tracking-widest">
                <span>🔒 Ambiente 100% seguro</span>
                <span>✓ Compra protegida</span>
                <span>💯 Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">⏰ Encontro: 11 de Janeiro às 20h00 | 🖥️ 100% Online via Zoom</p>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;

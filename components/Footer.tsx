
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-dark-grey text-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-white/5 pb-12">
          <div>
            <h3 className="text-white font-black serif text-xl mb-4 italic">Além do Tratamento</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Um workshop educacional focado em devolver a liberdade e a saúde íntima para mulheres através de conhecimento baseado em ciência e ginecologia natural.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-[10px] md:text-xs">
          <div className="space-y-2">
            <p>Email de Suporte: contato@alematratamento.com.br</p>
            <p>&copy; 2026 - Todos os direitos reservados</p>
          </div>
          <div className="max-w-md italic opacity-60">
            <p>Disclaimer: Este encontro tem caráter educacional e informativo. Não substitui consulta médica. Em caso de sintomas graves ou persistentes, procure um profissional de saúde qualificado.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

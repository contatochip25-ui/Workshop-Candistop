import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[#FAF7F5] border-t border-[#E8DAD6]">
      <div className="max-w-[550px] mx-auto px-6 text-center text-[#999] text-[0.75rem] leading-relaxed">
        <p>
          Além do Tratamento &copy; 2026 — Workshop Educativo de Saúde Íntima Feminina
        </p>
        <p className="mt-1">
          Ambiente Seguro | Conteúdo Educativo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const InfoBox: React.FC = () => {
  return (
    <div className="bg-white rounded-[15px] p-5 my-5 border border-[#E8DAD6] shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
      <div className="flex justify-around border-b border-[#F3ECE9] pb-3 mb-3">
        <div className="flex items-center gap-2 font-bold text-[0.9rem] text-[#1A1A1A]">
          <svg className="w-4 h-4 fill-[#C46A7A]" viewBox="0 0 24 24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
          </svg>
          09 de Janeiro
        </div>
        <div className="flex items-center gap-2 font-bold text-[0.9rem] text-[#1A1A1A]">
          <svg className="w-4 h-4 fill-[#C46A7A]" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          Às 20h00
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-[0.85rem] font-extrabold text-[#C46A7A] uppercase tracking-[0.5px]">
        <svg className="w-[18px] h-[18px] fill-[#C46A7A]" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
        Ao vivo & Online via ZOOM
      </div>
    </div>
  );
};

export default InfoBox;
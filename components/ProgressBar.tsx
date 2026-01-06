import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: string;
  fillWidth: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, fillWidth }) => {
  return (
    <div className="mt-[15px] text-left">
      <div className="flex justify-between mb-1.5 font-bold text-[0.75rem] text-[#1A1A1A]">
        <span>{label}</span>
        <span>{percentage}</span>
      </div>
      <div className="w-full bg-[#E8DAD6] h-2 rounded-[10px] overflow-hidden">
        <div 
          className="bg-[#C46A7A] h-full rounded-[10px] animate-grow" 
          style={{ width: fillWidth }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
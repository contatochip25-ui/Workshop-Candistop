
import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: string;
  fillWidth: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, fillWidth }) => {
  return (
    <div className="mt-4 text-left w-full">
      <div className="flex justify-between mb-1.5 font-black text-[10px] md:text-xs uppercase tracking-tight">
        <span className="text-dark-grey">{label}</span>
        <span className="text-elegant-red">{percentage}</span>
      </div>
      <div className="w-full bg-white h-3.5 rounded-full overflow-hidden border border-pink-200">
        <div 
          className="bg-elegant-red h-full rounded-full transition-all duration-1000 ease-out" 
          style={{ width: fillWidth }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

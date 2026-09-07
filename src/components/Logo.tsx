import React from 'react';
import { storeConfig } from '../config/store';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-11 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold shadow-lg shadow-orange-600/25 rounded-xl p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M20 30 L80 30 L72 80 L28 80 Z" fill="none" stroke="currentColor" strokeWidth="6" /><path d="M78 40 C90 40 90 60 76 60" fill="none" stroke="currentColor" strokeWidth="5" /><path d="M35 15 C35 25 45 20 45 28 M55 15 C55 25 65 20 65 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
          {storeConfig.storeNameAr}
        </span>
        <span className="text-[10px] opacity-75 font-medium">
          {storeConfig.companyNameAr}
        </span>
      </div>
    </div>
  );
};

import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, children, footer, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 print:shadow-none print:border-slate-300 ${className}`}>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-red-900 mb-3">{title}</h3>
        <div className="text-slate-600 text-sm md:text-base space-y-2">
          {children}
        </div>
      </div>
      {footer && (
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 text-xs font-medium text-slate-500">
          {footer}
        </div>
      )}
    </div>
  );
};
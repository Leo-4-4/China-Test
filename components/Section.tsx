import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="scroll-mt-24 mb-16 print-break-inside-avoid">
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-red-100">
        {icon && <span className="text-red-700">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};
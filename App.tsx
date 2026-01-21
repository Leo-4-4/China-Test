import React, { useState, useEffect } from 'react';
import { BookOpen, Map, TrendingUp, AlertTriangle, FileText, Printer, Menu, X, ArrowRight, Globe, Zap } from 'lucide-react';
import { Section } from './components/Section';
import { InfoCard } from './components/InfoCard';
import { profileData, definitions, statusSections, potentialsAndRisks } from './data';

const NAV_ITEMS = [
  { id: 'profil', label: 'Profil' },
  { id: 'begriffe', label: 'Begriffe & Modelle' },
  { id: 'stand', label: 'Entwicklungsstand' },
  { id: 'potenziale', label: 'Potenziale & Risiken' },
  { id: 'fazit', label: 'Fazit' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('profil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Navigation Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 h-screen sticky top-0 bg-white border-r border-slate-200 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-2 text-red-700 font-bold text-xl">
            <Globe className="w-6 h-6" />
            <span>GeoHandout</span>
          </div>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">China Special</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                activeSection === item.id
                  ? 'bg-red-50 text-red-700 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
              {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-red-500" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={handlePrint}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            <Printer className="w-4 h-4" />
            Handout drucken
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 px-4 py-3 flex items-center justify-between no-print">
        <div className="flex items-center gap-2 text-red-700 font-bold">
          <Globe className="w-5 h-5" />
          <span>GeoHandout</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white z-40 p-4 space-y-2 overflow-y-auto no-print">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-4 rounded-xl text-base font-medium border ${
                activeSection === item.id
                  ? 'border-red-100 bg-red-50 text-red-700'
                  : 'border-slate-100 bg-white text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={handlePrint}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-4 rounded-xl text-base font-medium mt-4"
          >
            <Printer className="w-5 h-5" />
            Drucken
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-12 lg:p-16">
        
        {/* Title Block */}
        <div className="mb-16 text-center md:text-left border-b pb-8 border-slate-200">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold tracking-wider uppercase mb-4">
            Abiturwissen Geographie
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            China: Land unterschiedlichen Entwicklungsstandes
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl">
            Vom Schwellenland zur Industrienation – Disparitäten, Wachstum und globale Integration.
          </p>
        </div>

        {/* 1. Profil */}
        <Section id="profil" title="1) Kurzes Länderprofil" icon={<Map className="w-6 h-6" />}>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {profileData.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row p-5 hover:bg-slate-50/50 transition-colors">
                  <dt className="w-full md:w-1/3 font-semibold text-slate-900 text-sm uppercase tracking-wide mb-1 md:mb-0">
                    {item.label}
                  </dt>
                  <dd className="w-full md:w-2/3 text-slate-600">
                    {item.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 2. Begriffe */}
        <Section id="begriffe" title="2) Zentrale Fachbegriffe & Modelle" icon={<BookOpen className="w-6 h-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {definitions.map((def, idx) => (
              <InfoCard 
                key={idx} 
                title={def.term}
                footer={def.details && (
                  <div className="flex flex-wrap gap-2">
                    {def.details.map((detail, i) => (
                      <span key={i} className="inline-flex items-center bg-slate-100 px-2 py-1 rounded text-slate-600">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              >
                {def.explanation}
              </InfoCard>
            ))}
          </div>
        </Section>

        {/* 3. Entwicklungsstand */}
        <Section id="stand" title="3) Entwicklungsstand Chinas" icon={<TrendingUp className="w-6 h-6" />}>
          <div className="space-y-8">
            {statusSections.map((section, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8 border-l-2 border-slate-200 hover:border-red-400 transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-red-500" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-600 flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. Potenziale & Risiken */}
        <Section id="potenziale" title="4) Potenziale & Risiken" icon={<AlertTriangle className="w-6 h-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Potentials */}
            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-center gap-2 mb-4 text-emerald-800 font-bold text-lg">
                <Zap className="w-5 h-5" />
                <h3>Potenziale</h3>
              </div>
              <ul className="space-y-3">
                {potentialsAndRisks.find(p => p.type === 'potential')?.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-emerald-900/80">
                    <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
              <div className="flex items-center gap-2 mb-4 text-amber-800 font-bold text-lg">
                <AlertTriangle className="w-5 h-5" />
                <h3>Risiken & Hürden</h3>
              </div>
              <ul className="space-y-3">
                {potentialsAndRisks.find(p => p.type === 'risk')?.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-amber-900/80">
                    <div className="w-5 h-5 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">!</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 5. Fazit */}
        <Section id="fazit" title="5) Kurzfazit" icon={<FileText className="w-6 h-6" />}>
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-red-600 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16 pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                "China ist ein Schwellenland mit Teilräumen auf Industrieniveau: Der Aufstieg basiert stark auf Küstenöffnung, Sonderwirtschaftszonen, Direktinvestitionen und Exportorientierung. Der nächste Entwicklungsschritt liegt im Innovations- und Dienstleistungsaufbau, während Disparitäten und Umweltprobleme zentrale Herausforderungen bleiben."
              </p>
              <div className="mt-6 flex items-center gap-2 text-red-400 text-sm font-bold uppercase tracking-widest">
                <ArrowRight className="w-4 h-4" />
                Zusammenfassung
              </div>
            </div>
          </div>
        </Section>

        <footer className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm print:hidden">
          <p>Erstellt für den Geographieunterricht.</p>
        </footer>

      </main>
    </div>
  );
}
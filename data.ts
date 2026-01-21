import { ProfileItem, Definition, StatusSection, PotentialRisk } from './types';

export const profileData: ProfileItem[] = [
  { label: 'Name', value: 'Volksrepublik China (VR China)' },
  { label: 'Lage', value: 'Ostasien, lange Pazifikküste; Nachbarschaft zu vielen Staaten Zentral-/Süd-/Ostasiens' },
  { label: 'Zentren/Metropolen', value: 'Peking (politisches Zentrum), Shanghai (Wirtschaft/Finanzen), Küstenräume wie Perlflussdelta (u. a. Shenzhen/Hongkong) und Jangtse-Delta (Shanghai-Region)' },
  { label: 'Raumstruktur', value: 'Sehr starke Küstenorientierung der Modernisierung; Binnenland deutlich schwächer entwickelt → regionale Disparitäten' },
  { label: 'Einordnung', value: 'Klassisches Schwellenland (Emerging Economy) mit Teilräumen auf Industrienations-Niveau und gleichzeitig großen Entwicklungsunterschieden.' },
];

export const definitions: Definition[] = [
  {
    term: 'Schwellenland (Emerging Economy)',
    explanation: 'Staat im Übergang: starkes Wachstum, schnelle Industrialisierung/Urbanisierung, zunehmende Einbindung in die Weltwirtschaft, aber noch deutliche soziale/regionale Ungleichheiten.'
  },
  {
    term: 'Sonderwirtschaftszone (SWZ / SEZ)',
    explanation: 'Räumlich abgegrenztes Gebiet mit Sonderregeln (z. B. Steuervorteile, weniger Regulierung, bessere Infrastruktur), um Auslandsinvestitionen anzuziehen und Exportindustrie aufzubauen.',
    details: ['Bezug: M1']
  },
  {
    term: 'Direktinvestitionen (FDI)',
    explanation: 'Unternehmensinvestitionen mit Kontrolle/Einfluss (z. B. Fabrikbau, Firmenkauf).',
    details: [
      'Inflow: Kapital fließt nach China (Ansiedlung)',
      'Outflow: chinesische Investitionen ins Ausland (Rohstoffe, Märkte, Technologie)',
      'Bezug: M6'
    ]
  },
  {
    term: 'Exportorientierte Industrialisierung',
    explanation: 'Wachstum über Produktion für den Weltmarkt: Aufbau von Industrie- und Zulieferketten, Nutzung von Kostenvorteilen, Häfen/Logistik als Standortfaktor.',
    details: ['Bezug: M7, M9']
  },
  {
    term: 'Agglomeration / Cluster',
    explanation: 'Ballung von Unternehmen, Häfen, Dienstleistern, Arbeitskräften → Netzwerkeffekte (Know-how, Zulieferer, Arbeitsmarkt) erhöhen Attraktivität der Region.',
    details: ['Bezug zu M1']
  },
  {
    term: 'Zentrum–Peripherie-Modell',
    explanation: 'Dynamische Zentren (Küste/Metropolen) profitieren überproportional; Peripherien (Binnenland/ländliche Räume) bleiben zurück → Wanderung, Ungleichheit, politische Steuerung nötig.',
    details: ['Bezug zu M1, M5']
  },
  {
    term: 'Modernisierung vs. Dependenz',
    explanation: 'Theoretische Perspektiven auf Entwicklung.',
    details: [
      'Modernisierung: Einbindung in Weltmarkt + Investitionen = Chance für Entwicklung',
      'Dependenz: Gefahr von Abhängigkeiten (Technologie/Markt), ungleiche Gewinne, Verdrängung traditioneller Strukturen',
      'Bezug zu M4/M5-Text'
    ]
  },
  {
    term: 'Strukturwandel & Innovation',
    explanation: 'Übergang von einfacher Fertigung zu höherer Wertschöpfung (Hightech, FuE, Dienstleistungen). Patente sind ein Indikator für Innovationsfähigkeit.',
    details: ['Bezug: M11', 'Text: „Innovation statt Produktion“']
  }
];

export const statusSections: StatusSection[] = [
  {
    title: 'a) Wirtschaftliche Dynamik',
    points: [
      'BNE-Wachstum: in den 2000er-Jahren sehr hoch (um ca. 8–12 % p. a.), nach 2008/09 etwas niedriger, aber weiter stark (M3).',
      'Außenhandel: Exporte und Importe steigen 2000–2012 massiv; China erzielt meist Exportüberschüsse (M7).',
      'Haupthandelspartner: Handelsvolumen wächst massiv. Anteilverschiebung: 2000 stärkster Partner Japan, 2012 vorne EU und USA (M8).'
    ]
  },
  {
    title: 'b) Rolle von Sonderwirtschaftszonen und Küstenräumen',
    points: [
      'SWZ/Öffnungspolitik konzentriert sich stark auf die Küste (u. a. Perlflussdelta, Jangtse-Delta, Bohai-Raum) (M1).',
      'FDI pro Kopf ist in den Küstenprovinzen deutlich höher als im Binnenland (M1) → typisches Zentrum–Peripherie-Muster.',
      'Logik: Häfen, Weltmarktnähe, Agglomerationseffekte → schnellere Industrialisierung und Dienstleistungswachstum.'
    ]
  },
  {
    title: 'c) China als Empfänger UND Geber von Investitionen',
    points: [
      'FDI-Inflow sehr hoch (>100 Mrd. US-$); gleichzeitig wächst der FDI-Outflow stark (China investiert selbst zunehmend im Ausland) (M6).',
      'Beispielhaft für die Einbindung: große Auslandsinvestoren/Joint Ventures (z. B. VW in Shanghai) (M4).'
    ]
  },
  {
    title: 'd) Aufstieg in der globalen Arbeitsteilung',
    points: [
      'Warenexporte weltweit: China 2012 bei 6 %, Prognose 2035 29 % (M9) → zentraler Akteur der Weltindustrie.',
      'Dienstleistungsexporte: China 2012 6 %, Prognose 2035 18 % (M10) → erwarteter Aufholprozess im tertiären Sektor.'
    ]
  },
  {
    title: 'e) Innovation als nächster Schritt',
    points: [
      'Patentanmeldungen steigen massiv (M11).',
      'Hinweis auf Übergang von „verlängerter Werkbank“ zu FuE/Hightech (mindestens in Leitregionen).'
    ]
  },
  {
    title: 'f) Entwicklungsprobleme',
    points: [
      'Regionale Disparitäten (Küste vs. Binnenland).',
      'Sozialer/ökonomischer Dualismus: Verdrängung traditioneller Strukturen (M5).',
      'Umweltbelastung und Ressourcenverbrauch.',
      'Abhängigkeiten/Spannungen: Technologie- und Marktzugänge, ungleiche Gewinne.'
    ]
  }
];

export const potentialsAndRisks: PotentialRisk[] = [
  {
    type: 'potential',
    items: [
      'Wertschöpfung erhöhen: mehr Hightech, eigene Standards/Marken, bessere Qualität, mehr Dienstleistungen',
      'Binnenkonsum stärken: weniger einseitige Exportabhängigkeit',
      'Ausgleich Binnenland/Küste: Infrastruktur, Bildung, Clusterpolitik im Westen/Zentralchina',
      'Globales Investieren: Rohstoffe, Märkte, Technologie durch Outflow-Strategien'
    ]
  },
  {
    type: 'risk',
    items: [
      'Ungleichheit & soziale Spannungen (Disparitäten/Dualismus)',
      'Ökologische Grenzen (Verschmutzung, Flächenverbrauch)',
      'Abhängigkeiten in globalen Wertschöpfungsketten (Technologie, Handelskonflikte)'
    ]
  }
];
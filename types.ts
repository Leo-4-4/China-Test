export interface ProfileItem {
  label: string;
  value: string;
}

export interface Definition {
  term: string;
  explanation: string;
  details?: string[];
}

export interface StatusSection {
  title: string;
  points: string[];
}

export interface PotentialRisk {
  type: 'potential' | 'risk';
  items: string[];
}
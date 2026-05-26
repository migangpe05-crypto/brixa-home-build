export type PagePath = '/' | '/nosotros' | '/servicios' | '/contacto';

export interface NavLink {
  label: string;
  path: PagePath;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

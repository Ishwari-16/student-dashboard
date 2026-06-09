import { Code, Layers, Database, Network, Terminal, Cpu, Globe, Shield } from 'lucide-react';

export const iconMap: Record<string, any> = {
  Code,
  Layers,
  Database,
  Network,
  Terminal,
  Cpu,
  Globe,
  Shield,
};

export const getIcon = (name: string) => {
  const Icon = iconMap[name] || Code;
  return Icon;
};
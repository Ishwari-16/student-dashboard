import {
  BookOpen,
  Code,
  Database,
  Globe,
  BarChart,
} from "lucide-react";

export function getIcon(name: string) {
  const icons: Record<string, any> = {
    BookOpen,
    Code,
    Database,
    Globe,
    BarChart,
  };

  return icons[name] || BookOpen;
}
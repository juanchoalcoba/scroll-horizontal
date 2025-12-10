import { Code2 } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  color: string;
  icon: string | React.ElementType;

}

export const projects: Project[] = [
    {
      id: 1,
      title: "TensorFlowIA",
      category: "Superlative Web Design",
      color: "from-purple-600 to-pink-600",
      icon: Code2
    },
    {
      id: 2,
      title: "Neural Network",
      category: "AI Platform",
      color: "from-cyan-500 to-blue-600",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Urban Jungle",
      category: "Mobile App",
      color: "from-green-500 to-emerald-600",
      icon: "🌿"
    },
    {
      id: 4,
      title: "Quantum Leap",
      category: "SaaS Product",
      color: "from-orange-500 to-red-600",
      icon: "🚀"
    },
    {
      id: 5,
      title: "Midnight Code",
      category: "Dev Tools",
      color: "from-indigo-600 to-purple-700",
      icon: "💻"
    }
  ];
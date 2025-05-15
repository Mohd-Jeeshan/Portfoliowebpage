import { Code2, Database, Palette, Server, Terminal, Wrench } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Full Stack Development",
    icon: '💻',
    items: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "RESTful APIs", level: 90 }
    ]
  },
  {
    name: "Python Development",
    icon: '🐍',
    items: [
      { name: "Python Core", level: 95 },
      { name: "Django", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Data Analysis", level: 75 },
      { name: "Automation", level: 90 },
      { name: "Web Scraping", level: 85 }
    ]
  },
  {
    name: "Frontend Technologies",
    icon: '🎨',
    items: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Responsive Design", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Web Animations", level: 75 }
    ]
  },
  {
    name: "Backend & Database",
    icon: '🗄️',
    items: [
      { name: "SQL", level: 85 },
      { name: "NoSQL", level: 80 },
      { name: "API Design", level: 85 },
      { name: "Authentication", level: 80 },
      { name: "Server Management", level: 75 },
      { name: "Database Design", level: 85 }
    ]
  },
  {
    name: "Development Tools",
    icon: '🛠️',
    items: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 75 },
      { name: "npm/yarn", level: 85 },
      { name: "Webpack", level: 75 },
      { name: "Testing Tools", level: 80 }
    ]
  },
  {
    name: "Soft Skills",
    icon: '🤝',
    items: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Adaptability", level: 90 },
      { name: "Learning Ability", level: 95 }
    ]
  },
  {
    name: "Other Technologies",
    icon: '🤝',
    items: [
      { name: "Power Point", level: 90 },
      { name: "MS Word", level: 85 },
      { name: "ChatGPT", level: 95 },
      { name: "MS Excel", level: 80 },
      { name: "PowerBI", level: 70 },
      { name: "Figma", level: 75 }
    ]
  }
];
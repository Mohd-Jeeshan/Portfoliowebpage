export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart, checkout, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A mobile-first application to track workouts, nutrition, and progress with data visualization.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "Firebase", "D3.js", "Redux"],
    demoUrl: "https://fitness-tracker.example.com",
    githubUrl: "https://github.com/example/fitness-tracker"
  },
  {
    id: 3,
    title: "Barber Shop",
    description: "Step into style at Classic Cuts, where tradition meets trend. Our skilled barbers specialize in timeless cuts, modern fades, clean shaves, and beard grooming.",
    image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["JavaScript", "Raect.js ", "CSS"],
    demoUrl: "https://weather-dash.example.com",
    githubUrl: "https://github.com/example/weather-dashboard"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "A comprehensive task management system with Kanban boards, team collaboration, and progress tracking.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    demoUrl: "https://task-manager.example.com",
    githubUrl: "https://github.com/example/task-management"
  },
  {
    id: 5,
    title: "Real Estate Finder",
    description: "A property search platform with map integration, filters, and virtual tours for real estate listings.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    demoUrl: "https://realestate-finder.example.com",
    githubUrl: "https://github.com/example/real-estate-finder"
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description: "An application to track expenses, income, investments, and budgeting with visual analytics.",
    image: "https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Plaid API", "Bloc Pattern"],
    demoUrl: "https://finance-tracker.example.com",
    githubUrl: "https://github.com/example/finance-tracker"
  }
];
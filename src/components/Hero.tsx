import React from 'react';
import { ArrowDownCircle, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
// import myimage from '../assets/portfolio.jpeg';


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
        <div className="flex flex-col justify-center">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Mohd Jeeshan
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Full Stack Developer & Data Analyst
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your vision into reality.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              Contact Me
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              View My Work
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center order-first lg:order-last">
          <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <img 
              src="./images/jeeshan.jpg" 
              alt="Mohd Jeeshan" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 animate-bounce transition-colors"
      >
        <ArrowDownCircle size={32} />
      </a>
    </section>
  );
};

export default Hero;
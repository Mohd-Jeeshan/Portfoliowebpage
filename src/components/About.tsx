import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a keen interest in crafting 
              digital experiences. I specialize in building responsive web applications 
              with modern technologies and frameworks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My approach to development focuses on creating clean, efficient code that delivers exceptional user 
              experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of 
              web development trends.
            </p>
            
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Born on 5 July, 2005</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Computer Science Student</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-semibold mb-2">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-400">
                React, Vue, Angular, HTML5, CSS3, JavaScript, TypeScript
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-semibold mb-2">Backend</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Node.js, Express, Python, Emailjs, MongoDB, PostgreSQL
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-semibold mb-2">Design</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Figma, Adobe XD, Sketch, UI/UX Principles
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
              <h4 className="text-xl font-semibold mb-2">Tools</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Git, ChatGPT, Netlify, Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
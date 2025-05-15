import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold tracking-tight">Portfolio</h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>by Mohd Jeeshan</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
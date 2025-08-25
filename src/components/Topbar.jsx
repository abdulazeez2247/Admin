import React, { useState, useEffect } from 'react';
import { Moon, Sun, Bell } from 'lucide-react';

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="w-full h-16 bg-white dark:bg-gray-800 flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">ReedStreams Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          <Bell className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
        
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
        
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
          A
        </div>
      </div>
    </div>
  );
};

export default Topbar;
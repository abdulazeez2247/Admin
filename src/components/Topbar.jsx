import React from 'react';
import { Moon, Sun, Bell } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white dark:bg-gray-800 flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">ReedStreams Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
          <Bell className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
          <Sun className="w-5 h-5 text-yellow-500 dark:hidden" />
          <Moon className="w-5 h-5 text-white hidden dark:block" />
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-white dark:bg-gray-600">
          A
        </div>
      </div>
    </div>
  );
};

export default Topbar;

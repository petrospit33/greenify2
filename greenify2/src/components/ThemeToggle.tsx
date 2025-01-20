import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-100 dark:bg-gray-700 hover:bg-green-200 dark:hover:bg-gray-600 transition-colors border border-green-500 dark:border-green-400 sm:gap-2 sm:px-4 sm:py-2 sm:rounded-lg"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <>
          <Sun className="h-4 w-4 text-yellow-500 sm:h-5 sm:w-5" />
          <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-gray-700 sm:h-5 sm:w-5" />
          <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium">Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;

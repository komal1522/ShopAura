import React, { useState, useEffect } from 'react';
import nightModeIcon from '/img/night-mode.png';  // Import night mode icon
import lightModeIcon from '/img/light.png';       // Import light mode icon

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the mode and add/remove the 'dark' class to the HTML tag
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply the class to the HTML element based on the current mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className={`transition-all duration-200 px-2 py-2 rounded-full flex items-center justify-center text-white ${
        isDarkMode
          ? 'bg-yellow-50 text-black border-black'  // Button for Light Mode
          : 'bg-gray-600 text-white border-white'  // Button for Dark Mode
      }`}
    >
      {/* Conditionally render the icon based on the current mode */}
      <img
        src={isDarkMode ? lightModeIcon : nightModeIcon}  // Show light mode icon in dark mode and vice versa
        alt={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className='h-4 w-4'
      />
    </button>
  );
};

export default DarkMode;

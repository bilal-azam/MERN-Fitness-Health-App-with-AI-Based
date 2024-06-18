import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
      <button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
  );
};

export default ThemeSwitcher;
import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="dark-toggle">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default DarkModeToggle;

import React, { useState } from 'react';

const LightDarkModeApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const appStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: isDarkMode ? '#ffffff' : '#121212',
    color: isDarkMode ? '#121212' : '#ffffff',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <div style={appStyles}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleMode} style={buttonStyles}>
        Toggle to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default LightDarkModeApp;

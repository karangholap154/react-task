import React, { useState } from 'react';

const ClickTracker = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial', marginTop: '50px' }}>
      <h1>Click Tracker</h1>
      <p style={{ fontSize: '18px' }}>You have clicked the button <strong>{clickCount}</strong> times.</p>
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ClickTracker;

import React, { useState } from "react";

const VisibilityToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="app-container">
      <h2>Toggle Visibility</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default VisibilityToggle;

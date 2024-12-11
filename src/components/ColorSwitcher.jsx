import React, { useState } from "react";

const ColorSwitcher = () => {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [bgColor, setBgColor] = useState("");

  return (
    <div className="app-container">
      <h2>Color Switcher</h2>
      <div
        className="color-box"
        style={{ backgroundColor: bgColor, height: "100px", width: "400px", marginBottom: "10px" }}
      />
      <div className="button-group">
        {colors.map((color) => (
          <button key={color} onClick={() => setBgColor(color)}>
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSwitcher;

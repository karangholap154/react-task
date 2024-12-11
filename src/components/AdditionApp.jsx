import React, { useState } from "react";
import './AdditionApp.css';

const AdditionApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);
  const [error, setError] = useState(null);

  const calculateSum = () => {
    const num1Value = Number(num1);
    const num2Value = Number(num2);

    if (isNaN(num1Value) || isNaN(num2Value)) {
      setError('Please enter valid numbers');
    } else {
      setSum(num1Value + num2Value);
      setError(null);
    }
  };

  return (
    <div className="app-container">
      <h2>Addition App</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <br/>
      <button onClick={calculateSum}>Add</button>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>Sum: {sum}</p>
      )}
    </div>
  );
};

export default AdditionApp;
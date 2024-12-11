import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
